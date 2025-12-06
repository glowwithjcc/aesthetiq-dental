"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cases = [
  { before: "/before-after/case1-before.jpg", after: "/before-after/case1-after.jpg" },
  { before: "/before-after/case2-before.jpg", after: "/before-after/case2-after.jpg" },
  { before: "/before-after/case3-before.jpg", after: "/before-after/case3-after.jpg" },
  { before: "/before-after/case4-before.jpg", after: "/before-after/case4-after.jpg" },
  { before: "/before-after/case5-before.jpg", after: "/before-after/case5-after.jpg" },
];

export default function BeforeAfterSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/patterns/before-after-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Frost Layer */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-extrabold text-gray-900 relative z-10 mb-16"
      >
        Before <span className="text-blue-600">&</span> After
      </motion.h2>

      {/* CENTERED WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-14">
        {cases.map((item, index) => (
          <RevealCard item={item} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}



function RevealCard({ item, index }: any) {
  const [slider, setSlider] = useState(50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative w-[340px] h-[420px] rounded-2xl overflow-hidden shadow-2xl 
      border border-white/40 backdrop-blur-md bg-white/30 group"
    >
      {/* GOLD AURA */}
      <motion.div
        className="absolute inset-0 bg-yellow-300/10 blur-xl -z-10"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Light Sweep */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "140%" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-y-0 w-24 bg-gradient-to-r 
        from-transparent via-white/40 to-transparent blur-2xl z-20 pointer-events-none"
      />

      {/* BEFORE IMAGE */}
      <img
        src={item.before}
        className="absolute inset-0 w-full h-full object-cover 
        group-hover:scale-[1.07] transition-transform duration-700"
      />

      {/* AFTER IMAGE REVEAL (slider controlled) */}
      <img
        src={item.after}
        className="absolute inset-0 h-full object-cover 
        group-hover:scale-[1.07] transition-transform duration-700"
        style={{
          width: `${slider}%`,
          overflow: "hidden",
          clipPath: `inset(0 ${100 - slider}% 0 0)`,
        }}
      />

      {/* LABELS */}
      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-30">
        BEFORE
      </div>

      <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-30">
        AFTER
      </div>

      {/* DRAG SLIDER */}
      <input
        type="range"
        min={0}
        max={100}
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] z-30 
        accent-blue-600 cursor-pointer"
      />
    </motion.div>
  );
}
