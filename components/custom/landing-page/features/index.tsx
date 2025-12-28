import { Share2, Sparkle, Upload } from 'lucide-react'
import React from 'react'


const features = [
    {
        icon: <Upload />,
        heading: "Instant Uploads",
        desc: " Guests can upload directly from their phones via QR code or link. No app download required, full resolution preserved."
    },
    {
        icon: <Sparkle />,
        heading: "Smart Sorting",
        desc: "  Our AI automatically organizes photos by timeline, faces, and moments, creating a curated story of your event instantly."
    },
    {
        icon: <Share2 />,
        heading: "Private Sharing",
        desc: "  Create secure, password-protected galleries. Decide who can view, download, or contribute to your album."
    },
]


const Features = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Effortless Media Management</h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">Focus on the celebration, not the file transfers. We handle the heavy lifting so you can enjoy the memories.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map(feature => (
                        <div
                            key={feature.heading}
                            className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.heading}</h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}




                </div>
            </div>
        </section>
    )
}

export default Features