"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import sec1img from "../../../public/Assets/contact/contact_bg.jpg";
import sec2img from "../../../public/Assets/home_sec4_bg.jpg";

export default function ContactUs() {
  return (
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
      Contact
    </div>
    </main> 

    {/* Section 2 */}
    <section className="relative md:h-[130vh] w-full flex items-center justify-center overflow-hidden"> 
      <Image 
        src={sec2img}
        alt="Background Image"
        fill
        className="object-cover object-left opacity-10"
        priority
      />

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 md:-mt-20">

     {/* Left: Contact Form */}
      <div className="bg-white mt-10 md:mt-0 px-8">
        <p className="text-gray-500 text-sm md:text-base mb-10 text-justify">
          At Rangiri Holdings, we value the voices of our stakeholders and
          customers. You are the driving force behind our journey of growth
          and success. If you have any questions or inquiries, we would love
          to hear from you. Our team is dedicated to providing timely and
          personalized responses to your messages.
        </p>

        <form className="md:space-y-7">
        <div>
          <label className="block text-sm md:text-xl font-bold text-gray-700 mb-3">
           First Name:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
        </div>

        <div>
          <label className="block text-sm md:text-xl font-bold text-gray-700 mb-3">
           Last Name:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
        </div>

        <div>
          <label className="block text-sm md:text-xl font-bold text-gray-700 mb-3">
            Email:
          </label>
          <input
           type="email"
           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />
        </div>

        <div>
          <label className="block text-sm md:text-xl font-bold text-gray-700 mb-3">
            Message:
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-700"
            ></textarea>
        </div>   
        </form>
      </div>

     {/* Right: Contact Info */}
      <div className="bg-white space-y-2 md:space-y-4 px-8">
      {/* Phone */}
        <div className="flex items-center gap-3">
        <div className="flex items-center justify-center bg-gray-200 px-5 py-5 rounded-md border border-gray-300">
          <FaPhoneAlt className="text-[#7b3f2f] text-xl" />
        </div>
          <div className="bg-gray-200 w-full text-center py-4 rounded-md border border-gray-300">
            <span className="text-gray-700 text-sm md:text-lg">+94 112 962 656</span>
          </div>
        </div>

      {/* Email */}
        <div className="flex items-center gap-3">
        <div className="flex items-center justify-center bg-gray-200 px-5 py-5 rounded-md border border-gray-300">
          <HiMail className="text-[#7b3f2f] text-xl" />
        </div>
         <div className="bg-gray-200 w-full py-4 text-center rounded-md border border-gray-300">
            <span className="text-gray-700 text-sm md:text-lg">info@rangiriholdings.com</span>
         </div>
        </div>

      {/* Address */}
        <div className="flex items-center gap-3">
        <div className="flex items-center justify-center bg-gray-200 w-full py-4 rounded-md border border-gray-300">
          <FaMapMarkerAlt className="text-[#7b3f2f] text-2xl" />
        </div>
        </div>

        <div className="bg-gray-200 px-4 py-4 rounded-md border border-gray-300 text-gray-700 leading-relaxed">
          <p className="font-semibold text-[#7b3f2f] mb-1 text-sm md:text-lg">
            Rangiri Holdings (Pvt) Ltd.
          </p>
          <p className="text-sm md:text-base">
           No. 493 / 5, <br />
           Makola North, <br />
           Makola - 11640, <br />
           Sri Lanka
          </p>
        </div>

      {/* Socials */}
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-center bg-gray-200 px-5 py-3 rounded-md border border-gray-300">
            <h3 className="font-semibold text-[#7b3f2f] text-sm md:text-lg">Follow Us</h3>
          </div>

        <div className="flex items-center justify-center bg-gray-200 py-3 md:py-6 px-4 rounded-md border border-gray-300">
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 bg-[#7b3f2f] rounded-md hover:bg-[#5a2c1f] transition"
            >
              <FaFacebookF className="text-white text-md md:text-xl" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#7b3f2f] rounded-md hover:bg-[#5a2c1f] transition"
            >
              <FaInstagram className="text-white text-md md:text-xl" />
            </a>
            <a
              href="#"
              className="p-2 bg-[#7b3f2f] rounded-md hover:bg-[#5a2c1f] transition"
            >
              <FaLinkedinIn className="text-white text-md md:text-xl" />
            </a>
          </div>
        </div>
        </div>

        <button
          type="submit"
          className="bg-[#7b3f2f] text-white font-semibold px-8 py-2 mb-5 md:py-3 rounded-md hover:bg-[#5a2c1f] transition"
        >
           Send Message
        </button>
      </div>
    </div>
    </section>        

    {/* Section 3*/}
    <section className="relative w-full h-[600px] mb-20">
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.253715767275!2d79.9561864!3d6.9793608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2574a257c1d17%3A0x313187613eb6aa19!2sRangiri%20Holdings%20Private%20Limited!5e0!3m2!1sen!2slk!4v1761115241525!5m2!1sen!2slk"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
    </>
  );
}
