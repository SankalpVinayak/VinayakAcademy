import React from "react";
import Logo from "../assets/VALogo2.svg";

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      <footer className="bg-[#c7b0d6] rounded-[50px] text-black py-10 px-6 md:px-10 lg:px-16 mb-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo */}
          <div>
            <img src={Logo} alt="VA Logo" className="h-25" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick links</h3>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Confidence msg */}
          <div>
            <h3 className="font-semibold mb-2">Have more confidence in yourself!</h3>
            <p className="text-sm">Info@vinayakacademy@gmail.com</p>
            <p className="text-sm">+91-7985206307</p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm">
              Jhansi, Nagpur, Bareilly,<br />
              Vadodara, Pune
            </p>
          </div>
        </div>

        <p className="text-center text-sm mt-10">
          © Copyright 2025 <span className="font-semibold">Vinayak Academy & Consultancy Centre</span>  All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
