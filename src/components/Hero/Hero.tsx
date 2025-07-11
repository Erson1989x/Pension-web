"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import header from '../../../public/header.webp';
import { useMousePosition } from '@/hooks/useMousePosition';


const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const mousePosition = useMousePosition();
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const filterBlur = useTransform(scrollYProgress, [0, 1], [0, 6]);
  
  // Mouse parallax effect for decorative elements
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Decorative elements for visual interest
  const decorElements = [
    { x: -20, y: 30, delay: 0.3, size: 80, color: 'rgba(255, 255, 255, 0.05)' },
    { x: 20, y: -30, delay: 0.5, size: 120, color: 'rgba(255, 255, 255, 0.07)' },
    { x: 15, y: 40, delay: 0.7, size: 60, color: 'rgba(255, 255, 255, 0.03)' },
  ];
  
  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  // Split text for animated rendering
  const title1 = "Pensiune Vilcan".split("");
  const title2 = "Campingplatz".split("");

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y, 
          scale,
          filter: isClient ? `blur(${filterBlur.get()}px)` : 'none'
        }}
      >
        <Image
          src={header}
          alt="Pensiune Vilcan"
          fill
          priority
          className="object-cover object-center transform scale-110"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 via-transparent to-black/40"></div>
      </motion.div>

      {/* Decorative floating elements */}
      {isClient && decorElements.map((elem, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full z-10 bg-white/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.7,
            x: mousePosition.x * elem.x * -1,
            y: mousePosition.y * elem.y * -1,
          }}
          transition={{
            delay: elem.delay,
            duration: 0.8,
            ease: "easeOut"
          }}
          style={{
            width: elem.size,
            height: elem.size,
            left: `${30 + idx * 25}%`,
            top: `${20 + idx * 20}%`,
            background: elem.color,
            boxShadow: `0 0 40px ${elem.color}`
          }}
        />
      ))}

      {/* Content Container with text animations */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8"
        style={{ y: textY }}
      >
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Text with character-by-character animation */}
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-2 font-heading">
              <span className="block overflow-hidden">
                <motion.span className="inline-flex">
                  {title1.map((char, i) => (
                    <motion.span
                      key={`title1-${i}`}
                      custom={i}
                      variants={titleVariants}
                      initial="hidden"
                      animate="visible"
                      className={char === " " ? "mx-3" : ""}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
              <span className="block mt-2 overflow-hidden">
                <motion.span className="inline-flex">
                  {title2.map((char, i) => (
                    <motion.span
                      key={`title2-${i}`}
                      custom={i + title1.length}
                      variants={titleVariants}
                      initial="hidden"
                      animate="visible"
                      className={char === " " ? "mx-3" : ""}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            </h1>
          </div>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded w-48 mx-auto mb-10"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "12rem", opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          />
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl mb-12 text-gray-100 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            Descoperiți refugiul nostru de lux montan cu priveliști impresionante și servicii excepționale.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <motion.button 
              className="px-9 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-full text-lg font-medium
                        shadow-lg shadow-primary/20 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-primary/30"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
            >
                <span className="flex items-center justify-center gap-2">
                  Rezervă Acum
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            
            <Link href="/rooms">
              <motion.button 
                className="px-9 py-4 bg-transparent border border-white/30 backdrop-blur-md text-white 
                          rounded-full text-lg font-medium shadow-lg shadow-black/5
                          hover:bg-white/10 hover:border-white/50"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Vizualizează Camerele
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator with enhanced animation */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-sm tracking-wide mb-2 font-light">EXPLORE</span>
          <div className="w-8 h-14 rounded-full border-2 border-white/30 flex justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                y: [0, 16, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-surface-1 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-text-1 hover:text-primary transition-colors text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-primary mb-4">Contactează-ne</h3>
            <div className="space-y-3">
              <div>
                <p className="text-text-1 font-medium">Telefon:</p>
                <a
                  href="tel:+40123456789"
                  className="text-secondary hover:text-primary transition-colors block"
                >
                  +49 170 312 3905
                </a>
              </div>
              <div>
                <p className="text-text-1 font-medium">Email:</p>
                <a
                  href="mailto:pensiuneavilcan@gmail.com"
                  className="text-secondary hover:text-primary transition-colors block"
                >
                 pensiuneavilcan@gmail.com 
                </a>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
            >
              Închide
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;