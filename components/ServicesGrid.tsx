"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Root Canal Treatment", img: "/services/root-canal.jpg" },
  { title: "Teeth Extractions", img: "/services/extraction.jpg" },
  { title: "Dental Implants", img: "/services/implants.jpg" },
  { title: "Clear Aligners", img: "/services/aligners.jpg" },
  { title: "Pediatric Dentistry", img: "/services/pediatric.jpg" },
  { title: "Gum Treatment", img: "/services/gums.jpg" },
  { title: "Smile Design", img: "/services/smile-design.jpg" },
  { title: "Full Mouth Rehabilitation", img: "/services/full-mouth.jpg" },
  { title: "Prosthodontics", img: "/services/prosthodontics.jpg" },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/patterns/services-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Frost Overlay */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1.2px]"></div>

      {/* Animated background glow shapes */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-10 left-20"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-100/20 rounded-full blur-3xl bottom-10 right-20"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative text-center text-4xl font-extrabold text-gray-900 mb-20 tracking-wide z-10"
      >
        Our <span className="text-blue-600">Services</span>
      </motion.h2>

      {/* SERVICES GRID */}
     <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center z-10">

        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative group cursor-pointer flex flex-col items-center"
            >
              {/* Rotating Golden Halo */}
              <motion.div
                className="absolute w-44 h-44 rounded-full bg-yellow-300/20 blur-xl z-0"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              />

              {/* Outer Gold Ring Animation */}
              <motion.div
                className="absolute w-44 h-44 rounded-full border-2 border-yellow-400/0 group-hover:border-yellow-400/60 transition-all duration-500 z-10"
              />

              {/* SERVICE IMAGE CIRCLE */}
              <div
                className="relative w-44 h-44 rounded-full overflow-hidden shadow-lg 
                border border-white/60 bg-white/30 backdrop-blur-md
                transition-all duration-300
                group-hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]
                group-hover:border-yellow-400"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover 
                  group-hover:scale-110 transition-all duration-700"
                />

                {/* GLASS REFLECTION SWEEP */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="absolute inset-y-0 w-20 bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent blur-lg"
                />
              </div>

              {/* TITLE PILL */}
              <div
                className="mt-5 px-5 py-2 rounded-full bg-white/85 backdrop-blur-md 
                border border-yellow-300/70 shadow-md flex items-center justify-center
                transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,215,0,0.8)]"
              >
                <span
                  className="text-black font-extrabold uppercase text-xs tracking-wider
                  drop-shadow-[0_0_6px_rgba(255,215,0,0.9)]"
                >
                  {service.title}
                </span>
              </div>

              {/* Micro Pulse Aura */}
              <motion.div
                className="absolute w-44 h-44 rounded-full bg-yellow-300/10 blur-xl z-0"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
