import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const courses = {
    schooling: [
        { title: 'Secondary', fee: '40000', desc: 'The Secondary program focuses on foundational academic subjects, encouraging critical thinking and a deep understanding of core concepts. This course is designed to strengthen the base for future academic pursuits. Students are engaged through practical applications and interactive lessons. A supportive environment ensures every learner thrives.' },
        { title: 'Higher Secondary', fee: '50000', desc: 'Our Higher Secondary curriculum is tailored to prepare students for university and competitive exams. It builds upon core knowledge while introducing specialized subjects. Emphasis is placed on analytical skills and conceptual clarity. The program fosters independent learning and confidence.' },
    ],
    undergraduate: [
        { title: 'B.A.', fee: '37,400 to 67,200', desc: 'The Bachelor of Arts program offers a broad spectrum of humanities and social science subjects. Students develop strong analytical and communication skills. The curriculum encourages independent thought and creativity. Ideal for those aiming for careers in education, writing, administration, and public service.' },
        { title: 'B.Com.', fee: '42,600', desc: 'Bachelor of Commerce is perfect for students interested in finance, business, and economics. It covers topics like accounting, taxation, and corporate law. The course builds a strong foundation in financial literacy and business management. Graduates are well-equipped for careers in banking, commerce, or entrepreneurship.' },
        { title: 'B.B.A.', fee: '64,900 to 100,600', desc: 'Bachelor of Business Administration blends theoretical knowledge with practical business strategies. It nurtures leadership, critical thinking, and decision-making abilities. The curriculum includes case studies, presentations, and real-world projects. Graduates are ready for dynamic roles in corporate and startup environments.' },
        { title: 'B.Sc.', fee: '88,900', desc: 'Bachelor of Science caters to students interested in natural sciences and research. It emphasizes rigorous lab work, experimentation, and analytical reasoning. The curriculum is tailored to build a strong base in biology, chemistry, physics, or mathematics. This course is a gateway to research and technical careers.' },
        { title: 'B.C.A.', fee: '90,900 to 1,14,000', desc: 'Bachelor of Computer Applications focuses on software development, programming, and IT systems. Students get hands-on training in modern technologies and coding languages. The course prepares them for careers in tech companies and startups. A strong blend of theory and practice ensures industry readiness.' },
        { title: 'B.Lib.', fee: '37,400 to 67,200', desc: 'The Bachelor of Library Science trains students in the organization, management, and dissemination of information. This course is ideal for those who love books and research. Students gain skills in digital archiving, library automation, and classification systems. Graduates are equipped for academic and public library careers.' },
    ],
    postgraduate: [
        { title: 'M.A.', fee: '37,400 to 67,200', desc: 'Master of Arts enables specialization in fields like literature, history, and political science. It enhances analytical, critical thinking, and research skills. The course is rich in academic discourse and written expression. Graduates can pursue careers in teaching, research, or civil services.' },
        { title: 'M.Com.', fee: '42,600', desc: 'Master of Commerce focuses on advanced business and financial concepts. It delves into financial strategy, investment planning, and accounting systems. Ideal for students aiming for senior roles in finance or academics. The program also lays the groundwork for professional certifications like CA or CFA.' },
        { title: 'M.B.A.', fee: '64,900 to 100,600', desc: 'Master of Business Administration is designed to develop leaders and business strategists. The program includes case studies, market research, and management simulations. Students are trained in marketing, HR, finance, and operations. This versatile degree opens doors to corporate leadership and entrepreneurship.' },
        { title: 'M.Sc.', fee: '88,900', desc: 'Master of Science is ideal for those pursuing careers in research, analytics, and scientific innovation. It includes advanced labs, fieldwork, and thesis writing. Students engage in complex problem-solving and in-depth analysis. The course is a gateway to both academia and industry roles.' },
        { title: 'M.C.A.', fee: '90,900 to 1,14,000', desc: 'Master of Computer Applications offers deep insights into software development, systems management, and application design. It is geared toward students aiming for leadership roles in tech. The curriculum includes internships and real-world tech challenges. Graduates are highly sought after in the IT industry.' },
        { title: 'M.Lib.', fee: '37,400 to 67,200', desc: 'Master of Library Science delves into digital information management, data archiving, and library technology systems. The course encourages efficient knowledge organization and retrieval. Ideal for those aiming to manage academic, digital, or research libraries. It equips students with modern tools for information services.' },
    ],
    diploma: [
        { title: 'Fire & Safety', fee: '37,400 to 67,200', desc: 'The Fire & Safety diploma provides technical and practical knowledge in disaster management, risk assessment, and safety protocols. Students learn how to respond to emergencies and implement fire prevention systems. Ideal for careers in industrial safety and public service. The program includes field training and certifications.' },
        { title: 'PGDCA', fee: '42,600', desc: 'Post Graduate Diploma in Computer Applications is tailored for those seeking careers in IT and software development. It includes hands-on programming, data structures, and system management. A fast-track to roles in web development and support. Graduates gain both coding proficiency and problem-solving skills.' },
        { title: 'PGDBM', fee: '64,900 to 100,600', desc: 'Post Graduate Diploma in Business Management sharpens leadership and decision-making abilities. The course covers core business disciplines with real-world applications. Great for aspiring entrepreneurs and mid-career professionals. Case studies and business simulations add practical learning to the program.' },
        { title: 'Hosp. Mang.', fee: '88,900', desc: 'Diploma in Hospital Management offers specialized training in healthcare administration, patient care logistics, and hospital operations. Students gain skills to manage hospital departments and ensure quality healthcare delivery. The curriculum blends theory with clinical exposure. Excellent for roles in private and public health sectors.' },
        { title: 'Counselling Psycho.', fee: '90,900 to 1,14,000', desc: 'Diploma in Counselling Psychology offers training in mental health support, therapeutic techniques, and client interaction. Ideal for those passionate about helping others. The course includes supervised practice and ethical guidance. Graduates can work in schools, clinics, or private practice.' },
    ],
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CourseCard = ({ title, fee, desc }) => {
    const [showDesc, setShowDesc] = useState(false);

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg transition-all duration-0 w-60 md:w-64 lg:w-72 flex 
            flex-col justify-between p-4 border border-purple-100 relative"
        >
            <div className="absolute top-2 right-2 bg-purple-100 text-purple-700 text-xs px-2 py-1 
            rounded-full font-medium shadow-sm">
                <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">Fee:</p>
            <p className="text-base font-bold text-purple-500 mb-2">{fee}</p>
            <button
                className="text-sm text-pink-500 underline hover:text-pink-700 transition mb-2 cursor-pointer"
                onClick={() => setShowDesc(!showDesc)}
            >
                {showDesc ? 'Hide Description' : 'See Description'}
            </button>
            <AnimatePresence>
                {showDesc && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.03, ease: "easeInOut" }}
                        className="mt-2 text-sm text-gray-700 italic leading-snug max-h-60 overflow-auto"
                    >
                        {desc}
                    </motion.div>
                )}
            </AnimatePresence>
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
                <CourseCard key={index} title={item.title} fee={item.fee} desc={item.desc} />           
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
            className="px-6 md:px-16 py-16 bg-gradient-to-br from-white via-purple-50 to-white min-h-screen"
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
