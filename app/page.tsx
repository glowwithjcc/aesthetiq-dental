"use client";

import Hero from "@/components/Hero";
import IntroPraveena from "@/components/IntroPraveena";
import ServicesGrid from "@/components/ServicesGrid";
import InstaSlider from "@/components/InstaSlider";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import TestimonialScroller from "@/components/TestimonialScroller";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FaqBot from "@/components/FaqBot";
import FloatingBookNow from "@/components/FloatingBookNow";

export default function Home() {
  const handleBookNowClick = () => {
    // Dispatch an action or use state to open the booking modal
  };

  return (
    <main>
      <Hero />
      <IntroPraveena />
      <ServicesGrid />
      <InstaSlider />
      <BeforeAfterGrid />
      <TestimonialScroller />
      <FloatingBookNow onClick={handleBookNowClick} />
      <BookingModal />   {/* ← THIS is the only booking UI now */}
      <Footer />
      <WhatsAppFloat />
      <FaqBot />
    </main>
  );
}
