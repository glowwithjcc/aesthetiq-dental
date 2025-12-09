"use client";

import { useEffect, useRef } from "react";
import { MdStar } from "react-icons/md";

const reviews = [
  {
    name: "Lavanya S",
    text: "Dr. Praveena is exceptionally kind and her treatments are painless. The clinic is clean and truly premium.",
  },
  {
    name: "Vijay Kumar",
    text: "Got my implants done here. Best dental experience I have ever had in Chennai.",
  },
  {
    name: "Anitha M",
    text: "She explains everything clearly and patiently. My gum treatment was so smooth.",
  },
  {
    name: "Rahul P",
    text: "Amazing smile design results. Highly recommended for quality dental care.",
  },
];

export default function TestimonialScroller() {
  const scrollerRef: any = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 1;

    function scroll() {
      if (scrollerRef.current) {
        x = x + speed;
        scrollerRef.current.scrollLeft = x;
        if (x >= scrollerRef.current.scrollWidth / 2) {
          x = 0;
        }
      }
      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-[#1C4E80] text-center mb-10">
        What Our Patients Say
      </h2>

      <div
        ref={scrollerRef}
        className="flex overflow-x-scroll no-scrollbar gap-6 px-6"
      >
        {[...reviews, ...reviews].map((r, index) => (
          <div
            key={index}
            className="min-w-[450px] bg-[#F3F6FA] p-6 rounded-xl shadow-md border border-gray-200"
          >
            <div className="flex text-white-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <MdStar key={i} size={20} />
              ))}
            </div>

            <p className="text-gray-700 mb-4">“{r.text}”</p>
            <p className="font-semibold text-[#1C4E80]">{r.name}</p>
            <p className="text-xs text-gray-500">Google Review</p>
          </div>
        ))}
      </div>
    </section>
  );
}
