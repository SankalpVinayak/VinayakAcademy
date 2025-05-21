import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Expert Career Mentors",
        desc: "Our counselors are industry veterans with a passion for guiding students to success.",
        icon: "🎓",
    },
    {
        title: "Personalized Guidance",
        desc: "Every student receives tailored advice based on aptitude, goals, and personality.",
        icon: "🧭",
    },
    {
        title: "Proven Track Record",
        desc: "Hundreds of students have reached top universities and careers through our programs.",
        icon: "📈",
    },
    {
        title: "Holistic Development",
        desc: "From soft skills to exam prep, we help students grow in every direction.",
        icon: "🌱",
    },
];

const WhyUs = () => {
    return (
        <section className="bg-white py-24 px-6 md:px-20 -mt-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="-mt-6"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Why Vinayak Academy?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We are more than counselors — we are partners in your journey to
                        academic and career excellence.
                    </p>
                    <div className="space-y-4">
                        {[
                            "One-on-One Career Mapping",
                            "Support for All Streams & Grades",
                            "Results-Oriented Planning",
                            "Support Beyond Counseling",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="text-green-500" size={20} />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Section: Feature Cards */}
                <motion.div
                    className="grid sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-purple-200 backdrop-blur-lg rounded-2xl p-6 shadow-lg border 
                            border-purple-100 hover:shadow-xl transition"
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h4 className="text-xl font-semibold text-purple-800 mb-2">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
