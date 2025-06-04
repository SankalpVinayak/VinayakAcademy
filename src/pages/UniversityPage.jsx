import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import universities from '../data/universities.json';

const UniversityPage = () => {
    const { id } = useParams();
    const university = universities.find((u) => u.id.toString() === id);
    const navigate = useNavigate()

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0 });
    }, []);

    if (!university) {
        return <div className="text-center text-red-600 mt-10">University not found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 mb-12">
            <button
                onClick={() => navigate('/university')}
                className="mb-6 flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Universities
            </button>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-8 grid grid-cols-1 md:grid-cols-3">
                <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-64 md:h-auto object-cover"
                />
                <div className="col-span-2 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-purple-800 mb-2">
                        {university.name}
                    </h2>
                    <p className="text-gray-600 text-lg mb-1">
                        📍 <strong>Location:</strong> {university.location}
                    </p>
                    <p className="text-gray-600 text-lg">
                        🎓 <strong>Base Fee:</strong> {university.fee}
                    </p>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-xl overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-purple-100 text-purple-800">
                        <tr>
                            <th className="text-left p-4">Course Name</th>
                            <th className="text-left p-4">Subjects</th>
                            <th className="text-left p-4">Duration (Years)</th>
                            <th className="text-left p-4">Fee</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {university.courses.map((course, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="p-4 font-medium">{course.name}</td>
                                <td className="p-4">{course.subject}</td>
                                <td className="p-4">{course.duration}</td>
                                <td className="p-4">{course.fee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UniversityPage;
