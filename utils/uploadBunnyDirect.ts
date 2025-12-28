export type BunnyProgress = {
    uploadedBytes: number
    totalBytes: number
}

export async function uploadFileDirect(
    file: File,
    path: string,
    onProgress?: (p: BunnyProgress) => void
): Promise<string> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        const baseUrl = process.env.NEXT_PUBLIC_BUNNY_STORAGE_URL
        const accessKey = process.env.NEXT_PUBLIC_BUNNY_API_KEY

        if (!baseUrl) {
            console.error('❌ NEXT_PUBLIC_BUNNY_STORAGE_URL is not set')
            return reject(new Error('Bunny storage URL not configured'))
        }
        if (!accessKey) {
            console.error('❌ NEXT_PUBLIC_BUNNY_STORAGE_KEY is not set')
            return reject(new Error('Bunny storage access key not configured'))
        }

        // Trim any accidental leading/trailing slashes
        const cleanBaseUrl = baseUrl.replace(/\/+$/, '')
        const cleanPath = path.replace(/^\/+/, '')

        const url = `${cleanBaseUrl}/${cleanPath}`
        console.log('🟢 Uploading file:', file.name)
        console.log('   Full URL:', url)

        xhr.open('PUT', url)
        xhr.setRequestHeader('AccessKey', accessKey)

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable && onProgress) {
                onProgress({
                    uploadedBytes: event.loaded,
                    totalBytes: event.total,
                })
            }
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(`✅ Uploaded: ${file.name}`)
                resolve(url)
            } else {
                console.error(`❌ Upload failed (${xhr.status}):`, file.name)
                reject(new Error(`Upload failed: ${xhr.status}`))
            }
        }

        xhr.onerror = () => {
            console.error(`❌ Network error while uploading: ${file.name}`)
            reject(new Error('Network error'))
        }

        xhr.send(file)
    })
}
