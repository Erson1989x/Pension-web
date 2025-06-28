import React from 'react';
import { motion } from 'framer-motion';
import GradientUnderline from '../GradientUnderline';

interface SectionTitleProps {
  title: string;
  highlightedWord?: string;
  subtitle: string;
  center?: boolean;
}

const SectionTitle = ({ 
  title, 
  highlightedWord, 
  subtitle, 
  center = true 
}: SectionTitleProps) => {
  const titleParts = highlightedWord 
    ? title.split(highlightedWord)
    : [title];
  
  return (
    <motion.div 
      className={`mb-20 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold font-heading text-text-1 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {highlightedWord ? (
          <>
            <span className="opacity-90">{titleParts[0]}</span>
            <span className="text-gradient">{highlightedWord}</span>
            {titleParts[1] && <span className="opacity-90">{titleParts[1]}</span>}
          </>
        ) : (
          <span className="opacity-90">{title}</span>
        )}
      </motion.h2>
      
      <GradientUnderline center={center} />
      
      <motion.p 
        className={`max-w-3xl ${center ? 'mx-auto' : ''} text-xl text-text-2 leading-relaxed`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;