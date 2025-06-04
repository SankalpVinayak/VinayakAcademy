import React, { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { summary } from 'framer-motion/client';
import { Navigate, useNavigate } from 'react-router-dom';
import courseData from '../data/Courses.json'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CourseCard = ({ title, fee, desc, duration, careerPath, summary }) => {
    const [showDesc, setShowDesc] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg transition-all duration-300 w-60 md:w-64 lg:w-72 flex 
            flex-col justify-between p-4 border border-purple-100 relative h-[280px] overflow-hidden"
        >
            <div className="absolute top-2 right-2 bg-purple-100 text-purple-700 text-xs px-2 py-1 
            rounded-full font-medium shadow-sm">
                <FaGraduationCap />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>

                <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Duration:</span> {duration}
                </div>

                <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-700">Career Path:</span> {careerPath}
                </div>

                <div className="relative flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!showDesc ? (
                            <motion.p
                                key="summary"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-gray-600 absolute top-0 left-0 right-0"
                            >
                                <span className="font-medium text-gray-700">Summary:</span> {summary}
                            </motion.p>
                        ) : (
                            <motion.div
                                key="description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-gray-700 italic leading-snug absolute top-0 left-0 right-0 bottom-0 overflow-y-auto pr-1"
                            >
                                {desc}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button
                    className="text-sm text-pink-500 underline hover:text-pink-700 transition mt-2 self-start cursor-pointer"
                    onClick={() => setShowDesc(!showDesc)}
                >
                    {showDesc ? 'Back to Summary' : 'See Description'}
                </button>

                <button
                    className="text-sm text-pink-500 underline hover:text-pink-700 transition mt-2 self-start cursor-pointer"
                    onClick={() => navigate(`/colleges/${encodeURIComponent(title)}`)}
                >
                    See Colleges
                </button>
            </div>
        </motion.div>
    );
};


const CourseSection = ({ title, data }) => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20 px-4 py-12 bg-purple-100 rounded-xl shadow-inner"
    >
        <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold text-purple-800 text-center mb-10 relative 
            inline-block before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-16 
            before:h-1.5 before:bg-pink-400 before:rounded-full"
        >
            {title}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6 items-start">
            {data.map((item, index) => (
                <CourseCard key={index} title={item.title} fee={item.fee} desc={item.desc}
                    summary={item.summary} duration={item.duration} careerPath={item.careerPath} />
            ))}
        </div>
    </motion.section>
);

const CourseDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm.trim() === '') {
                setFilteredData(null);
                return;
            }

            const query = searchTerm.trim().toLowerCase();
            const filtered = {};

            Object.keys(courseData).forEach((category) => {
                const matches = courseData[category].filter((course) =>
                    course.title.toLowerCase().includes(query)
                );
                if (matches.length > 0) {
                    filtered[category] = matches;
                }
            });

            setFilteredData(filtered);
        }, 400); // 400ms debounce

        return () => clearTimeout(delayDebounce); // cleanup
    }, [searchTerm]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="px-6 md:px-16 py-16 bg-white min-h-screen"
        >
            <motion.h1
                variants={fadeInUp}
                className="text-center text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-pink-500 mb-16 drop-shadow-md"
            >
                Courses We Offer
            </motion.h1>

            {/* 🔍 Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <input
                    type="text"
                    placeholder="Type a letter to search..."
                    className="w-full sm:w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button
                    onClick={() => {
                        setSearchTerm('');
                        setFilteredData(null);
                    }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                    Search
                </button>
                {searchTerm && (
                    <button
                        onClick={() => {
                            setSearchTerm('');
                            setFilteredData(null);
                        }}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                    >
                        Clear
                    </button>
                )}
            </div>

            {/* Render Filtered or Full Course Data */}
            {filteredData ? (
                Object.keys(filteredData).length > 0 ? (
                    <>
                        {filteredData.schooling && <CourseSection title="Academic Level Courses" data={filteredData.schooling} />}
                        {filteredData.undergraduate && <CourseSection title="Undergraduate Courses" data={filteredData.undergraduate} />}
                        {filteredData.postgraduate && <CourseSection title="Postgraduate Courses" data={filteredData.postgraduate} />}
                        {filteredData.diploma && <CourseSection title="Diploma Courses" data={filteredData.diploma} />}
                    </>
                ) : (
                    <p className="text-center text-red-500 text-lg mt-10">
                        No courses found starting with '{searchTerm.charAt(0)}'
                    </p>
                )
            ) : (
                <>
                    <CourseSection title="Academic Level Courses" data={courseData.schooling} />
                    <CourseSection title="Undergraduate Courses" data={courseData.undergraduate} />
                    <CourseSection title="Postgraduate Courses" data={courseData.postgraduate} />
                    <CourseSection title="Diploma Courses" data={courseData.diploma} />
                </>
            )}
        </motion.div>
    );
};
export default CourseDetails;
