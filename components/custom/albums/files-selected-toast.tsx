// components/custom/albums/FilesSelectedToast.tsx
'use client'

interface FilesSelectedToastProps {
    message?: string
}

export default function FilesSelectedToast({ message }: FilesSelectedToastProps) {
    if (!message) return null

    return (
        <div className="fixed top-4 right-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
            {message}
        </div>
    )
}
