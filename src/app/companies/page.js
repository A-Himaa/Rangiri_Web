"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sec1img from "../../../public/Assets/companies/company_bg.jpg";
import sec2img from "../../../public/Assets/home_sec4_bg.jpg";
import logo from "../../../public/Assets/main_logo.png";
import stretchTec from "../../../public/Assets/companies/stretchTec.png";
import rangiriAqua from "../../../public/Assets/companies/rangiriAqua.png";
import synergy from "../../../public/Assets/companies/synergy.png";
import rmit from "../../../public/Assets/companies/rmit.png";
import livinco from "../../../public/Assets/companies/livinco.png";
import pulse from "../../../public/Assets/companies/pulse.png";
import drugmart from "../../../public/Assets/companies/drugMart.png";
import nishu from "../../../public/Assets/companies/nishu.png";


const logos = [
  "/Assets/logos/StretchTec_logo.png",
  "/Assets/logos/RangiriAqua_logo.png",
  "/Assets/csr/synergy_logo.png",
  "/Assets/logos/RMIT_logo.png",
  "/Assets/logos/livinco_logo.png",
  "/Assets/logos/PulseTV_logo.png",
  "/Assets/logos/drugmart.jpg",
  "/Assets/logos/Nishu_logo.png",
];


export default function Companies() {
  return (
    <>
    {/* Section 1 */}
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
      <div className="relative z-10 text-2xl md:text-5xl font-bold text-white pt-23 md:pt-30 pl-10 md:pl-40">
         Our Companies
      </div>
    </main>
    
    {/* Section 2 */}
    <section className="relative h-auto md:h-auto w-full flex items-center justify-center overflow-hidden">
      <Image
        src={sec2img}
        alt="Background Image"
        fill
        className="object-cover object-left opacity-12"
        priority
     />
     <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-900 to-stone-700 opacity-25" />

        <motion.div
          className="relative z-10 text-white px-8 md:max-w-7xl text-center h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-lg md:text-4xl font-bold my-8 text-red-900">
            One Vision, Many Ventures
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="flex justify-center md:justify-center">
              <Image
                src={logo}
                alt="Rangiri Logo"
                className="w-[150px] md:w-[280px] h-auto"
              />
            </div>

            <div>
              <p className="text-sm md:text-base leading-relaxed md:leading-loose tracking-wide text-gray-800 text-justify md:mb-5">
                The name “Rangiri” has grown to represent trust, progress, and
                shared purpose across Sri Lanka—touching lives beyond boundaries.
                More than a business, we have become a symbol of opportunity,
                creating livelihoods, empowering communities, and inspiring hope
                for those striving for a brighter tomorrow. Our journey is not
                only about building enterprises but about building people,
                nurturing dreams, and contributing to the nation’s growth in
                every step we take. Over the years, Rangiri has become a beacon of
                resilience and unity, guiding countless individuals toward
                self-reliance and success. From empowering local entrepreneurs to
                uplifting rural communities through sustainable initiatives, every
                endeavor reflects our belief that true progress lies in collective
                advancement. With innovation as our compass and integrity as our
                foundation, we continue to move forward—shaping a legacy where
                prosperity and purpose walk hand in hand.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

   {/* Section 3 */}
    <section className="px-6 md:px-30 py-20 bg-white overflow-x-hidden">

        {/* --- Stretch Tec --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Image Left */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[50px_0_0_50px] shadow-lg mx-auto md:ml-25 w-[98%] md:w-auto">
          <Image
            src={stretchTec}
            alt="Stretch Tec"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>

        {/* Text Right */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mt-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Stretch Tec (Pvt) Limited
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            Stretch Tec (Pvt) Limited was relocated under the guidance of the
            present management and has since focused on producing high-demand
            products with strict attention to quality in raw materials,
            production, and processes. Our steady growth, even through economic
            recessions and the Covid-19 period, reflects the strength of our
            systems and the dedication of our loyal team. With a mission to
            support customers in achieving their goals and competing globally,
            we continue to build success on the pillars of quality, service, and
            integrity.
          </p>
          </div>
        </div>

        {/* --- Rangiri Aqua --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Text Left */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mb-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Rangiri Aqua Edutainment Academy
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            Rangiri Aqua is a serene edutainment and recreational destination set beside 
            the tranquil Ibbankutuwa Reservoir. Spanning 15 acres of natural beauty, it offers 
            comfortable accommodation with 40 double rooms, 3 family suites, and spacious camping 
            facilities for up to 150 guests. The property features inviting restaurants and a rooftop 
            lounge that overlooks breathtaking lake views. Surrounded by fresh air and semi-wilderness, 
            Rangiri Aqua provides the ideal setting for both relaxation and adventure, with activities 
            such as archery, rafting, and fun activities that cater to guests seeking excitement 
            and tranquility alike.

          </p>
        </div>

        {/* Image Right */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[0_50px_50px_0] shadow-lg mx-auto md:mr-25 w-[98%] md:w-auto">
          <Image
            src={rangiriAqua}
            alt="Rangiri Aqua"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>
        </div>

        {/* --- Synergy --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Image Left */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[50px_0_0_50px] shadow-lg mx-auto md:ml-25 w-[98%] md:w-auto">
          <Image
            src={synergy}
            alt="Synergy"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>

        {/* Text Right */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mt-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Synergy of Heart and Soul
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            In Sri Lanka, over half a million children are identified as intellectually 
            disabled. Synergy of Heart and Soul, is a community-driven effort that welcomes 
            children of all ages, backgrounds, and cultures—reflecting our belief in unity and 
            inclusivity while serving the underprivileged. We recognize that the wellbeing of 
            a nation depends on every generation, from infants to elders, and as environmental, 
            social, and economic factors shift, it becomes our responsibility to seek solutions 
            through research and action to restore and strengthen the welfare of society.
          </p>
          </div>
        </div>

        {/* --- RMIT --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Text Left */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mb-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            RMIT Campus
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            RMIT Campus offers a diverse range of educational and vocational programs designed 
            for students and professionals seeking personal and career growth. With a focus on 
            academic excellence, language development, entrepreneurship, and workforce readiness, 
            RMIT provides learners with the skills needed to succeed in a rapidly changing world. 
            The campus also leads impactful initiatives, including vocational training for differently 
            talented children and comprehensive career guidance programs, carried out in collaboration 
            with our RMIT and REIST campuses.

          </p>
        </div>

        {/* Image Right */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[0_50px_50px_0] shadow-lg mx-auto md:mr-25 w-[98%] md:w-auto">
          <Image
            src={rmit}
            alt="RMIT Campus"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>
        </div>

        {/* --- Livinco --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Image Left */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[50px_0_0_50px] shadow-lg mx-auto md:ml-25 w-[98%] md:w-auto">
          <Image
            src={livinco}
            alt="Livinco"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>

        {/* Text Right */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mt-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Livinco International (Pvt) Ltd
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            Livinco International (Pvt) Ltd was founded in 2010 and incorporated on 28 October 
            2010 with the vision of building and selling houses in the open property market. 
            Over time, the company shifted its focus from small residential units to commercial 
            developments. Notable projects include the Rangiri Resort Hotel and Spa, twelve 
            residential apartments at Bird Park, Pitakotte, and two three-storey buildings in Makola 
            serving as the company headquarters. Though not heavily promoted through mass media, 
            Livinco has consistently remained active, delivering residential projects tailored to 
            customers’ lifestyles.
          </p>
          </div>
        </div>

        {/* --- Pulse --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Text Left */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mb-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Pulse Media TV Channel
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            Pulse Media TV Channel is dedicated to reflecting the people’s voice by building a 
            knowledgeable and resilient community capable of thriving through challenges. Through 
            its special projects, the channel focuses on programs that empower and strengthen the legal 
            framework of society.

          </p>
        </div>

        {/* Image Right */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[0_50px_50px_0] shadow-lg mx-auto md:mr-25 w-[98%] md:w-auto">
          <Image
            src={pulse}
            alt="Pulse TV"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>
        </div>

        {/* --- Drug Mart --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Image Left */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[50px_0_0_50px] shadow-lg mx-auto md:ml-25 w-[98%] md:w-auto">
          <Image
            src={drugmart}
            alt="Drug Mart"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>

        {/* Text Right */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mt-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Drug Mart
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            Our Pharmaceutical Chain supplies high-quality pharmaceutical and consumer products, 
            offering drugs, groceries, and perishables under one roof through a unique ‘Farm to Plate’ 
            concept. Special projects include conducting awareness sessions to promote protection against 
            non-infectious diseases, delivered through BS Pharma & Grocery Marts and four Drug Mart locations.
          </p>
          </div>
        </div>

        {/* --- Nishu --- */}
        <div className="grid md:grid-cols-2 items-center mb-5 md:mb-20">
        {/* Text Left */}
        <div className="bg-gray-100 shadow-md p-6 border border-gray-200 mb-1 md:mt-0 mx-auto w-[98%] md:w-auto h-auto md:h-auto md:py-8">
          <h2 className="text-lg md:text-3xl font-semibold text-red-900 py-1 md:py-5">
            Nishu Creation (Pvt) Ltd
          </h2>
          <p className="text-gray-700 text-xs md:text-base leading-relaxed text-justify">
            Nishu Creations is a technology-driven printing solutions provider specializing in RFID smart printing, 
            barcode printing, and custom label production. We deliver innovative and affordable printing solutions 
            designed to meet the evolving needs of modern businesses. With a focus on precision, durability, and smart 
            technology integration, we provide end-to-end printing services that enhance product tracking, security, 
            and brand presentation. Our advanced equipment and skilled team ensure every project meets the highest 
            standards of quality and reliability. At Nishu Creations, we combine innovation, affordability, and 
            excellence to help businesses print smarter, faster, and more efficiently.
          </p>
        </div>

        {/* Image Right */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[0_50px_50px_0] shadow-lg mx-auto md:mr-25 w-[98%] md:w-auto">
          <Image
            src={nishu}
            alt="Nishu Creations"
            className="object-cover w-full h-[150px] md:h-[350px] opacity-90"
          />
        </div>
        </div>

    {/* Section 4 */}
    <section className="py-10 bg-gray-50">
      <h2 className="text-center text-lg md:text-2xl font-bold mb-6 text-red-900">Our Partners</h2>
      <div className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-20 pb-5">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center w-36 h-30 bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>


        









    </section>
    </>
  );
}
