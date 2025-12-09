"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto show after scrolling 800px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10000 && !open) setOpen(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Form data
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
  });

  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // No backend yet — just close modal
    setTimeout(() => {
      alert("Appointment request saved!");
      setLoading(false);
      setOpen(false);
    }, 800);
  };

  // This generates the WhatsApp link including date + time
  const generateWhatsAppURL = () => {
    let message = `Hi, I would like to book an appointment at AesthetiQ Dental.%0A%0A`;
    message += `Name: ${form.name}%0A`;
    message += `Phone: ${form.phone}%0A`;
    message += `Email: ${form.email}%0A`;
    message += `Concern: ${form.concern}%0A`;

    if (selectedDate) {
      message += `Preferred Date: ${selectedDate.toDateString()}%0A`;
    }
    if (timeSlot) {
      message += `Preferred Time: ${timeSlot}%0A`;
    }

    return `https://wa.me/918667087095?text=${message}`;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex justify-center items-center"
        >
          {/* POPUP */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-[90%] max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            style={{
              backgroundImage: "url('/patterns/emerald-marble.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-emerald-900/70 backdrop-blur-[3px]" />
            <div className="absolute inset-0 rounded-3xl border border-yellow-400/50 shadow-[0_0_25px_rgba(255,215,0,0.6)] pointer-events-none" />

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60"
            >
              ✕
            </button>

            {/* FORM BODY */}
            <div className="relative p-8 z-10">
              <h2 className="text-center text-3xl font-bold text-white mb-6 tracking-wide">
                Book Your Appointment
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input bg-white/20 text-white placeholder-white/60"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input bg-white/20 text-white placeholder-white/60"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input bg-white/20 text-white placeholder-white/60"
                />

                {/* DATE PICKER */}
                <div>
                  <label className="text-white font-semibold text-sm mb-1 block">
                    Select a Date
                  </label>

                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    className="w-full p-3 rounded-xl bg-white text-black border border-white/40 focus:outline-none"
                    placeholderText="Choose appointment date"
                  />
                </div>

                {/* TIME SLOT SELECTOR */}
                <div>
                  <label className="text-white font-semibold text-sm mb-1 block">
                    Select Time Slot
                  </label>

                  <select
                    className="w-full p-3 rounded-xl bg-white text-black border border-white/40"
                    onChange={(e) => setTimeSlot(e.target.value)}
                  >
                    <option value="">Choose a time</option>
                    <option>Morning (10 AM – 1 PM)</option>
                    <option>Afternoon (2 PM – 5 PM)</option>
                    <option>Evening (5 PM – 8 PM)</option>
                  </select>
                </div>

                {/* CONCERN */}
                <textarea
                  placeholder="Describe your concern"
                  onChange={(e) => setForm({ ...form, concern: e.target.value })}
                  className="input h-28 bg-white/20 text-white placeholder-white/60"
                ></textarea>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold tracking-wider hover:bg-yellow-300 transition shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                >
                  {loading ? "Saving..." : "Submit Request"}
                </button>

                {/* WHATSAPP CTA */}
                <a
                  href={generateWhatsAppURL()}
                  target="_blank"
                  className="w-full py-3 rounded-xl bg-green-500 text-white font-bold tracking-wider text-center hover:bg-green-400 transition shadow-[0_0_20px_rgba(0,255,0,0.5)] mt-2"
                >
                  Book Instantly via WhatsApp
                </a>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
