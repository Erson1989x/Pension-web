import { motion } from "framer-motion";
import React from "react";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
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
