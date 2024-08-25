import React, { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between">
                <div>
                    logo
                </div>

                {/* Center Menu */}
                <div className="hidden lg:block">
                    <ul className="flex space-x-8 items-center justify-center text-lg font-medium">
                        <li className="text-white hover:text-gray-300 transition duration-300">
                            <a href="#">Home</a>
                        </li>
                        <li className="text-white hover:text-gray-300 transition duration-300">
                            <a href="#">About</a>
                        </li>
                        <li className="relative group text-white hover:text-gray-300 transition duration-300">
                            <a href="#" className="inline-block">
                                Services
                            </a>
                            <ul className="absolute w-40 left-0 hidden group-hover:block bg-blue-600 mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-white hover:bg-blue-700 px-4 py-2">
                                    <a href="#">Service 1</a>
                                </li>
                                <li className="text-white hover:bg-blue-700 px-4 py-2">
                                    <a href="#">Service 2</a>
                                </li>
                                <li className="text-white hover:bg-blue-700 px-4 py-2">
                                    <a href="#">Service 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white hover:text-gray-300 transition duration-300">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>



                

                {/* Mobile menu items */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:hidden w-full mt-4 transition duration-300 ease-in-out`}
                >
                    <ul className="flex flex-col items-center space-y-4">
                        <li className="text-white hover:text-gray-300 transition duration-300">
                            <a href="#">Home</a>
                        </li>
                        <li className="text-white hover:text-gray-300 transition duration-300">
                            <a href="#">About</a>
                        </li>
                        <li className="relative group text-white hover:text-gray-300 transition duration-300 w-full text-center">
                            <a href="#" className="inline-block">
                                Services
                            </a>
                            <ul className="absolute left-0 w-full hidden group-hover:block bg-blue-600 mt-2 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-white hover:bg-blue-700 px-4 py-2">
                                    <a href="#">Service 1</a>
                                </li>
                                <li className="text-white hover:bg-blue-700 px-4 py-2">
                                    <a href="#">Service 2</a>
                                </li>
                                <li className="text-white hover:bg-blue-700 px-4 py-2">
                                    <a href="#">Service 3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white hover:text-gray-300 transition duration-300">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Left side - Login button */}
                <div className="hidden lg:block text-white">
                    <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
