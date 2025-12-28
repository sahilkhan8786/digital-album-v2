export interface MediaItem {
    id: string
    name: string
    file?: File
    type?: string
    size: number
    previewUrl?: string
}

export type AlbumSection = {
    id: string
    title: string
    coverImage: MediaItem | null
    images: MediaItem[]
    videos: MediaItem[]
}

export type AlbumSectionDraft = {
    id: string
    title: string
    coverImage: DraftMediaItem | null
    images: DraftMediaItem[]
    videos: DraftMediaItem[]
}

export type AlbumFormState = {
    title: string
    description: string
    eventDate: string
    coverImage: DraftMediaItem | null
    sections: AlbumSectionDraft[]
}


export interface UploadProgress {
    currentFile: string
    uploadedFiles: number
    totalFiles: number
    uploadedBytes: number
    totalBytes: number
    speed?: number // bytes/sec for current file
    fileProgress?: Record<string, { uploadedBytes: number; totalBytes: number; speed?: number }> // per file
}


export type UploadQueueItem = {
    file: File
    name: string
    path: string
    uploaded: boolean
    resumeData: number
    size: number
}


// Used ONLY in UI before upload
export type DraftMediaItem = {
    id: string
    file: File
    name: string
    type: string
    size: number
    previewUrl: string // blob:
}

// Used AFTER upload (DB-safe)
export type UploadedMediaItem = {
    id: string
    name: string
    type: string
    size: number
    url: string // Bunny CDN URL
}


export interface SessionAlbum {
    albumId?: string
    userId?: string
    album: {
        albumId: string
        userId: string
        title: string
        description: string
        eventDate: string
        coverImage: MediaItem | null
        sections: {
            id: string
            title: string
            coverImage: MediaItem | null
            images: MediaItem[]
            videos: MediaItem[]
        }[]
    }
}


export type UploadedAlbum = {
    title: string
    description: string
    eventDate: string
    coverImage: MediaItem | null
    sections: AlbumSection[]
}



// frontend types for fetched album
export type ImageVariants = {
    sm?: string
    md?: string
    lg?: string
    xl?: string
}

export type VideoRendition = {
    label: string
    url: string
}

export type HLSVideo = {
    hls: {
        renditions: VideoRendition[]
    }
}

export type AlbumSectionFrontend = {
    id: string
    title: string
    slug: string
    coverImage: ImageVariants | string | null
    images: ImageVariants[]
    videos: HLSVideo[]
}

export type AlbumFrontend = {
    albumId: string
    userId: string
    title: string
    description: string
    eventDate: string
    coverImage: ImageVariants | string | null
    sections: AlbumSectionFrontend[]
}
