import Link from 'next/link'

const navList = [
    {
        id: 'how-it-works',
        label: 'How It Works',
        href: '/how-it-works'
    },
    {
        id: 'features',
        label: 'Features',
        href: '/features'
    },
    {
        id: 'pricing',
        label: 'Pricing',
        href: '/pricing'
    },
]

const NavList = () => {
    return (
        <ul className="hidden md:flex items-center gap-8">
            {navList.map(list => (
                <li className='text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors' key={list.id}>
                    <Link href={list.href}>
                        {list.label}
                    </Link>
                </li>
            ))}


        </ul>
    )
}

export default NavList