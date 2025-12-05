import Hero from "@/components/Hero";
import IntroPraveena from "@/components/IntroPraveena";
import ServicesGrid from "@/components/ServicesGrid";
import InstaSlider from "@/components/InstaSlider";
import BeforeAfterGrid from "@/components/BeforeAfterGrid";
import TestimonialScroller from "@/components/TestimonialScroller";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FaqBot from "@/components/FaqBot";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroPraveena />
      <ServicesGrid />
      <InstaSlider />
      <BeforeAfterGrid />
      <TestimonialScroller />
      <BookingForm />
      <Footer />
      <WhatsAppFloat />
      <FaqBot />
    </main>
  );
}
