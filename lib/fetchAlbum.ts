'use server'

import Album from '@/models/Album.model'
import dbConnect from './mongodb'

export const fetchAlbum = async () => {
    await dbConnect()

    const album = await Album.findById(
        '6951eb4a5e074018ba7fdb1f'
    ).lean() // 🔥 important

    return album
}
