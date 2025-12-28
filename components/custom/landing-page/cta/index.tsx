import React from 'react'

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">Ready to capture the magic?</h2>
                <p className="text-xl text-gray-500 mb-10">Start your free album today. No credit card required.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="h-14 px-8 bg-primary hover:bg-primary-hover text-white text-lg font-bold rounded-lg shadow-xl shadow-primary/30 transition-all w-full sm:w-auto">
                        Get Started for Free
                    </button>
                    <button className="h-14 px-8 bg-surface-dark hover:bg-surface-border text-white text-lg font-bold rounded-lg border border-surface-border transition-all w-full sm:w-auto">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA