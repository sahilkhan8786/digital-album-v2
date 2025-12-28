'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { MediaItem, SessionAlbum, UploadProgress, UploadQueueItem } from '@/types/album'
import { slugify } from '@/utils/slugify'
import { uploadFileDirect } from '@/utils/uploadBunnyDirect'
import Image from 'next/image'
import { formatBytes } from '@/utils/formatBytes'
import UploadProgressToast from '@/components/custom/albums/upload-progress-toast'
import { useUploadStore } from '@/stores/useUploadStore'

const MAX_PARALLEL = 5

export default function UploadPage() {
    const router = useRouter()
    const { album, files, clearUpload } = useUploadStore()
    const [albumData, setAlbumData] = useState<SessionAlbum | null>(null)
    const [allFiles, setAllFiles] = useState<MediaItem[]>([])
    const uploadQueueRef = useRef<UploadQueueItem[]>([])
    const [progress, setProgress] = useState<UploadProgress | null>(null)
    const [isUploading, setIsUploading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [uploadReady, setUploadReady] = useState(false)

    const uploadedBytesRef = useRef(0)
    const uploadedFilesRef = useRef(0)
    const fileUrlMapRef = useRef<Record<string, string>>({})

    // ✅ Initialize album and queue
    useEffect(() => {
        if (!album || !files || !album.userId || !album.albumId) {
            alert('No album data found. Go back to create a new album.')
            router.push('/dashboard/albums/create/new')
            return
        }

        setAlbumData(album)

        // Flatten all media files
        const mediaFiles: MediaItem[] = [
            ...(album.album.coverImage ? [album.album.coverImage] : []),
            ...album.album.sections.flatMap(section => [
                ...(section.coverImage ? [section.coverImage] : []),
                ...section.images,
                ...section.videos,
            ]),
        ]

        setAllFiles(mediaFiles)

        // Build upload queue
        const queue: UploadQueueItem[] = mediaFiles
            .filter(f => f.file instanceof File)
            .map(f => ({
                file: f.file!,
                name: f.name,
                path: '',
                uploaded: false,
                resumeData: 0,
                size: f.file!.size,
            }))

        uploadQueueRef.current = queue
        setUploadReady(queue.length > 0)
    }, [album, files, router])

    const totalSize = allFiles.reduce((acc, f) => acc + f.size, 0)

    // -------------------
    // Upload logic
    // -------------------
    const startUpload = async () => {
        if (!albumData || !albumData.userId || !albumData.albumId) {
            console.error('Cannot upload: albumData is missing userId or albumId')
            return
        }

        const queue = uploadQueueRef.current
        if (!queue.length) {
            console.warn('Upload queue is empty')
            return
        }

        setIsUploading(true)
        setIsPaused(false)

        let cursor = 0

        const uploadWorker = async () => {
            while (cursor < uploadQueueRef.current.length) {
                if (isPaused) return

                const currentIndex = cursor++
                const item = uploadQueueRef.current[currentIndex]

                if (item.uploaded) continue

                try {
                    const path = `albums/${albumData.userId}/${albumData.albumId}/${item.name}`

                    let lastTime = Date.now()
                    let lastBytes = 0

                    const url = await uploadFileDirect(item.file, path, (p) => {
                        const now = Date.now()
                        const deltaTime = (now - lastTime) / 1000
                        const deltaBytes = p.uploadedBytes - lastBytes
                        const speed = deltaBytes / deltaTime

                        lastTime = now
                        lastBytes = p.uploadedBytes

                        // Update global progress
                        uploadedBytesRef.current += deltaBytes

                        setProgress((prev) => ({
                            ...prev!,
                            currentFile: item.name,
                            uploadedBytes: uploadedBytesRef.current,
                            totalBytes: totalSize,
                            fileProgress: {
                                ...(prev?.fileProgress || {}),
                                [item.name]: {
                                    uploadedBytes: p.uploadedBytes,
                                    totalBytes: p.totalBytes,
                                    speed,
                                },
                            },
                        }))
                    })

                    uploadedFilesRef.current += 1
                    item.uploaded = true
                    fileUrlMapRef.current[item.name] = url
                } catch (err) {
                    console.error('Upload failed:', item.name, err)
                    throw err
                }
            }
        }


        // Start parallel workers
        await Promise.all(Array.from({ length: MAX_PARALLEL }, uploadWorker))

        setIsUploading(false)
        setProgress(null)

        await saveAlbum()
    }

    const saveAlbum = async () => {
        if (!albumData) return

        const map = fileUrlMapRef.current

        const finalAlbum = {
            processing: true,
            userId: albumData.userId,
            albumId: albumData.albumId,
            title: albumData.album.title,
            description: albumData.album.description,
            eventDate: albumData.album.eventDate,
            coverImage: albumData.album.coverImage ? map[albumData.album.coverImage.name] : null,
            sections: albumData.album.sections.map(section => ({
                title: section.title,
                slug: slugify(section.title),
                coverImage: section.coverImage ? map[section.coverImage.name] : null,
                images: section.images.map(img => map[img.name]).filter(Boolean),
                videos: section.videos.map(vid => map[vid.name]).filter(Boolean),
            })),
        }

        console.log(finalAlbum)

        await fetch('/api/albums/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalAlbum),
        })

        alert('✅ Album uploaded successfully')
        clearUpload()
        router.push('/dashboard/albums')
    }

    const pauseUpload = () => setIsPaused(true)
    const resumeUpload = () => {
        if (!isPaused) return
        setIsPaused(false)
        startUpload()
    }
    const cancelUpload = () => {
        setIsPaused(true)
        setIsUploading(false)
        uploadQueueRef.current = []
        setProgress(null)
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6">
            <h1 className="text-2xl font-bold text-white">Upload Album</h1>

            {albumData && (
                <div className="p-4 bg-gray-900 rounded-lg space-y-4">
                    <h2 className="text-lg font-semibold text-white">Album Preview</h2>

                    {albumData.album.coverImage?.previewUrl && (
                        <Image
                            width={48}
                            height={48}
                            src={albumData.album.coverImage.previewUrl}
                            alt="Album Cover"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                    )}

                    <p className="text-white">Title: {albumData.album.title}</p>
                    <p className="text-white">Description: {albumData.album.description}</p>
                    <p className="text-white">Total Files: {allFiles.length}</p>
                    <p>Total Size: {formatBytes(totalSize)}</p>

                    {albumData.album.sections.length > 0 && (
                        <div>
                            <h3 className="text-white font-semibold mt-4">Sections</h3>
                            <div className="space-y-2">
                                {albumData.album.sections.map(section => (
                                    <div key={section.id} className="flex items-center space-x-4">
                                        {section.coverImage?.previewUrl && (
                                            <Image
                                                width={24}
                                                height={24}
                                                src={section.coverImage.previewUrl}
                                                alt={`Section ${section.title}`}
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                        )}
                                        <p className="text-white">{section.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {isUploading && progress && <UploadProgressToast progress={progress} />}

            <div className="flex space-x-4 mt-4">
                <button
                    onClick={startUpload}
                    className="btn-primary disabled:bg-red-400"
                    disabled={isUploading || !uploadReady}
                >
                    Start Upload
                </button>
                <button onClick={pauseUpload} className="btn-secondary" disabled={!isUploading || isPaused}>
                    Pause
                </button>
                <button onClick={resumeUpload} className="btn-secondary" disabled={!isPaused}>
                    Resume
                </button>
                <button onClick={cancelUpload} className="btn-danger" disabled={!isUploading && !isPaused}>
                    Cancel
                </button>
            </div>
        </div>
    )
}
