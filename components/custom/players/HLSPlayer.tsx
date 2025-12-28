'use client'

import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

type Rendition = {
    label: string
    url: string
}

interface HLSPlayerProps {
    renditions: Rendition[]
    width?: number
}

export default function HLSPlayer({ renditions, width = 640 }: HLSPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [currentRendition, setCurrentRendition] = useState<Rendition>(renditions[0])

    // Initialize HLS.js
    useEffect(() => {
        if (!videoRef.current) return
        if (!currentRendition) return

        const video = videoRef.current

        let hls: Hls | undefined

        if (Hls.isSupported()) {
            hls = new Hls({ autoStartLoad: true })
            hls.loadSource(currentRendition.url)
            hls.attachMedia(video)
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = currentRendition.url
        }

        return () => {
            if (hls) hls.destroy()
        }
    }, [currentRendition])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <video
                ref={videoRef}
                controls
                width={width}
                style={{ backgroundColor: 'black' }}
            />

            {/* Resolution Selector */}
            <div>
                <span>Resolution: </span>
                {renditions.map((r) => (
                    <button
                        key={r.label}
                        onClick={() => setCurrentRendition(r)}
                        style={{
                            marginRight: 6,
                            padding: '2px 6px',
                            backgroundColor: r.label === currentRendition.label ? '#333' : '#eee',
                            color: r.label === currentRendition.label ? 'white' : 'black',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                        }}
                    >
                        {r.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
