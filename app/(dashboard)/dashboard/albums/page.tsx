import Link from 'next/link'
import React from 'react'

const UserAlbumsPage = () => {
    return (
        <div>UserAlbumsPage

            <Link href={'/dashboard/albums/create/new'} className='bg-red-400 p-4 rounded-md cursor-pointer block my-24'>Create Album</Link>
        </div>
    )
}

export default UserAlbumsPage