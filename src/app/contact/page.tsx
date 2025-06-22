"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import hero from '../../../public/aboutus.webp';
import LeafletMap from '../../components/LeafletMap/LeafletMap';

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
      {/* Decorative elements */}
      <div className="fixed -top-96 -right-96 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="fixed -bottom-64 -left-64 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section - Enhanced */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: heroY,
            scale: heroScale
          }}
        >
          <Image
            src={hero}
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 mix-blend-multiply"></div>
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, index) => (
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="opacity-90">Contact</span><span className="text-gradient ml-3">Noi</span>
            </motion.h1>
            
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            
            <motion.p
              className="max-w-xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Suntem aici pentru a răspunde întrebărilor și solicitărilor dumneavoastră
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section - Enhanced */}
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
            {/* Contact Information - Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              className="space-y-10 relative"
            >
              <div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 text-text-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Informații de <span className="text-gradient">Contact</span>
                </motion.h2>
                
                <motion.div 
                  className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                ></motion.div>
                
                <motion.p
                  className="text-text-2 leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Nu ezitați să ne contactați pentru orice întrebare sau pentru a face o rezervare. 
                  Suntem disponibili pentru a vă ajuta și a vă asigura o experiență memorabilă.
                </motion.p>
              </div>

              <div className="space-y-8">
                <motion.div 
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-text-1 mb-2">Adresă</h3>
                    <p className="text-text-2">DC192 37, Fundoaia</p>
                    <p className="text-text-2">Sarmas, Romania</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-text-1 mb-2">Telefon</h3>
                    <p className="text-text-2">+49 170 312 3905</p>
                    <p className="text-text-2 text-sm mt-1 text-primary">Disponibil zilnic: 08:00 - 20:00</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center text-cyan-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-text-1 mb-2">Email</h3>
                    <p className="text-text-2">pensiuneavilcan@gmail.com</p>
                    <p className="text-text-2 text-sm mt-1 text-cyan-500">Vă răspundem în maxim 24 ore</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-text-1">Program</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-text-2/10">
                    <span className="text-text-2 font-medium">Luni - Vineri</span>
                    <span className="text-text-1 font-semibold">08:00 - 20:00</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-text-2/10">
                    <span className="text-text-2 font-medium">Sâmbătă - Duminică</span>
                    <span className="text-text-1 font-semibold">09:00 - 18:00</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="card p-8 space-y-6 bg-surface-1 rounded-2xl shadow-xl border border-white/10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-1 mb-1">
                    Nume Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1"
                    placeholder="Introduceți numele dvs."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-1 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1"
                    placeholder="email@exemplu.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-1 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1"
                    placeholder="Număr de telefon"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-1 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea w-full rounded-xl p-4 bg-surface-2/50 border border-text-2/10 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-1 resize-none"
                    placeholder="Scrieți mesajul dvs. aici..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md"
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Trimite Mesaj
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-width">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg" ref={mapRef}>
            <motion.div 
              className="absolute inset-0"
              style={{ 
                y: mapY
              }}
            >
              <LeafletMap
                lat={46.8791708}
                lng={25.457565}
                zoom={14}
                height="100%"
                popupText="Pensiunea Sărmaș - Locația noastră"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
