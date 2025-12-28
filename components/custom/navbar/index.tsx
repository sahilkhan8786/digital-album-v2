import Logo from './logo'
import NavList from './navList'
import HeaderAuth from './header-auth'
import WidthCard from '@/components/width-card'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-background  backdrop-blur-md border-b border-surface-border">
            <WidthCard >
                <div className="flex items-center justify-between h-16">

                    <Logo />
                    <NavList />
                    <HeaderAuth />

                </div>
            </WidthCard>
        </nav>
    )
}

export default Navbar