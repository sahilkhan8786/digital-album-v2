import { uploadSingleFile } from './uploadSingleFile'
import type { UploadQueueItem } from './collectUploadQueue'
import type { UploadProgress } from '@/types/album'
import {
    getUploadedFiles,
    markFileUploaded,
} from './uploadState'

export async function uploadAlbumQueue(
    queue: UploadQueueItem[],
    onProgress: (p: UploadProgress) => void
) {
    const uploadedSet = getUploadedFiles()

    const pending = queue.filter(q => !uploadedSet.has(q.path))

    const totalFiles = queue.length
    const totalBytes = queue.reduce((a, b) => a + b.size, 0)

    let uploadedFiles = queue.length - pending.length
    let uploadedBytes = queue
        .filter(q => uploadedSet.has(q.path))
        .reduce((a, b) => a + b.size, 0)

    for (const item of pending) {
        onProgress({
            currentFile: item.name,
            uploadedFiles,
            totalFiles,
            uploadedBytes,
            totalBytes,
        })

        const url = await uploadSingleFile(item.file, item.path)

        markFileUploaded(item.path)

        uploadedFiles++
        uploadedBytes += item.size

        onProgress({
            currentFile: item.name,
            uploadedFiles,
            totalFiles,
            uploadedBytes,
            totalBytes,
        })
    }
}
