import { React, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import VinayakLogo2 from '../assets/VALogo2.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // Scrolling Down
                setShowNavbar(false);
            } else {
                // Scrolling Up
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);


    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Courses', path: '/courseDetails' },
        { label: 'Collaboration', path: '/collaboration' },
        { label: 'About Us', path: '/aboutUs' },
        { label: 'Enroll', path: '/counselling' },
        { label: 'Universities', path: '/university' },
    ];

    return (
        <nav className={`bg-purple-200 sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' :
            '-translate-y-full'}`}>
            <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <img src={VinayakLogo2} alt="Logo" className="h-15" />

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 text-sm font-semibold">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`transition duration-200 transform hover:scale-105 
                    ${isActive
                                            ? 'text-purple-900 font-bold border-b-2 border-purple-900 pb-1'
                                            : 'text-purple-500 hover:text-purple-700 hover:font-bold'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Login button (desktop) */}
                <Link to="/contactUs">
                    <div className="hidden md:block">
                        <button className="bg-purple-800 text-white lg:px-6 lg:py-2 md:px-4 md:py-1 text-base 
                        md:text-sm rounded-full shadow-md hover:bg-purple-700 transition cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </Link>

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
                    <Link to='contactUs'>
                        <button className="mt-4 w-full bg-purple-800 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700 transition">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar
