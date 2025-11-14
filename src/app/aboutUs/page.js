"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../../public/Assets/main_logo_b.webp";
import sec1img from "../../../public/Assets/aboutUs/aboutus_bg.webp";
import sec2img from "../../../public/Assets/home_sec4_bg.webp";
import sec3img from "../../../public/Assets/aboutUs/aboutus_bg_2.webp";
import missionIcon from "../../../public/Assets/aboutUs/mission.png";
import visionIcon from "../../../public/Assets/aboutUs/visions.png";
import peopleIcon from "../../../public/Assets/aboutUs/people.png";
import integrityIcon from "../../../public/Assets/aboutUs/integrity.png";
import sustainabilityIcon from "../../../public/Assets/aboutUs/sustainability.png";
import growthIcon from "../../../public/Assets/aboutUs/growth.png";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading delay for smoother animation (optional)
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
    {/* ======= Loading Screen ======= */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-800 text-white">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-700"></div>
          <p className="mt-5 text-lg tracking-widest text-amber-700 animate-pulse">Loading...</p>
        </div>
      )}

      {/* ======= Main Content ======= */}
      {!loading && (
        <>
        {/* Section 1*/}
        <main className="relative h-[20vh] md:h-[30vh] w-full flex overflow-hidden">
          <Image
            src={sec1img}
            alt="company background"
            fill
            className="object-cover object-center"
            style={{ filter: "blur(1px)" }} 
            priority
          />

        <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-900 to-stone-700 opacity-50" />

        {/* Text */}
        <div className="relative z-10 text-2xl md:text-5xl font-bold text-white pt-23 md:pt-30 pl-10 md:pl-40">
          About Us
        </div>
        </main>

        {/* Section 2 */}
        <section className="relative md:h-[80vh] w-full flex items-center justify-center overflow-hidden"> 
          <Image 
            src={sec2img}
            alt="Background Image"
            fill
            className="object-cover object-left opacity-10"
            priority
          />

          <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-5 mt-20">
              <Image
                src={logo}
                alt="Rangiri Logo"
                width={250}
                height={250}
                className="mb-10"
              />
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base px-8 md:pb-10">
              Rangiri Holdings, cluster of entities, is concept of Mr. Nihal
              Pathirage. He made his mark in the city of Anuradhapura after his
              idea of life changing initiative. Evolving better from sports and
              business leading football into daily basis, developed profound
              balance which made better story of many hands of giving and love.
              His vision has been a story of creating a healthy, approachable
              and smart spirit where entities exist together in their full
              potential to transform many aspects related to our organizations
              and society.
            <br />
            <br />
              He develops a vision of life best based on humanism and affection
              towards life. Commitment, love and togetherness of employees are
              special as a corporate family. He works closely with his group in
              corporate environment. He took the initiative to create a
              government and education linking for national harmony such as
              vocational career education bodies. He started many events with a
              strategic direction where his brand stands firmly for the people
              by being responsible in many corporate areas through its social
              responsibility.
            <br />
            <br />
              He started Greenrise (Pvt) Ltd as a small step and it was built up
              all the way to the peak of Rangiri Holdings. The three networks,
              operational leadership, inspiring workers, business innovations
              and concepts are vividly managed within the company culture.
            </p>
          </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-12 bg-white text-center">
          <motion.h2
            initial= {{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
            viewport={{once: true, amount: 0.4}}
            className="text-2xl md:text-4xl text-red-900 font-bold"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-6 px-8 md:px-65 py-20">
          {/* Mission */}
          <motion.div
            initial= {{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
            viewport={{once: true, amount: 0.4}}
            className="flex flex-col justify-between bg-white shadow-xl rounded-2xl p-8 w-full md:w-1/2 border border-gray-100"
          >
          <div>
            <Image
              src={missionIcon}
              alt="Mission Icon"
              width={55}
              height={55}
              className="mx-auto mb-3"
            />
            <p className="font-semibold text-gray-500 leading-relaxed text-center text-lg p-5">
              As a diverse business entity, it is determined to be a catalyzing
              partner of national programs in Sri Lanka.
            </p>
          </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial= {{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
            viewport={{once: true, amount: 0.4}}
            className="flex flex-col justify-between bg-white shadow-xl rounded-2xl p-8 w-full md:w-1/2 border border-gray-100"
          >
          <div>
            <Image
              src={visionIcon}
              alt="Vision Icon"
              width={55}
              height={55}
              className="mx-auto mb-3"
            />
            <p className="font-semibold text-gray-500 leading-relaxed text-center text-lg px-5">
              To design and carry out road maps that support the objective of expanding
              its business portfolio while protecting sustainability and national
              interests.
            </p>
          </div>
          </motion.div>
          </div>
        </section>

          {/* Section 4 */}
          <section className="relative py-20 text-white overflow-hidden mb-50">
            <Image
              src={sec3img} 
              alt="Unity"
              fill
              className="object-cover object-center absolute inset-0 z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-900 to-stone-700 opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto text-center px-6 md:px-10">
              <motion.h2
                initial= {{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
                viewport={{once: true, amount: 0.4}}
                className="text-2xl md:text-4xl font-bold mb-12"
              >
                Our Values
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: peopleIcon,
                    title: "People First",
                    text: "We strongly believe that empowering people is the key to organizational success and community growth.",
                  },
                  {
                    icon: integrityIcon,
                    title: "Integrity Always",
                    text: "We act with honesty, transparency, and responsibility in everything we do to uphold trust and ethics.",
                  },
                  {
                    icon: sustainabilityIcon,
                    title: "Sustainability Matters",
                    text: "We design our initiatives with long-term sustainability and environmental care in mind.",
                  },
                  {
                    icon: growthIcon,
                    title: "Collective Growth",
                    text: "We grow together by nurturing partnerships, teamwork, and continuous learning.",
                  },
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial= {{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
                    viewport={{once: true, amount: 0.4}}
                    className="bg-white/25 backdrop-blur-md rounded-2xl p-6 shadow-md hover:bg-white/20 transition"
                  >
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={60}
                      height={60}
                      className="mx-auto mb-4 "
                    />
                    <h3 className="text-xl py-3 font-semibold mb-2">{value.title}</h3>
                    <p className="text-md text-gray-100 leading-relaxed px-4">{value.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

    </>
  );
}
