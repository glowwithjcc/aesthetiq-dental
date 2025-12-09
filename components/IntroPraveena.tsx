"use client";

import { motion } from "framer-motion";

export default function IntroPraveena() {
  return (
    <section
      className="relative pt-32 pb-28 overflow-hidden"
      style={{
        backgroundImage: "url('/patterns/marble-soft.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Tinted overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-0"></div>

      {/* Floating glow shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-100/30 blur-3xl rounded-full -top-20 -left-20 z-0"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        className="absolute w-72 h-72 bg-blue-50/30 blur-3xl rounded-full -bottom-20 -right-32 z-0"
        animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      {/* GRID */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-[5]">

        {/* LEFT — PHOTO ASSEMBLY */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Container for photo assembly */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-[360px] h-[460px]"
          >
            {/* Golden halo */}
            <motion.div
              className="absolute inset-0 bg-yellow-500/10 rounded-full blur-3xl z-0"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />

            {/* 4 PIECES */}
            {[
              { x: -80, y: -80 }, 
              { x: 80, y: -80 },  
              { x: -80, y: 80 },  
              { x: 80, y: 80 },   
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1/2 h-1/2 overflow-hidden rounded-xl shadow-lg z-10"
                style={{
                  top: i < 2 ? 0 : "50%",
                  left: i % 2 === 0 ? 0 : "50%",
                }}
                variants={{
                  hidden: { opacity: 0, x: pos.x, y: pos.y, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.9,
                      delay: 0.2 + i * 0.12,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <img
                  src="/images/praveena.jpg"
                  alt="Dr Praveena Devi"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

            {/* FINAL FULL IMAGE OVERLAY (joins pieces into one photo) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute inset-0 rounded-2xl overflow-hidden z-20"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
            >
              <img
                src="/images/praveena.jpg"
                alt="Dr Praveena Devi"
                className="w-full h-full object-cover"
              />

              {/* EFFECT 1 — LIGHT STREAK */}
              <motion.div
                initial={{ x: "-120%" }}
                whileInView={{ x: "120%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: 1.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-[120px] bg-gradient-to-r 
                           from-transparent via-white/50 to-transparent 
                           blur-xl opacity-60"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT — TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Meet <span className="text-blue-600">Dr. Praveena Devi</span>
          </h2>

          {/* Signature line */}
          <motion.p
            className="text-yellow-600 italic text-xl mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            MDS • Periodontology & Implantology
          </motion.p>

          {/* Line Divider */}
          <motion.div
            className="h-[3px] w-20 bg-blue-500/60 mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            Dr. Praveena blends <span className="font-semibold text-blue-700">clinical precision</span>
             with a gentle patient-first approach, specialising in gum therapy, implants, and smile aesthetics.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Her strong ethical practice, minimally invasive techniques, and compassionate nature make 
            AesthetiQ one of Chennai’s trusted dental centres.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 text-md">
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
              <span className="text-blue-600 text-xl">🦷</span> Certified Implantologist
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
              <span className="text-blue-600 text-xl">🦷</span> Laser Gum Surgery Expert
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
              <span className="text-blue-600 text-xl">🦷</span> Smile Design & Cosmetic Dentistry
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
              <span className="text-blue-600 text-xl">🦷</span> Certified Clear Aligners Provider
            </motion.li>
          </ul>

          
        </motion.div>

      </div>

    </section>
  );
}
