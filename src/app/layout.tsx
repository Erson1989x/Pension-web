"use client";
import { Inter, Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
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
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Pensiunea Noastră - Cazare de Lux în Toplița</title>
        <meta name="description" content="Descoperiți confortul și luxul într-o locație pitorească din Toplița. Camere elegante, facilități moderne și experiențe memorabile." />
      </head>
      <body>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="fixed top-0 left-0 right-0 z-50">
              <nav className="glass-card mx-4 mt-4 rounded-full px-6 py-4">
                <div className="container-width flex items-center justify-between">
                  <motion.a
                    href="/"
                    className="text-2xl font-heading font-bold text-gradient"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pensiunea Noastră
                  </motion.a>
                  <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/">Acasă</NavLink>
                    <NavLink href="/rooms">Camere</NavLink>
                    <NavLink href="/activities">Activități</NavLink>
                    <NavLink href="/gallery">Galerie</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <motion.button
                      className="button-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Rezervă Acum
                    </motion.button>
                  </div>
                  <button className="md:hidden text-gray-600 hover:text-gray-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </nav>
            </header>

            <main className="min-h-screen pt-20">{children}</main>

            <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
              <div className="container-width section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-6">Pensiunea Noastră</h3>
                    <p className="text-gray-300 mb-4">
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
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Strada Principală, Toplița</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+40 123 456 789</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>contact@pensiunea.ro</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-6">Newsletter</h4>
                    <p className="text-gray-300 mb-4">
                      Abonați-vă pentru a primi cele mai noi oferte și actualizări.
                    </p>
                    <form className="flex">
                      <input
                        type="email"
                        placeholder="Email-ul tău"
                        className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                      />
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                        Abonare
                      </button>
                    </form>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Pensiunea Noastră. Toate drepturile rezervate.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="nav-link text-gray-600 hover:text-gray-900 font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.a>
  </li>
);

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => (
  <motion.a
    href={href}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      {icon === "facebook" && (
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      )}
      {icon === "instagram" && (
        <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-8 12a4 4 0 110-8 4 4 0 010 8zm9-12h-2v3h2V4z" />
      )}
      {icon === "twitter" && (
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      )}
    </svg>
  </motion.a>
);
