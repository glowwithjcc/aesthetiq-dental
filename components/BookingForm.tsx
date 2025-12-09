"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "8667087095";

  const sendToWhatsapp = async () => {
  const message = `🦷 *New Booking Enquiry*  
Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}`;

  // WhatsApp open link
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");

  // Send to Google Sheet webhook
  await fetch("https://script.google.com/macros/s/AKfycbyykfRqaX_ZXLhQMa3kP02UJUARS6ibUljWD-1ERtx9_uOSWvXVnUfzO8x1Rbn45xXc8Q/exechttps://script.google.com/macros/s/AKfycby4oV_HNyUKFziaAVpyoTv2NTuVF4kmxzMipqCzg-Lw3yrXvplNJPHZCB6fBQDcZCWjVQ/exec", {
    method: "POST",
    body: JSON.stringify({
      name,
      phone,
      service,
      date,
    }),
  });

  setSubmitted(true);
};


  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/emerald-marble.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative max-w-xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-yellow-300 mb-6 drop-shadow-lg">
          Book an Appointment
        </h2>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendToWhatsapp();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <select
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option>Dental Cleaning</option>
              <option>Root Canal</option>
              <option>Braces / Aligners</option>
              <option>Dental Implants</option>
              <option>Cosmetic Dentistry</option>
            </select>

            <input
              type="date"
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-yellow-300 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition"
            >
              Send to WhatsApp
            </button>
          </form>
        ) : (
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Booking Sent!
            </h3>
            <p className="opacity-80">
              You will receive a confirmation shortly on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
