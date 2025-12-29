import { fetchAlbum } from '@/lib/fetchAlbum'
import Image from 'next/image'
import HLSPlayer from '@/components/custom/players/HLSPlayer'
import { AlbumFrontend } from '@/types/album'

export default async function TestAlbumPage() {
    const album: AlbumFrontend | null = await fetchAlbum()

    if (!album) {
        return <div>Album not found</div>
    }

    // ---- cover image resolver (TS-safe) ----
    const coverSrc =
        typeof album.coverImage === 'string'
            ? album.coverImage
            : album.coverImage?.md ??
            album.coverImage?.sm ??
            null

    return (
        <div>
            <h1>{album.title}</h1>
            <p>{album.description}</p>

            {/* Cover Image */}
            {coverSrc && (
                <Image
                    src={coverSrc}
                    alt={album.title}
                    width={400}
                    height={300}
                />
            )}

            {/* Sections */}
            {album.sections?.map((section) => (
                <div key={section.slug}>
                    <h2>{section.title}</h2>

                    {/* Images */}
                    {section.images && section.images.length > 0 && (
                        <div style={{ display: 'flex', gap: 8 }}>
                            {section.images.map((img, i) => {
                                const imgSrc = img.md ?? img.sm ?? null
                                if (!imgSrc) return null

                                return (
                                    <Image
                                        key={i}
                                        src={imgSrc}
                                        width={150}
                                        height={150}
                                        alt=""
                                    />
                                )
                            })}
                        </div>
                    )}

                    {/* Videos */}
                    {section.videos?.map((video, i) => {
                        if (!video.hls?.master) return null

                        return (
                            <HLSPlayer
                                key={i}
                                master={video.hls.master}
                                renditions={video.hls.renditions}
                                width={400}
                            />
                        )
                    })}


                </div>
            ))}
        </div>
    )
}
