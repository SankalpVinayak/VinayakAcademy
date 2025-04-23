import React from 'react'
import { Link } from 'react-router-dom'
import VinayakLogo2 from '../assets/Group 189.svg'

const Navbar = () => {

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Courses', path: '/courses' },
        { label: 'Collaboration', path: '/' },
        { label: 'Portfolio', path: '/' },
        { label: 'About Us', path: '/' },
    ];

    return (
        <div>
            <nav className="flex justify-between items-center px-8 py-4 bg-auto">
                <img src={VinayakLogo2} alt="Logo" className="h-18" />
                <ul className="flex gap-8 text-sm font-semibold text-purple-500">
                    {navItems.map((item) => (
                        <li key={item.path} className="hover:text-purple-700 cursor-pointer">
                            <Link
                                to={item.path}
                                className="hover:text-purple-700 transition duration-200"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="bg-purple-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition">
                    Log In
                </button>
            </nav>
        </div>
    )
}

export default Navbar
