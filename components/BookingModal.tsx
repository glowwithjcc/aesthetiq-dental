"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button id="booking-modal-btn" onClick={() => setOpen(true)} className="hidden"></button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-2xl w-full max-w-lg relative shadow-xl">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl"
            >
              ✕
            </button>

            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
}
