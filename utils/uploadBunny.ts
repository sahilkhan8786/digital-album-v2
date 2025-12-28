import type {
    DraftMediaItem,
    UploadedMediaItem,
    UploadProgress,
} from '@/types/album'

/** ---------------------------
 * File → Base64 (SAFE)
 ---------------------------- */
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!(file instanceof Blob)) {
            reject(new Error('Provided value is not a Blob/File'))
            return
        }

        const reader = new FileReader()

        reader.onload = () => resolve(reader.result as string)
        reader.onerror = () => reject(new Error('Failed to read file'))

        reader.readAsDataURL(file)
    })
}

/** ---------------------------
 * Upload files sequentially
 ---------------------------- */
export async function uploadFilesToBunny(
    items: DraftMediaItem[],
    folderPath: string,
    onProgress?: (p: UploadProgress) => void
): Promise<UploadedMediaItem[]> {
    if (!items.length) return []

    /** ---------------------------
     * Validate ALL files first
     ---------------------------- */
    for (const item of items) {
        if (!item.file || !(item.file instanceof File)) {
            console.error('❌ Invalid DraftMediaItem:', item)
            throw new Error(
                `Media "${item.name}" is missing a valid File. 
Files cannot be restored after refresh — user must reselect them.`
            )
        }
    }

    const totalBytes = items.reduce((sum, i) => sum + i.size, 0)
    let uploadedBytes = 0

    const uploaded: UploadedMediaItem[] = []

    /** ---------------------------
     * Upload ONE BY ONE
     ---------------------------- */
    for (let index = 0; index < items.length; index++) {
        const item = items[index]

        const base64Data = await fileToBase64(item.file)

        const res = await fetch('/api/bunny/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileName: item.name,
                folderPath,
                base64Data,
            }),
        })

        const json = await res.json()

        if (!res.ok || !json?.success) {
            throw new Error(json?.error || 'Upload failed')
        }

        uploadedBytes += item.size

        uploaded.push({
            id: item.id,
            name: item.name,
            type: item.type,
            size: item.size,
            url: json.url,
        })

        /** ---------------------------
         * Progress callback
         ---------------------------- */
        onProgress?.({
            currentFile: item.name,
            uploadedFiles: index + 1,
            totalFiles: items.length,
            uploadedBytes,
            totalBytes,
        })
    }

    return uploaded
}
