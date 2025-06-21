import React, { useEffect, useState } from 'react';
import uniData from '../data/universities.json';
import rawCourseData from '../data/Courses.json'; // assuming correct path

// Combine all course categories into one flat array
const courseList = [
    ...rawCourseData.schooling,
    ...rawCourseData.undergraduate,
    ...rawCourseData.postgraduate,
    ...rawCourseData.diploma,
];

const UniversityComparison = () => {
    const [selected, setSelected] = useState([]);
    const [showComparison, setShowComparison] = useState(false);
    const [warning, setWarning] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (selected.length === 0) {
            setShowComparison(false);
        }
    }, [selected]);

    const toggleSelection = (id) => {
        setWarning(false);
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else if (selected.length < 3) {
            setSelected([...selected, id]);
        }
    };

    const handleCompare = () => {
        if (selected.length === 0 || selected.length > 3) {
            setWarning(true);
            setShowComparison(false);
        } else {
            setWarning(false);
            setShowComparison(true);
        }
    };

    const selectedUnis = uniData.filter((uni) => selected.includes(uni.id));

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-16">
            <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-10 tracking-tight">
                Compare Top Universities
            </h2>

            {/* Dropdown UI */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative w-full max-w-md">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full bg-white border border-purple-300 text-purple-800 
                        font-semibold text-lg py-2 px-4 rounded-lg shadow hover:bg-purple-50 transition cursor-pointer"
                    >
                        {selected.length > 0 ? 'Confirm for Comparison' : 'Select Universities'}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute z-10 mt-2 w-full bg-white border border-purple-200 rounded-lg shadow max-h-64 overflow-y-auto">
                            {uniData.map((uni) => (
                                <label
                                    key={uni.id}
                                    className={`flex items-center px-4 py-2 hover:bg-purple-50 cursor-pointer ${selected.length === 3 && !selected.includes(uni.id)
                                        ? 'opacity-50 cursor-not-allowed'
                                        : ''
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(uni.id)}
                                        onChange={() => toggleSelection(uni.id)}
                                        disabled={selected.length === 3 && !selected.includes(uni.id)}
                                        className="mr-3 accent-purple-600"
                                    />
                                    <span className="text-sm text-gray-800">{uni.name}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Compare Button */}
                <button
                    onClick={handleCompare}
                    className="mt-4 bg-purple-700 text-white px-6 py-2 rounded-full shadow 
                    hover:bg-purple-800 transition cursor-pointer"
                >
                    Compare
                </button>

                {/* Warning Message */}
                {warning && (
                    <p className="text-red-600 text-sm mt-2 animate-pulse">
                        Please select 1 to 3 universities to compare.
                    </p>
                )}
            </div>

            {/* {!showComparison && (
                <p className="text-center text-purple-800 font-medium text-lg mt-8 ">
                    🎓 Compare by selecting universities from the list above.
                </p>
            )} */}

            {/* Comparison Section */}
            {showComparison && selectedUnis.length > 0 ? (
                <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 justify-center">
                    {selectedUnis.map((uniData) => (
                        <div
                            key={uniData.id}
                            className="bg-white/60 backdrop-blur-md border border-purple-100 rounded-3xl shadow-xl w-full max-w-sm p-6 
                            transition-transform hover:scale-105 flex flex-col gap-4">

                            <div className="flex flex-col items-center space-y-4">
                                <div className="h-12 w-12 rounded-full border border-purple-300 overflow-hidden flex-shrink-0 bg-white shadow-sm">
                                    <img
                                        src={uniData.logoImage}
                                        alt={uniData.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-purple-900 text-center h-10">{uniData.name}</h3>

                                <div className="flex gap-2 items-center justify-between text-gray-700 mt-2">
                                    <span className="font-semibold">Location:</span>
                                    <span>{uniData.location}</span>
                                </div>


                                <div className="flex justify-between gap-2 items-center">
                                    <span className="font-semibold text-gray-700">🏛️ UGC:</span>
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full shadow-sm ${uniData.UGC === 'Approved'
                                            ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {uniData.UGC}
                                    </span>
                                </div>

                                {/* NAAC Grade */}
                                <div className="flex justify-between gap-2 items-center">
                                    <span className="font-semibold text-gray-700">🏅 NAAC Grade: </span>
                                    <span className="text-xs font-medium px-3 py-1 rounded-full shadow-sm bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800">
                                        {uniData.NAAC}
                                    </span>
                                </div>
                            </div>

                            {/* Courses Offered Section — no overflow or max-height */}
                            <div className="bg-white/50 p-3 rounded-xl border border-purple-200">
                                <span className="block font-medium text-purple-800 mb-2">Courses Offered:</span>
                                <div className="space-y-2 text-sm text-gray-800">
                                    {courseList.map((course, idx) => {
                                        const match = uniData.courses.some((uc) => {
                                            if (uc.name.toLowerCase().includes('diploma')) {
                                                return uc.subject?.toLowerCase().includes(course.title.toLowerCase());
                                            } else {
                                                return uc.name?.toLowerCase().includes(course.title.toLowerCase());
                                            }
                                        });

                                        return (
                                            <div
                                                key={idx}
                                                className={`p-2 border rounded-md flex items-center justify-between ${match ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'
                                                    }`}
                                            >
                                                <span className="font-semibold">{course.title}</span>
                                                <span className="text-lg">{match ? '✅' : '❌'}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-purple-800 font-medium text-lg mt-8 ">
                    🎓 Compare by selecting universities from the list above.
                </p>
            )}


        </div>
    );
};

export default UniversityComparison;
