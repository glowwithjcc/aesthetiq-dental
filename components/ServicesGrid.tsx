import Link from "next/link";

const services = [
  { slug: "root-canal", title: "Root Canal" },
  { slug: "extractions", title: "Extractions" },
  { slug: "implants", title: "Implants" },
  { slug: "aligners", title: "Aligners" },
  { slug: "pediatric-dentistry", title: "Pediatric Dentistry" },
  { slug: "gum-problems", title: "Gum Treatment" },
  { slug: "smile-design", title: "Smile Design" },
  { slug: "full-mouth-restoration", title: "Full Mouth Restoration" },
  { slug: "prosthodontics", title: "Prosthodontics" },
  { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry" },
];

export default function ServicesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-[#1C4E80] mb-10 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="section-bg p-6 text-center rounded-xl shadow hover:shadow-lg transition"
          >
            <span className="font-semibold text-[#1C4E80]">{s.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
