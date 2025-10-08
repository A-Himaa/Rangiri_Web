"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/Assets/main_logo_b.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import {motion, AnimatePresence} from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [headerState, setHeaderState] = useState("default");
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "COMPANIES", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "CSR", href: "#" },
    { name: "CONTACT", href: "#" },
  ];


// Detecting scroll
  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 50){
      setHeaderState("default");
    }
    else {
      if (currentScrollY > lastScrollY) {
        setHeaderState("hidden");
      } else {
        setHeaderState("visible");
      }
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Mobile view detection
useEffect(() => {
  const checkMobile = () => setIsMobile (window.innerWidth < 360);
  checkMobile;
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);



  return (
    <header
      className={`fixed top-0 w-full z-50 ease-in-out transition-all duration-500
        ${headerState === "hidden" ? "-translate-y-full" : "translate-y-0"} 
        ${headerState === "visible" || isMobile ? "bg-white/60 backdrop-blur-md" : ""}
      `}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-3 flex items-center transition-all duration-500 
          ${headerState === "default" ? "justify-end md:justify-center my-6" : "justify-between"}
        `}
      >
        {/* --------Logo--------------  */}
        {headerState !== "default" || isMobile ? (
          <Link href="/">
            <div className="relative h-[12vh] w-[120px] md:w-[150px]">
              <Image
                src={logo}
                alt="Rangiri Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        ) : null}

        {/*------Desktop Navigation------*/}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pl-5 font-medium transition duration-300
                  ${
                    headerState === "default"
                      ? isActive
                        ? "text-amber-100"
                        : "text-white hover:text-amber-100"
                      : isActive
                      ? "text-red-800"
                      : "text-black hover:text-red-800"
                  }
                `}
              >
                {link.name}
              </Link>

            );
          })}
        </nav>

        {/* -------Social Media Incons (desktop)------- */}
        {headerState !== "default" && (
          <div className="hidden md:flex space-x-3 ml-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 text-white text-lg rounded-md hover:bg-red-800 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 text-white text-lg rounded-md hover:bg-red-800 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-700 text-white text-lg rounded-md hover:bg-red-800 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        )}
        
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="md:hidden bg-white shadow-md overflow-hidden"
        >

        <div className="md:hidden bg-gray-800/90 backdrop-blur-md w-full px-6 py-4 flex flex-col space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-semibold text-white hover:text-red-800 transition-colors duration-300"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
              <hr className="pt-2"/>
            </Link>
          ))}

          <div className="flex space-x-3 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white text-lg rounded-md hover:bg-red-800 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white text-lg rounded-md hover:bg-red-800 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-700 text-white text-lg rounded-md hover:bg-red-800 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
