"use client";
import { Inter, Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./globals.css";
import Header from "./components/Header";
import ContactPopupModal from "./components/ContactPopupModal";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Pensiunea Vilcan - Cazare de Lux în Toplița</title>
        <meta name="description" content="Descoperiți confortul și luxul într-o locație pitorească din Sarmaş, aproape de Toplița. Camere elegante, facilități moderne și experiențe memorabile." />
        <meta name="keywords" content="pensiune sarmas, pensiune toplita, pensiune vilcan, pensiune vilcan camping, pensiune vilcan campingplatz, pensiune harghita, pensiune zona turistica, cazare harghita, cazare toplita, cazare sarmas, cazare vilcan, cazare munte, pensiune familie, vacanta harghita, turism harghita, cazare romania, pensiune romania, pensiune munte, pensiune relaxare, pensiune natura, pensiune Transilvania, pensiune cu ciubar, pensiune cu spa, pensiune cu restaurant, pensiune cu activitati, pensiune cu priveliste, pensiune cu pescuit, pensiune cu echitatie, pensiune cu drumetii" />
        <meta property="og:title" content="Pensiunea Vilcan - Cazare de Lux în Sarmaş" />
        <meta property="og:description" content="Cazare premium în Harghita, aproape de Toplița, cu facilități moderne, activități turistice și peisaje deosebite." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ro_RO" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setShowContactPopup={setShowContactPopup}
            />
            <main className="min-h-screen pt-20">{children}</main>
            <ContactPopupModal show={showContactPopup} onClose={() => setShowContactPopup(false)} />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
