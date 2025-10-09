"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/Assets/main_logo.png";
import sec2image from "../../public/Assets/home_sec2_bg.jpg";
// import styles from "./page.module.css";

export default function Home() {
   const [offsetY, setOffsetY] = useState(0);

   useEffect(() => {
     const handleScroll = () => setOffsetY (window.scrollY);
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);

   }, []);

    return (
    <>
      <main className="relative h-[20vh] md:min-h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-[url('/Assets/home_bg_n.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            transform: `translateY(${offsetY * 0.4}px)`,
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Logo image */}
        <div
          className="absolute md:top-[400px] md:left-[250px] top-[25px] left-[30px]"
          style={{
            transform: `translateY(${offsetY * -0.2}px)`,
          }}
        >
          <Image
            src={logo}
            alt="logo"
            className="object-contain w-20 md:w-[300px]"
          />
        </div>
      </main>

      {/* ---- SECOND SECTION ---- */}
      <motion.section 
          className="relative bg-stone-900"
          initial= {{opacity: 0, y: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay:0.2, duration: 1, ease: "easeOut"}}
          viewport={{once: true, amount: 0.01}}
          style={{transform: `translateY(${offsetY * -0.2}px)`}}>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-[1.4fr_1fr] gap-0 items-center">
          
          {/* Image - left */}
          <div className="flex justify-start">
            <Image
              src={sec2image}
              alt="Section 2"
              className="md:w-[75vw] md:h-[120vh] object-cover"
            />
          </div>

          {/* Content - right */}
          <div className="space-y-2 md:space-y-4 px-8 py-8 md:px-38">
            <motion.p 
              className="text-m md:text-lg font-semi-bold text-amber-300/85 tracking-widest" 
              initial= {{opacity: 0, y: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:0.5, duration: 1, ease: "easeOut"}}
              viewport={{once: true, amount: 0.2}}>
                LET'S WORK TOGETHER
            </motion.p>

            <motion.h1 
              className="text-4xl md:text-5xl text-white font-bold tracking-normal py-5 md:py-10 leading-13"
              initial= {{opacity: 0, y: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:0.5, duration: 1, ease: "easeOut"}}
              viewport={{once: true, amount: 0.4}} >
                The Vision is not anymore a full of expectation
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-xl font-semi-bold text-justify leading-11"
              initial= {{opacity: 0, y: 0}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
              viewport={{once: true, amount: 0.3}} >
                Our vision is to be the leading Sri Lankan holding company, securing its interests as a preferred partner for institutional investors in the private and public sectors, as well as multinational corporations, to standardize the efficacy and profitability of the businesses in which Rangiri Holdings has a stake.
            </motion.p>
          
          </div>
        </div>
      </motion.section> 
    </>
  );

}