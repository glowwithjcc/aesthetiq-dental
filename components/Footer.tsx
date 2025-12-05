export default function Footer() {
  return (
    <footer className="bg-[#1C4E80] text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Clinic Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">AesthetiQ Dental Clinic</h3>
          <p className="text-white/90">
            Premium, ethical and luxury dental care in Chennai.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <p>📍 Jafferkhanpet, Chennai</p>
          <p>📞 8667087095</p>
          <p>✉️ aesthetiqchennai@gmail.com</p>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="150"
            className="rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <p className="text-center text-white/60 mt-10">
        © {new Date().getFullYear()} AesthetiQ Dental Clinic — All Rights Reserved.
      </p>
    </footer>
  );
}
