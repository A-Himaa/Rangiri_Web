"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import logo from "../../public/Assets/main_logo.png";
import sec2image from "../../public/Assets/home_sec2_bg.jpg";
import sec3image from "../../public/Assets/home_sec3_bg.png";
import sec4image from "../../public/Assets/home_sec4_bg.jpg";
import sec5image from "../../public/Assets/home_bg_sec5.png";
import apparel from "../../public/Assets/Cards1/apparel.jpeg";
import leisure from "../../public/Assets/Cards1/leisure.jpg";
import learning from "../../public/Assets/Cards1/learning.jpg";
import living from "../../public/Assets/Cards2/livinco.jpg";
import media from "../../public/Assets/Cards1/media.jpg";
import health from "../../public/Assets/Cards1/health.jpg";
import arrow from "../../public/Assets/arrow.png";
import st from "../../public/Assets/Cards2/stretchTec.jpg";
import ra from "../../public/Assets/Cards2/rangiriAqua.jpg";
import sh from "../../public/Assets/Cards2/synergy.jpeg";
import pl from "../../public/Assets/Cards2/pulse.png";
import lv from "../../public/Assets/Cards2/livinco.jpg";
import dm from "../../public/Assets/Cards2/drugMart.jpg";
import icon1 from "../../public/Assets/sustainability.png";
import icon2 from "../../public/Assets/social-justice.png";
import icon3 from "../../public/Assets/eco-world.png";

