"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () => {
      setSolid(window.scrollY > 80);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold ${
            solid ? "text-[#1C4E80]" : "text-white"
          }`}
        >
          AesthetiQ Dental
        </Link>

        <div className="flex gap-6">
          {["About", "Services", "Gallery", "Testimonials", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-sm font-semibold transition ${
                  solid ? "text-[#1C4E80]" : "text-white"
                }`}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
