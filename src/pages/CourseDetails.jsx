import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { summary } from 'framer-motion/client';
import { Navigate, useNavigate } from 'react-router-dom';

const courses = {
    schooling: [
        {
            title: 'Secondary',
            fee: '₹40,000',
            duration: '2 Years',
            summary: 'Build strong foundational skills in core academic subjects.',
            careerPath: 'Preparation for Higher Secondary & Competitive Exams',
            desc: 'The Secondary program focuses on foundational academic subjects, encouraging critical thinking and a deep understanding of core concepts. This course is designed to strengthen the base for future academic pursuits. Students are engaged through practical applications and interactive lessons. A supportive environment ensures every learner thrives.'
        },
        {
            title: 'Higher Secondary',
            fee: '₹50,000',
            duration: '2 Years',
            summary: 'Advance academic learning with specialized subjects.',
            careerPath: 'University, Competitive Exams, Career Foundation',
            desc: 'Our Higher Secondary curriculum is tailored to prepare students for university and competitive exams. It builds upon core knowledge while introducing specialized subjects. Emphasis is placed on analytical skills and conceptual clarity. The program fosters independent learning and confidence.'
        },
    ],
    undergraduate: [
        {
            title: 'B.A.',
            fee: '₹37,400 – ₹67,200',
            duration: '3 Years',
            summary: 'Explore humanities and social sciences for holistic development.',
            careerPath: 'Education, Civil Services, Journalism, Writing',
            desc: 'The Bachelor of Arts program offers a broad spectrum of humanities and social science subjects. Students develop strong analytical and communication skills. The curriculum encourages independent thought and creativity. Ideal for those aiming for careers in education, writing, administration, and public service.'
        },
        {
            title: 'B.Com.',
            fee: '₹42,600',
            duration: '3 Years',
            summary: 'Learn commerce fundamentals and financial literacy.',
            careerPath: 'Banking, Finance, Accounting, Business',
            desc: 'Bachelor of Commerce is perfect for students interested in finance, business, and economics. It covers topics like accounting, taxation, and corporate law. The course builds a strong foundation in financial literacy and business management.'
        },
        {
            title: 'B.B.A.',
            fee: '₹64,900 – ₹1,00,600',
            duration: '3 Years',
            summary: 'Business education blending theory and practical knowledge.',
            careerPath: 'Corporate Management, Entrepreneurship, Startups',
            desc: 'Bachelor of Business Administration blends theoretical knowledge with practical business strategies. It nurtures leadership, critical thinking, and decision-making abilities through real-world projects.'
        },
        {
            title: 'B.Sc.',
            fee: '₹88,900',
            duration: '3 Years',
            summary: 'Explore the world of science through rigorous academics.',
            careerPath: 'Research, Analytics, Technical Roles, Teaching',
            desc: 'Bachelor of Science caters to students interested in natural sciences and research. It emphasizes lab work and analytical reasoning in fields like biology, chemistry, and mathematics.'
        },
        {
            title: 'B.C.A.',
            fee: '₹90,900 – ₹1,14,000',
            duration: '3 Years',
            summary: 'Start a career in software development and IT.',
            careerPath: 'Software Developer, Web Developer, IT Support',
            desc: 'Bachelor of Computer Applications focuses on programming, IT systems, and hands-on training in modern technologies to prepare students for tech careers.'
        },
        {
            title: 'B.Lib.',
            fee: '₹37,400 – ₹67,200',
            duration: '1 Year',
            summary: 'Learn library science and information management.',
            careerPath: 'Academic Libraries, Digital Archiving, Cataloguing',
            desc: 'The Bachelor of Library Science trains students in organizing, managing, and disseminating information using digital tools and classification systems.'
        },
    ],
    postgraduate: [
        {
            title: 'M.A.',
            fee: '₹37,400 – ₹67,200',
            duration: '2 Years',
            summary: 'Advanced humanities education for critical thinkers.',
            careerPath: 'Teaching, Civil Services, Research, Content Creation',
            desc: 'Master of Arts enables specialization in literature, history, or political science, enhancing analytical and research skills for academic and professional careers.'
        },
        {
            title: 'M.Com.',
            fee: '₹42,600',
            duration: '2 Years',
            summary: 'Master finance and commerce for business leadership.',
            careerPath: 'Chartered Accountant, CFA, Finance Manager',
            desc: 'Master of Commerce focuses on advanced financial and business concepts including investment planning and accounting systems.'
        },
        {
            title: 'M.B.A.',
            fee: '₹64,900 – ₹1,00,600',
            duration: '2 Years',
            summary: 'Lead in business with practical managerial training.',
            careerPath: 'Corporate Strategy, Marketing, HR, Entrepreneurship',
            desc: 'Master of Business Administration develops leadership through market research, case studies, and business simulations.'
        },
        {
            title: 'M.Sc.',
            fee: '₹88,900',
            duration: '2 Years',
            summary: 'Deepen your scientific expertise through research.',
            careerPath: 'Lab Research, Data Analytics, Scientific Writing',
            desc: 'Master of Science is ideal for research-driven students focusing on innovation, analysis, and specialized lab work.'
        },
        {
            title: 'M.C.A.',
            fee: '₹90,900 – ₹1,14,000',
            duration: '2 Years',
            summary: 'Advanced computer application and system design.',
            careerPath: 'Software Engineer, System Analyst, IT Consultant',
            desc: 'Master of Computer Applications offers deep knowledge of software development and real-world tech challenges through internships and practical projects.'
        },
        {
            title: 'M.Lib.',
            fee: '₹37,400 – ₹67,200',
            duration: '1 Year',
            summary: 'Manage digital and traditional knowledge systems.',
            careerPath: 'Library Management, Information Services',
            desc: 'Master of Library Science focuses on digital information management, data archiving, and modern library tools.'
        },
    ],
    diploma: [
        {
            title: 'Fire & Safety',
            fee: '₹37,400 – ₹67,200',
            duration: '1 Year',
            summary: 'Learn disaster management and emergency response.',
            careerPath: 'Industrial Safety, Public Safety Officer',
            desc: 'The Fire & Safety diploma includes risk assessment, fire prevention systems, and field training for careers in safety and emergency response.'
        },
        {
            title: 'PGDCA',
            fee: '₹42,600',
            duration: '1 Year',
            summary: 'Computer applications for fast-track tech careers.',
            careerPath: 'Web Developer, IT Support, Programmer',
            desc: 'Post Graduate Diploma in Computer Applications includes hands-on programming, data structures, and system management.'
        },
        {
            title: 'PGDBM',
            fee: '₹64,900 – ₹1,00,600',
            duration: '1 Year',
            summary: 'Business diploma for aspiring managers.',
            careerPath: 'Business Analyst, Manager, Entrepreneur',
            desc: 'Post Graduate Diploma in Business Management enhances leadership and business skills through simulations and case studies.'
        },
        {
            title: 'Hosp. Mang.',
            fee: '₹88,900',
            duration: '1 Year',
            summary: 'Manage hospital operations and healthcare logistics.',
            careerPath: 'Hospital Admin, Health Services Coordinator',
            desc: 'Diploma in Hospital Management provides specialized training in patient care and hospital systems with clinical exposure.'
        },
        {
            title: 'Counselling Psycho.',
            fee: '₹90,900 – ₹1,14,000',
            duration: '1 Year',
            summary: 'Train in therapeutic communication and mental health.',
            careerPath: 'Counsellor, School Psychologist, Private Practice',
            desc: 'Diploma in Counselling Psychology includes therapeutic techniques, client interaction, and supervised practice.'
        },
    ]
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CourseCard = ({ title, fee, desc, duration, careerPath, summary }) => {
    const [showDesc, setShowDesc] = useState(false);
    const navigate = useNavigate();

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg transition-all duration-300 w-60 md:w-64 lg:w-72 flex 
            flex-col justify-between p-4 border border-purple-100 relative h-[300px] overflow-hidden"
        >
            <div className="absolute top-2 right-2 bg-purple-100 text-purple-700 text-xs px-2 py-1 
            rounded-full font-medium shadow-sm">
                <FaGraduationCap />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>

                <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Fee:</span>{' '}
                    <span className="text-purple-500 font-semibold">{fee}</span>
                </div>

                <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Duration:</span> {duration}
                </div>

                <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-gray-700">Career Path:</span> {careerPath}
                </div>

                <div className="relative flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!showDesc ? (
                            <motion.p
                                key="summary"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-gray-600 absolute top-0 left-0 right-0"
                            >
                                <span className="font-medium text-gray-700">Summary:</span> {summary}
                            </motion.p>
                        ) : (
                            <motion.div
                                key="description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-sm text-gray-700 italic leading-snug absolute top-0 left-0 right-0 bottom-0 overflow-y-auto pr-1"
                            >
                                {desc}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button
                    className="text-sm text-pink-500 underline hover:text-pink-700 transition mt-2 self-start cursor-pointer"
                    onClick={() => setShowDesc(!showDesc)}
                >
                    {showDesc ? 'Back to Summary' : 'See Description'}
                </button>

                <button
                    className="text-sm text-pink-500 underline hover:text-pink-700 transition mt-2 self-start cursor-pointer"
                    onClick={() => navigate(`/colleges/${encodeURIComponent(title)}`)}
                >
                    See Colleges
                </button>
            </div>
        </motion.div>
    );
};


const CourseSection = ({ title, data }) => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20 px-4 py-12 bg-purple-100 rounded-xl shadow-inner"
    >
        <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold text-purple-800 text-center mb-10 relative 
            inline-block before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-16 
            before:h-1.5 before:bg-pink-400 before:rounded-full"
        >
            {title}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6 items-start">
            {data.map((item, index) => (
                <CourseCard key={index} title={item.title} fee={item.fee} desc={item.desc}
                    summary={item.summary} duration={item.duration} careerPath={item.careerPath} />
            ))}
        </div>
    </motion.section>
);

const CourseDetails = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="px-6 md:px-16 py-16 bg-white min-h-screen"
        >
            <motion.h1
                variants={fadeInUp}
                className="text-center text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-pink-500 mb-16 drop-shadow-md"
            >
                Courses We Offer
            </motion.h1>

            <CourseSection title="Foundation Level Courses" data={courses.schooling} />
            <CourseSection title="Undergraduate Courses" data={courses.undergraduate} />
            <CourseSection title="Postgraduate Courses" data={courses.postgraduate} />
            <CourseSection title="Diploma Courses" data={courses.diploma} />
        </motion.div>
    );
};

export default CourseDetails;
