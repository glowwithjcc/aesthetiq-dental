"use client";

import { useEffect, useRef } from "react";

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
export default function ReviewScroller() {
  const scrollerRef: any = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 0.8;

    function scroll() {
      if (!scrollerRef.current) return;

      x += speed;
      scrollerRef.current.scrollLeft = x;

      if (x >= scrollerRef.current.scrollWidth / 2) {
        x = 0;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

  // 3D tilt handler
  function handleTilt(e: any) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / 20) * -1;
    const rotateY = (x - rect.width / 2) / 20;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  function resetTilt(e: any) {
    const card = e.currentTarget;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/emerald-marble.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      <div className="relative">
        <h2 className="text-3xl font-bold text-Yellow text-center mb-10 drop-shadow-lg">
          Real Google Reviews
        </h2>

        <div
          ref={scrollerRef}
          className="flex overflow-x-scroll no-scrollbar gap-6 px-6"
        >
          {[...reviews, ...reviews].map((r, index) => (
            <div
              key={index}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="min-w-[320px] md:min-w-[380px] lg:min-w-[420px]
                         rounded-xl bg-white shadow-xl border border-white/40
                         transition-transform duration-300 ease-out"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src={r.img}
                alt="Google Review"
                className="w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
