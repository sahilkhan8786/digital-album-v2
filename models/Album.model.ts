// models/Album.ts
import mongoose, { Schema } from 'mongoose'


const AlbumSchema = new Schema(
    {
        processing: { type: Boolean, default: true }
    },
    { strict: false, timestamps: true }
)

// Prevent recompilation
const Album = mongoose.models.Album || mongoose.model('Album', AlbumSchema)
export default Album
