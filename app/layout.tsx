import type { Metadata } from "next";
import { Oswald, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar        from "./components/Navbar";
import Header        from "./components/Header";
import Why           from "./components/Why";
import TechStack     from "./components/TechStack";
import Projects      from "./components/Projects";
import Pricing       from "./components/Pricing";
import FAQ           from "./components/FAQ";
import Contact       from "./components/Contact";
import Reviews       from "./components/Reviews";
import Footer        from "./components/Footer";
import BackToTop     from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";

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
    <html lang="th" className="scroll-smooth">
      <body className={thai.className}>
        <LanguageProvider>
          <LoadingScreen />
          <Navbar />
          <Header />
          <Why />
          <TechStack />
          <Projects />
          <Pricing />
          <FAQ />
          <Contact />
          <Reviews />
          <Footer />
          <BackToTop />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
