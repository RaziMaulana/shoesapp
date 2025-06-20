"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AppLogo from "../assets/images/AppLogo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <nav className={`shadow-md transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{backgroundColor: "#2D2E30"}}>
            <div className="max-w-7xl mx-auto pb-4 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <Image 
                            src={AppLogo} 
                            alt="Logo" 
                            width={120} 
                            height={40}
                            className="h-auto"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden mt-4 md:flex space-x-4 items-center ml-auto">
                        <a href="#" className="text-white hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white">
                            HOME
                        </a>
                        <a href="#" className="text-white hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white">
                            PRODUCT
                        </a>
                        <a href="#" className="text-white hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white">
                            PARTNER
                        </a>
                        <a href="#" className="text-white hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white">
                            COMMENT
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className={`md:hidden transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <button 
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black p-2 rounded-md transition-all duration-200 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                // Close icon
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700 mt-2">
                        <a 
                            href="#" 
                            className="text-white hover:text-blue-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:translate-x-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a 
                            href="#" 
                            className="text-white hover:text-blue-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:translate-x-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            PRODUCT
                        </a>
                        <a 
                            href="#" 
                            className="text-white hover:text-blue-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:translate-x-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            PARTNER
                        </a>
                        <a 
                            href="#" 
                            className="text-white hover:text-blue-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:translate-x-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            COMMENT
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}