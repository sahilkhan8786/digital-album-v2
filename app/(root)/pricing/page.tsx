import PricingGrid from '@/components/custom/pricing/pricing-grid'
import { CheckCircle, CloudUpload, HdIcon, HelpCircle, Users } from 'lucide-react'


const PricingPage = () => {
    return (
        <>
            <div className="@container">
                <div className="@[480px]:p-4">
                    <div className="flex min-h-120 flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 relative overflow-hidden shadow-xl" data-alt="Dark aesthetic background image with hints of celebration and camera lenses" style={{
                        backgroundImage: `linear-gradient(
      rgba(16, 22, 34, 0.7) 0%, 
      rgba(16, 22, 34, 0.5) 50%, 
      rgba(16, 22, 34, 0.9) 100%
    ), url("/hero-bg.png")`
                    }}>
                        <div className="flex flex-col gap-2 text-center max-w-150 z-10">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                Preserve every second. <br />Share every smile.
                            </h1>
                            <h2 className="text-gray-300 text-sm font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal mt-2">
                                Flexible plans for weddings, events, and lifetime memories. Secure your moments with the highest quality cloud storage.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Billing Toggle --> */}
            <div className="flex px-4 py-8 justify-center">
                <div className="flex h-12 items-center justify-center rounded-lg bg-surface-dark border border-border-dark p-1 w-full max-w-100">
                    <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-checked:bg-primary has-:checked:text-white text-gray-400 text-sm font-medium leading-normal transition-all duration-200">
                        <span className="truncate">Monthly</span>
                        <input className="invisible w-0 h-0 absolute" name="billing-toggle" type="radio" value="Monthly" />
                    </label>
                    <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-:checked:bg-primary has-:checked:text-white text-gray-400 text-sm font-medium leading-normal transition-all duration-200">
                        <span className="truncate">Yearly (Save 20%)</span>
                        <input checked={true} className="invisible w-0 h-0 absolute" name="billing-toggle" type="radio" value="Yearly" />
                    </label>
                </div>
            </div>
            {/* <!-- Pricing Cards --> */}
            <PricingGrid />
            {/* <!-- FAQ Section --> */}
            <div className="flex flex-col gap-4 px-4 py-12">
                <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 text-center">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 p-6 rounded-lg bg-surface-dark border border-border-dark">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <HelpCircle />
                            Can I change plans later?
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-lg bg-surface-dark border border-border-dark">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <CloudUpload />
                            What happens to my data if I cancel?
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Your memories are safe. If you cancel, we store your data for 30 days allowing you to download everything before account closure.</p>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-lg bg-surface-dark border border-border-dark">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <Users />
                            Can I invite guests to upload?
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Absolutely. All paid plans allow unlimited guest contributors via a simple QR code or link sharing.</p>
                    </div>
                    <div className="flex flex-col gap-2 p-6 rounded-lg bg-surface-dark border border-border-dark">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <HdIcon />
                            Is 4K video supported on all devices?
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Yes, we support playback on all modern devices. Uploads are kept in original quality on the Storyteller and Archivist plans.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingPage