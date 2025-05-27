import React, { useState } from 'react';

const universities = [
    {
        id: 1,
        name: 'Harvard University',
        ranking: '1st',
        location: 'USA',
        courses: ['MBA', 'CS', 'Economics'],
        fee: '$60,000/year',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxa1ffehMUWPJRRkYA01nrGjqrnFgaBWZqg&s',
    },
    {
        id: 2,
        name: 'Oxford University',
        ranking: '2nd',
        location: 'UK',
        courses: ['Law', 'CS', 'Philosophy'],
        fee: '£50,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/613px-Oxford-University-Circlet.svg.png',
    },
    {
        id: 3,
        name: 'Stanford University',
        ranking: '3rd',
        location: 'USA',
        courses: ['Engineering', 'Business', 'Medicine'],
        fee: '$55,000/year',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHMT7C6XJHzICYwZ9AdgNmli-SvPiII_F4w&s',
    },
    {
        id: 4,
        name: 'MIT',
        ranking: '4th',
        location: 'USA',
        courses: ['CS', 'AI', 'Physics'],
        fee: '$53,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
    },
    {
        id: 5,
        name: 'Cambridge University',
        ranking: '5th',
        location: 'UK',
        courses: ['Mathematics', 'Engineering', 'Literature'],
        fee: '£48,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/8c/University_of_Cambridge_coat_of_arms.svg',
    },
    {
        id: 6,
        name: 'Yale University',
        ranking: '6th',
        location: 'USA',
        courses: ['Law', 'Medicine', 'History'],
        fee: '$58,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Yale_University_Shield_1.svg',
    },
    {
        id: 7,
        name: 'Princeton University',
        ranking: '7th',
        location: 'USA',
        courses: ['Physics', 'Math', 'Philosophy'],
        fee: '$56,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/71/Princeton_seal.svg',
    },
    {
        id: 8,
        name: 'Columbia University',
        ranking: '8th',
        location: 'USA',
        courses: ['Journalism', 'Law', 'Business'],
        fee: '$57,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Columbia_University_seal.svg',
    },
    {
        id: 9,
        name: 'University of Chicago',
        ranking: '9th',
        location: 'USA',
        courses: ['Economics', 'Sociology', 'Statistics'],
        fee: '$54,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e7/University_of_Chicago_shield.svg',
    },
    {
        id: 10,
        name: 'University of Toronto',
        ranking: '10th',
        location: 'Canada',
        courses: ['CS', 'Biology', 'Chemistry'],
        fee: 'CA$45,000/year',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/45/University_of_Toronto_coat_of_arms.svg',
    },
];

const UniversityComparison = () => {
    const [selected, setSelected] = useState([]);
    const [warning, setWarning] = useState('');

    const toggleSelection = (id) => {
        setWarning('');
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else if (selected.length >= 3) {
            setWarning('You can compare a maximum of 3 universities at a time.');
        } else {
            setSelected([...selected, id]);
        }
    };

    const selectedUnis = universities.filter((uni) => selected.includes(uni.id));

    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-purple-100 py-20 px-6 md:px-20">
            <h2 className="text-5xl font-bold text-center text-purple-700 mb-14 tracking-tight drop-shadow-sm">
                Compare Top Universities
            </h2>

            {warning && (
                <p className="text-red-600 text-center font-medium mb-6 animate-pulse">
                    {warning}
                </p>
            )}

            {/* University Selection Chips */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
                {universities.map((uni) => (
                    <label
                        key={uni.id}
                        className={`transition-all duration-300 rounded-full px-6 py-2 shadow-sm text-sm font-medium cursor-pointer border ${selected.includes(uni.id)
                            ? 'bg-purple-100 text-purple-800 border-purple-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            } hover:scale-105`}
                    >
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={selected.includes(uni.id)}
                            onChange={() => toggleSelection(uni.id)}
                        />
                        {uni.name}
                    </label>
                ))}
            </div>

            {/* Comparison Table */}
            {selectedUnis.length > 0 ? (
                <div className="overflow-x-auto rounded-xl shadow-xl border border-gray-200 bg-white transition-all">
                    <table className="min-w-full table-auto text-left">
                        <thead className="bg-purple-700 text-white text-base">
                            <tr>
                                <th className="p-5 w-52 font-semibold">Attribute</th>
                                {selectedUnis.map((uni) => (
                                    <th key={uni.id} className="p-5 font-semibold text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <img
                                                src={uni.image}
                                                alt={uni.name}
                                                className="h-10 w-10 object-contain rounded-full border border-white shadow-md"
                                            />
                                            <span className="text-sm font-medium">{uni.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-sm">
                            <tr className="bg-gray-50">
                                <td className="p-4 font-medium">Ranking</td>
                                {selectedUnis.map((uni) => (
                                    <td key={uni.id} className="p-4 text-center">{uni.ranking}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-medium bg-gray-50">Location</td>
                                {selectedUnis.map((uni) => (
                                    <td key={uni.id} className="p-4 text-center">{uni.location}</td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-medium bg-gray-50">Courses Offered</td>
                                {selectedUnis.map((uni) => (
                                    <td key={uni.id} className="p-4 text-center whitespace-pre-wrap">
                                        {uni.courses.join(', ')}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 font-medium bg-gray-50">Annual Fee</td>
                                {selectedUnis.map((uni) => (
                                    <td key={uni.id} className="p-4 text-center text-purple-700 font-semibold">
                                        {uni.fee}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg mt-12 italic">
                    Select up to <span className="font-bold text-purple-600">3</span> universities to compare.
                </p>
            )}
        </div>

    );
};

export default UniversityComparison;