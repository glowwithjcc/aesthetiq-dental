"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/dental-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to adjust brightness */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-6xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-xl"
        >
          AesthetiQ Dental Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-lg"
        >
          Premium, ethical and luxury dental care in Chennai —  
          where science meets aesthetics.
        </motion.p>

        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 px-6 py-3 bg-[#1C4E80] text-white font-semibold rounded-lg shadow-lg hover:bg-[#163A60] transition"
        >
          Explore Services
        </motion.a>
      </div>
    </section>
  );
}
