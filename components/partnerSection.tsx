"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import NikeImage from "../assets/images/NikeImage.png";
import AdidasImage from "../assets/images/AdidasImage.png";
import PumaImage from "../assets/images/PumaImage.png";
import NewBalanceImage from "../assets/images/NewBalanceImage.png";

// Definisikan tipe untuk data partner logo
interface PartnerLogo {
  src: StaticImageData;
  alt: string;
}

// Definisikan variants untuk animasi
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Partner() {
  const partnerLogos: PartnerLogo[] = [
    { src: NikeImage, alt: "Nike" },
    { src: AdidasImage, alt: "Adidas" },
    { src: PumaImage, alt: "Puma" },
    { src: NewBalanceImage, alt: "New Balance" },
  ];

  return (
    <motion.div
      className="py-16 px-6 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Judul */}
      <motion.h1
        className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-17"
        variants={titleVariants}
      >
        Partner
      </motion.h1>

      {/* Baris Logo */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-14 md:gap-20"
        variants={containerVariants}
      >
        {partnerLogos.map((logo: PartnerLogo) => (
          <motion.div
            key={logo.alt}
            className="w-40 h-20 flex items-center justify-center"
            variants={logoVariants}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={170}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}