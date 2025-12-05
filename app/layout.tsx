import PageTransition from "@/components/PageTransition";
import "./globals.css";
import BookingModal from "@/components/BookingModal";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <BookingModal />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
