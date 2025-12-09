"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* 🌍 Background (with parallax effect) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 animate-pan"
        style={{ backgroundImage: "url('/world-map-dark.svg')" }}
      ></div>

      {/* Gold top border */}
      <div className="h-1 w-full bg-linear-to-r from-yellow-300 via-yellow-500 to-yellow-300"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* 🎯 Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* 🦷 Brand */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-lg">
            AesthetiQ Dental Clinic
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Premium, ethical and luxury dental care in Chennai.  
            Smile transformations crafted with precision by  
            <span className="text-yellow-300 font-semibold"> Dr. Praveena Devi.</span>
          </p>
        </div>

        {/* 📍 Location */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">Location</h3>

          <p className="text-white/80 mb-3">
            141/73, Pillaiyar Koil Street,<br />
            Jafferkhanpet, Chennai – 600083
          </p>

          <Link
            href="https://maps.app.goo.gl/HJLDBYNVHmoVEC9dA"
            target="_blank"
            className="text-yellow-300 hover:text-yellow-400 transition"
          >
            🌐 View on Google Maps
          </Link>
        </div>

        {/* ⏳ Hours */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">Clinic Hours</h3>

          <p className="text-white/80">
            Mon – Sat<br />
            <span className="text-yellow-300">10:00 AM – 1:00 PM   4:00 PM - 9.00 PM </span>
          </p>

          <p className="mt-2 text-white/80">
            Sunday<br />
            <span className="text-yellow-300">By Appointment</span>
          </p>
        </div>

        {/* 📱 Socials */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">Connect</h3>

          <div className="space-y-3">
            <Link
              href="tel:+918667087095"
              className="block text-white/80 hover:text-yellow-300 transition"
            >
              📞 86670 87095
            </Link>

            <Link
              href="https://instagram.com/dr.praveena_devi"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-yellow-300 transition"
            >
              <img src="/instagram-gold.svg" className="w-6 h-6" />
              @dr.praveena_devi
            </Link>

            <Link
              href="mailto:aesthetiqchennai@gmail.com"
              className="block text-white/80 hover:text-yellow-300 transition"
            >
              ✉️ aesthetiqchennai@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom strip */}
      <div className="relative py-4 text-center text-white/60 border-t border-white/20">
        © {new Date().getFullYear()} AesthetiQ Dental – All Rights Reserved.
      </div>

      {/* ⭐ Floating Social Bar */}
      <div className="fixed bottom-3 left-5 flex flex-col gap-3 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/918667087095"
          target="_blank"
          className="w-14 h-14 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 transition transform"
        >
          <img src="/whatsapp.svg" className="w-8 h-8" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/dr.praveena_devi"
          target="_blank"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center hover:scale-110 transition transform"
        >
          <img src="/instagram-gold.svg" className="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
}
