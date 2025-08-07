"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AppLogo from "../assets/images/AppLogo.png";

// Definisikan variants untuk animasi utama (container footer)
const footerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

// Definisikan variants untuk elemen anak (logo, teks, dan navigasi)
const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#2D2E30] text-white mt-6 py-5 px-4 flex flex-col items-center space-y-6"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Logo dan Brand */}
      <motion.div
        className="flex flex-col items-center space-y-2"
        variants={childVariants}
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
      </motion.div>

      {/* Navigasi */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold tracking-widest"
        variants={childVariants}
      >
        <a
          href="#home"
          className="hover:underline transform hover:scale-105 transition-transform duration-200"
        >
          HOME
        </a>
        <a
          href="#product"
          className="hover:underline transform hover:scale-105 transition-transform duration-200"
        >
          PRODUCT
        </a>
        <a
          href="#partner"
          className="hover:underline transform hover:scale-105 transition-transform duration-200"
        >
          PARTNER
        </a>
        <a
          href="#comment"
          className="hover:underline transform hover:scale-105 transition-transform duration-200"
        >
          COMMENT
        </a>
      </motion.div>
    </motion.footer>
  );
}