"use client";
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
import arrow from "../../../public/Assets/arrow.png";


export default function Companies() {
  return (
  <>

  {/* Section 1 */}
  <main className="relative h-[30vh] w-full flex overflow-hidden">
    <Image
      src={sec1img}
      alt="company background"
      fill
      className="object-cover object-center"
      style={{ filter: "blur(1px)" }} 
      priority
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-900 to-stone-700 opacity-50" />

    {/* Text */}
    <div className="relative z-10 text-5xl font-bold text-white pt-35 pl-20">
      Our Companies
    </div>
  </main>

  {/* Section 2 */}
  <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
  
    <Image 
      src={sec2img}
      alt="Section background"
      fill
      className="object-cover object-left opacity-12"
      priority
    />

    <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-900 to-stone-700 opacity-30" />

    <motion.div
      className="relative z-10 text-white px-6 md:px-35 text-center"
      initial={{ opacity: 0, y: 30 }}      
      animate={{ opacity: 1, y: 0 }}       
      transition={{ duration: 1, ease: "easeOut" }} 
    >
      <motion.h1
        className="text-3xl md:text-5xl font-semibold mb-15 text-red-900 -mt-10"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        One Vision, Many Ventures
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Image src={logo} alt="Company logo" width={330} height="auto" />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <p className="text-semi-bold md:text-xl leading-loose tracking-wide text-gray-800 text-justify">
            The name “Rangiri” has grown to represent trust, progress, and shared purpose across Sri Lanka, 
            touching lives beyond boundaries. More than a business, we have become a symbol of opportunity—creating 
            livelihoods, empowering communities, and inspiring hope for those striving for a brighter tomorrow. 
            Our journey is not only about building enterprises but about building people, nurturing dreams, 
            and contributing to the nation’s growth in every step we take.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>

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

  {/* Section 3 */}
  <section className="px-6 md:px-25 py-20 bg-white">

      {/* --- Stretch Tec --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 50, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="overflow-hidden rounded-[50px_0_0_50px] shadow-lg ml-20">
          <Image
            src={stretchTec}
            alt="Stretchtec Factory"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>

        <div className="shadow-md p-8 border border-gray-200 mr-15 bg-gray-100 h-[420px] -mr-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            Stretchtec (Pvt) Limited
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Stretchtec (Pvt.) Ltd. was relocated under the guidance of the present
            management and has since focused on producing high-demand products with
            strict attention to quality in raw materials, production, and processes.
            Our steady growth, even through economic recessions and the Covid-19
            period, reflects the strength of our systems and the dedication of our
            loyal team. With a mission to support customers in achieving their goals
            and competing globally, we continue to build success on the pillars of
            quality, service, and integrity.
          </p>
        </div>
      </motion.div>

      {/* --- Rangiri Aqua --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 25, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="bg-gray-100 shadow-md p-8 border border-gray-200 h-[420px] order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            Rangiri Aqua Edutainment Academy
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
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
        <div className="overflow-hidden rounded-[0_50px_50px_0] shadow-lg order-1 md:order-2 mr-25">
          <Image
            src={rangiriAqua}
            alt="Rangiri Aqua"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>
      </motion.div>

      {/* --- Synergy --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 50, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="overflow-hidden rounded-[50px_0_0_50px] shadow-lg ml-20">
          <Image
            src={synergy}
            alt="Synergy"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>

        <div className="shadow-md p-8 border border-gray-200 mr-15 bg-gray-100 h-[420px] -mr-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            Synergy of Heart and Soul
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            In Sri Lanka, over half a million children are identified as intellectually 
            disabled. Synergy of Heart and Soul, is a community-driven effort that welcomes 
            children of all ages, backgrounds, and cultures—reflecting our belief in unity and 
            inclusivity while serving the underprivileged. We recognize that the wellbeing of 
            a nation depends on every generation, from infants to elders, and as environmental, 
            social, and economic factors shift, it becomes our responsibility to seek solutions 
            through research and action to restore and strengthen the welfare of society.
          </p>
        </div>
      </motion.div>

      {/* --- RMIT Campus --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 25, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="bg-gray-100 shadow-md p-8 border border-gray-200 h-[420px] order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            RMIT Campus
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
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
        <div className="overflow-hidden rounded-[0_50px_50px_0] shadow-lg order-1 md:order-2 mr-25">
          <Image
            src={rmit}
            alt="RMIT"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>
      </motion.div>

      {/* --- Livinco --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 50, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="overflow-hidden rounded-[50px_0_0_50px] shadow-lg ml-20">
          <Image
            src={livinco}
            alt="Livinco"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>

        <div className="shadow-md p-8 border border-gray-200 mr-15 bg-gray-100 h-[420px] -mr-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            Livinco International (Pvt) Ltd
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
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
      </motion.div>

      {/* --- Pulse --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 25, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="bg-gray-100 shadow-md p-8 border border-gray-200 h-[420px] order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            Pulse Media TV Channel
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Pulse Media TV Channel is dedicated to reflecting the people’s voice by building a 
            knowledgeable and resilient community capable of thriving through challenges. Through 
            its special projects, the channel focuses on programs that empower and strengthen the legal 
            framework of society.
          </p>
        </div>

        {/* Image Right */}
        <div className="overflow-hidden rounded-[0_50px_50px_0] shadow-lg order-1 md:order-2 mr-25">
          <Image
            src={pulse}
            alt="Pulse TV"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>
      </motion.div>

      {/* --- Pharmacy --- */}
      <motion.div 
        className="grid md:grid-cols-2 items-center mb-20"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 50, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{once: true}}>

        <div className="overflow-hidden rounded-[50px_0_0_50px] shadow-lg ml-20">
          <Image
            src={drugmart}
            alt="Drug Mart"
            className="object-cover w-full h-[300px] md:h-[350px] opacity-90"
          />
        </div>

        <div className="shadow-md p-8 border border-gray-200 mr-15 bg-gray-100 h-[420px] -mr-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-900 mb-4 py-5">
            Drug Mart - Pharmaceutical Chain
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our Pharmaceutical Chain supplies high-quality pharmaceutical and consumer products, 
            offering drugs, groceries, and perishables under one roof through a unique ‘Farm to Plate’ 
            concept. Special projects include conducting awareness sessions to promote protection against 
            non-infectious diseases, delivered through BS Pharma & Grocery Marts and four Drug Mart locations.
          </p>
        </div>
      </motion.div>
    </section> 


    {/* Section 4 */}
    {/* <div className="">

    </div> */}




    </>
      
    
  );
}
