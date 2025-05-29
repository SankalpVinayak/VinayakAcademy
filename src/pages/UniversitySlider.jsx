import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const universities = [
    {
        id: 1,
        name: "Allahabad University",
        image: "https://prayagtourism.com/wp-content/uploads/2023/06/University-of-Allahabad.jpg",
        location: "Prayagraj",
        ranking: "1st",
        fee: "Rs.50,000/year",
        courses: ["Law", "Medicine", "Business"]
    },
    {
        id: 2,
        name: "Amity University",
        image: "https://amity.edu/infocentre/images/higher1.jpg",
        location: "Noida",
        ranking: "2nd",
        fee: "Rs. 48,000/year",
        courses: ["Engineering", "Computer Science", "Design"]
    },
    {
        id: 3,
        name: "Parul University",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAR0OZ1EQCoj6O9DXZUcyI87jhqFs8Hmy6Ng&s",
        location: "Mumbai",
        ranking: "3rd",
        fee: "Rs.49,000/year",
        courses: ["AI", "Robotics", "Physics"]
    }
];

const UniversitySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        arrows: false
    };

    return (
        <div className="py-20 px-6 md:px-20 bg-white">
            <div className="relative mb-16 flex justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 text-center tracking-tight">
                    Featured Universities
                </h2>
                <div className="absolute bottom-0 h-1.5 w-24 bg-purple-500 rounded-full translate-y-6"></div>
            </div>

            <Slider {...settings}>
                {universities.map((uni) => (
                    <motion.div
                        key={uni.id}
                        className="px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative max-w-6xl mx-auto group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl bg-white border border-purple-100 rounded-3xl overflow-hidden shadow-md">
                            {/* Gradient Background Effects */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 opacity-30 rounded-full blur-3xl z-0"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 opacity-30 rounded-full blur-3xl z-0"></div>

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
                                {/* Left Side - Full Image */}
                                <div className="h-80 md:h-full">
                                    <img
                                        src={uni.image}
                                        alt={uni.name}
                                        className="w-full h-full object-cover rounded-l-3xl"
                                    />
                                </div>

                                {/* Right Side - Details */}
                                <div className="p-10 flex flex-col justify-center space-y-4 bg-white">
                                    <h3 className="text-2xl md:text-3xl font-bold text-purple-900 leading-tight">{uni.name}</h3>
                                    <div className="text-gray-700 space-y-2 text-base leading-relaxed">
                                        <div className="flex items-start gap-2">
                                            <span className="text-purple-600 font-medium">📍 Location:</span>
                                            <span>{uni.location}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-purple-600 font-medium">🏆 Ranking:</span>
                                            <span>{uni.ranking}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-purple-600 font-medium">💰 Fee:</span>
                                            <span>{uni.fee}</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row md:items-start gap-2">
                                            <span className="text-purple-600 font-medium whitespace-nowrap">🎓 Courses:</span>
                                            <span className="text-gray-700 break-words max-w-md">{uni.courses.join(', ')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>


    );
};

export default UniversitySlider;

