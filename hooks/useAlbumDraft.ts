'use client'

import { useEffect } from 'react'
import type { AlbumFormState } from '@/types/album'

const KEY = 'album_draft_v1'

export function useAlbumDraft(
    album: AlbumFormState,
    setAlbum: React.Dispatch<React.SetStateAction<AlbumFormState>>
) {
    // LOAD draft (metadata ONLY)
    useEffect(() => {
        const saved = localStorage.getItem(KEY)
        if (!saved) return

        try {
            const parsed: AlbumFormState = JSON.parse(saved)

            // ❗ Drop media completely (files can't be restored)
            setAlbum({
                ...parsed,
                coverImage: null,
                sections: parsed.sections.map((section) => ({
                    ...section,
                    coverImage: null,
                    images: [],
                    videos: [],
                })),
            })
        } catch (err) {
            console.error('Failed to parse album draft:', err)
        }
    }, [setAlbum])

    // SAVE metadata only
    useEffect(() => {
        const timeout = setTimeout(() => {
            const safeAlbum: AlbumFormState = {
                ...album,
                coverImage: null,
                sections: album.sections.map((section) => ({
                    ...section,
                    coverImage: null,
                    images: [],
                    videos: [],
                })),
            }

            localStorage.setItem(KEY, JSON.stringify(safeAlbum))
        }, 500)

        return () => clearTimeout(timeout)
    }, [album])
}
