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

// Variants untuk efek hover pada link navigasi
const linkVariants: Variants = {
  rest: { color: "#ffffff" },
  hover: {
    color: "#ffffff", // Warna teks tetap putih saat di-hover
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// Variants untuk garis bawah saat hover
const underlineVariants: Variants = {
  rest: {
    scaleX: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
  },
};

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

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
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={AppLogo}
            alt="Boots Logo"
            width={150}
            className="object-contain"
          />
        </motion.div>
        <motion.p
          className="text-sm text-gray-300 tracking-wider"
          transition={{ duration: 0.2 }}
        >
          Find The Best Fit With The Best Quality
        </motion.p>
      </motion.div>

      {/* Navigasi */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold tracking-widest"
        variants={childVariants}
      >
        {/* Navigasi HOME */}
        <motion.button
          onClick={() => scrollToSection("home")}
          className="cursor-pointer focus:outline-none relative group" // Tambahkan group untuk hover state
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={linkVariants}>HOME</motion.span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-center" // Ganti warna jadi putih dan origin-center
            variants={underlineVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Navigasi PRODUCT */}
        <motion.button
          onClick={() => scrollToSection("product")}
          className="cursor-pointer focus:outline-none relative group"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={linkVariants}>PRODUCT</motion.span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-center"
            variants={underlineVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Navigasi PARTNER */}
        <motion.button
          onClick={() => scrollToSection("partner")}
          className="cursor-pointer focus:outline-none relative group"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={linkVariants}>PARTNER</motion.span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-center"
            variants={underlineVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Navigasi COMMENT */}
        <motion.button
          onClick={() => scrollToSection("comment")}
          className="cursor-pointer focus:outline-none relative group"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={linkVariants}>COMMENT</motion.span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-center"
            variants={underlineVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}