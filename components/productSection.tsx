"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ArrowRightIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ProductImage1 from "../assets/images/ProductsImage1.png";
import ProductImage2 from "../assets/images/ProductsImage2.png";

export default function Product() {
  const dropdownItems: Record<string, string[]> = {
    MAN: ["WOMAN", "KID"],
    RUNNING: ["TRAINING", "BASKETBALL", "CASUAL"],
    NIKE: ["PUMA", "ADIDAS", "NEW BALANCE"],
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "-50px 0px -50px 0px" // Add some margin to trigger animation earlier
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
      className={`w-full rounded-xl bg-[#2D2E30] px-4 py-6 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Judul */}
      <div 
        className={`flex justify-center py-6 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <h1 className="text-5xl font-bold tracking-widest text-white">
          PRODUCT
        </h1>
      </div>

      {/* Navbar kategori */}
      <div 
        className={`w-full flex justify-center py-4 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="flex gap-6 bg-[#1F1F1F] rounded-full px-6 py-3">
          <button className="bg-white text-black font-bold rounded-full px-6 py-2 transition-colors duration-300">
            POPULAR
          </button>
          <button className="text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            DISCOUNT
          </button>
          <button className="text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            NEW
          </button>
          <button className="text-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            BEST SELLER
          </button>
        </div>
      </div>

      {/* Dropdown Filter */}
      <div 
        className={`w-full flex justify-center py-6 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="flex gap-6 relative">
          {Object.entries(dropdownItems).map(([label, options]) => (
            <div key={label} className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === label ? null : label)
                }
                className="flex items-center gap-2 bg-[#1F1F1F] text-white font-medium px-6 py-2 rounded-full hover:bg-[#2C2C2C] transition"
              >
                {label}
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-max bg-[#1F1F1F] rounded-xl shadow-lg z-10 py-2 transform transition-all duration-200 origin-top
                  ${openDropdown === label
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible"
                  }`}
              >
                {options.map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left text-white px-4 py-2 hover:bg-white hover:text-black transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Produk List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-10">
        {/* Card 1 */}
        <div 
          className={`bg-[#222222] rounded-xl overflow-hidden transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="relative bg-white">
            <Image
              src={ProductImage1}
              alt="Nike Air Zoom Winflo 10"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
            <div className="absolute top-3 left-3 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
              $100
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-white text-lg font-semibold">
              Nike Air Zoom Winflo 10
            </h2>
            <p className="text-gray-400 text-sm mb-4">Running</p>
            <button className="w-full flex items-center justify-between border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
              Add To Cart <ArrowRightCircleIcon className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className={`bg-[#222222] rounded-xl overflow-hidden transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="relative bg-white">
            <Image
              src={ProductImage2}
              alt="Nike Air Zoom Winflo 10"
              style={{
                width: '95%',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
            <div className="absolute top-3 left-3 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
              $100
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-white text-lg font-semibold">
              Nike Air Zoom Tempo NEXT%
            </h2>
            <p className="text-gray-400 text-sm mb-4">Running</p>
            <button className="w-full flex items-center justify-between border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
              Add To Cart <ArrowRightCircleIcon className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}