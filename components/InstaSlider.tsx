"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const reels = [
  "/reels/reel1.mp4",
  "/reels/reel2.mp4",
  "/reels/reel3.mp4",
  "/reels/reel4.mp4",
  "/reels/reel5.mp4",
];

export default function ReelsSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: "url('/patterns/instagram-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-extrabold text-gray-900 tracking-wide relative z-10 mb-14"
      >
        Instagram <span className="text-pink-600">Reels</span>
      </motion.h2>

      {/* CENTERED REELS WRAPPER */}
      <div className="relative z-10 flex justify-center w-full">
        <motion.div
          drag="x"
          dragConstraints={{ left: -900, right: 0 }}
          dragElastic={0.15}
          className="flex gap-10 cursor-grab active:cursor-grabbing px-6"
        >
          {reels.map((src, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-[280px] h-[520px]"
              whileHover={{ scale: 1.07 }}
            >
              {/* GOLD HALO */}
              <motion.div
                className="absolute w-44 h-44 rounded-full bg-yellow-300/20 blur-xl -z-10"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* INSTAGRAM REEL FRAME */}
              <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden shadow-2xl border border-black/20 bg-black">
                {/* Reflection Sweep */}
                <motion.div
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 1.1 }}
                  className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-xl z-40"
                />

                {/* IG TOP BAR */}
                <div className="absolute top-0 left-0 w-full px-4 py-2 flex items-center gap-2 z-40 bg-gradient-to-b from-black/50 to-transparent">
                  <img
                    src="/icons/insta-profile.png"
                    className="w-7 h-7 rounded-full border border-white/30"
                  />
                  <span className="text-white font-semibold text-sm">
                    aesthetiq_dental
                  </span>
                </div>

                {/* VIDEO */}
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* ACTION BUTTONS */}
                <div className="absolute right-4 bottom-10 flex flex-col items-center gap-6 z-40">
                  <motion.div whileTap={{ scale: 0.7 }} whileHover={{ scale: 1.2 }} className="text-white flex flex-col items-center">
                    <i className="ri-heart-fill text-3xl"></i>
                    <span className="text-xs mt-1">1.2k</span>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.7 }} whileHover={{ scale: 1.2 }} className="text-white flex flex-col items-center">
                    <i className="ri-chat-3-fill text-3xl"></i>
                    <span className="text-xs mt-1">42</span>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.7 }} whileHover={{ scale: 1.2 }} className="text-white flex flex-col items-center">
                    <i className="ri-share-forward-fill text-3xl"></i>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* INSTAGRAM QR CODE BLOCK */}
      <div className="relative mt-20 z-20 flex justify-center">
        <Link href="https://instagram.com/aesthetiq_dental" target="_blank">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-pink-300/70 shadow-xl flex flex-col items-center"
          >
            <img
              src="/qr/instagram-qr.png"
              className="w-40 h-40 rounded-xl shadow-md mb-3"
            />
            <span className="text-pink-600 font-bold uppercase tracking-wider text-sm">
              Follow us on Instagram
            </span>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
