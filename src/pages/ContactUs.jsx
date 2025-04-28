import React from 'react'
import CallCenter from '../assets/cuate.svg'

const ContactUs = () => {
    return (
        <section className="flex flex-col items-center min-h-screen px-4 mb-16">

            {/* Heading */}
            <div className="text-center mt-12 mb-8">
                <h2 className="text-5xl font-extrabold text-purple-800 mb-4 animate-fade-down">
                    Get In Touch
                </h2>
                <p className="text-gray-600 text-lg">
                    We'd love to hear from you! Please fill out the form below and we'll get back to you soon.
                </p>
            </div>

            {/* Form Card */}
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">

                {/* Left Side - Image */}
                <div className="md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-pink-100">
                    <img src={CallCenter} alt="Contact Support" className="max-w-full h-auto object-contain" />
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 flex items-center justify-center p-10 bg-pink-50">
                    <form className="w-full max-w-md space-y-6">

                        <input
                            type="text"
                            placeholder="Name :"
                            className="w-full p-4 rounded-full bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-500 focus:outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Number :"
                            className="w-full p-4 rounded-full bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-500 focus:outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email :"
                            className="w-full p-4 rounded-full bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all placeholder-gray-500 focus:outline-none"
                        />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default ContactUs
