import { MediaItem } from '@/types/album'

export function filesToMediaItems(files: File[]): MediaItem[] {
    return files.map((file) => ({
        id: crypto.randomUUID(),
        file,                               // ✅ KEEP FILE
        name: file.name,
        type: file.type,
        size: file.size,
        previewUrl: URL.createObjectURL(file),
    }))
}
