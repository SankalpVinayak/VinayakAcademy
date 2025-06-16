import { ClipboardCheck, MessageSquareHeart, Waypoints, } from "lucide-react";
import { MessageSquareQuote, PhoneCall, MapPin } from "lucide-react";
import { Compass, School, Globe, Users, FileBarChart2, Brain } from "lucide-react"
import { motion } from "framer-motion";
import counselling from "../assets/counselling.png"
import counsellor1 from "../assets/counsellor1.avif"
import counsellor2 from "../assets/counsellor2.avif"
import counsellor3 from "../assets/counsellor3.avif"
import BackToTopButton from "./BackToTopButton";

const steps = [
    {
        icon: <MessageSquareHeart size={40} className="text-purple-600" />,
        title: "Open Conversation",
        desc: "We begin with understanding your current challenges, interests, and goals.",
    },
    {
        icon: <ClipboardCheck size={40} className="text-purple-600" />,
        title: "Personalised Planning",
        desc: "Together, we map out strategies tailored to your academic and personal path.",
    },
    {
        icon: <Waypoints size={40} className="text-purple-600" />,
        title: "Clear Direction",
        desc: "You walk away with clarity, tools, and confidence to move forward.",
    },
];

const testimonials = [
    {
        name: "Anjali S.",
        feedback:
            "The counselling session helped me choose the right stream after 10th. I finally feel confident about my future!",
    },
    {
        name: "Rohit M.",
        feedback:
            "Their expert advice helped me crack my entrance and choose the right college. Highly recommended!",
    },
    {
        name: "Mrs. Sharma (Parent)",
        feedback:
            "I was worried about my son’s direction in life, but Vinayak Academy guided him with such patience and clarity.",
    },
];

const counsellingTypes = [
    {
        icon: <Compass className="w-8 h-8 text-purple-600" />,
        title: "Stream Selection After 10th",
        desc: "We help you align your interests and aptitude with the right academic stream, ensuring a strong foundation.",
    },
    {
        icon: <FileBarChart2 className="w-8 h-8 text-purple-600" />,
        title: "Career Path Planning",
        desc: "Clarity on your long-term career goals with step-by-step academic planning for success.",
    },
    {
        icon: <School className="w-8 h-8 text-purple-600" />,
        title: "Exam Strategy Counselling",
        desc: "Structured plans for boards, JEE/NEET and other entrances — stress-free and effective preparation.",
    },
    {
        icon: <Globe className="w-8 h-8 text-purple-600" />,
        title: "Study Abroad Guidance",
        desc: "From choosing the right country to handling applications and visas — complete support to go global.",
    },
    {
        icon: <Users className="w-8 h-8 text-purple-600" />,
        title: "Parent-Child Joint Sessions",
        desc: "Guided conversations that build clarity and mutual understanding for informed decisions.",
    },
    {
        icon: <Brain className="w-8 h-8 text-purple-600" />,
        title: "Personality & Aptitude Testing",
        desc: "Science-backed tests to uncover strengths, interests, and hidden potential.",
    },
];

const Counselling = () => {
    return (
        <div className="bg-white text-gray-800">

            {/* Hero Split Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-20 md:px-20 bg-gradient-to-br from-purple-50 to-white">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight mb-4">
                        Transform Confusion into Clarity
                    </h1>
                    <p className="text-lg text-gray-700 mb-6 font-semibold">
                        Counselling at Vinayak Academy helps you make informed decisions — whether you're a student unsure about your path or a parent looking for guidance.
                    </p>
                    <a href="/contactUs">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-full 
                    hover:bg-purple-800 transition cursor-pointer">
                            Schedule a Free Session
                        </button>
                    </a>
                </div>
                <img
                    src={counselling}
                    alt="Counselling Illustration"
                    className=""
                />
            </section>
            *
            {/* Step-by-Step Section */}
            <section className="py-24 px-6 md:px-20 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
                    How Our Counselling Works
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="bg-purple-200 rounded-2xl shadow p-6 text-center hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-purple-700 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
                    Why Choose Our Counselling?
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        "Confidential and empathetic support.",
                        "Experienced academic & career advisors.",
                        "Tailored plans for every student's need.",
                        "Follow-up and continuous mentorship.",
                        "Stress management & motivation support.",
                        "Parental guidance and feedback sessions.",
                    ].map((point, i) => (
                        <motion.div
                            key={i}
                            className="p-6 bg-purple-200 rounded-xl border-l-4 border-purple-600 text-gray-700 shadow-sm hover:shadow-md"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {point}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Types of Counselling Section */}
            <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
                        Types of Counselling We Offer
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
                        Our expert sessions are designed for every stage — from school transitions to career decisions, backed by clarity and care.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {counsellingTypes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-purple-100 bg-white p-6 shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-4 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-center text-purple-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Meet Our Counsellors */}
            <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-purple-50 via-white to-white">
                <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-4">
                    Meet Our Counsellors
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    Our experienced team brings compassion, expertise, and a student-first approach to every session.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {[
                        {
                            name: "Dr. Neha Verma",
                            role: "Academic & Career Advisor",
                            quote: "Helping students discover their true calling with clarity and care.",
                            img: counsellor1,
                        },
                        {
                            name: "Mr. Rahul Singh",
                            role: "Motivational Mentor",
                            quote: "Empowering young minds to make confident life choices.",
                            img: counsellor2,
                        },
                        {
                            name: "Ms. Pooja Tiwari",
                            role: "Parental Support Lead",
                            quote: "Supporting families through key academic and emotional decisions.",
                            img: counsellor3,
                        },
                    ].map((counsellor, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.03] p-8 text-center border-t-4 border-purple-600"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <div className="w-24 h-24 mx-auto mb-4 relative">
                                <div className="absolute inset-0 rounded-full bg-purple-200 blur-lg scale-110"></div>
                                <img
                                    src={counsellor.img}
                                    alt={counsellor.name}
                                    className="relative z-10 w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-purple-700">{counsellor.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{counsellor.role}</p>
                            <p className="text-gray-600 italic text-sm">"{counsellor.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Reviews */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-20">
                {/* Testimonials */}
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-10">
                        What Our Students & Parents Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-l-4 border-purple-500 rounded-xl p-6 shadow hover:shadow-md transition"
                            >
                                <MessageSquareQuote className="text-purple-500 mb-4" size={32} />
                                <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
                                <p className="font-semibold text-purple-600">— {item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Prompt */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
                        Ready to Talk to Us?
                    </h3>
                    <p className="text-gray-700 mb-6 font-semibold">
                        Reach out anytime — we're happy to assist you in your journey.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a
                            href="tel:+919999999999"
                            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition"
                        >
                            <PhoneCall size={20} />
                            Call Us
                        </a>
                        <a
                            href="https://www.google.com/maps/search/vinayak+academy+jhansi/@25.4425284,78.5676023,15z?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-white border border-purple-600 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-100 transition"
                        >
                            <MapPin size={20} />
                            Visit Our Centre
                        </a>
                    </div>
                </div>
            </section>
            <BackToTopButton />
        </div>
    );
}
export default Counselling