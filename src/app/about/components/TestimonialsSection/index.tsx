"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Define testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alexandra Munteanu",
    role: "Turist din București",
    image: "/images/testimonials/testimonial1.jpg",
    rating: 5,
    text: "Am petrecut un weekend minunat la Pensiunea Vilcan. Camerele sunt impecabile, priveliștea este spectaculoasă, iar personalul este extrem de amabil și atent la detalii. Cu siguranță vom reveni!"
  },
  {
    id: 2,
    name: "Mihai Dragomir",
    role: "Fotograf de natură",
    image: "/images/testimonials/testimonial2.jpg",
    rating: 5,
    text: "Ca fotograf, apreciez locațiile cu peisaje deosebite, iar Pensiunea Vilcan este amplasată perfect. Personalul m-a ajutat să descopăr cele mai frumoase locuri din împrejurimi. Recomand cu căldură!"
  },
  {
    id: 3,
    name: "Familia Ionescu",
    role: "Vacanță cu copiii",
    image: "/images/testimonials/testimonial3.jpg",
    rating: 5,
    text: "Am fost plăcut surprinși de facilitățile pentru copii și de atmosfera primitoare. Mâncarea a fost delicioasă, cu multe opțiuni tradiționale. Copiii s-au îndrăgostit de acest loc și ne-au rugat să revenim cât mai curând."
  },
  {
    id: 4,
    name: "Cristian Popa",
    role: "Pasionat de drumeții",
    image: "/images/testimonials/testimonial4.jpg",
    rating: 4,
    text: "Pensiunea Vilcan este baza perfectă pentru a explora munții din împrejurimi. Gazda noastră ne-a oferit hărți și sfaturi valoroase pentru trasee. Camerele sunt confortabile și curate, exact ce ai nevoie după o zi de drumeție."
  },
  {
    id: 5,
    name: "Elena și Andrei",
    role: "Weekend romantic",
    image: "/images/testimonials/testimonial5.jpg",
    rating: 5,
    text: "Am sărbătorit aniversarea relației noastre la Pensiunea Vilcan și a fost o alegere excelentă. Atmosfera romantică, priveliștea superbă și serviciile impecabile au făcut din acest weekend unul de neuitat."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);
  
  // Handle navigation
  const handlePrev = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0
    })
  };

  return (
    <section className="py-24 bg-background-2 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-64 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      <div className="container-width">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ce Spun <span className="text-gradient">Oaspeții Noștri</span>
          </motion.h2>
          <motion.div 
            className="h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto text-text-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experiențele autentice ale celor care ne-au trecut pragul
          </motion.p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto px-4"></div>
        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="bg-background-1 rounded-2xl shadow-xl p-6 md:p-8 h-full flex flex-col md:flex-row items-center border border-border">
                <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg"></div>
                    <div className="relative rounded-full overflow-hidden border-4 border-background-1 shadow-lg">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        width={144}
                        height={144}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-semibold text-lg text-text-1">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-text-2">{testimonials[currentIndex].role}</p>
                    <div className="flex items-center justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <svg className="text-primary/20 w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-text-2 text-lg italic leading-relaxed mb-6">{testimonials[currentIndex].text}</p>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Navigation controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-background-3 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-text-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-primary to-secondary w-8" 
                    : "bg-border hover:bg-text-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-background-3 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-text-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Autoplay toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm transition-colors ${
              autoplay 
                ? "bg-primary/10 text-primary" 
                : "bg-background-3 text-text-2 hover:text-text-1"
            }`}
          >
            <svg 
              className={`w-4 h-4 ${autoplay ? "text-primary" : "text-text-2"}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              {autoplay ? (
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;