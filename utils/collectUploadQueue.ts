import { slugify } from '@/utils/slugify'
import {
    albumCoverPath,
    sectionCoverPath,
    sectionImagePath,
    sectionVideoPath,
} from '@/utils/bunnyPaths'
import type { AlbumFormState } from '@/types/album'

export type UploadQueueItem = {
    file: File
    size: number
    name: string
    path: string
    resumeData?: object
}

export function collectUploadQueue(
    album: AlbumFormState,
    userId: string,
    albumId: string
): UploadQueueItem[] {
    const queue: UploadQueueItem[] = []

    /** Album cover */
    if (album.coverImage?.file) {
        queue.push({
            file: album.coverImage.file,
            size: album.coverImage.file.size,
            name: album.coverImage.file.name,
            path: albumCoverPath(
                userId,
                albumId,
                album.coverImage.file.name
            ),
        })
    }

    /** Sections */
    for (const section of album.sections) {
        const slug = slugify(section.title)

        if (section.coverImage?.file) {
            queue.push({
                file: section.coverImage.file,
                size: section.coverImage.file.size,
                name: section.coverImage.file.name,
                path: sectionCoverPath(
                    userId,
                    albumId,
                    slug,
                    section.coverImage.file.name
                ),
            })
        }

        for (const img of section.images) {
            queue.push({
                file: img.file,
                size: img.file.size,
                name: img.file.name,
                path: sectionImagePath(
                    userId,
                    albumId,
                    slug,
                    img.file.name
                ),
            })
        }

        for (const vid of section.videos) {
            queue.push({
                file: vid.file,
                size: vid.file.size,
                name: vid.file.name,
                path: sectionVideoPath(
                    userId,
                    albumId,
                    slug,
                    vid.file.name
                ),
            })
        }
    }

    return queue
}
