import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import uniData from '../data/universities.json';
import { useNavigate } from 'react-router-dom';
import BackToTopButton from './BackToTopButton';

const Universities = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="min-h-screen bg-white py-12 px-6 md:px-12">
            <h2 className="text-4xl font-bold text-center text-purple-700 mb-12 drop-shadow-sm">Explore Top Universities</h2>
            <div className="flex justify-center mb-8">
                <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md 
            hover:bg-purple-800 transition cursor-pointer" onClick={() => navigate('/universityComp')}> 🆚 Compare Universities</button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                {uniData.map((uni, index) => (
                    <motion.div
                        key={uni.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow 
                        duration-300 border border-purple-100 overflow-hidden group h-[500px] flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="h-56 overflow-hidden">
                            <img
                                src={uni.image}
                                alt={uni.name}
                                loading='lazy'
                                className="w-full h-full object-cover transform group-hover:scale-105 
                                transition-transform duration-300"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col flex-grow justify-between p-4">
                            <div className="space-y-2">
                                <h3 className="text-xl lg:text-2xl font-bold text-purple-800 flex 
                                items-center gap-2 line-clamp-2 leading-snug md:h-18 xl:h-16">
                                    🎓 {uni.name}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-600 min-h-[1.5rem]">
                                    📍 <span className="font-lg font-bold text-purple-700">Location:</span>
                                    <span className="line-clamp-1 font-semibold">{uni.location}</span>
                                </div>

                                {/*UGC*/}
                                {uni.name !== 'Board of Open Schooling and Skill Education' && (
                                    <div className="flex items-center gap-2 text-gray-600 min-h-[1.5rem]">
                                        🏛️ <span className="font-lg font-bold text-purple-700">UGC:</span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${uni.UGC === 'Approved'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {uni.UGC}
                                        </span>
                                    </div>
                                )}

                                {/* NAAC Grade */}
                                {uni.name !== 'Board of Open Schooling and Skill Education' && (
                                    <div className="flex items-center gap-2 text-gray-600 min-h-[1.5rem]">
                                        🏅 <span className="font-lg font-bold text-purple-700">NAAC Grade:</span>
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                                            {uni.NAAC}
                                        </span>
                                    </div>
                                )}

                                {/* <div className="flex items-center gap-2 text-gray-600 min-h-[1.5rem]">
                                    💰 <span className="font-medium text-purple-700">Fee:</span>
                                    <span>{uni.fee}</span>
                                </div> */}
                                {/* <div className="flex items-start gap-2 text-gray-600 min-h-[3rem]">
                                    📚 <span className="font-medium text-purple-600">Courses:</span>
                                    <span className="flex-1 line-clamp-2">{uni.courses.join(', ')}</span>
                                </div> */}
                            </div>

                            <div className="mt-4">
                                <button onClick={() => navigate(`/university/${uni.id}`)} className="w-full 
                                bg-purple-600 text-white py-2 px-4 rounded-xl font-semibold shadow-md 
                                hover:bg-purple-700 transition cursor-pointer">
                                    View More
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <BackToTopButton />
        </div>
    );
};

export default Universities;
