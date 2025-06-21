"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NikeImage from "../assets/images/NikeImage.png";
import AdidasImage from "../assets/images/AdidasImage.png";
import PumaImage from "../assets/images/PumaImage.png";
import NewBalanceImage from "../assets/images/NewBalanceImage.png";

export default function Partner() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const partnerLogos = [
        { src: NikeImage, alt: "Nike" },
        { src: AdidasImage, alt: "Adidas" },
        { src: PumaImage, alt: "Puma" },
        { src: NewBalanceImage, alt: "New Balance" }
    ];

    return (
        <div 
            ref={sectionRef}
            className="py-16 px-6 flex flex-col items-center"
        >
            {/* Judul */}
            <h1 
                className={`text-white text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-17 transition-all duration-1000 ease-out ${
                    isVisible 
                        ? "opacity-100 translate-y-0 scale-100" 
                        : "opacity-0 -translate-y-4 scale-95"
                }`}
            >
                Partner
            </h1>

            {/* Baris Logo */}
            <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20">
                {partnerLogos.map((logo, index) => (
                    <div 
                        key={logo.alt}
                        className={`w-40 h-20 flex items-center justify-center transition-all duration-1000 ease-out ${
                            isVisible 
                                ? "opacity-100 translate-y-0" 
                                : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
                    >
                        <Image 
                            src={logo.src} 
                            alt={logo.alt} 
                            width={170} 
                            className="object-contain" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}