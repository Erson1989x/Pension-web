import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import SocialIcon from "./SocialIcon";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setShowContactPopup: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, setShowContactPopup }) => (
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
          <motion.button
            type="button"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setShowContactPopup(true);
            }}
            className="button-primary cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Rezervă Acum
          </motion.button>
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
              <motion.button
                type="button"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowContactPopup(true);
                  setIsMenuOpen(false);
                }}
                className="button-primary text-center w-full cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Rezervă Acum
              </motion.button>
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
);

export default Header;
