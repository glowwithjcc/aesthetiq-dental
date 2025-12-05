"use client";

import { useState } from "react";

const faqs = [
  { q: "Do dental implants hurt?", a: "Most patients report minimal discomfort with modern techniques." },
  { q: "How long does a root canal take?", a: "Typically between 30–60 minutes depending on complexity." },
  { q: "Are aligners better than braces?", a: "Aligners are more aesthetic, but depends on the case." },
  { q: "Do you offer pediatric treatments?", a: "Yes, we provide painless and child-friendly dental care." }
];

export default function FaqBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      {!open && (
        <button
          className="bg-[#1C4E80] text-white p-4 rounded-full shadow-xl"
          onClick={() => setOpen(true)}
        >
          FAQ
        </button>
      )}

      {open && (
        <div className="w-80 bg-white shadow-2xl rounded-xl p-5 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-[#1C4E80]">Ask A Question</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {faqs.map((f, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{f.q}</p>
              <p className="text-gray-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
