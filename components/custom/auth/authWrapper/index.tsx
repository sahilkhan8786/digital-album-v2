import Image from 'next/image'
import React from 'react'

const AuthWrapper = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='grid w-full grid-cols-2 min-h-screen'>

            {children}

            <div className="block relative overflow-hidden bg-slate-900 ">

                <div className="absolute inset-0 h-full w-full bg-cover bg-center opacity-60 mix-blend-overlay z-0" data-alt="A festive wedding table setting with candles and flowers under soft lighting" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2TEwAqDmWt4ty5sMI_hPJMDQvAsqnR2_c_cWeUgc-INm6-Okp-mfT4J7pz3ehM89XSIx3AlXo4D7eX1uxh8CVJuirUoDu0ZasQh5AMUM4LSwAbsT3jv7C84wbt826ofngMhLtBo91Ca5YiUHj0knFfkNQ_0E2BSTHlouMxNwVrWiY1q5M07P-g0rbFi4QBZ88TQbuMnCzJ83zuItr3pUEs5uIKZEVeFB3wt8Z2x2h8KoZJhiQj9rlGDjGOg0jSfRwiqrjz6iPOZTG")' }}>
                </div>
                <div className="absolute inset-0 h-full w-full bg-cover bg-center opacity-40 z-0" data-alt="People celebrating at an event with confetti and soft focus lights" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWtw1fPgKVdC4cypMFD_0DwaaKZmFPC3rZme_dy-DpBI2bYT4b_6f5SdoVKDxqinsQMFqpTAPcyoQMohMutN3uPoNM9nAtWvV7a2bexSwP7cswL_54HnFZ93W3mO2ntee6tCiwcS3gtyPleByHD4ExuK8oMJ7W_nqpHFZVHZJ28zzieHjIbmtK8gHZgQdQ1e9ktysc-6LWtIv6pgq1zQbXyaefRLP40R1tM52ADlIptA5c_nFDU1WMzXfBPNZ0Vf_r3K1-tfs5NvIJ')" }}>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/80 to-primary/30 z-10"></div>

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-12 xl:p-20 text-white">
                    <div className="flex justify-end">
                        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-wider">
                            Secure &amp; Private
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <div className="mb-6 inline-flex p-3 rounded-2xl bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                            <span className="material-symbols-outlined text-3xl">collections_bookmark</span>
                        </div>
                        <h1 className="text-4xl xl:text-5xl font-black leading-tight tracking-tight mb-6">
                            Capture the love,<br />share the joy.
                        </h1>
                        <p className="text-lg text-slate-300 font-light leading-relaxed max-w-md">
                            Join thousands of couples and event planners who trust OccasionShare to collect, organize, and cherish their most precious moments in high resolution.
                        </p>
                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-background-dark object-cover" data-alt="Portrait of a user smiling" src="/hero-bg.png"
                                    width={150}
                                    height={150}
                                />
                                <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-background-dark object-cover" data-alt="Portrait of a user smiling" src="/hero-bg.png"
                                    width={150}
                                    height={150}
                                />
                                <Image alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-background-dark object-cover" data-alt="Portrait of a user smiling" src="/hero-bg.png"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400 text-xs">
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                                </div>
                                <span className="text-xs font-medium text-slate-300">Loved by 10,000+ users</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AuthWrapper