import { Camera, ScanHeart, Star, Users } from 'lucide-react'
import React from 'react'


const socials = [
    {
        id: 'wedding-co',
        label: "WeddingsCo",
        icon: <ScanHeart />
    },
    {
        id: 'snap-event',
        label: "SnapEvent",
        icon: <Camera />
    },
    {
        id: 'gather',
        label: "Gather",
        icon: <Users />
    },
    {
        id: 'luxe-party',
        label: "LuxeParty",
        icon: <Star />
    },
]

const SocialProof = () => {
    return (
        <section className="py-10 border-b border-surface-border bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by 10,000+ couples &amp; planners</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

                    {socials.map(social => (
                        <div className="flex items-center gap-2 text-white font-bold text-xl"
                            key={social.id}
                        >
                            {social.icon}
                            <span>
                                {social.label}
                            </span>

                        </div>
                    ))}




                </div>
            </div>
        </section>
    )
}

export default SocialProof