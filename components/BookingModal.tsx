"use client";

export default function BookingModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>

      <div className="relative max-w-md w-[90%] bg-white/10 backdrop-blur-xl p-8 border border-white/20 rounded-2xl shadow-2xl animate-modal-pop">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:text-yellow-300"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
          Book Appointment
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget));
            onSubmit(formData);
          }}
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30"
          />
          <select
            name="service"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30"
          >
            <option value="">Select Service</option>
            <option>Dental Cleaning</option>
            <option>Root Canal</option>
            <option>Aligners</option>
            <option>Implants</option>
            <option>Cosmetic Dentistry</option>
          </select>

          <input
            name="date"
            type="date"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30"
          />

          <button
            type="submit"
            className="w-full py-3 bg-yellow-300 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
