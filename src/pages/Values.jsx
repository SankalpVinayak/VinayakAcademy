import { Lightbulb, Layers, Star } from "lucide-react";

const values = [
    {
        title: "Excellence",
        icon: <Star size={48} className="text-yellow-500" />,
        description:
            "Vinayak Academy is unwaveringly committed to excellence in every facet, ensuring the delivery of top-notch education and support to enrich the student experience.",
        color: "from-yellow-100 to-white",
    },
    {
        title: "Flexibility",
        icon: <Layers size={48} className="text-blue-500" />,
        description:
            "Recognising the dynamic nature of modern life, we prioritise flexibility, making education seamlessly adaptable to individual circumstances, fostering accessibility and inclusivity.",
        color: "from-blue-100 to-white",
    },
    {
        title: "Innovation",
        icon: <Lightbulb size={48} className="text-purple-500" />,
        description:
            "Innovation is ingrained in Vinayak Academy's DNA. We embrace cutting-edge ideas, technologies, and methodologies to ensure our students are equipped with relevant skills for the evolving professional landscape.",
        color: "from-purple-100 to-white",
    },
];

const Values = () => {
    return (
        <div className="bg-gradient-to-b from-white to-gray-50 pb-24 px-4 md:px-16 2xl:px-48">
            <div className="text-center mb-20 max-w-6xl 2xl:max-w-6xl mx-auto">
                <h2 className="text-4xl lg:text-5xl 2xl:text-5xl font-extrabold text-[#B71D8D]">
                    Our Core Values
                </h2>
                <p className="mt-4 text-lg lg:text-xl 2xl:text-2xl italic">
                    The values that define our mission and guide every learner’s journey.
                </p>
            </div>

            <div className="grid gap-10 place-content-center sm:grid-cols-2 lg:grid-cols-3 max-w-6xl 2xl:max-w-6xl mx-auto -mt-6">
                {values.map((val, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-6 lg:p-8 2xl:p-10 shadow-md bg-gradient-to-br ${val.color}`}
                    >
                        <div className="flex items-center justify-center mb-3">
                            <div className="bg-white p-4 rounded-full shadow-xl">{val.icon}</div>
                        </div>
                        <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-center text-gray-800 mb-3">
                            {val.title}
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base 2xl:text-lg text-center leading-relaxed">
                            {val.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;
