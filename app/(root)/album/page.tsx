import { fetchAlbum } from '@/lib/fetchAlbum'
import Image from 'next/image'
import HLSPlayer from '@/components/custom/players/HLSPlayer'
import { AlbumFrontend } from '@/types/album'


export default async function TestAlbumPage() {
    const album: AlbumFrontend | null = await fetchAlbum()

    if (!album) return <div>Album not found</div>

    return (
        <div>
            <h1>{album.title}</h1>
            <p>{album.description}</p>

            {album.coverImage && (
                <Image
                    src={typeof album.coverImage === 'string' ? album.coverImage : album.coverImage.md || album.coverImage.sm || ''}
                    alt={album.title}
                    width={400}
                    height={300}
                />
            )}

            {album.sections.map((section) => (
                <div key={section.slug}>
                    <h2>{section.title}</h2>

                    {/* Images */}
                    <div style={{ display: 'flex', gap: 8 }}>
                        {section.images.map((img, i) => (
                            <Image
                                key={i}
                                src={img.md || img.sm || ''}
                                width={150}
                                height={150}
                                alt=""
                            />
                        ))}
                    </div>

                    {/* Videos */}
                    {section.videos.map((video, i) => (
                        <HLSPlayer
                            key={i}
                            renditions={video.hls.renditions}
                            width={400}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