export default function Home() {
  // Scrolling
   const [offsetY, setOffsetY] = useState(0);
   const scrollRef = useRef(null);

  //  Counting Section
   const stats = [
    { value: 20, label1: "Corporate", label2: "Clients", suffix: "+" },
    { value: 400, label1: "Training", label2: "Programs", suffix: "+" },
    { value: 15000, label1: "Individuals", label2: "Trained", suffix: "+" },
    { value: 30, label1: "CSR", label2: "Projects", suffix: "+" },
  ];

  //  Description for Cards
   const cards = [
    {
      src: st,
      title: "Stretch Tech",
      desc: "Stretch Tech stands at the forefront of innovation, specializing in both elastic and non-elastic looming to deliver precision, strength, and quality in every weave."
    },
    {
      src: ra,
      title: "Rangiri Aqua Edutainment Academy",
      desc: "Rangiri Aqua is a serene lakeside destination offering edutainment, adventure, and relaxation under the Rangiri Holdings umbrella."
    },
    {
      src: sh,
      title: "Synergy of Heart & Soul",
      desc: "A community initiative uplifting underprivileged and intellectually disabled children through care, inclusion, and research."
    },
    {
      src: pl,
      title: "Pulse Media Corporation (Pvt) Ltd",
      desc: "A dynamic media platform by Rangiri Holdings, delivering engaging educational and entertainment content that inspires and informs audiences across Sri Lanka."
    },
    {
      src: lv,
      title: "Livinco Construction",
      desc: "Livinco has developed quality residential and commercial spaces, including Rangiri Resort Hotel & Spa, combining comfort, style, and modern living."
    },
    {
      src: dm,
      title: "Drug Mart",
      desc: "A trusted pharmaceutical and wellness retailer dedicated to providing quality medicines, healthcare products, and professional service for healthier communities."
    },
  ];

  const items = [
    {
      img: icon1,
      desc: "Driving prosperity that benefits businesses, people, and communities alike."
    },
    {
      img: icon2,
      desc: "Placing human values, inclusive, and care at the core of everything we do."
    },
    {
      img: icon3,
      desc: "Championing sustainability through mindful use of resources and reduced environmental impact."
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
      <motion.section 
            className="relative -mt-4 md:-mt-10 z-10 px-8 md:px-38"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 1, ease: "easeOut"}}
            viewport={{once: false, amount: 0.5}}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 bg-stone-100 rounded-4xl shadow-2xl overflow-hidden">

      {/* Left content */}
      <div className="px-5 pt-5 md:p-15 flex items-center">
        <p className="text-gray-600 font-bold text-3xl leading-wide">
          The Mission can't be claimed as a single loop. It's a collaboration of many loops.
        </p>
      </div>

      {/* Right content */}
      <div className="p-5 md:p-15 flex items-center">
        <p className="text-gray-500 font-semi-bold text-lg text-justify tracking-wide">
          Our Mission is to satisfy all our customers by providing over & above their requirements profitably, but with products of superior quality, services and competitive prices for them to progress with the global competition.
        </p>
      </div>
  </div>
      </motion.section>

      {/* FORTH SECTION */}
      <section>
        <div className="relative -mt-48 h-[120vh] md:h-[98vh] ">
          <Image
            src={sec3image}
            alt="section3 background"
            fill
            className="object-cover object-center opacity-15 overflow-hidden"
          />
          <div className="absolute z-10 mt-60 px-5 md:px-40 text-center ">

            <motion.h1 
              className="text-2xl md:text-4xl text-red-900 font-bold"
              initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
              viewport={{once: true, amount: 0.4}}>
              Rangiri Holdings (PVT) Ltd.
            </motion.h1>

            <motion.h3 
              className="text-lg md:text-2xl text-orange-900 font-semi-bold md:font-bold opacity-90 md:py-3"
              initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
              viewport={{once: true, amount: 0.4}}>
                Building a legacy of growth, innovation, and sustainability in Sri Lanka.
              </motion.h3>

            <motion.div
              initial= {{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay:0.3, duration: 0.8, ease: "easeOut"}}
              viewport={{once: true, amount: 0.4}}>
                <p className="text-sm md:text-lg font-semi-bold text-justify pt-5 text-gray-700">The spark that ignited Rangiri Holdings was not just ambition—it was a vision rooted in community, innovation, and resilience. Founded by Mr. Nihal Pathirage, whose leadership qualities were evident even in his school days, Rangiri Holdings emerged as a dynamic force in Sri Lanka’s corporate landscape. What began as a modest entrepreneurial endeavor has evolved into a multifaceted conglomerate, driven by a deep commitment to national progress and social upliftment.</p>
                <p className="text-sm md:text-lg font-semi-bold text-justify pt-2 text-gray-700">From its early steps in apparel and accessories manufacturing to its expansion into housing, construction, security services, education, and leisure, Rangiri Holdings has never been content with the ordinary. Each venture reflects a synergy of heart and soul, blending business acumen with a humanistic approach that values diversity, discipline, and development.</p>
                <p className="text-sm md:text-lg font-semi-bold text-justify pt-2 text-gray-700">Today, Rangiri Holdings stands tall as a cluster of thriving entities—each one contributing to the broader mission of empowering communities and elevating Sri Lanka’s economic stature. Whether through the vibrant energy of Action Park, the precision of Nishu Creations, or the transformative work of Livinco International, Rangiri continues to redefine what it means to be a modern Sri Lankan enterprise.</p>
                <p className="text-sm md:text-lg font-semi-bold text-justify pt-2 text-gray-700">With a future-focused mindset and a legacy built on integrity, Rangiri Holdings is not just a business—it’s a movement. A movement toward excellence, inclusivity, and sustainable growth.</p>
            </motion.div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="flex items-center justify-center">
          <button className="-mt-7 z-10 flex items-center gap-3 bg-orange-900 rounded-full text-xl text-white font-bold px-7 py-3 opacity-80 hover:opacity-100 transform hover:scale-105 transition duration-400 ease-in-out">
              Read more
          <Image 
            src={arrow}
            alt="arrow icon"
            className="w-5 h-5 object-contain"
          />
          </button>
        </div>  
      </section>

      {/* FIFTH SECTION */}
      <section className="relative md:-mt-6">
        {/* Background image */}
        <Image
          src={sec4image}
          alt="Section 4"
          className="object-cover object-center w-full h-[90vh] opacity-10"
        />

        {/* Overlay container */}
        <div className="absolute md:absolute inset-0 flex flex-col items-center justify-center md:space-y-12 px-6">
          
          {/* Title */}
          <div className="flex items-center w-full justify-center gap-6 md:px-8 text-center">
            <hr className="w-1/4 md:border-t-2 border-gray-300" />
            <h1 className="text-2xl md:text-4xl font-bold text-gray-600 tracking-wide uppercase">
              Our Sectors
            </h1>
            <hr className="w-1/4 md:border-t-2 border-gray-300" />
          </div>

          {/* Cards Section */}
          <div className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl opacity-90">
              {/* Card 1 */}
              <div className="h-20 md:h-full relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-400">
                <Image src={apparel} alt="Apparel" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                  <h2 className="text-2xl font-bold">Garment & Apparel</h2>
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-20 md:h-full relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-400">
                <Image src={leisure} alt="Leisure" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                  <h2 className="text-2xl font-bold">Leisure & Relaxation</h2>
                </div>
              </div>

              {/* Card 3 */}
              <div className="h-20 md:h-full relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-400">
                <Image src={learning} alt="Learning" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                  <h2 className="text-2xl font-bold">Learning & Development</h2>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl">
              {/* Card 4 */}
              <div className="h-20 md:h-full relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image src={living} alt="Living" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                  <h2 className="text-2xl font-bold">Living Solutions</h2>
                </div>
              </div>

              {/* Card 5 */}
              <div className="h-20 md:h-full relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image src={media} alt="Media" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                  <h2 className="text-2xl font-bold">Media & Printing</h2>
                </div>
              </div>

              {/* Card 6 */}
              <div className="h-20 md:h-full relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <Image src={health} alt="Health" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                  <h2 className="text-2xl font-bold">Health Care</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIXTH SECTION */}
      <section className="relative">
      
       <Image 
          src={sec4image}
          alt="Section 4"
          className="object-cover object-center w-full opacity-8 mt-40 h-[85vh]"
          style={{ transform: 'rotate(180deg)' }}
        />

      <div className="absolute inset-0 -mt-45 px-5 md:px-55">
      {/* Heading */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <hr className="w-1/4 border-t-2 border-gray-300" />
        <h1 className="text-4xl font-bold text-gray-600 tracking-wide uppercase">Our Strength</h1>
        <hr className="w-1/4 border-t-2 border-gray-300" />
      </div>

      {/* Paragraph */}
      <p className="text-center text-gray-500 text-lg mb-15 px-10">
        “ Our diversified group is built on trust, innovation, and excellence, bringing together businesses across multiple industries to create sustainable value for communities and partners. “
      </p>

      {/* Carousel */}
      <div className="relative">
        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute md:-left-15 top-1/2 -translate-y-1/2 z-10 bg-gray-600 opacity-40 text-white p-3 rounded-full hover:bg-gray-900 transition"
        >
          <FaChevronLeft size={22} />
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 pb-5"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={card.src}
                alt={card.title}
                className="w-full h-50 object-cover opacity-90"
              />
              <div className="p-5 text-center no-scrollbar">
                <h2 className="text-2xl font-bold text-gray-700 mb-2">{card.title}</h2>
                <p className="text-gray-600 text-sm md:text-lg">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 md:-right-15 top-1/2 -translate-y-1/2 z-10 bg-gray-600 opacity-40 text-white p-3 rounded-full hover:bg-gray-900 transition"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

    
    </div>
      </section>

      {/* Counting Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-white">
      
      <Image
        src={sec5image}
        alt="Our Impact"
        fill
        className="object-cover object-center opacity-70"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full md:px-12 px-5 grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-5">
        
        {/* Left Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
            OUR <br /> IMPACT IN <br /> NUMBERS
          </h2>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border-5 border-white flex flex-col items-center justify-center py-8 px-4 bg-black/30 backdrop-blur-sm"
            >
              <h3 className="text-4xl font-bold mb-2">
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                  enableScrollSpy
                />
              </h3>
              <p className="text-center text-sm md:text-xl font-medium">
                {item.label1} <br /> {item.label2}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

    
    <motion.section 
            className="relative -mt-10 z-10 px-8 md:px-38"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 1, ease: "easeOut"}}
            viewport={{once: false, amount: 0.5}}>
      <div className="relative bg-stone-100 rounded-4xl shadow-2xl overflow-hidden">

      <div className="p-15 flex items-center">
        <p className="text-gray-500 font-bold text-xl text-center tracking-wide">
          By 2030, our mission  is to design and carry out road maps that support Rangiri Holdings' objective of expanding its business portfolio while protecting sustainability and national interests
        </p>
      </div>

  </div>
    </motion.section>


    {/* Final Section */}
    <motion.section 
      className="py-20 px-10 bg-gray-50 mt-10"
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.2, duration: 1, ease: "easeOut"}}
      viewport={{once: false, amount: 0.5}}>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-transparent overflow-hidden "
            >
              <Image
                src={item.img}
                alt="icons"
                className="w-30 mx-auto"
              />
              <div className="p-6 text-center">
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>









    </>
  );

}