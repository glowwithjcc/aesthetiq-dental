"use client";

import { motion } from "framer-motion";

const reviews = [
  { img: "/reviews/rev1.jpg" },
  { img: "/reviews/rev2.jpg" },
  { img: "/reviews/rev3.jpg" },
  { img: "/reviews/rev4.jpg" },
  { img: "/reviews/rev5.jpg" },
  { img: "/reviews/rev6.jpg" },
  { img: "/reviews/rev7.jpg" },
  { img: "/reviews/rev8.jpg" },
  { img: "/reviews/rev9.jpg" },
  { img: "/reviews/rev10.jpg" },
];

export default function ReviewMarquee() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/patterns/emerald-marble.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-yellow-300 text-4xl md:text-5xl font-bold tracking-wide text-center mb-14"
        >
          ⭐ WHAT OUR PATIENTS SAY ABOUT US ⭐
        </motion.h2>

        {/* AUTO SCROLL MARQUEE */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-10 items-center"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {reviews.map((rev, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="
                  min-w-[350px] max-w-[370px]
                  rounded-2xl overflow-hidden
                  bg-white/10 backdrop-blur-md
                  border border-yellow-300/40
                  shadow-[0_0_25px_rgba(255,215,0,0.30)]
                  relative
                "
              >
                {/* REVIEW IMAGE */}
                <img
                  src={rev.img}
                  alt="Review Screenshot"
                  className="w-full h-full object-cover"
                />

                {/* Spotlight Gold Shimmer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="
                    absolute inset-0 
                    rounded-2xl 
                    bg-gradient-to-br from-yellow-300/20 to-transparent 
                    pointer-events-none
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
