import { Star, Handshake, Users, Trophy, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import UniversitySlider from "./UniversitySlider";
import { useNavigate } from "react-router-dom";

const universityPartners = [
    "https://logowik.com/content/uploads/images/upes-university-of-petroleum-and-energy-studies1209.jpg",
    "https://upload.wikimedia.org/wikipedia/en/3/3d/Haridwar_University_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtH2hWYAbD7HB8qyczgVRmfAKUd07oA2xGPw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDC93Azab2QicGTKSBMxOKyX2mNTvyuaQcw&s",
    "https://svsu.ac.in/assets/imgs/svsu_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Gyan_Vihar_Logo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsk5KTC2PYHi852BKUoxFEGJG2m6uHJ6e7w&s",
    "https://seeklogo.com/images/A/asian-international-university-manipur-logo-4EBFC0A259-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg3eG5TcI8tEofKgBSAXRl_wqFiEYDZN6GA&s",
    "https://seeklogo.com/images/P/parul-university-logo-E549D59E4B-seeklogo.com.png",
    "https://i.pinimg.com/736x/15/f9/0c/15f90c2a6d66896f71338be308e681b3.jpg",
    "https://images.seeklogo.com/logo-png/34/2/lpu-sae-india-collegiate-club-logo-png_seeklogo-345773.png",
];


const features = [
    {
        title: "Academic Excellence",
        description: "Our high-performing students are known for their analytical rigor, innovation, and global outlook.",
        icon: Star,
        color: "yellow",
    },
    {
        title: "Diverse Student Pool",
        description: "We represent students from across India with strong cultural, academic, and linguistic diversity.",
        icon: Users,
        color: "blue",
    },
    {
        title: "Collaborative Programs",
        description: "We design joint programs, research projects, and summer schools with partner universities.",
        icon: Handshake,
        color: "green",
    },
    {
        title: "Award-Winning Mentorship",
        description: "Our faculty includes nationally recognized mentors who provide strong academic guidance.",
        icon: Trophy,
        color: "purple",
    },
];

const Collaboration = () => {
    const navigate = useNavigate()

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full">
            {/* Hero */}
            <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/university-bg.jpg')" }}>
                <div className="absolute inset-0 bg-purple-400 flex items-center justify-center">
                    <div className="text-center px-6">
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
                            Global Academic Collaborations
                        </h1>
                        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                            At Vinayak Academy, we proudly partner with renowned institutions worldwide to offer our students the best educational exposure and opportunities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scrolling Partner Logos */}
            <div className="bg-white py-10">
                <div className="overflow-hidden whitespace-nowrap">
                    <motion.div
                        className="flex gap-10 items-center animate-marquee"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {universityPartners.concat(universityPartners).map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="Partner University"
                                className="h-20 object-contain opacity-80 hover:opacity-100 transition"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Why Collaborate */}
            <section className="bg-white py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl xl:text-5xl font-extrabold text-purple-800 relative inline-block">
                            Why Universities Collaborate With Us
                            <span className="block w-16 h-1 bg-purple-400 mx-auto mt-4 rounded-full"></span>
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                            Our excellence in education, innovation, and mentorship draws top institutions to partner with us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="bg-purple-200 group-hover:bg-purple-100 transition duration-300 rounded-xl p-3">
                                        <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <div className="bg-white py-16 px-6 md:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl italic text-gray-600 mb-4">
                        “Vinayak Academy’s students consistently demonstrate outstanding preparedness and dedication. Our joint summer program saw an 80% project success rate — a rare achievement.”
                    </p>
                    <p className="text-purple-700 font-bold text-lg">— Dr. Amelia Hart, Global Relations Officer, Cambridge University</p>
                </div>
            </div>

            <UniversitySlider />
            <div className="text-center -mt-8">
                <button onClick={() => navigate('/university')}
                    className="inline-block bg-purple-600 text-white cursor-pointer
                    font-semibold text-center py-3 px-6 rounded-xl shadow-md hover:bg-purple-800 
                    transition duration-300">
                    🎓 See Full List
                </button>
            </div>


            {/* Spotlight Collaboration Section */}
            <section className="bg-white py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-3xl shadow-xl"
                    >
                        <img
                            src="https://collegewaale.com/upes/wp-content/uploads/2023/12/upes-1.webp"
                            alt="UPES Collaboration"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-3 w-20 h-1 bg-purple-500 rounded-full" />

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                            Collaboration Spotlight:
                            <br />
                            <span className="text-purple-700">UPES Industry-Aligned Initiative</span>
                        </h3>

                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            In an academic partnership with{" "}
                            <span className="font-semibold text-purple-700">
                                University of Petroleum and Energy Studies (UPES)
                            </span>
                            , Vinayak Academy launched a specialized initiative focused on energy, law, business, and technology sectors. The collaboration emphasizes:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-base">
                            <li>Joint certification programs across multiple disciplines</li>
                            <li>Industry-immersive workshops and case-based learning</li>
                            <li>Faculty exchanges and expert-led guest lectures</li>
                            <li>Dedicated career pathways aligned with UPES’ innovation ecosystem</li>
                        </ul>

                        {/* Quote */}
                        <div className="mt-8 bg-purple-50 border-l-4 border-purple-400 p-5 rounded-xl shadow-sm">
                            <p className="italic text-gray-600 leading-relaxed mb-3">
                                “Vinayak Academy’s students demonstrate a unique blend of academic rigor and industry-readiness. Our collaboration has resulted in innovative program delivery and impactful student outcomes.”
                            </p>
                            <span className="block font-semibold text-purple-800">
                                – Dr. Anjali Mahajan, Associate Dean, UPES
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </section>

    );
};

export default Collaboration;
