import { Album, ChevronDown, CloudUpload, ImageUp, LightbulbIcon, LucideApple, Menu, Play, PlusIcon, QrCodeIcon, Share, Smartphone, SmartphoneIcon, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HowItWorksPage = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 ">
                <div className="text-center max-w-3xl mx-auto pt-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Smartphone />
                        <span>Mobile Companion App</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Your Event, <span className="text-primary">In Your Pocket.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        The easiest way for your guests to share photos and videos from your special day. No more chasing down files or lost memories.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                            <LucideApple />
                            Download for iOS
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                            <SmartphoneIcon />
                            Download for Android
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Interactive Steps Section-- > */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* <!-- Left Column: Steps --> */}
                    <div className="space-y-8 order-2 lg:order-1">
                        {/* <!-- Step 1 --> */}
                        <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                            <div className="absolute -left-3 top-6 w-1 h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <CloudUpload />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1. Snap &amp; Upload Instantly</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Guests can upload photos and videos directly from their camera roll in bulk. Our smart uploader works in the background so they can get back to the party.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Step 2 --> */}
                        <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                            <div className="absolute -left-3 top-6 w-1 h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Album />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2. Curate Into Albums</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Organize moments as they happen. Create dedicated albums for the &quot;Ceremony&quot;, &quot;Reception&quot;, or &quot;After Party&quot; and let guests tag themselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Step 3 --> */}
                        <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                            <div className="absolute -left-3 top-6 w-1 h-12 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <QrCodeIcon />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3. Share with a Tap</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Generate a unique QR code or link instantly. Print it on table cards or send it via text so everyone can access the gallery without creating an account.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Right Column: Phone Mockup --> */}
                    <div className="relative order-1 lg:order-2 flex justify-center items-center">
                        {/* <!-- Background Decoration --> */}
                        <div className="absolute inset-0 blob-bg opacity-50 dark:opacity-20 scale-150"></div>
                        {/* <!-- Phone Frame --> */}
                        <div className="relative z-10 w-75 h-150 bg-slate-900 rounded-[2.5rem] p-3 phone-mockup-shadow border-4 border-slate-800 dark:border-slate-700">
                            {/* <!-- Screen --> */}
                            <div className="w-full h-full bg-white dark:bg-background-dark rounded-4xl overflow-hidden relative flex flex-col">
                                {/* <!-- Mockup Status Bar --> */}
                                <div className="h-6 w-full flex justify-between items-center px-4 pt-2">
                                    <div className="text-[10px] font-bold text-slate-900 dark:text-white">9:41</div>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-slate-900 dark:bg-white opacity-20"></div>
                                        <div className="w-3 h-3 rounded-full bg-slate-900 dark:bg-white opacity-20"></div>
                                    </div>
                                </div>
                                {/* <!-- Mockup Header --> */}
                                <div className="p-4 pb-2">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                            <Menu />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-primary/30">
                                            JD
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Sarah &amp; Mike&apos;s Wedding</h4>
                                    <p className="text-xs text-slate-500">124 Photos • 14 Videos</p>
                                </div>
                                {/* <!-- Mockup Gallery Grid --> */}
                                <div className="flex-1 overflow-hidden px-4 pb-4">
                                    <div className="grid grid-cols-2 gap-2 h-full">
                                        <div className="rounded-lg bg-slate-200 dark:bg-slate-800 h-32 relative overflow-hidden group">
                                            <Image className="w-full h-full object-cover" data-alt="Wedding couple kissing under veil" src="/hero-bg.png"
                                                alt='Kissing under veil'
                                                fill
                                            />
                                            <div className="absolute top-1 right-1 bg-black/50 p-1 rounded text-white">
                                                <Star />
                                            </div>
                                        </div>
                                        <div className="rounded-lg bg-slate-200 dark:bg-slate-800 h-32 relative overflow-hidden">
                                            <Image className="w-full h-full object-cover" data-alt="Wedding party table setting with flowers" src="/hero-bg.png" alt='Food Table' fill />
                                        </div>
                                        <div className="rounded-lg bg-slate-200 dark:bg-slate-800 h-40 relative overflow-hidden col-span-2">
                                            <Image className="w-full h-full object-cover" data-alt="Wedding guests dancing and celebrating" src="/hero-bg.png" fill alt='People enjoying' />
                                            <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-black/70 px-2 py-1 rounded text-[10px] font-bold text-slate-900 dark:text-white flex items-center gap-1">
                                                <Play /> Video
                                            </div>
                                        </div>
                                        <div className="rounded-lg bg-slate-200 dark:bg-slate-800 h-24 relative overflow-hidden">
                                            <Image className="w-full h-full object-cover" data-alt="Wedding cake with floral decorations" src="/hero-bg.png" alt='Cake' fill />
                                        </div>
                                        <div className="rounded-lg bg-primary/10 h-24 flex items-center justify-center flex-col gap-1 border-2 border-dashed border-primary/30">
                                            <ImageUp />
                                            <PlusIcon />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Mockup FAB --> */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white">
                                        <Share />
                                    </div>
                                </div>
                                {/* <!-- Home Indicator --> */}
                                <div className="absolute bottom-1 w-full flex justify-center pb-2">
                                    <div className="w-1/3 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Download CTA Block-- > */}
            <div className="mt-24 bg-white dark:bg-slate-800 border-y border-slate-200 dark:border-slate-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Start collecting memories today</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                                Don&apos;t let your wedding photos disappear into group chats. Create a shared album that everyone can contribute to instantly.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
                                    <Image alt="QR Code" className="w-24 h-24 mix-blend-multiply dark:mix-blend-normal dark:invert" data-alt="QR code to download the mobile app" src="/hero-bg.png" width={50} height={50} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">Scan to install</span>
                                    <span className="text-xs text-slate-500">Available on iOS &amp; Android</span>
                                    <div className="flex gap-2 mt-2">
                                        <span className="material-icons-round text-slate-400">star</span>
                                        <span className="material-icons-round text-slate-400">star</span>
                                        <span className="material-icons-round text-slate-400">star</span>
                                        <span className="material-icons-round text-slate-400">star</span>
                                        <span className="material-icons-round text-slate-400">star_half</span>
                                        <span className="text-xs text-slate-500 ml-1">4.8/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                            <Image className="absolute inset-0 w-full h-full object-cover opacity-80" data-alt="Happy couple looking at photos on a phone" src="/hero-bg.png" fill alt='illustration' />
                            <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent dark:from-slate-800 dark:via-slate-800/80 dark:to-transparent flex flex-col justify-center p-8">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                                    <LightbulbIcon />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Setup in 3 minutes</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">No technical skills required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--FAQ Section-- > */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-8">
                <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 open:border-primary/50 dark:open:border-primary/50 transition-colors">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 dark:text-white">
                            <span>Do guests need to create an account?</span>
                            <span className="transition group-open:rotate-180">

                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="text-slate-600 dark:text-slate-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                            No! We believe in zero friction. Guests can scan your QR code and upload photos directly as a guest without signing up.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 open:border-primary/50 dark:open:border-primary/50 transition-colors">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 dark:text-white">
                            <span>Is there a storage limit?</span>
                            <span className="transition group-open:rotate-180">
                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="text-slate-600 dark:text-slate-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                            Our free plan includes up to 500 photos. For unlimited storage and 4K video support, you can upgrade to our Premium Event package.
                        </div>
                    </details>
                    <details className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 open:border-primary/50 dark:open:border-primary/50 transition-colors">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 dark:text-white">
                            <span>Can I download all photos at once?</span>
                            <span className="transition group-open:rotate-180">
                                <ChevronDown />
                            </span>
                        </summary>
                        <div className="text-slate-600 dark:text-slate-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                            Absolutely. As the event host, you have a &quot;Download All&quot; button on your desktop dashboard to get a ZIP file of every memory.
                        </div>
                    </details>
                </div>
            </div>
        </>
    )
}

export default HowItWorksPage