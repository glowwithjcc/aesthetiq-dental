export default function IntroPraveena() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src="/images/praveena.jpg"
          className="rounded-2xl shadow-xl"
          alt="Dr Praveena Devi"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-[#1C4E80] mb-4">
            Meet Dr. Praveena Devi
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Dr. Praveena Devi is a specialist periodontist and implantologist  
            offering ethical, painless, and advanced dental treatments using  
            digital dentistry and minimally invasive techniques.
          </p>

          <button
            onClick={() => document.getElementById("booking-modal-btn")?.click()}
            className="mt-6 px-6 py-3 bg-[#1C4E80] text-white rounded-xl shadow hover:bg-[#153a60]"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
