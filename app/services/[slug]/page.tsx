import type { Metadata } from "next";

const serviceData: Record<string, any> = {
  "root-canal": {
    title: "Root Canal Treatment",
    subtitle: "Painless RCT with digital precision",
    description:
      "We use rotary endodontics, digital apex locators and microscope-assisted techniques for smooth, pain-free RCTs.",
  },
  "extractions": {
    title: "Tooth Extractions",
    subtitle: "Safe, gentle and minimally invasive",
    description:
      "Most extractions are quick, painless and performed using modern anaesthesia.",
  },
  "implants": {
    title: "Dental Implants",
    subtitle: "Titanium implants for lifetime confidence",
    description:
      "Advanced implant systems with guided placement and 3D imaging.",
  },
  "aligners": {
    title: "Aligners & Braces",
    subtitle: "Invisible comfort, perfect teeth",
    description:
      "Clear aligners for those wanting subtle, effective orthodontics.",
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    subtitle: "Where kids feel safe and happy",
    description:
      "Child-friendly care designed to ease anxiety and build healthy habits.",
  },
  "gum-problems": {
    title: "Gum Treatment",
    subtitle: "Precision periodontal care",
    description:
      "Laser gum therapy, deep cleaning and advanced periodontal care.",
  },
  "smile-design": {
    title: "Smile Design",
    subtitle: "Your dream smile, beautifully crafted",
    description:
      "Digital smile design, veneers, bonding and cosmetic artistry.",
  },
  "full-mouth-restoration": {
    title: "Full Mouth Rehabilitation",
    subtitle: "Total reconstruction for damaged teeth",
    description:
      "Rebuilding function and aesthetics with careful planning.",
  },
  "prosthodontics": {
    title: "Prosthodontics",
    subtitle: "Crowns, bridges & dentures done right",
    description:
      "Aesthetic ceramic crowns, implant prosthetics and precision dentures.",
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    subtitle: "Aesthetic transformations",
    description:
      "Teeth whitening, veneer artistry, cosmetic contouring.",
  },
};

export async function generateMetadata(props: any): Promise<Metadata> {
  const { slug } = await props.params;
  const s = serviceData[slug];

  return {
    title: `${s.title} | AesthetiQ Dental Clinic`,
    description: s.description,
  };
}

export default async function ServicePage(props: any) {
  const { slug } = await props.params;
  const s = serviceData[slug];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* HERO BLOCK */}
      <div className="section-bg rounded-2xl p-12 shadow-xl mb-10">
        <h1 className="text-4xl font-bold text-[#1C4E80]">{s.title}</h1>
        <p className="text-lg text-gray-600 mt-3">{s.subtitle}</p>
      </div>

      {/* DESCRIPTION */}
      <div className="bg-white p-10 shadow-xl rounded-2xl leading-relaxed text-gray-700">
        {s.description}
      </div>

    </div>
  );
}
