'use client'

import Image from 'next/image'
import { Trash2, GripVertical } from 'lucide-react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { AlbumFormState, AlbumSection } from '@/types/album'
import { filesToMediaItems } from '@/utils/media'

type SectionFormProps = {
    section: AlbumSection
    index: number
    setAlbum: React.Dispatch<React.SetStateAction<AlbumFormState>>
}

export default function SectionForm({ section, index, setAlbum }: SectionFormProps) {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: section.id })

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    const updateSection = <K extends keyof AlbumSection>(field: K, value: AlbumSection[K]) => {
        setAlbum(prev => {
            const sections = [...prev.sections]
            sections[index] = { ...sections[index], [field]: value }
            return { ...prev, sections }
        })
    }

    const removeSection = () => {
        setAlbum(prev => ({
            ...prev,
            sections: prev.sections.filter((_, i) => i !== index),
        }))
    }

    const addImages = (files: File[]) => {
        const newImages = filesToMediaItems(files)
        updateSection('images', [...section.images, ...newImages])
    }

    const addVideos = (files: File[]) => {
        const newVideos = filesToMediaItems(files)
        updateSection('videos', [...section.videos, ...newVideos])
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`bg-[#111318] rounded-xl p-6 space-y-4 border border-white/5 ${isDragging ? 'opacity-70 ring-2 ring-indigo-500' : ''}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Section {index + 1}</h3>
                <div className="flex items-center gap-3">
                    <button ref={setActivatorNodeRef} {...listeners} {...attributes} type="button" className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white">
                        <GripVertical />
                    </button>
                    <button type="button" onClick={removeSection} className="text-red-500 hover:text-red-400">
                        <Trash2 />
                    </button>
                </div>
            </div>

            {/* Title */}
            <input
                type="text"
                value={section.title}
                placeholder="Section title"
                onChange={e => updateSection('title', e.target.value)}
                className="input w-full"
            />

            {/* Cover Image */}
            <div className="flex flex-col gap-2">
                {section.coverImage?.previewUrl ? (
                    <div className="relative w-full max-w-sm">
                        <Image
                            src={section.coverImage.previewUrl}
                            alt="Section cover"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-48"
                        />
                        <label className="btn-primary absolute bottom-0 right-0 text-xs cursor-pointer bg-primary p-2 rounded-tl-xl rounded-br-md hover:bg-primary-hover">
                            Change Cover
                            <input type="file" className="hidden" accept="image/*" onChange={e => { const file = e.target.files?.[0]; if (!file) return; updateSection('coverImage', filesToMediaItems([file])[0]) }} />
                        </label>
                    </div>
                ) : (
                    <label className="btn-primary cursor-pointer">
                        Upload Cover Image
                        <input type="file" className="hidden" accept="image/*" onChange={e => { const file = e.target.files?.[0]; if (!file) return; updateSection('coverImage', filesToMediaItems([file])[0]) }} />
                    </label>
                )}
            </div>

            {/* Images */}
            <label className="btn-secondary cursor-pointer">
                Add More Images
                <input type="file" hidden multiple accept="image/*" onChange={e => addImages(Array.from(e.target.files ?? []))} />
            </label>
            <div className="flex gap-2 overflow-x-scroll py-2 max-w-full">
                {section.images.map((img, i) => (
                    <div key={i} className="relative w-28 h-28 group shrink-0">
                        {img.previewUrl && (
                            <Image
                                src={img.previewUrl}
                                alt={img.name}
                                width={112}
                                height={112}
                                className="rounded-md object-cover w-full h-full"
                            />
                        )}

                        <button type="button" onClick={() => updateSection('images', section.images.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">✕</button>
                    </div>
                ))}
            </div>

            {/* Videos */}
            <label className="btn-secondary cursor-pointer">
                Add More Videos
                <input type="file" hidden multiple accept="video/*" onChange={e => addVideos(Array.from(e.target.files ?? []))} />
            </label>
            <div className="flex gap-2 overflow-x-scroll py-2 max-w-full">
                {section.videos.map((video, i) => (
                    <div key={i} className="relative shrink-0 w-40 h-28 group">
                        {video.previewUrl && (
                            <video
                                src={video.previewUrl}
                                controls
                                className="rounded-lg w-full h-full object-cover"
                            />
                        )}

                        <button type="button" onClick={() => updateSection('videos', section.videos.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">✕</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
