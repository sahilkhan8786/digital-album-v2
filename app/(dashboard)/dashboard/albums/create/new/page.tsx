'use client'

import { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

import AlbumDetails from '@/components/custom/albums/create/album-details'
import SectionsList from '@/components/custom/albums/create/section-list'
import type { AlbumFormState, MediaItem, SessionAlbum } from '@/types/album'
import { useUploadStore } from '@/stores/useUploadStore'

export default function CreateAlbumPage() {
    const { user } = useUser()
    const router = useRouter()
    const userId = user?.id
    const albumIdRef = useRef(uuid())
    const albumId = albumIdRef.current

    const { setUploadData } = useUploadStore()

    const [album, setAlbum] = useState<AlbumFormState>({
        title: '',
        description: '',
        coverImage: null,
        eventDate: '',
        sections: [],
    })

    const addSection = () => {
        setAlbum(prev => ({
            ...prev,
            sections: [
                ...prev.sections,
                {
                    id: uuid(),
                    title: '',
                    coverImage: null,
                    images: [],
                    videos: [],
                },
            ],
        }))
    }

    const handleProceedToUpload = () => {
        if (!userId) return alert('Not authenticated')

        // Prepare SessionAlbum structure
        const sessionAlbum: SessionAlbum = {
            albumId,
            userId,
            album: {
                albumId,
                userId,
                ...album,
            },
        }

        // Flatten files for upload queue
        const allFiles: MediaItem[] = [
            ...(album.coverImage ? [album.coverImage] : []),
            ...album.sections.flatMap(section => [
                ...(section.coverImage ? [section.coverImage] : []),
                ...section.images,
                ...section.videos,
            ]),
        ]

        // Save to Zustand store
        setUploadData(sessionAlbum, allFiles)

        // Navigate to upload page
        router.push('/dashboard/albums/upload')
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
            <h1 className="text-2xl font-bold text-white">Create New Album</h1>

            <AlbumDetails album={album} setAlbum={setAlbum} />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">Sections</h2>
                    <button onClick={addSection} className="btn-primary" type="button">
                        + Add Section
                    </button>
                </div>

                <SectionsList album={album} setAlbum={setAlbum} />
            </div>

            <button onClick={handleProceedToUpload} className="btn-primary w-full h-12">
                Proceed to Upload
            </button>
        </div>
    )
}
