import PageTransition from "@/components/PageTransition";
import "./globals.css";
import { BookingProvider } from "@/components/BookingContext";
import { Analytics } from "@vercel/analytics/react";
export default function RootLayout({ children }: any) {
  return (
   <html lang="en">
      <body>
        <BookingProvider>
          {children}
        </BookingProvider>
         <Analytics />
      </body>
    </html>
  );
}
