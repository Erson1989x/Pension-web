import React from 'react';
import { motion } from 'framer-motion';

interface GradientUnderlineProps {
  center?: boolean;
  width?: string;
  delay?: number;
}

const GradientUnderline = ({ 
  center = true, 
  width = "120px", 
  delay = 0.2 
}: GradientUnderlineProps) => {
  return (
    <motion.div 
      className={`h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full ${center ? 'mx-auto' : ''} mb-8`}
      initial={{ width: 0 }}
      whileInView={{ width }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
    ></motion.div>
  );
};

export default GradientUnderline;