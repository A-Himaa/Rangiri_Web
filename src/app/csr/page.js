"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import sec1img from "../../../public/Assets/csr/csr_bg.jpg";
import sec2img from "../../../public/Assets/home_sec4_bg.jpg";
import synergylogo from "../../../public/Assets/csr/synergy_logo.png";
import visionImg from "../../../public/Assets/csr/vision.jpg";
import missionImg from "../../../public/Assets/csr/mission.jpg";
import g1 from "../../../public/Assets/csr/gallery1.jpg";
import g2 from "../../../public/Assets/csr/gallery2.jpg";
import g3 from "../../../public/Assets/csr/gallery3.jpg";
import g4 from "../../../public/Assets/csr/gallery4.jpg";
import g5 from "../../../public/Assets/csr/gallery5.jpg";
import g6 from "../../../public/Assets/csr/gallery6.jpg";
// import g7 from "../../../public/Assets/csr/gallery7.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function csr() {
  return (
    <>
    {/* Section 1*/}
    <main className="relative h-[30vh] w-full flex overflow-hidden">
      <Image
        src={sec1img}
        alt="contact background"
        fill
        className="object-cover object-center"
        style={{ filter: "blur(1px)" }} 
        priority
    />
    
    <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-900 to-stone-700 opacity-50" />
    
    <div className="relative z-10 text-2xl md:text-5xl font-bold text-white pt-30 md:pt-35 pl-20">
      CSR
    </div>
    </main>   

    {/* Section 2 */}
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden"> 
      <Image 
        src={sec2img}
        alt="Section background"
        fill
        className="object-cover object-left opacity-10"
        priority
      />
      <div className="max-w-6xl mx-auto text-center mt-50 md:-mt-20">
        <div className="flex flex-col items-center">
          <Image
            src={synergylogo}
            alt="Rangiri Logo"
            width={700}
            height="auto"
          />
         <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-lg px-8">
           According to world statistics, Sri Lanka is home to more than half a million 
           children living with intellectual disabilities. In response to this reality, 
           the Institute for Research and Expedition of Social Attitudes and Cognitive 
           Tendencies was founded as an umbrella organization to bring together passionate 
           volunteer scholars—much like birds of the same feather flocking together—united 
           in their pursuit of meaningful research, exploration, and social change.
           <br />
           <br />
           One of the most compassionate initiatives under this institute is Synergy of 
           Heart and Soul, a community-driven endeavor dedicated to children from all walks 
           of life. Regardless of age, race, or background, this initiative reflects our belief 
           in the power of unity, inclusivity, and human connection. It creates a safe and nurturing 
           environment for underprivileged children, offering them not just care, but also the chance 
           to be part of a greater multicultural bond that celebrates diversity and togetherness.
           <br />
           <br />
           We firmly believe that the true development of a nation is measured by the wellbeing of 
           its people—its infants, youth, adults, and elders alike. As economic, social, and environmental 
           challenges arise, they can either weaken or strengthen these foundations of society. It is therefore 
           our mission to seek remedies through research and action—across social, economic, and public health 
           sectors—so that we may restore balance, uplift communities, and ensure the lasting welfare, or eudaemonia, 
           of society.
           </p>
        </div>
      </div>
    </section> 

    {/* Section 3 */}
    <section className="px-8 py-4 md:py-30 bg-white text-gray-800">
      {/* Vision */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 border border-gray-200"
      >
        <div className="md:w-1/2">
          <Image
            src={visionImg}
            alt="Our Vision"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="md:w-1/2 p-8 text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-[#a8322d] mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-lg  text-justify">
            Our vision is to make this world a better place for children living with special needs through
            compassion, inclusion, and empowerment. We strive to create an equal platform for them to realize
            their true potential, inspiring a society of care and collective uplift in quality of life.
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 border border-gray-200"
      >
        <div className="md:w-1/2">
          <Image
            src={missionImg}
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-[#a8322d] mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-lg text-justify">
            The mission of Synergy of Heart & Soul is to bridge communities and promote inclusion for children
            with disabilities. We aim to create awareness, extend care, and engage the corporate sector and
            volunteers to build sustainable systems that help enhance the confidence and happiness of every
            child.
          </p>
        </div>
      </motion.div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-[#a8322d] mb-8"
        >
          Gallery
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[g1, g2, g3, g4, g5, g6].map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
