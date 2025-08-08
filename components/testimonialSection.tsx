"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import PersonImage1 from "../assets/images/TestimonialImage1.png";
import PersonImage2 from "../assets/images/TestimonialImage2.png";
import PersonImage3 from "../assets/images/TestimonialImage3.png";

interface TestimonialData {
  image: StaticImageData;
  name: string;
  title: string;
  text: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Varian untuk animasi Fade-In yang sederhana
const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const testimonials: TestimonialData[] = [
  {
    image: PersonImage1,
    name: "Sarah",
    title: "FASHIONABLE",
    text: "Good to wear Anywhere and Anytime",
  },
  {
    image: PersonImage2,
    name: "William",
    title: "TOP NOTCH",
    text: "It Is An Amazing Gear, Best Boots to use at Training",
  },
  {
    image: PersonImage3,
    name: "Mike Johnson",
    title: "DELIGHTFUL",
    text: "It is more than just a boots, It is such a masterpiece",
  },
];

export default function Testimonial() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const handleCardHover = (index: number) => {
    if (openCardIndex !== null && openCardIndex !== index) {
      setOpenCardIndex(null);
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12 lg:px-6 bg-[#1F1F1F] rounded-xl"
      id="comment"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-white text-center text-4xl lg:text-5xl font-bold uppercase tracking-widest mb-2"
        variants={fadeInVariants} // Menggunakan varian fade-in
      >
        Comment
      </motion.h1>

      {/* Tambahkan elemen teks instruksi di bawah judul */}
      <motion.p 
        className="text-white text-center text-sm lg:text-base opacity-70 mb-10 lg:mb-12"
        variants={fadeInVariants}
      >
        Hover Or Click One of the card to see the detail
      </motion.p>

      <motion.div
        className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory md:gap-8 lg:grid lg:grid-cols-3 lg:gap-8 scrollbar-hide"
        variants={containerVariants}
      >
        {testimonials.map((testimonial: TestimonialData, index: number) => (
          <motion.div
            key={index}
            className="flex-none w-[80vw] max-w-sm h-[400px] snap-center sm:w-[50vw] sm:max-w-md md:w-[40vw] md:h-[500px] lg:w-full relative rounded-xl overflow-hidden group cursor-pointer"
            variants={fadeInVariants} // Menggunakan varian fade-in
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleCardHover(index)}
          >
            <Image
              src={testimonial.image}
              alt={`Testimonial ${index + 1}`}
              fill
              className={`object-cover transform transition-transform duration-500 ${
                openCardIndex === index ? 'scale-110' : 'group-hover:scale-110'
              }`}
            />

            <div className={`absolute inset-0 bg-black transition-all duration-500 flex flex-col justify-center items-center p-4 text-center ${
                openCardIndex === index 
                  ? 'bg-opacity-80 opacity-80' 
                  : 'bg-opacity-0 opacity-0 group-hover:bg-opacity-50 group-hover:opacity-80'
            }`}>
              <h3 className={`text-white tracking-widest text-lg lg:text-xl font-bold mb-1 transform transition-transform duration-300 delay-100 ${
                  openCardIndex === index ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
              }`}>
                {testimonial.name}
              </h3>
              <p className={`text-white text-2xl lg:text-3xl testimonialSectionFont tracking-widest mb-3 font-bold transform transition-transform duration-300 delay-200 ${
                  openCardIndex === index ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
              }`}>
                {testimonial.title}
              </p>
              <p className={`text-white tracking-wider testimonialSectionFont text-xl lg:text-2xl transform transition-transform duration-300 delay-300 ${
                  openCardIndex === index ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
              }`}>
                " {testimonial.text} "
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}