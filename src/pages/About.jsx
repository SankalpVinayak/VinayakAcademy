import React, { useState, useEffect } from 'react';
import Image1 from '../assets/AboutUs1.svg';
import Image2 from '../assets/AboutUs2.svg';
import Image3 from '../assets/AboutUs3.svg';
import { motion } from 'framer-motion';

const About = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return (
        <section className="bg-white py-24 px-6 md:px-16 lg:px-32 relative">
            <div className="max-w-7xl mx-auto">

                {mounted && (
                    <>
                        {/* Header */}
                        <motion.div
                            className="text-center mb-20"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                The Story of <span className="text-purple-700">Vinayak Academy</span>
                            </h2>
                            <p className="text-lg text-[#B71D8D] font-medium max-w-3xl mx-auto">
                                More than an institution — we are a movement to make education meaningful, flexible, and deeply human.
                            </p>
                        </motion.div>

                        {/* Timeline / Story Cards */}
                        <div className="space-y-20">

                            {/* Card 1 */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col md:flex-row items-center gap-10"
                            >
                                <motion.img
                                    src={Image1}
                                    alt="Vision"
                                    className="w-full md:w-[60%] max-w-sm object-contain"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                />
                                <motion.div
                                    className="md:w-full text-left"
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <h3 className="text-2xl font-bold text-purple-700 mb-3">Our Origin</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Vinayak Academy's inception is rooted in a vision for transformative
                                        education. Our founders, inspired by the need for flexible learning,
                                        established strategic partnerships with top-tier universities. The goal was
                                        clear: create accessible online experiences, allowing individuals to pursue
                                        education without sacrificing current commitments. This founding story
                                        reflects a commitment to global empowerment through education, shaping our
                                        institution's ethos.
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-col-reverse md:flex-row items-center gap-10"
                            >
                                <motion.div
                                    className="md:w-full text-left"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    <h3 className="text-2xl font-bold text-purple-700 mb-3">Our Present</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Today, we collaborate with universities, industry mentors, and learners from every walk of life. Our programs are immersive, outcome-focused, and built for the evolving future of work.
                                    </p>
                                </motion.div>
                                <motion.img
                                    src={Image2}
                                    alt="Present"
                                    className="w-full md:w-[40%] max-w-sm object-contain"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                />
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row items-center gap-10"
                            >
                                <motion.img
                                    src={Image3}
                                    alt="Future"
                                    className="w-full md:w-[60%] max-w-sm object-contain"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                />
                                <motion.div
                                    className="md:w-full text-left"
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    <h3 className="text-2xl font-bold text-purple-700 mb-3">Our Future</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        With AI, digital skilling, and global collaborations, we’re crafting a platform that transforms not just how people learn — but why they learn. Our journey is just getting started.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default About;
