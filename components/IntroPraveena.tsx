import Image from "next/image";

export default function IntroPraveena() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/praveena.jpg"
            width={500}
            height={600}
            alt="Dr. Praveena Devi"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1C4E80] mb-4">
            Meet Dr. Praveena Devi
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            MDS, Periodontist & Implantologist  
            Founder — AesthetiQ Dental Clinic
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Dr. Praveena brings a unique blend of precision, compassion,
            and aesthetic excellence. Her approach focuses on ethical care,
            advanced techniques, and creating beautiful, lasting smiles.
          </p>

          <a
            href="#booking"
            className="inline-block px-6 py-3 bg-[#1C4E80] text-white rounded-lg shadow hover:bg-[#163A60]"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
