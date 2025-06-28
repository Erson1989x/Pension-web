import { motion } from 'framer-motion';
import React from 'react';

interface IFloatingEle {
  delay: number;
  size: number;
  left: any;
  top: any;
  color: string;
  blur: boolean;
}

const FloatingElement: React.FC<IFloatingEle> = ({ delay = 0, size, left, top, color, blur = false }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${blur ? 'backdrop-blur-xl' : ''} mix-blend-multiply opacity-70`}
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        filter: blur ? 'blur(8px)' : 'none',
      }}
      animate={{
        y: [0, 15, 0],
        x: [0, 5, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
    />
  );
};

export default FloatingElement;
