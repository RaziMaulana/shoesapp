"use client";

import Image from "next/image";
import HeroSectionImage from "../assets/images/HeroSectionImage.png";
import { motion, Variants } from "framer-motion";

// Definisi variasi animasi untuk setiap elemen
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, translateX: -20 },
  visible: { opacity: 1, translateX: 0, transition: { duration: 1, ease: "easeOut" } },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, translateY: 8 },
  visible: { opacity: 1, translateY: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.2 } },
};

// Animasi tombol yang disederhanakan hanya menggunakan fade-in
const buttonVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, translateX: 20, scale: 0.9 },
  visible: { opacity: 1, translateX: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.6 } },
};

export default function Hero() {
  return (
    <section className="text-white" id="home">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Konten Teks */}
        <motion.div className="space-y-8 text-center md:text-left">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight uppercase tracking-widest"
            variants={titleVariants}
          >
            Find the best fit<br />
            that you could<br />
            have
          </motion.h1>

          <motion.button
            className="px-8 py-3 text-white border border-white rounded-lg tracking-widest shadow-[8px_8px_10px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black hover:border-black transition-all duration-300"
            variants={buttonVariants}
          >
            EXPLORE
          </motion.button>
        </motion.div>

        {/* Gambar */}
        <motion.div
          className="flex justify-center items-center w-full relative h-[300px] md:h-[400px] lg:h-[500px]"
          variants={imageVariants}
        >
          <Image
            src={HeroSectionImage}
            alt="Hero Shoes"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}