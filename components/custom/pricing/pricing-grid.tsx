import { CheckCircle } from "lucide-react";
export const pricingPlans = [
    {
        name: "720p Streaming",
        description: "Optimized for web and mobile, perfect for sharing with family.",
        price: 3000, // INR
        duration: "1 year streaming",
        features: [
            "720p Video Streaming",
            "Optimized Images",
            "Password Protected Albums",
            "Up to 100 Viewers",
            "1 Active Event",
        ],
        buttonText: "Buy Now",
    },
    {
        name: "1080p Streaming",
        description: "High-definition full HD video for a premium experience.",
        price: 5000, // INR
        duration: "1 year streaming",
        features: [
            "1080p Video Streaming",
            "Optimized Images",
            "Password Protected Albums",
            "Up to 100 Viewers",
            "1 Active Event",
        ],
        buttonText: "Buy Now",
    },
    {
        name: "5-Year Storage",
        description: "Keep your album safe for a decade, perfect for long-term memories.",
        price: "10,000", // INR
        duration: "5 years storage",
        features: [
            "720p or 1080p Video Storage",
            "All Images Stored",
            "Password Protected",
            "Unlimited Events during storage",
        ],
        buttonText: "Add Storage",
    },
    {
        name: "4K Upgrade",
        description: "Premium 4K streaming for a cinematic experience.",
        price: 8000, // INR extra
        duration: "1 year streaming",
        features: [
            "4K Video Streaming",
            "Optimized Images",
            "Password Protected",
            "Up to 100 Viewers",
        ],
        buttonText: "Upgrade to 4K",
    },
];



export default function PricingGrid() {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 px-4 py-6 @3xl:grid-cols-3">
            {pricingPlans.map((plan, idx) => (
                <div
                    key={idx}
                    className={`flex flex-1 flex-col gap-6 rounded-xl border ${plan.name === "1080p Streaming"
                        ? "border-2 border-primary shadow-[0_0_30px_rgba(19,91,236,0.15)] transform md:-translate-y-4"
                        : "border-solid border-border-dark"
                        } bg-surface-dark p-8 hover:border-gray-600 transition-colors relative`}
                >
                    {plan.name === "1080p Streaming" && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                            MOST POPULAR
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-lg font-bold leading-tight">{plan.name}</h1>
                        <p className="text-gray-400 text-sm">{plan.description}</p>
                        <div className="h-px bg-border-dark w-full my-2"></div>
                        <p className="flex items-baseline gap-1 text-white">
                            <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                ₹{plan.price}
                            </span>
                            <span className="text-gray-400 text-base font-medium leading-tight">{plan.duration}</span>
                        </p>
                    </div>

                    <button
                        className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors ${plan.name === "1080p Streaming" ? "bg-primary hover:bg-blue-600 shadow-lg shadow-primary/25" : "bg-border-dark hover:bg-gray-700"
                            }`}
                    >
                        <span className="truncate">{plan.buttonText}</span>
                    </button>

                    <div className="flex flex-col gap-3">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="text-sm font-normal leading-normal flex gap-3 text-gray-300">
                                <CheckCircle />
                                {feature}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
