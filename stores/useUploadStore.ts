import { create } from 'zustand'
import type { MediaItem, SessionAlbum } from '@/types/album'

interface UploadState {
    album: SessionAlbum | null
    files: MediaItem[]

    setUploadData: (album: SessionAlbum, files: MediaItem[]) => void
    clearUpload: () => void
}

export const useUploadStore = create<UploadState>((set) => ({
    album: null,
    files: [],

    setUploadData: (album, files) =>
        set({
            album,
            files,
        }),

    clearUpload: () =>
        set({
            album: null,
            files: [],
        }),
}))
