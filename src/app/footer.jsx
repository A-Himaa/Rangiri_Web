"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Assets/main_logo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white">
      <div className="absolute inset-0 bg-[url('/Assets/footer_bg_s.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-orange-950 to-black opacity-70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-1 px-8 py-10 md:grid-cols-4 md:gap-12 md:px-0 md:px-12 md:py-16 z-10">
        
        {/* Logo */}
        <div className="flex justify-center hidden md:block">
          <Image
            src={logo}
            alt="Rangiri logo"
            className="h-35 w-auto"
          />
        </div>

        {/* Contact Us */}
        <div className="text-md md:text-lg">
          <h1 className="text-xl font-bold mb-2 md:mb-6 md:text-2xl">Contact Us</h1>
          <div className="flex items-center gap-5 mb-1 md:mb-3">
            <FaEnvelope />
            <p>info@rangiriholdings.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone />
            <p>+94 112 962 656</p>
          </div>
        </div>

        {/* Location */}
        <div>
          <h1 className="text-xl font-bold mb-2 mt-2 md:mt-0 md:mb-6 md:text-2xl">Location</h1>
          <ul className="text-md md:text-lg md:space-y-1">
            <li>Rangiri Holdings (PVT) Ltd.</li>
            <li>No. 493 / 5,</li>
            <li>Makola North,</li>
            <li>Makola - 11640,</li>
            <li>Sri Lanka</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-lg hidden md:block">
          <h1 className="text-2xl font-bold mb-6">Social Media</h1>
          <a href="#" className="flex items-center gap-5 mb-3 hover:text-orange-400 transition duration-500">
            <FaFacebook />
            <p>Facebook</p>
          </a>
          <a href="#" className="flex items-center gap-5 mb-3 hover:text-orange-400 transition duration-500">
            <FaTwitter />
            <p>Twitter</p>
          </a>
          <a href="#" className="flex items-center gap-5 hover:text-orange-400 transition duration-500">
            <FaInstagram />
            <p>Instagram</p>
          </a>
        </div>
      </div>

      {/* Bottom border */}
      <div className="relative border-t border-gray-500 text-center py-3 text-sm z-10">
        © {new Date().getFullYear()} Rangiri Holdings. All rights reserved.
      </div>
    </footer>
  );
}

