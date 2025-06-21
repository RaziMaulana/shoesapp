"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ClosingImage1 from "../assets/images/ClosingImage1.png";
import ClosingImage2 from "../assets/images/ClosingImage2.png";
import ClosingImage3 from "../assets/images/ClosingImage3.png";

export default function Closing() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    const images = [
        { src: ClosingImage1, alt: "Professional Shoes 1" },
        { src: ClosingImage2, alt: "Professional Shoes 2" },
        { src: ClosingImage3, alt: "Professional Shoes 3" }
    ];

    // Image carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Intersection Observer untuk animasi scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2, // Trigger ketika 20% dari section terlihat
                rootMargin: '0px 0px -50px 0px' // Sedikit offset dari bottom
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

    return (
        <div 
            ref={sectionRef}
            className={`px-10 md:px-22 py-16 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl transition-all duration-1000 ease-out ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
            }`}
        >
            {/* Teks dengan animasi stagger */}
            <div className={`text-white max-w-md transition-all duration-1000 ease-out ${
                isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
            }`}
            style={{
                transitionDelay: isVisible ? '200ms' : '0ms'
            }}>
                <h1 className={`text-5xl font-extrabold uppercase leading-tight tracking-widest mb-8 transition-all duration-1000 ease-out ${
                    isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                }`}
                style={{
                    transitionDelay: isVisible ? '400ms' : '0ms'
                }}>
                    Right Fit <br />
                    For <br />
                    The Right Job
                </h1>
                <button className={`px-8 py-3 text-white border border-white rounded-lg tracking-widest shadow-[8px_8px_10px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black hover:border-black transition-all duration-300 transform ${
                    isVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-4 scale-95'
                }`}
                style={{
                    transitionDelay: isVisible ? '100ms' : '0ms'
                }}>
                    SHOP NOW
                </button>
            </div>

            {/* Gambar Bertumpuk dengan animasi */}
            <div className={`relative w-full max-w-xl h-96 transition-all duration-1000 ease-out ${
                isVisible 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-8 scale-95'
            }`}
            style={{
                transitionDelay: isVisible ? '300ms' : '0ms'
            }}>
                {images.map((image, index) => {
                    const stackOrder = (index - currentImageIndex + images.length) % images.length;
                    
                    let zIndex, transform, opacity;
                    
                    if (stackOrder === 0) {
                        // Gambar paling depan (aktif)
                        zIndex = 30;
                        transform = 'translate-y-8 scale-100';
                        opacity = 'opacity-100';
                    } else if (stackOrder === 1) {
                        // Gambar kedua dari depan
                        zIndex = 20;
                        transform = 'translate-y-4 scale-98';
                        opacity = 'opacity-90';
                    } else if (stackOrder === 2) {
                        // Gambar paling belakang
                        zIndex = 10;
                        transform = 'translate-y-0 scale-96';
                        opacity = 'opacity-80';
                    } else {
                        // Gambar tersembunyi (untuk lebih dari 3 gambar)
                        zIndex = 5;
                        transform = 'translate-y-6 scale-94';
                        opacity = 'opacity-60';
                    }
                    
                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-out ${transform} ${opacity} ${
                                isVisible 
                                    ? 'animate-in' 
                                    : 'animate-out'
                            }`}
                            style={{ 
                                zIndex,
                                animationDelay: isVisible ? `${500 + (index * 100)}ms` : '0ms',
                                animationFillMode: 'both'
                            }}
                        >
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-1 border-white">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-lg"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}