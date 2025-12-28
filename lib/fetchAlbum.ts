'use server'

import Album from '@/models/Album.model'
import dbConnect from './mongodb'

export const fetchAlbum = async () => {
    await dbConnect()

    const album = await Album.findById(
        '69513eedf238b23e7566ef84'
    ).lean() // 🔥 important

    return album
}
