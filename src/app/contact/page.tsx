"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DecorativeBackground from './components/DecorativeBackground';
import ContactHeroSection from './components/ContactHeroSection';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import ContactMapSection from './components/ContactMapSection';

const ContactPage = () => {
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const mapY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <main className="pt-24 pb-16 bg-gradient-to-b from-surface-1 to-surface-2 overflow-hidden">
      <DecorativeBackground />
      <ContactHeroSection heroY={heroY} heroScale={heroScale} />
      
      {/* Contact Info & Form Section */}
      <section className="py-24 relative" ref={formRef}>
        <motion.div 
          className="absolute top-40 -left-40 w-96 h-96 rounded-full blur-3xl -z-10"
          style={{ background: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08))" }}
          animate={{ 
            x: [0, 40, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMapSection mapY={mapY} mapRef={mapRef} />
    </main>
  );
};

export default ContactPage;
