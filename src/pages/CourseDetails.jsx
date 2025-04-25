import React from 'react'

const courses = {
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
    <div className="bg-purple-200 rounded-md shadow-md w-40 h-48 flex flex-col justify-between p-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs">Fee = {fee}</p>
    </div>
);

const CourseSection = ({ title, data }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {data.map((item, index) => (
                <CourseCard key={index} title={item.title} fee={item.fee} />
            ))}
        </div>
    </section>
);

const CourseDetails = () => {
    return (
        <div className="px-6 md:px-16 py-12">
            <h1 className="text-center text-6xl md:text-7xl font-extrabold text-purple-400 stroke-text mb-12">Courses</h1>

            <CourseSection title="Under-Graduate Courses" data={courses.undergraduate} />
            <CourseSection title="Post-Graduate Courses" data={courses.postgraduate} />
            <CourseSection title="Diploma Courses" data={courses.diploma} />
        </div>
    )
}

export default CourseDetails
