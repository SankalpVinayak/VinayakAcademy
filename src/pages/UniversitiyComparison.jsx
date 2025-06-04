import React, { useState } from 'react';
import uniData from '../data/universities.json';

const UniversityComparison = () => {
    const [selected, setSelected] = useState([]);
    const [warning, setWarning] = useState('');

    const toggleSelection = (id) => {
        setWarning('');
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else if (selected.length >= 3) {
            setWarning('You can compare a maximum of 3 universities at a time.');
        } else {
            setSelected([...selected, id]);
        }
    };

    const clearWarning = () => setWarning('');

    const selectedUnis = uniData.filter((uni) => selected.includes(uni.id));

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-16">
            <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-10 tracking-tight">
                Compare Top Universities
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {uniData.map((uni) => (
                    <button
                        key={uni.id}
                        onClick={() => toggleSelection(uni.id)}
                        className={`px-5 py-2 rounded-full shadow-md text-sm font-semibold transition hover:scale-105 ${selected.includes(uni.id)
                            ? 'bg-purple-700 text-white'
                            : 'bg-white text-purple-800 border border-purple-300 hover:bg-purple-100'
                            }`}
                    >
                        {uni.name}
                    </button>
                ))}
            </div>

            {warning && (
                <div className="text-red-600 text-center font-semibold mb-4 animate-pulse">
                    {warning}
                    <button
                        onClick={clearWarning}
                        className="ml-4 bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-3 py-1 rounded-full shadow-sm transition duration-300 inline-block"
                    >
                        Dismiss
                    </button>
                </div>
            )}

            {selectedUnis.length > 0 ? (
                <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 justify-center">
                    {selectedUnis.map((uni) => (
                        <div
                            key={uni.id}
                            className="bg-white/60 backdrop-blur-md border border-purple-100 
                            rounded-3xl shadow-xl w-full max-w-sm p-6 
                            transition-transform hover:scale-105 h-[440px] flex flex-col gap-4"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <div className="h-12 w-12 rounded-full border border-purple-300 overflow-hidden flex-shrink-0 bg-white shadow-sm">
                                    <img
                                        src={uni.logoImage}
                                        alt={uni.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-purple-900 text-center">{uni.name}</h3>
                                <div className="w-full text-sm text-gray-700 space-y-2 mt-2">
                                    <div className="flex justify-between">
                                        <span className='font-semibold'>Location:</span>
                                        <span>{uni.location}</span>
                                    </div>
                                    {/* <div className="flex justify-between">
                                        <span>Fee:</span>
                                        <span>{uni.fee}</span>
                                    </div> */}
                                </div>
                            </div>

                            {/* Scrollable Courses Section */}
                            <div className="overflow-y-auto max-h-48 bg-white/50 p-3 rounded-xl border border-purple-200">
                                <span className="block font-medium text-purple-800 mb-2">Courses Offered:</span>
                                <div className="space-y-2 text-sm text-gray-800">
                                    {uni.courses.map((course, idx) => (
                                        <div key={idx} className="p-2 border rounded-md bg-purple-50">
                                            <div className="font-semibold">{course.name}</div>
                                            <div className="text-xs text-gray-600">
                                                <div>Subject: {course.subject}</div>
                                                <div>Duration: {course.duration}</div>
                                                <div>Fee: {course.fee}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg mt-10">
                    Select up to <span className="font-bold text-purple-600">3</span> universities to begin comparison.
                </p>
            )}
        </div>
    );
};

export default UniversityComparison;
