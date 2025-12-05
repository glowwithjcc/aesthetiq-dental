"use client";

export default function HomeHero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center">
      
      {/* VIDEO BACKGROUND */}
      <video
        src="/videos/clinic-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-5xl font-bold text-white drop-shadow-xl">
          AesthetiQ Dental Clinic
        </h1>
        <p className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
          Premium • Ethical • Painless Dentistry by Dr. Praveena Devi
        </p>

        <div className="mt-8">
          <button
            onClick={() => document.getElementById("booking-modal-btn")?.click()}
            className="px-8 py-4 bg-[#1C4E80] text-white rounded-xl shadow-xl hover:bg-[#153a60]"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
