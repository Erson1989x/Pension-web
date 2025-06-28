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
        <meta name="description" content="Descoperiți confortul și luxul într-o locație pitorească din Toplița. Camere elegante, facilități moderne și experiențe memorabile." />
        <link rel="icon" href="/favicon.ico" />
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
