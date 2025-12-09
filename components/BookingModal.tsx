"use client";

import { useState } from "react";
import { useBooking } from "./BookingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/submitBooking", {
      method: "POST",
      body: JSON.stringify({ name, phone, service, date }),
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeBooking();
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl w-[90%] max-w-md"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeBooking}
              className="absolute top-3 right-4 text-white text-xl hover:scale-110 transition"
            >
              ✕
            </button>

            <h2 className="text-center text-2xl font-bold text-yellow-300 mb-4">
              Book an Appointment
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30"
                  placeholder="Phone Number"
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
                  <option>Dental Implants</option>
                  <option>Braces / Aligners</option>
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
                  className="w-full bg-yellow-300 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition"
                >
                  Submit
                </button>
              </form>
            ) : (
              <p className="text-center text-white text-lg font-semibold py-6">
                Booking Submitted! 🎉  
                <br />
                We'll contact you shortly.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
