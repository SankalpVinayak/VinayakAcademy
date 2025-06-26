import React from 'react';
import { School, GraduationCap, Book, Briefcase } from 'lucide-react';

export default function CourseInfographic({ onSelectCategory }) {
    const courses = [
        {
            title: "Foundation",
            icon: <School className="text-purple-600 w-8 h-8" />,
            summary: "Academic support from Grade 1 to 12 with personalized learning paths.",
        },
        {
            title: "Undergraduate",
            icon: <GraduationCap className="text-purple-600 w-8 h-8" />,
            summary: "Degree programs across science, commerce & arts with industry-focused curriculum.",
        },
        {
            title: "Postgraduate",
            icon: <Briefcase className="text-purple-600 w-8 h-8" />,
            summary: "Advanced degrees in specialized fields to boost your academic and career growth.",
        },
        {
            title: "Diploma",
            icon: <Book className="text-purple-600 w-8 h-8" />,
            summary: "Short-term skill-building programs designed for immediate employability.",
        },
    ];

    return (
        <div className="bg-white py-12 px-6 md:px-20 -mt-4">
            <h2 className="text-3xl font-bold text-center mb-10">Explore Our Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 cursor-pointer"
                        onClick={() => onSelectCategory(course.title.toLowerCase())}
                    >
                        <div className="mb-4">{course.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
