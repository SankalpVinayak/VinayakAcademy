import React from 'react'
import { FaArrowsAltH, FaIndustry, FaGlobe, FaUserCheck, FaLightbulb } from "react-icons/fa";

const WhyUs = () => {
    const features =
        [
            {
                icon: <FaArrowsAltH size={20} className="text-white" />,
                title: "Flexibility Redefined",
                description: "Our unwavering commitment to flexibility ensures education aligns seamlessly with your work and personal commitments.",
                bg: "bg-purple-500"
            },
            {
                icon: <FaIndustry size={20} className="text-white" />,
                title: "Industry Excellence",
                description: "Stay ahead in your career with meticulously crafted courses designed to meet the dynamic demands of various industries.",
                bg: "bg-indigo-500"
            },
            {
                icon: <FaGlobe size={20} className="text-white" />,
                title: "Premier Collaborations, Global Recognition",
                description: "Access high-quality, globally recognized education through our exclusive partnerships with renowned universities.",
                bg: "bg-cyan-500"
            },
            {
                icon: <FaUserCheck size={20} className="text-white" />,
                title: "Personalized Success",
                description: "Your success is our heartbeat. Dive into testimonials and stories showcasing careers transformed by Vinayak Academy.",
                bg: "bg-pink-500"
            },
            {
                icon: <FaLightbulb size={20} className="text-white" />,
                title: "Innovative Integration",
                description: "Experience education uniquely integrated into your professional life, combining theoretical knowledge with practical application.",
                bg: "bg-gray-600"
            }
        ]
    return (
        <div className="relative flex flex-col xl:flex-row justify-center items-center py-16 px-4 sm:px-6 md:px-10 my-16 overflow-hidden">

            {/* Purple Background - Only visible on xl and above */}
            <div className="hidden xl:block absolute bg-purple-200 rounded-full w-[1100px] h-[520px] z-0" />

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[1100px] bg-purple-100 xl:bg-transparent rounded-[50px] px-6 sm:px-8 md:px-10 py-10 flex flex-col xl:flex-row items-center gap-10">

                {/* Why Choose Us Circle - Centered on small, left on xl */}
                <div className="flex-shrink-0 xl:mt-0 xl:ml-2 z-10">
                    <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-b from-purple-400 to-purple-700 shadow-lg flex items-center justify-center text-white text-center font-bold">
                        <div>
                            <div className="text-sm">WHY</div>
                            <div className="text-xl">CHOOSE</div>
                            <div className="text-sm">US</div>
                        </div>
                    </div>
                </div>

                {/* Right Features Section */}
                <div className="grid gap-5 max-w-[800px] w-full">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.bg} shadow-md`}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-base">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default WhyUs
