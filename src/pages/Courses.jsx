import React from "react";
import CourseSlider from "./CourseSlider";
import MBA from '../assets/MBA.svg';
import BCA from '../assets/BCA.svg';
import BA from '../assets/BA.jpeg';
import Bcom from '../assets/B.com.jpg';
import BTech from '../assets/B.Tech.webp';
import BSc from '../assets/B.Sc.webp';

const courses = [
    {
        title: "Master of Business Administration (MBA)",
        description: "A comprehensive program for aspiring leaders, focusing on management, strategy, and innovation.",
        image: MBA,
    },
    {
        title: "Bachelor of Arts (B.A.)",
        description: "Flexible and versatile, this program opens doors to diverse career opportunities.",
        image: BA,
    },
    {
        title: "Bachelor of Computer Applications (BCA)",
        description: "Build a strong foundation in IT, software development, and computer systems.",
        image: BCA,
    },
    {
        title: "Bachelor of Commerce (B.Com)",
        description: "Develop knowledge in finance, accounting, taxation, and economics.",
        image: Bcom,
    },
    {
        title: "Bachelor of Science (B.Sc)",
        description: "Enhance your understanding in scientific subjects and practical labs.",
        image: BSc,
    },
    {
        title: "Bachelor of Technology (B.Tech.)",
        description: "Develop strong engineering skills with hands-on training in various technology domains.",
        image: BTech,
    },
];

const Courses = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 pb-16 max-w-[1200px] mx-auto bg-white text-[#B71D8D] mb-16">

            <h2 className="text-4xl lg:text-5xl 2xl:text-5xl font-extrabold text-center text-[#B71D8D]">
                Popular Courses
            </h2>

            <p className="text-base font-semibold sm:text-lg text-center mb-10 mt-4 sm:mb-12 italic transition-all duration-300 max-w-3xl mx-auto">
                Explore Our Most Popular Courses, Choose the Right Program to Elevate Your Career
            </p>

            <CourseSlider courses={courses} />

        </section>
    );
};

export default Courses;
