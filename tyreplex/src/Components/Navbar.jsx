import React, { useState } from 'react';
import logo from '../assets/images/TP-logo.png'

import mobilenav from '../assets/images/mobilenav.webp'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#fff] p-4 shadow-lg">
            <div className="container mx-auto flex justify-between lg:items-center">
                <div>
                    <img src={logo} alt="navbar logo" />
                </div>

                {/* Center Menu */}
                <div className="hidden lg:block">
                    <ul className="flex space-x-8 items-center justify-center text-lg font-medium">
                        <li className="relative group text-[#130F26] text-sm hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block">
                                Car Tyres
                            </a>
                            <ul className="absolute w-40 left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>MRF Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>CEAT Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Goodyear Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Apollo Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Bridgestone Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>JK Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Michelin Tyres</a>
                                </li>
                                <li className="text-blue-600 text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>All Car Tyres</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group text-[#130F26] text-sm hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block">
                                Bike Tyres
                            </a>
                            <ul className="absolute w-40 left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>MRF Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>CEAT Tyres</a>
                                </li>

                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Apollo Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Bridgestone Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>JK Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Michelin Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Pirelli Tyres</a>
                                </li>
                                <li className="text-blue-500 text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>All Car Tyres</a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-[#130F26] text-sm hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/'>Tyre Pressure</a>
                        </li>
                        <li className="text-[#130F26] text-sm hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/'>Commercial Tyres</a>
                        </li>
                        <li className="relative group text-[#130F26] text-sm hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block">
                                Accesssories
                            </a>
                            <ul className="absolute w-40 left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Accesssories</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Batteries</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Alloys Wheels</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative group text-[#130F26] text-sm hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block">
                                More
                            </a>
                            <ul className="absolute w-40 left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>CashBack Offer</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Find Tyre Dealers</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Compare Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Are you a Tyre Dealer</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Wheel Balancing</a>
                                </li>
                                <li className="text-[#130F26] text-sm hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Wheel Alihnment</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>


                {/* Mobile menu items */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:hidden w-full mt-0 py-4 h-full transition duration-300 ease-in-out fixed top-0 right-0 bg-white z-10`}

                >
                    <div className="flex justify-between px-4">

                        <div>
                            <img src={logo} alt="navbar logo" />
                        </div>

                        <div className="lg:hidden flex justify-end ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#130F26] focus:outline-none"
                            >
                                <i class="fa-solid fa-xmark text-2xl"></i>
                            </button>
                        </div>

                    </div>

                    <ul className="flex flex-col items-start space-y-4 my-10 px-10 h-full">
                        <li className="relative  group text-[#130F26] text-lg font-semibold hover:text-gray-300 hover:cursor-pointer transition duration-300 w-full">
                            <a to='/' className="inline-block pb-2">
                                <i class="fa-solid fa-car"></i> Car Tyres
                            </a>
                            <hr />
                            <ul className="absolute w-full left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>MRF Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>CEAT Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Goodyear Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Apollo Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Bridgestone Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>JK Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Michelin Tyres</a>
                                </li>
                                <li className="text-blue-600 text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>All Car Tyres</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative w-full group text-[#130F26] text-lg font-semibold hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block pb-2">
                                <i class="fa-solid fa-motorcycle"></i> Bike Tyres
                            </a>
                            <hr />

                            <ul className="absolute w-full left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>MRF Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>CEAT Tyres</a>
                                </li>

                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Apollo Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Bridgestone Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>JK Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Michelin Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Pirelli Tyres</a>
                                </li>
                                <li className="text-blue-500 text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>All Car Tyres</a>
                                </li>
                            </ul>
                        </li>
                        <li className="text-[#130F26] w-full text-lg font-semibold hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block pb-2"><i class="fa-regular fa-clock"></i> Tyre Pressure</a>
                            <hr />

                        </li>

                        <li className="text-[#130F26] w-full text-lg font-semibold hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block pb-2"> <i class="fa-solid fa-truck"></i> Commercial Tyres</a>
                            <hr />
                        </li>

                        <li className="relative w-full group text-[#130F26] text-lg font-semibold hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block pb-2">
                                <i class="fa-solid fa-truck-fast"></i> Accesssories
                            </a>
                            <hr />

                            <ul className="absolute w-full left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Accesssories</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Batteries</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Alloys Wheels</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative w-full group text-[#130F26] text-lg font-semibold hover:text-gray-300 hover:cursor-pointer transition duration-300">
                            <a to='/' className="inline-block pb-2">
                                <i class="fa-solid fa-ellipsis-vertical"></i> More
                            </a>
                            <hr />

                            <ul className="absolute w-full left-0 hidden group-hover:block bg-white mt-0 py-2 rounded shadow-lg space-y-2 z-10">
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>CashBack Offer</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Find Tyre Dealers</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Compare Tyres</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Are you a Tyre Dealer</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Wheel Balancing</a>
                                </li>
                                <li className="text-[#130F26] text-lg font-semibold hover:bg-gray-100 px-4 py-2">
                                    <a to='/'>Wheel Alihnment</a>
                                </li>
                            </ul>

                        </li>
                        <div className="block w-full text-[#130F26]">
                            <button className="bg-white text-[#130F26] font-semibold pb-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                                <i class="fa-regular fa-user"></i><span className='mx-2'>Login</span>
                            </button>
                            <hr />

                        </div>
                        <img src={mobilenav} alt="monilenavbar image" />


                    </ul>


                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#130F26] focus:outline-none"
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
                <div className="hidden lg:block text-[#130F26]">
                    <button className="bg-white text-[#130F26] font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                        <i class="fa-regular fa-user"></i><span className='mx-2'>Login</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
