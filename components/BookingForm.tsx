"use client";

import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.target));

    const res = await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setLoading(false);
    setDone(res.ok);
  }

  return (
    <section id="booking" className="py-20 bg-[#F3F6FA]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1C4E80] text-center mb-10">
          Book Your Consultation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg grid gap-6"
        >
          <div>
            <label className="block text-sm font-semibold text-[#1C4E80]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C4E80]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1C4E80]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C4E80]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1C4E80]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C4E80]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1C4E80]">
              Preferred Date & Time
            </label>
            <input
              type="datetime-local"
              name="date"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C4E80]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1C4E80]">
              Message / Dental Concern
            </label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1C4E80]"
            ></textarea>
          </div>

          <button
            disabled={loading}
            className="bg-[#1C4E80] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#163A60] transition"
          >
            {loading ? "Booking..." : "Submit"}
          </button>

          {done && (
            <p className="text-green-600 text-center font-semibold">
              Appointment request sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
