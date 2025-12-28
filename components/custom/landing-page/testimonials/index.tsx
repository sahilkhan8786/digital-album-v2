import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Loved by couples everywhere</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-surface border border-surface p-8 rounded-2xl relative">
                        <Quote className='text-primary' />
                        <p className="text-gray-500 my-6 relative z-10">&quot;We didn&apos;t want a hashtag, we wanted full-quality photos. Memories made it so easy for our grandparents to upload too!&quot;</p>
                        <div className="flex items-center gap-4">
                            <Image alt="Sarah Jenkins"
                                width={12}
                                height={12}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary" data-alt="Portrait of Sarah Jenkins" src="/hero-bg.png" />


                            <div>
                                <h4 className="text-white font-bold">Sarah Jenkins</h4>
                                <p className="text-gray-500 text-sm">Married Oct 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-surface p-8 rounded-2xl relative">
                        <Quote className='text-primary' />
                        <p className="text-gray-500 my-6 relative z-10">&quot;We didn&apos;t want a hashtag, we wanted full-quality photos. Memories made it so easy for our grandparents to upload too!&quot;</p>
                        <div className="flex items-center gap-4">
                            <Image alt="Sarah Jenkins"
                                width={12}
                                height={12}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary" data-alt="Portrait of Sarah Jenkins" src="/hero-bg.png" />


                            <div>
                                <h4 className="text-white font-bold">Sarah Jenkins</h4>
                                <p className="text-gray-500 text-sm">Married Oct 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-surface p-8 rounded-2xl relative">
                        <Quote className='text-primary' />
                        <p className="text-gray-500 my-6 relative z-10">&quot;We didn&apos;t want a hashtag, we wanted full-quality photos. Memories made it so easy for our grandparents to upload too!&quot;</p>
                        <div className="flex items-center gap-4">
                            <Image alt="Sarah Jenkins"
                                width={12}
                                height={12}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary" data-alt="Portrait of Sarah Jenkins" src="/hero-bg.png" />


                            <div>
                                <h4 className="text-white font-bold">Sarah Jenkins</h4>
                                <p className="text-gray-500 text-sm">Married Oct 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials