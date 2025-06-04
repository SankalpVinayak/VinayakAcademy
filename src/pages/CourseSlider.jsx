import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSlider = ({ courses }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {courses.map((course, index) => (
                <div key={index} className="px-4">
                    <div className="bg-[#3C004D] text-[#FAFFD8] rounded-xl overflow-hidden flex flex-col 
                    justify-between h-[400px] shadow-md cursor-pointer">

                        <div className="h-[200px] overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-60 object-cover rounded-t-xl" />
                        </div>

                        <div className="p-4 flex flex-col justify-between flex-1">
                            <h3 className="text-lg font-semibold italic mb-2">{course.title}</h3>
                            <p className="text-sm mb-4 line-clamp-3">{course.description}</p>

                            <Link to='/courseDetails'>
                                <button className="bg-[#FAFFD8] text-[#3C004D] px-4 py-2 
                                rounded-full font-semibold italic cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CourseSlider;
