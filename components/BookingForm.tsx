"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "8667087095";

  // 🔥 1️⃣ SEND DATA TO BACKEND → Google Sheets
  const submitToBackend = async () => {
    const res = await fetch("/api/submitBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, service, date }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Booking save failed");
    }

    return true;
  };

  // 🔥 2️⃣ AUTO-OPEN WHATSAPP MESSAGE
  const sendToWhatsapp = () => {
    const message = `🦷 *New Booking Enquiry*  
Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  // 🔥 3️⃣ MASTER SUBMIT HANDLER
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await submitToBackend(); // Save to backend
      sendToWhatsapp();        // Open WhatsApp
      setSubmitted(true);      // Show success UI
    } catch (err) {
      console.error("BOOKING ERROR:", err);
      alert("Error saving booking. Please try again.");
    }
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
          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/30"
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
              Submit Booking
            </button>
          </form>
        ) : (
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Booking Submitted!
            </h3>
            <p className="opacity-80">
              The clinic will contact you shortly for confirmation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
