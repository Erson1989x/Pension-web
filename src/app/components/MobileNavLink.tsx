import { motion } from "framer-motion";
import React from "react";

export default function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
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
