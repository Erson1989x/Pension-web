import { motion } from "framer-motion";

interface FloatingElementProps {
  delay: number;
  size: number;
  left: number;
  top: number;
  color: string;
  blur?: boolean;
}

const FloatingElement = ({ delay, size, left, top, color, blur = false }: FloatingElementProps) => (
  <motion.div
    className={`absolute w-${size} h-${size} ${color} rounded-full ${blur ? 'backdrop-blur-sm' : ''}`}
    style={{ left: `${left}%`, top: `${top}%`, width: `${size}px`, height: `${size}px` }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
  />
);

export default FloatingElement;
