
import Image from 'next/image'
import React from 'react'

const HeroLandingPage = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

            <div className="absolute inset-0 z-0 h-full">
                <div className="absolute inset-0 h-full bg-linear-to-b from-background/60 via-background/80  to-background z-10"></div>
                <Image fill alt="Wedding celebration background" className="w-full h-full object-cover opacity-60" data-alt="Joyful wedding celebration with guests dancing and lights" src="/hero-bg.png" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                    Relive Every Moment, <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-primary">Together.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
                    The easiest way to collect, curate, and share high-resolution photos and videos from your special day. No compression, just memories.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary-hover text-white text-base font-bold rounded-lg shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-0.5">
                        Create Free Album
                    </button>
                    <button className="w-full sm:w-auto h-12 px-8 bg-surface-dark/50 hover:bg-surface-dark border border-surface-border backdrop-blur-sm text-white text-base font-bold rounded-lg transition-all">
                        View Demo Gallery
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroLandingPage