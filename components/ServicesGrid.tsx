"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Root Canal Treatment", img: "/services/root-canal.jpg" },
  { title: "Teeth Extractions", img: "/services/extractions.jpg" },
  { title: "Dental Implants", img: "/services/implants.jpg" },
  { title: "Clear Aligners", img: "/services/aligners.jpg" },
  { title: "Pediatric Dentistry", img: "/services/pediatric.jpg" },
  { title: "Gum Treatment", img: "/services/gum.jpg" },
  { title: "Smile Design", img: "/services/smile.jpg" },
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
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1.2px]" />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative text-center text-4xl font-extrabold text-gray-900 mb-20 tracking-wide z-10"
      >
        Our <span className="text-blue-600">Services</span>
      </motion.h2>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center z-10">

        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative group cursor-pointer flex flex-col items-center"
            >
              {/* Golden Halo */}
              <motion.div
                className="absolute w-[240px] h-[240px] rounded-[24px] bg-yellow-300/20 blur-xl -z-10"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Square Card */}
              <div
                className="relative w-[240px] h-[240px] rounded-[22px] overflow-hidden 
                shadow-lg border border-white/60 bg-white/30 backdrop-blur-md
                transition-all duration-300
                group-hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]
                group-hover:border-yellow-400"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* Reflection Sweep */}
                <motion.div
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="absolute inset-y-0 w-28 bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent blur-lg z-10"
                />
              </div>

              {/* Title Pill */}
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
            </motion.div>
          </Link>
        ))}

      </div>
    </section>
  );
}
