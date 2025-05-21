import Slider from "react-slick";
import { BadgeCheck } from "lucide-react";

const successData = [
    {
        name: "Sakshi Gupta",
        quote:
            "I was confused about my future after 12th. Thanks to Vinayak Academy, I not only got into my dream college but also discovered my true interests.",
        outcome: "Admitted to Delhi University – Psychology (Hons)",
        image:
            "https://wpvip.edutopia.org/wp-content/uploads/2022/10/shutterstock_1958383675-crop.jpg",
        label: "College Success",
    },
    {
        name: "Rahul Verma",
        quote:
            "The structured coaching and personal feedback helped me crack JEE Advanced with a top rank. Their mentors are genuinely invested.",
        outcome: "IIT Kanpur – Electrical Engineering",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdF93my5cnG_tbvUlY7iXuoHv-p6fbJEL6JA&s",
        label: "Engineering Excellence",
    },
    {
        name: "Nikita Sharma",
        quote:
            "Switching from Science to Design was a big leap, but their career counselling gave me clarity and direction.",
        outcome: "Admitted to NIFT – Fashion Communication",
        image:
            "https://jecrcuniversity.edu.in/wp-content/uploads/2023/02/7-THINGS -TO-MAKE-STUDENTS-LIFE-EASIER.jpg.webp",
        label: "Career Shift",
    },
    {
        name: "Ankit Raj",
        quote:
            "Vinayak’s mentorship helped me balance school and CUET prep, and I cracked it with flying colours.",
        outcome: "CUET Top Ranker – B.A. Political Science, BHU",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4_P-2IT7y_q4sKu_fD5ImdA7gBh6gnQRXw&s",
        label: "CUET Cracker",
    },
    {
        name: "Rhea Thomas",
        quote:
            "The one-on-one guidance and aptitude mapping helped me discover a passion for psychology.",
        outcome: "Selected at Christ University – B.Sc Psychology",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Xm6Q5rJHYZZ-tjTlurFnARKxou22fzewkA&s",
        label: "Career Discovery",
    },
    {
        name: "Yash Mehta",
        quote:
            "Thanks to Vinayak Academy, I overcame self-doubt and got into my dream engineering college.",
        outcome: "VIT Vellore – Computer Science",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVdgzCZC_WMDgbbW_X4n9Par3grYKJAyZjw&s",
        label: "Overcoming Doubts",
    },
];

const groupedSlides = [];
for (let i = 0; i < successData.length; i += 2) {
    groupedSlides.push(successData.slice(i, i + 2));
}

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
};

const SuccessStories = () => {
    return (
        <section className="bg-white py-24 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#B71D8D] text-center mb-6 shadow:md">
                    Inspiring Journeys. Real Results.
                </h2>
                <p className="text-lg italic md:text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                    From career clarity to top university selections, our students have transformed uncertainty into achievement.
                </p>

                <Slider {...settings}>
                    {groupedSlides.map((pair, i) => (
                        <div key={i} className="space-y-20">
                            {pair.map((story, j) => (
                                <div
                                    key={j}
                                    className={`flex flex-col md:flex-row items-center gap-10 ${(i * 2 + j) % 2 === 1 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Image */}
                                    <div className="md:max-w-[1200px] lg:w-[40%] w-full rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="object-cover h-70 w-full hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="md:w-[60%] w-full bg-purple-200 p-8 rounded-2xl shadow-md border-l-4 border-purple-600">
                                        <span className="text-sm uppercase font-semibold text-purple-600 tracking-wider flex items-center gap-2 mb-4">
                                            <BadgeCheck className="text-green-500" size={20} />
                                            {story.label}
                                        </span>
                                        <p className="text-gray-700 text-lg italic mb-6">
                                            "{story.quote}"
                                        </p>
                                        <p className="font-bold text-purple-700 text-xl">
                                            {story.name}
                                        </p>
                                        <p className="font-medium mt-1">
                                            {story.outcome}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default SuccessStories;


