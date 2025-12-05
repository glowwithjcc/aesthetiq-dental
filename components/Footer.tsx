export default function Footer() {
  return (
    <footer className="section-bg mt-20 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-2xl font-bold text-[#1C4E80] mb-4">
            AesthetiQ Dental Clinic
          </h3>
          <p>Jafferkhanpet, Chennai</p>
          <p>Phone: 8667087095</p>
          <p>Email: aesthetiqchennai@gmail.com</p>
        </div>

        <iframe
          src="YOUR_GOOGLE_MAPS_EMBED_URL"
          width="100%"
          height="220"
          loading="lazy"
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>

      <p className="text-center text-gray-600 mt-10">
        © {new Date().getFullYear()} AesthetiQ Dental Clinic. All rights reserved.
      </p>
    </footer>
  );
}
