import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterBar from "./components/FooterBar";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gut Bewertung - Google Bewertungen löschen lassen",
  description: "Professionelle Hilfe beim Löschen negativer Google Bewertungen",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <FooterBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
