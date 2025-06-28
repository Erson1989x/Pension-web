import { motion } from "framer-motion";
import React from "react";

export default function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
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
