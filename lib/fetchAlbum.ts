'use server'

import Album from '@/models/Album.model'
import dbConnect from './mongodb'

export const fetchAlbum = async () => {
    await dbConnect()

    const album = await Album.findById(
        '69521f8dbbd4b97cb31c0ae4'
    ).lean() // 🔥 important

    return album
}
