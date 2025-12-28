import { AlbumIcon } from 'lucide-react'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={'/'} className="flex items-center gap-2">
            <div className="size-8 text-primary flex items-center justify-center">
                <AlbumIcon className=" text-3xl" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Memories</span>
        </Link>
    )
}

export default Logo