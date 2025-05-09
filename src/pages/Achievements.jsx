import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaGlobeAsia } from 'react-icons/fa';

const achievements = [
    {
        year: '2021',
        title: 'Best Emerging Academy',
        description: 'Recognized as one of the top emerging educational institutions in North India.',
        icon: <FaTrophy className="text-yellow-500 text-xl" />,
    },
    {
        year: '2022',
        title: '100% Board Results',
        description: 'All our Higher Secondary students cleared with distinction, marking a historic achievement.',
        icon: <FaAward className="text-pink-500 text-xl" />,
    },
    {
        year: '2023',
        title: 'International Collaboration',
        description: 'Partnered with Asian Education Council for skill development and faculty exchange.',
        icon: <FaGlobeAsia className="text-purple-500 text-xl" />,
    },
];

const photos = [
    '/photos/event1.jpg',
    '/photos/event2.jpg',
    '/photos/event3.jpg',
    '/photos/event4.jpg',
];

const Achievements = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            {/* New Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white">
                <img
                    src="https://img.freepik.com/free-vector/employee-celebration-concept-illustration_114360-13901.jpg?t=st=1746509504~exp=1746513104~hmac=ae5b2650907a2fc747fd6bfb127af5d272935f64ffe9fea15e294cd880e84508&w=826"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 opacity-50"></div>
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold opacity-80
                     drop-shadow-lg leading-tight italic">
                        Celebrating Excellence
                    </h1>
                    <p className="font-sans mt-4 text-lg md:text-2xl font-medium opacity-87">
                        Recognizing the milestones that define Vinayak Academy's legacy
                    </p>
                </div>
            </div>

            {/* Timeline Achievements */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-purple-800 mb-16">
                    Our Journey of Excellence
                </h2>
                <div className="space-y-12">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border-4 border-purple-200">
                                {item.icon}
                            </div>
                            <div className="bg-gradient-to-r from-purple-200 to bg-purple-300 rounded-xl shadow-lg p-6 w-full md:w-2/3 border border-purple-100">
                                <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.year}</p>
                                <p className="text-gray-700 mt-3">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery Carousel */}
            <section className="px-6 py-20 bg-white shadow-inner">
                <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
                    Event Highlights
                </h2>
                <div className=" flex justify-center gap-6 px-2">
                    {photos.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt={`Event ${index + 1}`}
                            className="rounded-xl w-72 h-48 object-cover shadow-lg transition-transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Achievements;
