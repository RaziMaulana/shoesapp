"use client";

import { useState } from "react";
import Image from "next/image";
import AppLogo from "../assets/images/AppLogo.png";
import { motion, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false); // Tutup menu mobile setelah klik
    }
  };

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const logoVariants: Variants = {
    hidden: { x: -40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const menuButtonVariants: Variants = {
    hidden: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
  };

  const mobileMenuVariants: Variants = {
    open: {
      maxHeight: "200px",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    closed: {
      maxHeight: "0px",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
  };

  const mobileMenuItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -20,
      opacity: 0,
    },
  };

  const menuItems: string[] = ["HOME", "PRODUCT", "PARTNER", "COMMENT"];

  return (
    <motion.nav
      className="shadow-md"
      style={{ backgroundColor: "#2D2E30" }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto pb-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-13 items-center">
          {/* Logo aplikasi dengan ukuran responsif */}
          <motion.div variants={logoVariants} className="flex-shrink-0">
            <Image
              src={AppLogo}
              alt="Logo"
              width={120}
              height={40}
              className="h-auto w-20 sm:w-24 md:w-28 lg:w-30"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden mt-4 md:flex space-x-4 items-center ml-auto">
            {menuItems.map((item: string, index: number) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-white hover:text-black transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Tombol menu mobile dengan Lucide */}
          <motion.div className="md:hidden" variants={menuButtonVariants}>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 mt-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black p-2 rounded-md transition-all duration-200 hover:scale-110"
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          style={{ overflow: "hidden" }}
        >
          <div className="px-2 pt-4 pb-3 space-y-1 border-t border-gray-700 mt-2">
            {menuItems.map((item: string) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className="text-white hover:text-blue-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:translate-x-2"
                variants={mobileMenuItemVariants}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;