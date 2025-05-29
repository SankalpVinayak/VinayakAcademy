import React, { useState } from 'react';
import uniData from '../data/universities.json'

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
        fee: '$45,000/year',
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

    const clearWarning = () => {
        setWarning('')
    }

    const selectedUnis = uniData.filter((uni) => selected.includes(uni.id));

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-16">
            <h2 className="text-5xl font-extrabold text-center text-purple-800 mb-10 tracking-tight">
                Compare Top Universities
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {uniData.map((uni) => (
                    <button
                        key={uni.id}
                        onClick={() => toggleSelection(uni.id)}
                        className={`px-5 py-2 rounded-full shadow-md text-sm font-semibold transition hover:scale-105 ${selected.includes(uni.id)
                            ? 'bg-purple-700 text-white'
                            : 'bg-white text-purple-800 border border-purple-300 hover:bg-purple-100'
                            }`}
                    >
                        {uni.name}
                    </button>
                ))}
            </div>

            {warning && (
                <div className="text-red-600 text-center font-semibold mb-4 animate-pulse">
                    {warning}
                    <button onClick={clearWarning} className="ml-4 bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-3 py-1 
                     rounded-full shadow-sm transition duration-300 inline-block">
                        Dismiss
                    </button>
                </div>
            )}

            {selectedUnis.length > 0 ? (
                <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 justify-center">
                    {selectedUnis.map((uni) => (
                        <div
                            key={uni.id}
                            className="bg-white/60 backdrop-blur-md border border-purple-100 rounded-3xl shadow-xl w-full max-w-sm p-6 transition-transform hover:scale-105"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src={uni.image}
                                    alt={uni.name}
                                    className="h-16 w-16 object-contain"
                                />
                                <h3 className="text-xl font-bold text-purple-900 text-center">{uni.name}</h3>
                                <div className="w-full text-sm text-gray-700 space-y-2 mt-4">
                                    {/* <div className="flex justify-between font-medium">
                                        <span>Ranking:</span>
                                        <span>{uni.ranking}</span>
                                    </div> */}
                                    <div className="flex justify-between">
                                        <span>Location:</span>
                                        <span>{uni.location}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Fee:</span>
                                        <span>{uni.fee}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Courses:</span>
                                        <ul className="list-disc list-inside text-gray-600">
                                            {uni.courses.map((course, idx) => (
                                                <li key={idx}>{course}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg mt-10">
                    Select up to <span className="font-bold text-purple-600">3</span> universities to begin comparison.
                </p>
            )}
        </div>

    );
};

export default UniversityComparison;