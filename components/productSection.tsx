"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import ProductImage1 from "../assets/images/ProductsImage1.png";
import ProductImage2 from "../assets/images/ProductsImage2.png";
import { motion, Variants, AnimatePresence } from "framer-motion";

// --- Variants untuk Animasi ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// --- Product Data ---
const productsData = {
  POPULAR: [
    {
      name: "Nike Air Zoom Winflo 10",
      category: "Running",
      price: "$100",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "RUNNING", "NIKE"],
    },
    {
      name: "Nike Air Zoom Tempo NEXT%",
      category: "Running",
      price: "$100",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "RUNNING", "NIKE"],
    },
    {
      name: "Puma RS-X Pop",
      category: "Casual",
      price: "$110",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "CASUAL", "PUMA"],
    },
    {
      name: "Adidas Ultraboost",
      category: "Running",
      price: "$180",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "RUNNING", "ADIDAS"],
    },
    {
      name: "New Balance Fresh Foam",
      category: "Training",
      price: "$130",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "TRAINING", "NEW BALANCE"],
    },
    {
      name: "Nike Air Jordan Mid",
      category: "Basketball",
      price: "$120",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["KID", "BASKETBALL", "NIKE"],
    },
    {
      name: "Puma Rebound Layup",
      category: "Basketball",
      price: "$80",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "BASKETBALL", "PUMA"],
    },
    {
      name: "Adidas OwnTheGame",
      category: "Basketball",
      price: "$90",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "BASKETBALL", "ADIDAS"],
    },
    {
      name: "Converse Chuck Taylor",
      category: "Casual",
      price: "$65",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "CASUAL", "NIKE"],
    },
    {
      name: "New Balance 327",
      category: "Casual",
      price: "$90",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "CASUAL", "NEW BALANCE"],
    },
    {
      name: "Puma Velocity Nitro 2",
      category: "Running",
      price: "$120",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "RUNNING", "PUMA"],
    },
    {
      name: "Adidas Metcon 8",
      category: "Training",
      price: "$140",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "TRAINING", "ADIDAS"],
    },
  ],
  DISCOUNT: [
    {
      name: "Nike Flex Experience",
      category: "Casual",
      price: "$75",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "CASUAL", "NIKE"],
    },
    {
      name: "Puma Graviton Pro",
      category: "Training",
      price: "$85",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["KID", "TRAINING", "PUMA"],
    },
    {
      name: "Adidas Adizero",
      category: "Running",
      price: "$120",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "RUNNING", "ADIDAS"],
    },
    {
      name: "New Balance 574",
      category: "Casual",
      price: "$60",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "CASUAL", "NEW BALANCE"],
    },
    {
      name: "Nike Court Legacy",
      category: "Casual",
      price: "$55",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "CASUAL", "NIKE"],
    },
    {
      name: "Puma Future Rider",
      category: "Casual",
      price: "$70",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["KID", "CASUAL", "PUMA"],
    },
    {
      name: "Adidas Trae Young 1",
      category: "Basketball",
      price: "$100",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "BASKETBALL", "ADIDAS"],
    },
    {
      name: "New Balance 550",
      category: "Basketball",
      price: "$110",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "BASKETBALL", "NEW BALANCE"],
    },
    {
      name: "Nike Revolution 6",
      category: "Running",
      price: "$65",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "RUNNING", "NIKE"],
    },
    {
      name: "Puma Fuse 2.0",
      category: "Training",
      price: "$90",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "TRAINING", "PUMA"],
    },
    {
      name: "Adidas Samba",
      category: "Casual",
      price: "$85",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "CASUAL", "ADIDAS"],
    },
    {
      name: "New Balance Fresh Foam X",
      category: "Running",
      price: "$140",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "RUNNING", "NEW BALANCE"],
    },
  ],
  NEW: [
    {
      name: "Adidas Ultraboost Light",
      category: "Running",
      price: "$180",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "RUNNING", "ADIDAS"],
    },
    {
      name: "Nike Air Max 97",
      category: "Casual",
      price: "$170",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "CASUAL", "NIKE"],
    },
    {
      name: "Puma Clyde All-Pro",
      category: "Basketball",
      price: "$140",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "BASKETBALL", "PUMA"],
    },
    {
      name: "New Balance 990v5",
      category: "Casual",
      price: "$175",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "CASUAL", "NEW BALANCE"],
    },
    {
      name: "Adidas Forum Low",
      category: "Basketball",
      price: "$100",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "BASKETBALL", "ADIDAS"],
    },
    {
      name: "Nike Metcon 8",
      category: "Training",
      price: "$140",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "TRAINING", "NIKE"],
    },
    {
      name: "Puma Fierce",
      category: "Training",
      price: "$90",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "TRAINING", "PUMA"],
    },
    {
      name: "Adidas Superstar",
      category: "Casual",
      price: "$85",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "CASUAL", "ADIDAS"],
    },
    {
      name: "Nike Zoom Freak 4",
      category: "Basketball",
      price: "$130",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "BASKETBALL", "NIKE"],
    },
    {
      name: "New Balance 57/40",
      category: "Casual",
      price: "$110",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "CASUAL", "NEW BALANCE"],
    },
    {
      name: "Adidas Alphabounce",
      category: "Running",
      price: "$95",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["KID", "RUNNING", "ADIDAS"],
    },
    {
      name: "Puma Deviate Nitro",
      category: "Running",
      price: "$160",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "RUNNING", "PUMA"],
    },
  ],
  "BEST SELLER": [
    {
      name: "Converse Chuck Taylor",
      category: "Casual",
      price: "$65",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "CASUAL", "NIKE"],
    },
    {
      name: "Jordan 1 Mid",
      category: "Basketball",
      price: "$130",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["KID", "BASKETBALL", "NIKE"],
    },
    {
      name: "New Balance FuelCell",
      category: "Training",
      price: "$95",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "TRAINING", "NEW BALANCE"],
    },
    {
      name: "Adidas Stan Smith",
      category: "Casual",
      price: "$80",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "CASUAL", "ADIDAS"],
    },
    {
      name: "Puma Velocity Nitro 2",
      category: "Running",
      price: "$120",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["WOMAN", "RUNNING", "PUMA"],
    },
    {
      name: "New Balance 327",
      category: "Casual",
      price: "$90",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["KID", "CASUAL", "NEW BALANCE"],
    },
    {
      name: "Nike Kyrie 8",
      category: "Basketball",
      price: "$140",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["MAN", "BASKETBALL", "NIKE"],
    },
    {
      name: "Adidas Harden Stepback 3",
      category: "Basketball",
      price: "$100",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["WOMAN", "BASKETBALL", "ADIDAS"],
    },
    {
      name: "Puma LQDCELL",
      category: "Training",
      price: "$90",
      image: ProductImage1,
      imageClassName: "object-contain w-[100%] h-auto",
      tags: ["KID", "TRAINING", "PUMA"],
    },
    {
      name: "New Balance FuelCell Rebel v3",
      category: "Running",
      price: "$130",
      image: ProductImage2,
      imageClassName: "object-contain w-[95%] h-auto",
      tags: ["MAN", "RUNNING", "NEW BALANCE"],
    },
  ],
};

