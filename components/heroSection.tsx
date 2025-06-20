'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroSectionImage from "../assets/images/HeroSectionImage.png";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animasi setelah komponen dimount
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // Delay kecil untuk memastikan DOM sudah siap

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="text-white">
            <div className="max-w-7xl ml-auto mr-auto px-15 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Text Content */}
                <div className={`space-y-8 transition-all duration-1000 ease-out ${
                    isLoaded 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-10'
                }`}>
                    <h1 className={`text-5xl font-semibold md:text-5xl leading-tight uppercase tracking-widest transition-all duration-1200 ease-out delay-200 ${
                        isLoaded 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                    }`}>
                        Find the best fit<br />
                        that you could<br />
                        have
                    </h1>

                    <button className={`px-8 py-3 text-white border border-white rounded-lg tracking-widest shadow-[8px_8px_10px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black hover:border-black transition-all duration-300 ${
                        isLoaded 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-4 scale-95'
                    } delay-100`}>
                        EXPLORE
                    </button>
                </div>

                {/* Image - Diperbesar */}
                <div className={`flex justify-center items-center transition-all duration-1000 ease-out delay-300 ${
                    isLoaded 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 translate-x-10 scale-90'
                }`}>
                    <Image
                        src={HeroSectionImage}
                        width={1200}
                        alt="Hero Shoes"
                        className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}