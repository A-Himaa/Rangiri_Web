"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/Assets/main_logo.png";
import sec2image from "../../public/Assets/home_sec2_bg.jpg";
import sec3image from "../../public/Assets/home_sec3_bg.png";
import arrow from "../../public/Assets/arrow.png"
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

      {/* THIRD SECTION */}
      <section className="relative -mt-10 z-10 px-8 md:px-38">
      <div className="relative grid grid-cols-1 md:grid-cols-2 bg-stone-100 rounded-4xl shadow-2xl overflow-hidden">

      {/* Left content */}
      <div className="p-15 flex items-center">
        <p className="text-gray-600 font-bold text-3xl leading-wide">
          The Mission can't be claimed as a single loop. It's a collaboration of many loops.
        </p>
      </div>

    {/* Right content */}
    <div className="p-15 flex items-center">
      <p className="text-gray-500 font-semi-bold text-lg text-justify tracking-wide">
        Our Mission is to satisfy all our customers by providing over & above their requirements profitably, but with products of superior quality, services and competitive prices for them to progress with the global competition.
      </p>
    </div>
  </div>
</section>

      <section>
        <div className="relative -mt-30 h-[98vh] ">
          <Image
            src={sec3image}
            alt="section3 background"
            fill
            className="object-cover object-center opacity-15"
          />
          <div className="absolute z-10 mt-50 px-40 text-center ">
            <h1 className="text-4xl text-red-900 font-bold">Rangiri Holdings (PVT) Ltd.</h1>
            <h3 className="text-2xl text-orange-900 font-bold opacity-90 py-3">Building a legacy of growth, innovation, and sustainability in Sri Lanka.</h3>
            <p className="text-lg font-semi-bold text-justify pt-5 text-gray-700">The spark that ignited Rangiri Holdings was not just ambition—it was a vision rooted in community, innovation, and resilience. Founded by Mr. Nihal Pathirage, whose leadership qualities were evident even in his school days, Rangiri Holdings emerged as a dynamic force in Sri Lanka’s corporate landscape. What began as a modest entrepreneurial endeavor has evolved into a multifaceted conglomerate, driven by a deep commitment to national progress and social upliftment.</p>
            <p className="text-lg font-semi-bold text-justify pt-2 text-gray-700">From its early steps in apparel and accessories manufacturing to its expansion into housing, construction, security services, education, and leisure, Rangiri Holdings has never been content with the ordinary. Each venture reflects a synergy of heart and soul, blending business acumen with a humanistic approach that values diversity, discipline, and development.</p>
            <p className="text-lg font-semi-bold text-justify pt-2 text-gray-700">Today, Rangiri Holdings stands tall as a cluster of thriving entities—each one contributing to the broader mission of empowering communities and elevating Sri Lanka’s economic stature. Whether through the vibrant energy of Action Park, the precision of Nishu Creations, or the transformative work of Livinco International, Rangiri continues to redefine what it means to be a modern Sri Lankan enterprise.</p>
            <p className="text-lg font-semi-bold text-justify pt-2 text-gray-700">With a future-focused mindset and a legacy built on integrity, Rangiri Holdings is not just a business—it’s a movement. A movement toward excellence, inclusivity, and sustainable growth.</p>
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex items-center justify-center">
          <button className="-mt-7 flex items-center gap-3 bg-orange-900 rounded-full text-xl text-white font-bold px-7 py-3 opacity-80 hover:opacity-100 transition">
              Read more
          <Image 
            src={arrow}
            alt="arrow icon"
            className="w-5 h-5 object-contain"
          />
          </button>
        </div>

        
      </section>

    </>
  );

}