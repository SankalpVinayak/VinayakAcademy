import React, { useState } from "react";
import HeroImg from '../assets/amico.svg'
import Courses from "./Courses";
import Impact from "./Impact";
import WhyUs from "./WhyUs";
import Values from "./Values";
import SuccessStories from "./SuccessStories";

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState("impact");

    return (
        <div className="overflow-hidden">

            {/* Hero Sec. */}
            <div className="grid md:grid-cols-2 gap-y-8 items-center px-8 md:px-20 pt-16 md:gap-x-12">

                {/* Left Img */}
                <div className="order-2 md:order-1">
                    <img src={HeroImg} alt="Vinayak Academy" className="max-h-[500px] w-full object-contain" />
                </div>

                {/* Right Txt */}
                <div className="text-center md:text-left gap-3 order-1 md:order-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Unlock Your Potential with <span className="italic">Online Learning</span>
                    </h1>
                    <p className="font-serif text-gray-800 text-base md:text-lg leading-relaxed">
                        At <span className="text-[#B71D8D] font-semibold">Vinayak Academy</span>, we partner with top-tier universities and industry leaders to deliver flexible, career-aligned learning experiences. Whether you're looking to upskill, reskill, or advance in your education, our programs are thoughtfully designed to meet the evolving demands of today’s workforce—on your schedule.
                    </p>
                    <p className="text-sm tracking-wider text-[#B71D8D] italic font-semibold mt-3">
                        *START YOUR JOURNEY.
                    </p>
                    <a href="#" className="text-blue-600 underline">
                        <button className="bg-purple-500 text-white mt-3 px-6 py-3 rounded-xl shadow-md hover:bg-violet-800 transition cursor-pointer w-full sm:w-auto">
                            Enroll Now
                        </button>
                    </a>

                </div>
            </div>

            <div className="my-16 px-2 sm:px-4">
                <WhyUs />
            </div>

            {/* Tabs */}
            <div className="flex justify-center border-b mb-6 ">
                <button
                    onClick={() => setActiveTab("impact")}
                    className={`px-6 py-2 font-medium transition-all cursor-pointer ${activeTab === "impact"
                        ? "text-[#533A7B] border-b-2 border-[#533A7B]"
                        : "text-gray-600 hover:text-[#533A7B]"
                        }`}
                >
                    Impact & Vision
                </button>
                <button
                    onClick={() => setActiveTab("courses")}
                    className={`px-6 py-2 font-medium transition-all cursor-pointer ${activeTab === "courses"
                        ? "text-[#533A7B] border-b-2 border-[#533A7B]"
                        : "text-gray-600 hover:text-[#533A7B]"
                        }`}
                >
                    Explore Our Courses
                </button>
            </div>

            {/* Feature Sec */}
            {activeTab === "impact" ? (
                <Impact />
            ) : (
                <Courses />
            )}

            <Values />
            <SuccessStories />
        </div>
    );
};

export default HeroSection;
