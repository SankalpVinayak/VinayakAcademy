import React from 'react'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import CallCenter from '../assets/cuate.svg'

const ContactUs = () => {
    return (
        <section className="bg-[#FDFBFF] min-h-screen px-4 py-10 sm:py-14 md:py-16 lg:py-10">
            <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-900 mb-4">
                    Get In Touch With Us
                </h2>
                <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
                    We’re here to help. Contact us via phone, email, or visit our offices in key cities.
                </p>
            </div>

            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden 
                max-w-4xl mx-auto border border-gray-100 -mt-5">

                {/* Left Image */}
                <div className="md:w-1/2 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-8 lg:p-12">
                    <img
                        src={CallCenter}
                        alt="Contact Illustration"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
                    />
                </div>

                {/* Right Info */}
                <div className="md:w-1/2 p-8 sm:p-10 lg:p-12 bg-white space-y-8">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-800 text-2xl">
                            <MdPhone />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="text-lg font-semibold text-gray-800">+91 7985206307</p>
                            <p className="text-lg font-semibold text-gray-800">+91 9140268885</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-800 text-2xl">
                            <MdEmail />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-lg font-semibold text-gray-800">support@vinayakacademy.in</p>
                        </div>
                    </div>

                    {/* Locations */}
                    {/* Locations Section */}
                    <div className="space-y-8">
                        {/* Head Office */}
                        <div>
                            <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                                <MdLocationOn className="text-purple-700 text-xl" /> Head Office
                            </p>
                            <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 font-semibold px-5 py-2 rounded-full text-center text-sm shadow top-5">
                                Jhansi
                            </span>
                        </div>

                        {/* Other Offices */}
                        <div>
                            <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                                <MdLocationOn className="text-purple-700 text-xl" /> Other Office Locations
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {['Noida', 'Bareilly', 'Lucknow'].map(city => (
                                    <span
                                        key={city}
                                        className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 font-medium px-4 py-2 rounded-full text-center text-sm shadow-sm"
                                    >
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
