'use client'

import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

type Rendition = {
    label: string
}

interface HLSPlayerProps {
    master: string
    renditions: Rendition[]
    width?: number
}

export default function HLSPlayer({
    master,
    renditions,
    width = 640,
}: HLSPlayerProps) {
    console.log(renditions)

    const videoRef = useRef<HTMLVideoElement>(null)
    const hlsRef = useRef<Hls | null>(null)
    const [currentLevel, setCurrentLevel] = useState<number>(-1) // -1 = AUTO

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        if (Hls.isSupported()) {
            const hls = new Hls({
                autoStartLoad: true,
                enableWorker: true,
            })

            hlsRef.current = hls
            hls.loadSource(master)
            hls.attachMedia(video)

            return () => {
                hls.destroy()
                hlsRef.current = null
            }
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = master
        }
    }, [master])

    const changeQuality = (level: number) => {
        if (!hlsRef.current) return
        hlsRef.current.currentLevel = level
        setCurrentLevel(level)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <video
                ref={videoRef}
                controls
                width={width}
                style={{ backgroundColor: 'black' }}
            />

            <div>
                <span>Resolution: </span>

                <button
                    onClick={() => changeQuality(-1)}
                    style={{
                        marginRight: 6,
                        background: currentLevel === -1 ? '#333' : '#eee',
                        color: currentLevel === -1 ? '#fff' : '#000',
                    }}
                >
                    Auto
                </button>

                {renditions.map((r, i) => (
                    <button
                        key={r.label}
                        onClick={() => changeQuality(i)}
                        style={{
                            marginRight: 6,
                            background: currentLevel === i ? '#333' : '#eee',
                            color: currentLevel === i ? '#fff' : '#000',
                        }}
                    >
                        {r.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
