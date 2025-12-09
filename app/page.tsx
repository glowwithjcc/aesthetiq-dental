"use client";

import Hero from "@/components/Hero";
import IntroPraveena from "@/components/IntroPraveena";
import ServicesGrid from "@/components/ServicesGrid";
import InstaSlider from "@/components/InstaSlider";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import TestimonialScroller from "@/components/TestimonialScroller";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ReviewMarquee from "@/components/ReviewMarquee";
import FaqBot from "@/components/FaqBot";
import FloatingBookNow from "@/components/FloatingBookNow"
import BookingModal from "@/components/BookingModal";
import { useState } from "react";
export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingSubmit = async (data: any) => {
    await fetch("/api/submitBooking", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setIsBookingOpen(false);
  };

  return (
    <main>
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <IntroPraveena />
      <ServicesGrid />
      <InstaSlider />
      <BeforeAfterGrid />
      <TestimonialScroller />
      <ReviewMarquee />
      <BookingForm/>
<FloatingBookNow />
  <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSubmit={handleBookingSubmit}
      />
      <Footer />
      <WhatsAppFloat />
      <FaqBot />
    </main>
  );
}
