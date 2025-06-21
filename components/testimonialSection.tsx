"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PersonImage1 from "../assets/images/TestimonialImage1.png";
import PersonImage2 from "../assets/images/TestimonialImage2.png";
import PersonImage3 from "../assets/images/TestimonialImage3.png"

export default function Testimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      image: PersonImage1,
      name: "Sarah",
      title: "FASHIONABLE",
      text: "Good to wear Anywhere and Anytime"
    },
    {
      image: PersonImage2,
      name: "William",
      title: "TOP NOTCH",
      text: "It Is An Amazing Gear, Best Boots to use at Training"
    },
    {
      image: PersonImage3,
      name: "Mike Johnson",
      title: "DELIGHTFUL",
      text: "It is more than just a boots, It is such a masterpiece"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger ketika 20% dari section terlihat
        rootMargin: "0px 0px -50px 0px" // Offset untuk trigger yang lebih natural
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
      className="max-w-7xl mx-auto px-6 py-12 bg-[#1F1F1F] rounded-xl"
    >
      {/* Judul dengan animasi fade-in dari atas */}
      <h1 className={`text-white text-center text-5xl font-bold uppercase tracking-widest mb-12 transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-10'
      }`}>
        Testimonial
      </h1>

      {/* Grid Foto Testimoni dengan animasi staggered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`w-full h-[500px] relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
            }}
          >
            {/* Gambar */}
            <Image
              src={testimonial.image}
              alt={`Testimonial ${index + 1}`}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay dengan teks (muncul saat hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-70">
              <h3 className="text-white tracking-widest text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                {testimonial.name}
              </h3>
              <p className="text-white text-3xl testimonialSectionFont tracking-widest mb-4 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                {testimonial.title}
              </p>
              <p className="text-white tracking-wider testimonialSectionFont text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-300">
                " {testimonial.text} "
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}