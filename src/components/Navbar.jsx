import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import VinayakLogo2 from '../assets/VALogo2.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Courses', path: '/courses' },
        { label: 'Collaboration', path: '/' },
        { label: 'Portfolio', path: '/' },
        { label: 'About Us', path: '/' },
    ];

    return (
        <nav className="bg-white">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <img src={VinayakLogo2} alt="Logo" className="h-12" />

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 text-sm font-semibold text-purple-500">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link to={item.path} className="hover:text-purple-700 transition duration-200">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login button (desktop) */}
                <div className="hidden md:block">
                    <button className="bg-purple-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition">
                        Log In
                    </button>
                </div>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-purple-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <ul className="flex flex-col gap-4 text-sm font-semibold text-purple-600">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="block hover:text-purple-800 transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-4 w-full bg-purple-800 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700 transition">
                        Log In
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
