"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AppLogo from "../assets/images/AppLogo.png";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of footer is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before footer fully enters viewport
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`bg-[#2D2E30] text-white py-5 px-4 flex flex-col items-center space-y-6 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Logo dan Brand */}
      <div 
        className={`flex flex-col items-center space-y-2 transition-all duration-1000 delay-300 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <Image
          src={AppLogo}
          alt="Boots Logo"
          width={150}
          className="object-contain"
        />
        <p className="text-sm text-gray-300 tracking-wider">
          Find The Best Fit With The Best Quality
        </p>
      </div>

      {/* Navigasi */}
      <div 
        className={`flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold tracking-widest transition-all duration-1000 delay-500 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        <a href="#home" className="hover:underline transform hover:scale-105 transition-transform duration-200">
          HOME
        </a>
        <a href="#product" className="hover:underline transform hover:scale-105 transition-transform duration-200">
          PRODUCT
        </a>
        <a href="#partner" className="hover:underline transform hover:scale-105 transition-transform duration-200">
          PARTNER
        </a>
        <a href="#comment" className="hover:underline transform hover:scale-105 transition-transform duration-200">
          COMMENT
        </a>
      </div>
    </footer>
  );
}