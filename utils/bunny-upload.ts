import { AlbumFormState, MediaItem, AlbumSection, UploadedAlbum } from '@/types/album'
import { v4 as uuid } from 'uuid'

// Example BunnyCDN upload function (you need your API key & storage zone)
async function uploadToBunny(file: File, path: string): Promise<string> {
    const API_KEY = process.env.NEXT_PUBLIC_BUNNY_API_KEY
    const STORAGE_ZONE = process.env.NEXT_PUBLIC_BUNNY_STORAGE_ZONE

    const url = `https://storage.bunnycdn.com/${STORAGE_ZONE}/${path}`
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            AccessKey: API_KEY!,
            'Content-Type': file.type,
        },
        body: file,
    })

    if (!res.ok) throw new Error(`Failed to upload ${file.name}`)

    return url // always returns string
}

// Type-safe helper to upload all media items in a section
async function uploadSection(section: AlbumSection): Promise<AlbumSection> {
    const sectionId = section.id

    // Upload cover image
    let coverImage: MediaItem | null = null
    if (section.coverImage?.file) {
        const url = await uploadToBunny(section.coverImage.file, `albums/${uuid()}/sections/${sectionId}/cover/${section.coverImage.name}`)
        coverImage = { ...section.coverImage, previewUrl: url }
    }

    // Upload images
    const images: MediaItem[] = []
    for (const img of section.images) {
        if (!img.file) continue
        const url = await uploadToBunny(img.file, `albums/${uuid()}/sections/${sectionId}/images/${img.name}`)
        images.push({ ...img, previewUrl: url })
    }

    // Upload videos
    const videos: MediaItem[] = []
    for (const video of section.videos) {
        if (!video.file) continue
        const url = await uploadToBunny(video.file, `albums/${uuid()}/sections/${sectionId}/videos/${video.name}`)
        videos.push({ ...video, previewUrl: url })
    }

    return { ...section, coverImage, images, videos }
}

// Upload full album
export async function uploadAlbum(album: AlbumFormState): Promise<UploadedAlbum> {
    let coverImage: MediaItem | null = null
    if (album.coverImage?.file) {
        const url = await uploadToBunny(album.coverImage.file, `albums/${uuid()}/cover/${album.coverImage.name}`)
        coverImage = { ...album.coverImage, previewUrl: url }
    }

    const sections: AlbumSection[] = []
    for (const section of album.sections) {
        const uploadedSection = await uploadSection(section)
        sections.push(uploadedSection)
    }

    const uploadedAlbum: UploadedAlbum = {
        title: album.title,
        description: album.description,
        eventDate: album.eventDate,
        coverImage,
        sections,
    }


    console.log('Uploaded Album:', uploadedAlbum)
    return uploadedAlbum
}
