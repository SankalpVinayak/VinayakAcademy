import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CollegeList = () => {
    const { courseName } = useParams();
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo({ top: 0 });
    }, []);

    useEffect(() => {
        fetch('/Universities.json')  // Adjust path if needed
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(college =>
                    college.courses.includes(decodeURIComponent(courseName))
                );
                setColleges(filtered);
            });
    }, [courseName]);

    return (
        <div className="p-8 bg-gradient-to-br from-purple-50 to-gray-100 min-h-screen">
            <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-12 tracking-tight">
                Colleges Offering <span className="text-gray-800">"{courseName}"</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                {colleges.map((college, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col bg-white rounded-3xl w-full sm:w-[48%] lg:w-[30%] overflow-hidden shadow-xl transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    >
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={college.image}
                                alt={college.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-grow">
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">
                                {college.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                                <span className="font-medium text-gray-800">Courses:</span> {college.courses.join(', ')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CollegeList