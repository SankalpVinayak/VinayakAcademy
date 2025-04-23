import React from "react";
import CourseSlider from "./CourseSlider";
import MBA from '../assets/MBA.svg';
import BCA from '../assets/BCA.svg';

const courses = [
    {
        title: "Master of Business Administration (MBA)",
        description: "A comprehensive program for aspiring leaders, focusing on management, strategy, and innovation.",
        image: MBA,
    },
    {
        title: "Bachelor of Arts (B.A.)",
        description: "Flexible and versatile, this program opens doors to diverse career opportunities.",
        image: "https://upes-production-cvb3e7frghdda0a4.z01.azurefd.net/drupal-data/2024-09/Top-BA-Specializations-for-2024-Choosing-the-Right-Path.jpeg",
    },
    {
        title: "Bachelor of Computer Applications (BCA)",
        description: "Build a strong foundation in IT, software development, and computer systems.",
        image: BCA,
    },
    {
        title: "Bachelor of Commerce (B.Com)",
        description: "Develop knowledge in finance, accounting, taxation, and economics.",
        image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        title: "Bachelor of Science (B.Sc)",
        description: "Enhance your understanding in scientific subjects and practical labs.",
        image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        title: "Bachelor of Education (B.Ed)",
        description: "Prepare to become a skilled and innovative educator in schools or higher education.",
        image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];

const Courses = () => {
    return (
        <section className="px-6 py-8 pb-16 bg-white text-[#B71D8D]">
            <h2 className="text-4xl font-bold text-center mb-4 italic">Popular Courses</h2>
            <p className="text-center mb-12 italic text-lg">
                Explore Our Most Popular Courses, Choose the Right Program to Elevate Your Career
            </p>
            <CourseSlider courses={courses} />
        </section>
    );
};

export default Courses;
