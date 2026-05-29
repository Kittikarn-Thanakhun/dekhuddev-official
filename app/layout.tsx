import type { Metadata } from "next";
import { Oswald, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Why from "./components/Why";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

<html lang="en" className="scroll-smooth"></html>

const thai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DEK HUD DEV",
  description: "Modern Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={thai.className}>
        <Navbar />
        <Header />
        <Why />
        <Projects />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}