import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Contact Us | AesthetiQ Dental Clinic",
  description: "Book an appointment or locate our premium dental clinic in Chennai.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#1C4E80] mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-8">
        We're here to help you achieve the smile you deserve. Reach out anytime.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Clinic Address</h2>
          <p>Jafferkhanpet, Chennai</p>
          <p>Phone: 8667087095</p>
          <p>Email: aesthetiqchennai@gmail.com</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!...YOUR_MAP..."
            width="100%"
            height="300"
            className="rounded-xl mt-6"
            loading="lazy"
          ></iframe>
        </div>

        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
