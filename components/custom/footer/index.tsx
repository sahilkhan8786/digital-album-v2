import React from 'react'
import Logo from '../navbar/logo'

const Footer = () => {
    return (
        <footer className="bg-background-dark border-t border-surface-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="flex flex-col items-start gap-4">
                        <Logo />
                        <p className="text-gray-500 text-sm">Preserving life&apso;s most precious moments in high resolution.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a className="hover:text-primary" href="#">Features</a></li>
                            <li><a className="hover:text-primary" href="#">Pricing</a></li>
                            <li><a className="hover:text-primary" href="#">Demo</a></li>
                            <li><a className="hover:text-primary" href="#">Download App</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a className="hover:text-primary" href="#">Blog</a></li>
                            <li><a className="hover:text-primary" href="#">Wedding Guide</a></li>
                            <li><a className="hover:text-primary" href="#">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-primary" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">© 2024 Memories Inc. All rights reserved.</p>
                    <div className="flex gap-4 text-gray-400">
                        <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                        <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer