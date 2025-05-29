// import React from 'react'
// import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
// import CallCenter from '../assets/cuate.svg'

// const ContactUs = () => {
//     return (
//         <section className="bg-[#FDFBFF] min-h-screen px-4 py-10 sm:py-14 md:py-16 lg:py-10">
//             <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-900 mb-4">
//                     Get In Touch With Us
//                 </h2>
//                 <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
//                     We’re here to help. Contact us via phone, email, or visit our offices in key cities.
//                 </p>
//             </div>

//             <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden 
//                 max-w-4xl mx-auto border border-gray-100 -mt-5">

//                 {/* Left Image */}
//                 <div className="md:w-1/2 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-8 lg:p-12">
//                     <img
//                         src={CallCenter}
//                         alt="Contact Illustration"
//                         className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
//                     />
//                 </div>

//                 {/* Right Info */}
//                 <div className="md:w-1/2 p-8 sm:p-10 lg:p-12 bg-white space-y-8">
//                     {/* Phone */}
//                     <div className="flex items-start gap-4">
//                         <div className="bg-purple-100 p-3 rounded-full text-purple-800 text-2xl">
//                             <MdPhone />
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-500">Phone</p>
//                             <p className="text-lg font-semibold text-gray-800">+91 7985206307</p>
//                             <p className="text-lg font-semibold text-gray-800">+91 9140268885</p>
//                         </div>
//                     </div>

//                     {/* Email */}
//                     <div className="flex items-start gap-4">
//                         <div className="bg-purple-100 p-3 rounded-full text-purple-800 text-2xl">
//                             <MdEmail />
//                         </div>
//                         <div>
//                             <p className="text-sm text-gray-500">Email</p>
//                             <p className="text-lg font-semibold text-gray-800">support@vinayakacademy.in</p>
//                         </div>
//                     </div>

//                     {/* Locations */}
//                     {/* Locations Section */}
//                     <div className="space-y-8">
//                         {/* Head Office */}
//                         <div>
//                             <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
//                                 <MdLocationOn className="text-purple-700 text-xl" /> Head Office
//                             </p>
//                             <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-purple-900 font-semibold px-5 py-2 rounded-full text-center text-sm shadow top-5">
//                                 Jhansi
//                             </span>
//                         </div>

//                         {/* Other Offices */}
//                         <div>
//                             <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
//                                 <MdLocationOn className="text-purple-700 text-xl" /> Other Office Locations
//                             </p>
//                             <div className="grid grid-cols-2 gap-3">
//                                 {['Noida', 'Bareilly', 'Lucknow'].map(city => (
//                                     <span
//                                         key={city}
//                                         className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 font-medium px-4 py-2 rounded-full text-center text-sm shadow-sm"
//                                     >
//                                         {city}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ContactUs

import React from 'react'
import { Mail, PhoneCall, MapPin, Building2 } from 'lucide-react'
import contactImage from '../assets/cuate.svg' // Add your illustration here
import logo from '../assets/VALogo2.svg'

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-white py-8 px-6 md:px-35">
            {/* Header */}
            <div className="text-center mb-16">
                <img src={logo} alt="Vinayak Academy Logo" className="mx-auto h-20 mb-4" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 tracking-tight">
                    Get in Touch with Us
                </h2>
            </div>

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                {/* Contact Info Section */}
                <div className="flex flex-col gap-6">
                    {/* Email */}
                    <div className="flex items-start gap-4 bg-gradient-to-br from-white via-purple-50 to-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-purple-800">Email</h3>
                            <p className="text-gray-700">info@vinayakacademy.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 bg-gradient-to-br from-white via-purple-50 to-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                            <PhoneCall className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-purple-800">Phone</h3>
                            <p className="text-gray-700">+91-7985206307</p>
                        </div>
                    </div>


                    {/* Branch Offices */}
                    <div className="flex items-start gap-4 bg-gradient-to-br from-white via-purple-50 to-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                            <Building2 className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-purple-800 mb-2">Branch Offices</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-1" />
                                    <span className="font-semibold text-purple-900">Jhansi (Head Office)</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-1" />
                                    <span>Nagpur</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-1" />
                                    <span>Bareily</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-1" />
                                    <span>Vadodra</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-1" />
                                    <span>Pune</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


                {/* Illustration Section */}
                <div className="relative bg-purple-100/60 backdrop-blur-md rounded-3xl p-8 shadow-lg flex items-center justify-center">
                    {/* Decorative Bubble */}
                    <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 opacity-10">
                        <svg width="120" height="120" fill="none">
                            <circle cx="60" cy="60" r="60" fill="#7C3AED" />
                        </svg>
                    </div>

                    {/* Illustration */}
                    <img
                        src={contactImage}
                        alt="Contact Illustration"
                        className="max-w-full max-h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUs

