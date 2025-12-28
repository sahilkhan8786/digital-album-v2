import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Galleries = () => {
    return (
        <section className="py-24 bg-surface border-y border-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Beautiful Galleries</h2>
                        <p className="text-gray-400">Experience your photos in a stunning, masonry-style layout.</p>
                    </div>
                    <button className="text-primary hover:text-white font-medium flex items-center gap-2 transition-colors">
                        <span> See live example</span>
                        <ChevronRight />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

                    <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
                        <Image width={500} height={500} alt="Wedding ceremony highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Bride and Groom walking down the aisle with flower petals" src="/hero-bg.png" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="text-white font-medium">The Ceremony</span>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-xl">
                        <Image width={500} height={500} alt="Wedding ceremony highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Bride and Groom walking down the aisle with flower petals" src="/hero-bg.png" />
                    </div>

                    <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                        <Image width={500} height={500} alt="Wedding ceremony highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Bride and Groom walking down the aisle with flower petals" src="/hero-bg.png" />
                    </div>

                    <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
                        <Image width={500} height={500} alt="Wedding ceremony highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Bride and Groom walking down the aisle with flower petals" src="/hero-bg.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galleries