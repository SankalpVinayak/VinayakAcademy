import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';

const courses = {
    schooling: [
        { title: 'Secondary', fee: '40000' },
        { title: 'Higher Secondary', fee: '50000' }
    ],
    undergraduate: [
        { title: 'B.A.', fee: '37,400 to 67,200' },
        { title: 'B.Com.', fee: '42,600' },
        { title: 'B.B.A.', fee: '64,900 to 100,600' },
        { title: 'B.Sc.', fee: '88,900' },
        { title: 'B.C.A.', fee: '90,900 to 1,14,000' },
        { title: 'B.Lib.', fee: '37,400 to 67,200' },
        { title: 'B.Com.', fee: '42,600' },
    ],
    postgraduate: [
        { title: 'M.A.', fee: '37,400 to 67,200' },
        { title: 'M.Com.', fee: '42,600' },
        { title: 'M.B.A.', fee: '64,900 to 100,600' },
        { title: 'M.Sc.', fee: '88,900' },
        { title: 'M.C.A.', fee: '90,900 to 1,14,000' },
        { title: 'M.Lib.', fee: '37,400 to 67,200' },
        { title: 'M.Com.', fee: '42,600' },
    ],
    diploma: [
        { title: 'Fire & Safety', fee: '37,400 to 67,200' },
        { title: 'PGDCA', fee: '42,600' },
        { title: 'PGDBM', fee: '64,900 to 100,600' },
        { title: 'Hosp. Mang.', fee: '88,900' },
        { title: 'Counselling Psycho.', fee: '90,900 to 1,14,000' },
    ],
};

const CourseCard = ({ title, fee }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-44 md:w-52 lg:w-56 h-56 flex flex-col justify-between p-4 border border-purple-100 relative group">
        <div className="absolute top-2 right-2 bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium shadow-sm">
            <FaGraduationCap />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-purple-700">{title}</h3>
        </div>
        <div className="mt-auto">
            <p className="text-sm text-gray-600">Fee:</p>
            <p className="text-base font-bold text-purple-500">{fee}</p>
        </div>
    </div>
);

const CourseSection = ({ title, data }) => (
    <section className="mb-20 px-4 py-12 bg-purple-100 rounded-xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800 text-center mb-10 relative inline-block before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1.5 before:bg-pink-400 before:rounded-full">
            {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
            {data.map((item, index) => (
                <CourseCard key={index} title={item.title} fee={item.fee} />
            ))}
        </div>
    </section>
);

const CourseDetails = () => {
    return (
        <div className="px-6 md:px-16 py-16 bg-gradient-to-br from-white via-purple-50 to-white min-h-screen">
            <h1 className="text-center text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-16 drop-shadow-md">
                Courses We Offer
            </h1>

            <CourseSection title="Foundation Level Courses" data={courses.schooling} />
            <CourseSection title="Undergraduate Courses" data={courses.undergraduate} />
            <CourseSection title="Postgraduate Courses" data={courses.postgraduate} />
            <CourseSection title="Diploma Courses" data={courses.diploma} />
        </div>
    );
};

export default CourseDetails
