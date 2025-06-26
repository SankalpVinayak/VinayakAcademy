import { col } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeList = () => {
    const { courseName } = useParams();
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    useEffect(() => {
        fetch('/Universities.json')
            .then(res => res.json())
            .then(data => {
                const decodedCourse = decodeURIComponent(courseName).toLowerCase();
                // console.log("decodedCourse-->", decodedCourse)
                const filtered = data.filter(college => {
                    // console.log('college---->', college)
                    return college.courses.some(course => {
                        if (course.name.toLowerCase() === "diploma") {
                            // console.log('course---->', course)

                            // Match against any subject in slash-separated list
                            const subjects = course.subject.split('/').map(s => s.trim().toLowerCase());
                            console.log("subjects-->", subjects)

                            const hasEngineeringSubject = subjects.some(subject =>
                                subject.toLowerCase().includes(decodedCourse)
                            );

                            console.log(hasEngineeringSubject); // ✅ true
                            return hasEngineeringSubject
                        } else {
                            // Default match by course name
                            return course.name.toLowerCase() === decodedCourse;
                        }
                    });
                });
                console.log('filtered--->', filtered)
                setColleges(filtered);
            });
    }, [courseName]);
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-purple-800 text-2xl font-bold">Colleges Offering "{decodeURIComponent(courseName)}"</h2>
            {colleges.map(college => (
                <div
                    key={college.id}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-6 items-center"
                >
                    <img
                        src={college.logoImage}
                        alt={`${college.name} Logo`}
                        className="w-24 h-24 object-contain"
                    />
                    <div className="flex-1">
                        <div className="flex items-center text-purple-800 text-2xl font-extrabold gap-2">
                            <h3 className="">
                                🎓 {college.name}
                            </h3>
                        </div>


                        <div className="flex items-center text-gray-600 text-sm gap-2 mt-3">
                            📍 <span className="font-medium text-gray-800">{college.location}</span>
                        </div>

                        {/* UGC */}
                        {college.name !== 'Board of Open Schooling and Skill Education' && (
                            <div className="flex items-center text-sm gap-2 mt-2">
                                🏛️ <span className="text-purple-700 font-semibold">UGC:</span>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${college.UGC === 'Approved'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {college.UGC}
                                </span>
                            </div>
                        )}

                        {/* NAAC */}
                        {college.name !== 'Board of Open Schooling and Skill Education' && (
                            <div className="flex items-center text-sm gap-2 mt-2">
                                🏅 <span className="text-purple-700 font-semibold">NAAC Grade:</span>
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                                    {college.NAAC}
                                </span>
                            </div>
                        )}

                        <div className="mt-2">
                            <h4 className="font-semibold text-purple-800">Course:</h4>
                            <ul className="list-disc list-inside">
                                {college.courses
                                    .filter(course => {
                                        const decodedCourse = decodeURIComponent(courseName).toLowerCase();

                                        if (course.name.toLowerCase() === "diploma") {
                                            const subjects = course.subject.split('/').map(s => s.trim().toLowerCase());

                                            return subjects.includes(decodedCourse) ||
                                                (decodedCourse.includes("engineering") &&
                                                    subjects.some(subject => subject.includes("engineering")));
                                        }

                                        return course.name.toLowerCase() === decodedCourse;
                                    })
                                    .map((course, index) => (
                                        <li key={index} className="text-gray-600">
                                            Subject: {course.subject} | Duration: {course.duration} years | Fee: {course.fee}
                                        </li>
                                    ))}

                            </ul>
                        </div>
                    </div>
                    <img
                        src={college.image}
                        alt={`${college.name} Campus`}
                        className="w-40 h-28 object-cover rounded-md"
                    />
                </div>
            ))}
            {colleges.length === 0 && (
                <p className="text-red-500">No colleges found offering "{decodeURIComponent(courseName)}"</p>
            )}
        </div>
    );
};

export default CollegeList;
