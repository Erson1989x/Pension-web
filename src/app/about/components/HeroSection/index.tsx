// src/components/about/HeroSection.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import aboutUS from '../../../public/aboutus.webp';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };
  
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "120px",
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      } 
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y: heroY, scale: heroScale }}
      >
        <Image
          src={aboutUS}
          alt="Pensiunea Vilcan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 mix-blend-multiply"></div>
      </motion.div>
      
      {/* Floating particles for atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 10 + "%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{ 
              width: Math.random() * 4 + 1, 
              height: Math.random() * 4 + 1,
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center text-white px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={textVariants}
          >
            <span className="opacity-90">Despre</span> <span className="text-gradient">Noi</span>
          </motion.h1>
          
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-8 w-0"
            variants={underlineVariants}
          ></motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90"
            variants={textVariants}
          >
            Bun venit în lumea noastră de ospitalitate autentică și confort modern
          </motion.p>
          
          <motion.div 
            className="mt-10"
            variants={textVariants}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="#story" 
              className="relative group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm 
                       border border-white/20 rounded-full text-white hover:bg-white/20 transition-all 
                       hover:shadow-lg hover:shadow-white/5"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Descoperă Povestea Noastră</span>
              <motion.span 
                animate={{ y: [0, 5, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.span>
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/60 to-secondary/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;