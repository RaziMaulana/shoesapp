"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ClosingImage1 from "../assets/images/ClosingImage1.png";
import ClosingImage2 from "../assets/images/ClosingImage2.png";
import ClosingImage3 from "../assets/images/ClosingImage3.png";

const mainContainerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const textContainerVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const imageContainerVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageStackVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1 - i * 0.05,
    y: i * 20,
    zIndex: 10 - i,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Closing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: ClosingImage1, alt: "Professional Shoes 1" },
    { src: ClosingImage2, alt: "Professional Shoes 2" },
    { src: ClosingImage3, alt: "Professional Shoes 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Fungsi untuk scroll ke section 'product'
  const handleScrollToProduct = () => {
    const productSection = document.getElementById("product");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto p-4 md:p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 rounded-xl"
      variants={mainContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="text-white w-full md:w-1/2 flex-grow"
        variants={textContainerVariants}
      >
        <motion.h1
          className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold uppercase leading-tight tracking-widest mb-6 md:mb-8"
          variants={childVariants}
        >
          Right Fit <br /> For <br /> The Right Job
        </motion.h1>
        <motion.button
          className="px-8 py-3 text-white cursor-pointer border border-white rounded-lg tracking-widest shadow-[8px_8px_10px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black hover:border-black transition-all duration-300 transform active:bg-white active:text-black active:border-black"
          variants={childVariants}
          onClick={handleScrollToProduct} // Event handler ditambahkan di sini
        >
          SHOP NOW
        </motion.button>
      </motion.div>

      <motion.div
        className="relative w-full md:w-1/2 max-w-xl h-96 flex-shrink-0"
        variants={imageContainerVariants}
      >
        <AnimatePresence>
          {images.map((image, index) => {
            const stackOrder =
              (index - currentImageIndex + images.length) % images.length;

            if (stackOrder > 2) return null;

            return (
              <motion.div
                key={index}
                className={`absolute inset-0`}
                variants={imageStackVariants}
                custom={stackOrder}
                initial="hidden"
                animate="visible"
                exit="hidden"
                // Mengatur properti CSS secara langsung di sini
                style={{
                  zIndex: 30 - stackOrder * 10,
                  transform: `translateY(${stackOrder * 20}px) scale(${
                    1 - stackOrder * 0.05
                  })`,
                  opacity: 1 - stackOrder * 0.2,
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
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}