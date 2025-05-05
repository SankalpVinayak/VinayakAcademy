import React from "react";
import { Link } from "react-router-dom"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/VALogo2.svg";

const Footer = () => {

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/aboutUs" },
    { label: "Courses", path: "/courseDetails" },
    { label: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      <footer className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 rounded-[40px] text-gray-800 py-12 px-6 md:px-10 lg:px-16 mb-8 shadow-2xl">

        {/* Main Footer Grid */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <img src={Logo} alt="Vinayak Academy Logo" className="h-16 md:h-20" />
            <p className="text-sm text-gray-700 leading-relaxed">
              Empowering students across India to achieve their dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-purple-700 hover:underline transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Reach Out</h3>

              <div className="flex items-center gap-3 text-sm text-gray-700 hover:text-purple-700 transition-all">
                <FaEnvelope className="text-purple-600 text-lg" />
                <span className="break-all">info@vinayakacademy@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700 hover:text-purple-700 transition-all">
                <FaPhoneAlt className="text-purple-600 text-lg" />
                <span>+91-7985206307</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Address</h3>

            <div className="flex items-start gap-3 text-sm text-gray-700 hover:text-purple-700 transition-all">
              <FaMapMarkerAlt className="text-purple-600 text-lg" />
              <span className="leading-relaxed">
                Jhansi, Nagpur, Bareilly,<br />
                Vadodara, Pune
              </span>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-purple-300 mt-12 pt-6">
          <p className="text-center text-xs md:text-sm text-gray-600">
            © 2025 <span className="font-semibold text-purple-800">Vinayak Academy & Consultancy Centre</span>. All rights reserved.
          </p>
        </div>

      </footer>
    </div>

  );
};

export default Footer;
