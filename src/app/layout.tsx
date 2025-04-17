"use client";
import { Inter, Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./globals.css";

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
            <header className="fixed top-0 left-0 right-0 z-50">
              <nav className="glass-card mx-4 mt-4 rounded-full px-6 py-4 border border-white border-opacity-20 glow">
                <div className="container-width flex items-center justify-between">
                  <motion.a
                    href="/"
                    className="text-2xl font-heading font-bold text-gradient"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pensiunea Vilcan
                  </motion.a>
                  <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/">Acasă</NavLink>
                    <NavLink href="/about">Despre Noi</NavLink>
                    <NavLink href="/rooms">Camere</NavLink>
                    <NavLink href="/activities">Activități</NavLink>
                    <NavLink href="/gallery">Galerie</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <motion.a
                      href="/book"
                      className="button-primary"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Rezervă Acum
                    </motion.a>
                  </div>
                  <motion.button 
                    className="md:hidden text-text-1 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-surface-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                      />
                    </svg>
                  </motion.button>
                </div>
              </nav>

              {/* Mobile Menu - Enhanced version */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden z-40"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.div 
                      className="absolute right-0 top-0 h-full w-72 bg-surface-1 shadow-lg p-6"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      onClick={e => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold font-heading text-gradient">Meniu</h3>
                        <motion.button 
                          className="text-text-1 hover:text-primary p-2 rounded-full hover:bg-surface-2"
                          onClick={() => setIsMenuOpen(false)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.button>
                      </div>
                      <div className="flex flex-col space-y-5">
                        <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Acasă</MobileNavLink>
                        <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>Despre Noi</MobileNavLink>
                        <MobileNavLink href="/rooms" onClick={() => setIsMenuOpen(false)}>Camere</MobileNavLink>
                        <MobileNavLink href="/activities" onClick={() => setIsMenuOpen(false)}>Activități</MobileNavLink>
                        <MobileNavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>Galerie</MobileNavLink>
                        <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                        
                        <div className="divider my-4 border-b border-surface-3 border-opacity-30"></div>
                        
                        <motion.a
                          href="/book"
                          className="button-primary text-center"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Rezervă Acum
                        </motion.a>
                      </div>
                      
                      <div className="absolute bottom-8 left-6 right-6">
                        <div className="flex justify-center space-x-4 mb-6">
                          <SocialIcon href="#" icon="facebook" />
                          <SocialIcon href="#" icon="instagram" />
                          <SocialIcon href="#" icon="twitter" />
                        </div>
                        <p className="text-text-3 text-sm text-center">
                          &copy; {new Date().getFullYear()} Pensiunea Vilcan
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            <main className="min-h-screen pt-20">{children}</main>

            <footer className="bg-gradient-to-b from-primary-dark to-black text-white">
              <div className="container-width section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div>
                    <h3 className="text-3xl font-heading font-bold mb-6 text-gradient">Pensiunea Vilcan</h3>
                    <p className="text-gray-300 mb-6">
                      Experiențe memorabile într-un cadru natural spectaculos.
                    </p>
                    <div className="flex space-x-4">
                      <SocialIcon href="#" icon="facebook" />
                      <SocialIcon href="#" icon="instagram" />
                      <SocialIcon href="#" icon="twitter" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-6">Link-uri Rapide</h4>
                    <ul className="space-y-3">
                      <FooterLink href="/rooms">Camere</FooterLink>
                      <FooterLink href="/activities">Activități</FooterLink>
                      <FooterLink href="/gallery">Galerie</FooterLink>
                      <FooterLink href="/contact">Contact</FooterLink>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-6">Contact</h4>
                    <ul className="space-y-5 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <svg className="w-5 h-5 mt-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Strada Dealului, Nr. 5, Toplița</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+40 123 456 789</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>contact@pensiune-toplita.ro</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-6">Newsletter</h4>
                    <p className="text-gray-300 mb-4">Abonați-vă pentru oferte speciale</p>
                    <form className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 px-4 py-3 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 focus:outline-none focus:border-secondary focus:bg-white focus:bg-opacity-20"
                      />
                      <motion.button
                        type="submit"
                        className="button-primary"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </form>
                  </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white border-opacity-10 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Pensiunea Vilcan. Toate drepturile rezervate.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="nav-link text-text-2 hover:text-primary relative px-2 py-1 font-medium"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.a
      href={href}
      className="text-text-2 hover:text-primary transition-colors text-lg font-medium block py-3 border-b border-surface-3 border-opacity-30"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <motion.a
        href={href}
        className="text-gray-300 hover:text-white transition-colors flex items-center"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-3 h-3 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        {children}
      </motion.a>
    </li>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const icons = {
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
    instagram: (
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a3 3 0 003-3V6a3 3 0 00-3-3h-9a3 3 0 00-3 3v12a3 3 0 003 3z" />
    ),
  };

  return (
    <motion.a
      href={href}
      className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icons[icon as keyof typeof icons]}
      </svg>
    </motion.a>
  );
}
