import React from 'react'
import Image1 from '../assets/AboutUs1.svg'
import Image2 from '../assets/AboutUs2.svg'
import Image3 from '../assets/AboutUs3.svg'
import { motion } from 'framer-motion'

const About = () => {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        // <section className="bg-white py-20 px-6 md:px-12 lg:px-20 mb-3">
        //     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        //         {/* Left Content Box */}
        //         <div className="bg-gradient-to-r from-pink-100 to-purple-200 p-10 md:p-12 shadow-xl rounded-3xl border-l-8 border-purple-600">
        //             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        //                 Welcome to <span className="text-purple-700">Vinayak Academy</span>
        //             </h2>
        //             <p className="text-gray-700 text-base md:text-lg mb-6">
        //                 We’re more than a platform — we’re a growing community of learners, mentors, and leaders from every part of India.
        //                 Our goal? To make learning feel personal, practical, and powerful.
        //             </p>
        //             <blockquote className="text-purple-800 italic border-l-4 pl-4 border-purple-400">
        //                 "We don’t just train students. We believe in nurturing changemakers."
        //             </blockquote>
        //             <p className="mt-4 text-sm text-gray-600">— The Vinayak Team</p>
        //         </div>

        //         {/* Right Image or Highlight */}
        //         <div className="relative bg-gradient-to-b from-pink-100 to-purple-200">
        //             <img
        //                 src="https://cdni.iconscout.com/illustration/premium/thumb/student-in-classroom-illustration-download-svg-png-gif-file-formats--study-learning-education-and-knowledge-pack-people-illustrations-4094518.png"
        //                 alt="Students learning"
        //                 className="rounded-3xl shadow-lg object-contain w-full h-[400px]"
        //             />
        //             <div className="absolute bottom-4 left-4 bg-purple-700 text-white text-xs md:text-sm px-4 py-2 rounded-full shadow-md">
        //                 Growing with 10,000+ Learners Nationwide
        //             </div>
        //         </div>

        //     </div>
        // </section>

        <section className="bg-white py-24 px-6 md:px-16 lg:px-32 relative">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-10"
                    >
                        <motion.img
                            src={Image1}
                            alt="Vision"
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
                            <h3 className="text-2xl font-bold text-purple-700 mb-3">Our Origin</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Founded with a mission to bridge educational gaps across tier-2 cities and beyond, Vinayak Academy emerged as a voice of inclusive growth. From a single course to a multi-platform learning system — our journey is rooted in vision and resilience.
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
            </div>
        </section>
    )
}

export default About
