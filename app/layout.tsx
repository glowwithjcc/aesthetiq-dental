import PageTransition from "@/components/PageTransition";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
