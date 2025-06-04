import React from 'react'
import { FaChalkboardTeacher, FaUsers, FaLaptopCode, FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Impact = () => {
    const stats = [
        {
            label: "Current Students",
            value: "10000+",
            icon: "🎓", // You can replace this with a proper icon later
        },
        {
            label: "University Collab.",
            value: "15+",
            icon: "🏛️",
        },
        {
            label: "Courses Offered",
            value: "20+",
            icon: "📚",
        },
        {
            label: "Years of Excellence",
            value: "9+",
            icon: "🌟",
        },
    ];

    const features = [
        {
            icon: <FaChalkboardTeacher className="text-purple-600 text-2xl" />,
            title: "Expert Mentorship",
            description: "Learn from industry leaders and certified educators guiding you every step of the way."
        },
        {
            icon: <FaUsers className="text-purple-600 text-2xl" />,
            title: "Community Driven",
            description: "Engage with peers, alumni, and mentors through a vibrant and supportive learning network."
        },
        {
            icon: <FaLaptopCode className="text-purple-600 text-2xl" />,
            title: "Career-Ready Programs",
            description: "Hands-on courses designed to equip you with the skills demanded by today’s employers."
        },
        {
            icon: <FaGlobeAmericas className="text-purple-600 text-2xl" />,
            title: "Global Accessibility",
            description: "Study from anywhere with our flexible, online-first platform tailored for modern learners."
        }
    ];

    return (
        <div>
            <div className="text-center mt-16 px-6 md:px-20">
                <h2 className="text-4xl font-bold text-center mb-4 italic">
                    Our Impact in Numbers
                </h2>

                <p className="text-center mb-12 italic text-lg">
                    Empowering Learners, One Journey at a Time
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((item, index) => {
                        const isClickable = item.label === "University Collab." || item.label === "Courses Offered";
                        const linkHref = item.label === "University Collab."
                            ? "/university"  // update with actual route
                            : item.label === "Courses Offered"
                                ? "/courseDetails"
                                : "#";

                        return (
                            <div
                                key={index}
                                className="bg-purple-300 border-gray-200 rounded-2xl shadow-md px-2 py-6 flex flex-col items-center hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                {isClickable ? (
                                    <a href={linkHref} className="text-xl font-bold text-purple-800 hover:underline">
                                        {item.value}
                                    </a>
                                ) : (
                                    <h3 className="text-xl font-bold text-purple-800">{item.value}</h3>
                                )}
                                <p className="text-purple-800 font-semibold mt-1">{item.label}</p>
                            </div>
                        );
                    })}

                </div>
            </div>

            <div className="bg-purple-200 py-10 px-4 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-16">
                {features.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-white rounded-full shadow-lg p-4 mb-4 hover:shadow-2xl">
                            {item.icon}
                        </div>
                        <h3 className="text-md font-bold text-purple-800">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Vision & Mission Section */}
            <div className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 text-center md:text-left items-start">
                <div>
                    <h2 className="text-3xl font-bold text-[#B71D8D] uppercase mb-4">
                        <span className="text-black font-black">OUR</span> VISION
                    </h2>
                    <div className="w-10 h-1 bg-purple-500 mx-auto md:mx-0 mb-6 rounded"></div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Our vision is to make high-quality education accessible to all, transcending geographical barriers.
                        Through partnerships with renowned universities, we aim to enable personal and professional growth on a global scale.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-[#B71D8D] uppercase mb-4">
                        <span className="text-black font-black">OUR</span> MISSION
                    </h2>
                    <div className="w-10 h-1 bg-purple-500 mx-auto md:mx-0 mb-6 rounded"></div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Vinayak Academy is on a mission to democratize education by forging strategic alliances with world-class universities.
                        We offer learners worldwide flexible, interactive, and transformative online learning experiences, bridging the gap between ambition and achievement.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center relative -top-5 mb-10">
                <Link to='/aboutUs'>
                    <button className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-3 
                px-6 rounded-full shadow-md transition cursor-pointer duration-300">
                        Know More About Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Impact