// --- Product Type ---
interface Product {
  name: string;
  category: string;
  price: string;
  image: any;
  imageClassName: string;
  tags: string[];
}

// --- Component ---
export default function ProductComponent() {
  const dropdownItems: Record<string, string[]> = {
    MAN: ["WOMAN", "KID"],
    RUNNING: ["TRAINING", "BASKETBALL", "CASUAL"],
    NIKE: ["PUMA", "ADIDAS", "NEW BALANCE"],
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("POPULAR");
  const [selectedDropdownFilter, setSelectedDropdownFilter] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Perbaikan: HTMLDivData diubah menjadi HTMLDivElement

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleDropdownSelect = (filter: string) => {
    setSelectedDropdownFilter(filter);
    setOpenDropdown(null);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedDropdownFilter(null);
  };

  const handleAddToCart = (productName: string) => {
    setNotification(`${productName} added to the cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 2000); // Notifikasi akan hilang setelah 2 detik
  };

  const filteredProducts: Product[] = productsData[selectedCategory as keyof typeof productsData]
    .filter((product) => {
      if (!selectedDropdownFilter) {
        return true;
      }
      return product.tags.includes(selectedDropdownFilter);
    })
    .slice(0, 2); // Mengembalikan batasan 2 card

  return (
    <motion.div
      className="w-full rounded-xl bg-[#2D2E30] px-4 py-6 md:p-8 lg:p-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Judul */}
      <motion.div className="flex justify-center py-4 md:py-6" variants={childVariants}>
        <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-white">PRODUCT</h1>
      </motion.div>

      {/* Navbar kategori */}
      <motion.div className="w-full flex justify-center py-4" variants={childVariants}>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 bg-[#1F1F1F] rounded-full p-2 md:px-6 md:py-3">
          {Object.keys(productsData).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`${
                selectedCategory === category ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"
              } font-bold rounded-full px-4 py-1.5 text-sm md:px-6 md:py-2 md:text-base transition-colors duration-300 whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Dropdown Filter */}
      <motion.div className="w-full flex justify-center py-4 md:py-6" variants={childVariants}>
        <div ref={dropdownRef} className="flex flex-wrap justify-center gap-2 md:gap-6 relative">
          {Object.entries(dropdownItems).map(([label, options]) => (
            <div key={label} className="relative">
              <button
                onClick={() => toggleDropdown(label)}
                className="flex items-center gap-1 md:gap-2 bg-[#1F1F1F] text-white font-medium px-4 py-1.5 text-sm md:px-6 md:py-2 md:text-base rounded-full hover:bg-[#2C2C2C] transition whitespace-nowrap"
              >
                {selectedDropdownFilter && options.includes(selectedDropdownFilter) ? selectedDropdownFilter : label}
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
              </button>

              <AnimatePresence>
                {openDropdown === label && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-max bg-[#1F1F1F] rounded-xl shadow-lg z-10 py-2 origin-top"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleDropdownSelect(option)}
                        className="block w-full text-left text-white px-4 py-2 hover:bg-white hover:text-black transition text-sm md:text-base"
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Produk List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + selectedDropdownFilter}
          className="flex justify-center flex-wrap gap-6 px-4 pb-6"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name + index}
              className="bg-[#222222] rounded-xl overflow-hidden w-full md:w-[calc(50%-12px)] flex-shrink-0"
            >
              <div className="relative bg-white h-56 md:h-72 lg:h-[400px] flex justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={product.imageClassName}
                />
                <div className="absolute top-3 left-3 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {product.price}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-white text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{product.category}</p>
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="w-full flex items-center justify-between border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  Add To Cart <ArrowRightCircle className="w-6 h-6 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Notifikasi */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-white text-black py-3 px-6 rounded-full shadow-lg font-semibold"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}