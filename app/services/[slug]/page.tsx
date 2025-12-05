import Schema from "@/components/Schema";
import type { Metadata } from "next";

const serviceData: Record<string, any> = {
  "root-canal": {
    title: "Root Canal Treatment",
    description: "Painless RCT with advanced rotary endodontics.",
  },
  "extractions": {
    title: "Tooth Extractions",
    description: "Safe, quick and minimally invasive tooth removal.",
  },
  "implants": {
    title: "Dental Implants",
    description: "Permanent titanium implants for confident smiles.",
  },
  "aligners": {
    title: "Aligners & Braces",
    description: "Invisible aligners and braces for perfect alignment.",
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    description: "Child-friendly dental care for happy, healthy teeth.",
  },
  "gum-problems": {
    title: "Gum Treatment",
    description: "LASER gum therapy and periodontal treatments.",
  },
  "smile-design": {
    title: "Smile Design",
    description: "Hollywood smile transformations with veneers & bonding.",
  },
  "full-mouth-restoration": {
    title: "Full Mouth Rehabilitation",
    description: "Complete reconstruction of worn or damaged teeth.",
  },
  "prosthodontics": {
    title: "Prosthodontics",
    description: "Crowns, bridges and dentures crafted with precision.",
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers and aesthetic corrections.",
  },
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const service = serviceData[params.slug];
  return {
    title: `${service.title} | AesthetiQ Dental Clinic`,
    description: service.description,
  };
}

export default function ServicePage({ params }: any) {
  const service = serviceData[params.slug];

  if (!service) return <div className="p-10 text-center">Service Not Found</div>;

  return (
    <><div className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-[#1C4E80] mb-6">{service.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {service.description}
          </p>

          <div className="bg-[#F3F6FA] p-8 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-[#1C4E80] mb-3">
                  Why Choose AesthetiQ?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modern equipment & sterilization protocols</li>
                  <li>Ethical, pain-free treatment experience</li>
                  <li>Dr. Praveena Devi’s expertise in advanced care</li>
                  <li>Premium clinic ambience with personalised care</li>
              </ul>
          </div>
      </div><Schema data={{
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: service.title,
          url: `https://aesthetiq.in/services/${params.slug}`,
          address: "Jafferkhanpet, Chennai",
          telephone: "8667087095"
      }} /></>

  );
  
}
