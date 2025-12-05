"use client";

import Image from "next/image";
import { useState } from "react";

const cases = [
  { before: "/gallery/b1.jpg", after: "/gallery/a1.jpg" },
  { before: "/gallery/b2.jpg", after: "/gallery/a2.jpg" },
  { before: "/gallery/b3.jpg", after: "/gallery/a3.jpg" },
];

export default function BeforeAfterGrid() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1C4E80] mb-10 text-center">
          Before & After Results
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => {
                setSelected(c);
                setOpen(true);
              }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={c.after}
                  alt="After"
                  fill
                  className="object-cover rounded-lg shadow-md group-hover:scale-[1.02] transition"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {open && selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-3xl w-full shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={selected.before}
                width={400}
                height={400}
                alt="Before"
                className="rounded-lg object-cover"
              />
              <Image
                src={selected.after}
                width={400}
                height={400}
                alt="After"
                className="rounded-lg object-cover"
              />
            </div>

            <button
              className="mt-6 px-6 py-2 bg-[#1C4E80] text-white rounded-lg w-full"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
