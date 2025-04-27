import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/VALogo2.svg";

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      <footer className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 rounded-[40px] text-gray-800 py-12 px-6 md:px-10 lg:px-16 mb-8 shadow-xl">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div className="flex flex-col gap-3 items-start">
            <img src={Logo} alt="VA Logo" className="h-16 md:h-20" />
            <p className="text-sm text-gray-700">Empowering students across India.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-purple-700">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-purple-700">Reach Out</h3>
            <div className="flex items-start gap-2 text-sm mb-2">
              <FaEnvelope className="mt-1 text-purple-600" />
              <span>info@vinayakacademy@gmail.com</span>
            </div>
            <div className="flex items-start gap-2 text-sm mb-2">
              <FaPhoneAlt className="mt-1 text-purple-600" />
              <span>+91-7985206307</span>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-purple-700">Address</h3>
            <div className="flex items-start gap-2 text-sm">
              <FaMapMarkerAlt className="mt-1 text-purple-600" />
              <span>
                Jhansi, Nagpur, Bareilly,<br />
                Vadodara, Pune
              </span>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-10 text-gray-600">
          © 2025 <span className="font-semibold text-purple-800">Vinayak Academy & Consultancy Centre</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
