import { useUploadStore } from '@/stores/useUploadStore'
import { UploadProgress, MediaItem } from '@/types/album'
import { formatBytes } from '@/utils/formatBytes'
import Image from 'next/image'

export default function UploadProgressToast({
    progress,
}: {
    progress?: UploadProgress
}) {
    const { files } = useUploadStore()

    if (!progress) return null

    const percent = Math.round(
        (progress.uploadedBytes / progress.totalBytes) * 100
    )

    // Find the currently uploading file's media item to show preview
    const currentMedia: MediaItem | undefined = files.find(
        (f) => f.name === progress.currentFile
    )

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full max-w-lg bg-[#111318] border border-white/20 rounded-xl p-6 shadow-xl space-y-4">

                <h2 className="text-lg font-semibold text-white">
                    Uploading Album
                </h2>

                {/* Current Media Preview */}
                {/* {currentMedia?.previewUrl && (
                    <div className="w-40 h-40 mx-auto rounded-lg overflow-hidden border border-white/20">
                        <Image
                            src={currentMedia.previewUrl}
                            alt={currentMedia.name}
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )} */}

                <p className="text-sm text-gray-300 truncate text-center">
                    Uploading: <b className="text-white">{progress.currentFile}</b>
                </p>

                {/* Progress bar */}
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-indigo-500 transition-all"
                        style={{ width: `${percent}%` }}
                    />
                </div>

                {/* Stats */}
                <div className="text-sm text-gray-300 grid grid-cols-2 gap-3">
                    <div>
                        <p className="font-medium">Files</p>
                        <p>
                            {progress.uploadedFiles}/{progress.totalFiles}
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">Progress</p>
                        <p>{percent}%</p>
                    </div>

                    <div>
                        <p className="font-medium">Uploaded</p>
                        <p>{formatBytes(progress.uploadedBytes)}</p>
                    </div>

                    <div>
                        <p className="font-medium">Total Size</p>
                        <p>{formatBytes(progress.totalBytes)}</p>
                    </div>
                </div>

                <p className="text-xs text-gray-400 text-center pt-2">
                    Please do not refresh or close this page
                </p>
            </div>
        </div>
    )
}
