const services = [
  "Root Canal Treatment",
  "Tooth Extractions",
  "Dental Implants",
  "Aligners & Braces",
  "Pediatric Dentistry",
  "Gum Treatments",
  "Smile Design",
  "Full Mouth Rehabilitation",
  "Prosthodontics",
  "Cosmetic Dentistry"
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-[#F3F6FA]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1C4E80] mb-10 text-center">
          Our Dental Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <a
              key={index}
              href={`/services/${s.toLowerCase().replace(/ /g, "-")}`}
              className="bg-white shadow-md p-6 rounded-lg border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/40 transition"
            >
              <p className="text-lg font-semibold text-[#1C4E80]">{s}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
