'use client'

import Image from 'next/image'
import type { AlbumFormState, DraftMediaItem } from '@/types/album'

type AlbumDetailsProps = {
    album: AlbumFormState
    setAlbum: React.Dispatch<React.SetStateAction<AlbumFormState>>
}

export default function AlbumDetails({ album, setAlbum }: AlbumDetailsProps) {
    const updateField = <K extends keyof Omit<AlbumFormState, 'sections'>>(field: K, value: AlbumFormState[K]) => {
        setAlbum(prev => ({ ...prev, [field]: value }))
    }

    const updateCoverImage = (file: File) => {
        const mediaItem: DraftMediaItem = {
            id: crypto.randomUUID(),
            file,
            name: file.name,
            type: file.type,
            size: file.size,
            previewUrl: URL.createObjectURL(file),
        }
        updateField('coverImage', mediaItem)
    }

    return (
        <div className="bg-[#111318] rounded-xl p-6 space-y-5 w-full">
            <h2 className="text-lg font-semibold text-white">Album Details</h2>

            {/* Cover Image */}
            <div className="space-y-2 relative">
                {album.coverImage && (
                    <div className="relative w-full h-56 rounded-lg overflow-hidden">
                        <Image
                            src={album.coverImage.previewUrl}
                            alt="Album Cover"
                            fill
                            className="object-cover"
                        />
                        <button
                            type="button"
                            className="absolute bottom-2 right-2 btn-secondary text-xs"
                            onClick={() => updateField('coverImage', null)}
                        >
                            Remove Cover
                        </button>
                    </div>
                )}
                <label className="btn-primary cursor-pointer">
                    {album.coverImage ? 'Change Cover' : 'Upload Cover'}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={e => {
                            const file = e.target.files?.[0]
                            if (!file) return
                            updateCoverImage(file)
                        }}
                    />
                </label>
            </div>

            {/* Title */}
            <input
                type="text"
                placeholder="Album title"
                value={album.title}
                onChange={e => updateField('title', e.target.value)}
                className="input w-full"
            />

            {/* Description */}
            <textarea
                placeholder="Album description"
                value={album.description}
                onChange={e => updateField('description', e.target.value)}
                rows={3}
                className="input resize-none w-full"
            />

            {/* Event Date */}
            <input
                type="date"
                value={album.eventDate}
                onChange={e => updateField('eventDate', e.target.value)}
                className="input w-full"
            />
        </div>
    )
}
