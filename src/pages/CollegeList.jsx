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

                const filtered = data.filter(college => {
                    return college.courses.some(course => {
                        if (course.name.toLowerCase() === "diploma") {
                            // Match against any subject in slash-separated list
                            const subjects = course.subject.split('/').map(s => s.trim().toLowerCase());
                            return subjects.includes(decodedCourse);
                        } else {
                            // Default match by course name
                            return course.name.toLowerCase() === decodedCourse;
                        }
                    });
                });

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
                        <h3 className="text-xl font-semibold text-purple-800">{college.name}</h3>
                        <p className="text-gray-600">{college.location}</p>
                        <div className="mt-2">
                            <h4 className="font-semibold text-purple-800">Courses:</h4>
                            <ul className="list-disc list-inside">
                                {college.courses
                                    .filter(course => {
                                        const decodedCourse = decodeURIComponent(courseName).toLowerCase();

                                        if (course.name.toLowerCase() === "diploma") {
                                            // Handle special case for Diploma — check subject(s)
                                            const subjects = course.subject.split('/').map(s => s.trim().toLowerCase());
                                            return subjects.includes(decodedCourse);
                                        }

                                        // Regular case: match course name
                                        return course.name.toLowerCase() === decodedCourse;
                                    })
                                    .map((course, index) => (
                                        <li key={index} className='text-gray-600'>
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
