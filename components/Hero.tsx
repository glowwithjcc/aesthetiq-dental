"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useBooking } from "./BookingContext";

export default function Hero() {
  const { openBooking } = useBooking(); // ← GLOBAL BOOKING TRIGGER

  // Scroll Parallax
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 300], [0, -60]);
  const glowY = useTransform(scrollY, [0, 300], [0, -30]);
  const videoScale = useTransform(scrollY, [0, 200], [1, 1.15]);

  // Cursor Parallax
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center select-none">

      {/* BACKGROUND VIDEO */}
      <motion.video
        src="/videos/clinic-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        style={{ scale: videoScale }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

      {/* GOLDEN AURA */}
      <motion.div
        className="absolute w-[700px] h-[200px] bg-yellow-400/20 blur-[100px] rounded-full"
        style={{ y: glowY, x: cursor.x * 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 2 }}
      />

      {/* FLOATING ORBS */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/30 rounded-full blur-md"
          style={{
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* MAIN BLOCK */}
      <motion.div
        className="relative z-10 max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        style={{ y: textY }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)] tracking-tight"
          whileHover={{ scale: 1.02, letterSpacing: "0.5px" }}
        >
          AesthetiQ Dental Clinic
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-100 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Premium • Ethical • Painless Dentistry by Dr. Praveena Devi
        </motion.p>

        {/* BOOK NOW BUTTON */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.button
            onClick={openBooking}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-white/10 border border-white/30 backdrop-blur-md 
                       text-white rounded-xl shadow-lg hover:bg-white/20 transition relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                             translate-x-[-100%] hover:translate-x-[100%] transition duration-700"></span>
            Book Appointment
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
