"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import hero from '../../../public/header.jpg';

const AboutPage = () => {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: storyScrollProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const storyImageY = useTransform(storyScrollProgress, [0, 1], [50, -50]);
  
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
    <main className="pt-24 pb-16 bg-gradient-to-b from-surface-1 to-surface-2 overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed -top-96 -right-96 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="fixed -bottom-64 -left-64 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section - Enhanced */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src={hero}
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

      {/* Our Story Section - Enhanced */}
      <section id="story" className="py-24" ref={storyRef}>
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              className="relative z-10"
            >
              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-text-1 inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Povestea <span className="text-gradient">Noastră</span>
              </motion.h2>
              
              <motion.div 
                className="h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              
              <motion.p 
                className="text-text-2 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                În inima Topliței, într-un loc unde natura își dezvăluie cele mai frumoase peisaje, 
                se află Pensiunea Vilcan - un refugiu modern care îmbină perfect confortul contemporan 
                cu ospitalitatea tradițională românească.
              </motion.p>
              
              <motion.p 
                className="text-text-2 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Fondată din pasiunea pentru turism și dorința de a oferi oaspeților noștri experiențe 
                memorabile, pensiunea Vilcan a devenit rapid un punct de referință pentru cei care 
                caută mai mult decât o simplă cazare.
              </motion.p>
              
              <motion.p 
                className="text-text-2 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ne mândrim cu atenția la detalii, serviciile personalizate și atmosfera caldă pe care 
                le oferim fiecărui oaspete care ne trece pragul.
              </motion.p>
              
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link href="/contact">
                  <motion.div
                    className="inline-flex items-center gap-2 text-primary font-medium border-b-2 border-primary/30 pb-1 hover:border-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Contactează-ne</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 0.2
              }}
            >
              {/* 3D card effect with shadow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              
              <div className="absolute inset-0.5 rounded-2xl overflow-hidden perspective border border-white/10">
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{ y: storyImageY }}
                >
                  <Image
                    src="/images/about/story.jpg"
                    alt="Pensiunea Vilcan"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply"></div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              ></motion.div>
              
              <motion.div
                className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Din 2015
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-2/80 to-surface-1/80 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-surface-1 to-transparent z-0"></div>
        
        {/* Decorative accent */}
        <motion.div 
          className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <div className="container-width relative z-10">
          <motion.div 
            className="text-center mb-20"
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
              <span className="opacity-90">Valorile</span> <span className="text-gradient">Noastre</span>
            </motion.h2>
            
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            
            <motion.p 
              className="max-w-3xl mx-auto text-xl text-text-2 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Principiile care ne ghidează în crearea unor experiențe memorabile pentru oaspeții noștri
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Ospitalitate Autentică",
                description: "Punem suflet în tot ceea ce facem, oferind oaspeților noștri o experiență caldă și primitoare care reflectă tradițiile locale.",
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: "from-pink-500 to-rose-600",
                accentColor: "#ec4899"
              },
              {
                title: "Confort Modern",
                description: "Îmbinăm facilitățile moderne cu atmosfera tradițională pentru a crea o experiență unică și confortabilă pentru toți oaspeții noștri.",
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                color: "from-cyan-500 to-blue-600",
                accentColor: "#0891b2"
              },
              {
                title: "Respect pentru Natură",
                description: "Ne străduim să protejăm și să promovăm frumusețea naturală a regiunii noastre, implementând practici sustenabile și eco-friendly.",
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "from-emerald-500 to-teal-600",
                accentColor: "#10b981"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={`p-0.5 rounded-2xl bg-gradient-to-br ${value.color} shadow-lg`}>
                  <div className="bg-surface-1 p-8 rounded-[14px] h-full flex flex-col">
                    <div className="w-20 h-20 mx-auto mb-6 p-4 relative">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-20`}></div>
                      <div className={`text-transparent bg-clip-text bg-gradient-to-br ${value.color} relative z-10`}>
                        {value.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-text-1 text-center">{value.title}</h3>
                    <p className="text-text-2 text-center flex-grow">{value.description}</p>
                    
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"
                      initial={{ width: 0 }}
                      whileInView={{ width: "4rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.15 }}
                    ></motion.div>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute -inset-4 rounded-3xl opacity-0 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ background: value.accentColor }}
                  whileHover={{ opacity: 0.15 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section - Enhanced */}
      <section className="py-24 bg-surface-1 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-surface-2 to-transparent"></div>
        <motion.div 
          className="absolute top-1/3 right-0 w-64 h-64 rounded-full blur-3xl -z-10"
          style={{ background: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08))" }}
          animate={{ 
            x: [0, -40, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        
        <div className="container-width">
          <motion.div 
            className="text-center mb-20"
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
              <span className="opacity-90">Facilitățile</span> <span className="text-gradient">Noastre</span>
            </motion.h2>
            
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
            
            <motion.p 
              className="max-w-3xl mx-auto text-xl text-text-2 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Tot ce aveți nevoie pentru o ședere confortabilă și relaxantă în mijlocul naturii
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Camere Confortabile",
                description: "Camere spațioase și elegant mobilate, cu vedere la munte și toate facilitățile moderne pentru o experiență de cazare premium.",
                image: "/images/about/rooms.jpg",
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Restaurant Traditional",
                description: "Bucătărie locală autentică, preparată cu ingrediente proaspete și rețete tradiționale care vă vor încânta papilele gustative.",
                image: "/images/about/restaurant.jpg",
                color: "from-purple-500 to-pink-600"
              },
              {
                title: "Spa & Wellness",
                description: "Zonă de relaxare cu saună, jacuzzi și servicii de masaj pentru revigorare completă și răsfăț după o zi de explorare.",
                image: "/images/about/spa.jpg",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
                whileHover={{ y: -10 }}
              >
                <div className="card overflow-hidden rounded-2xl bg-surface-2 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300"></div>
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover transition-transform"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-0 top-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                      initial={{ y: -20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${facility.color} text-white text-sm font-medium`}>
                        Explorează
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold mb-3 text-text-1">{facility.title}</h3>
                    <p className="text-text-2">{facility.description}</p>
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                    ></motion.div>
                  </div>
                </div>
                
                {/* Subtle glow effect on hover */}
                <motion.div 
                  className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ background: `linear-gradient(to bottom right, ${facility.color.replace('from-', '').replace(' to-', ', ')})` }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/facilities">
              <motion.div
                className="inline-flex items-center text-primary font-medium px-8 py-4 rounded-full 
                         border border-primary/20 hover:border-primary/50 transition-all 
                         hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explorează toate facilitățile</span>
                <motion.span 
                  className="ml-2 group-hover:ml-3 transition-all"
                  variants={{
                    hover: { x: 5 }
                  }}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Pregătiți să Ne Vizitați?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rezervați-vă sejurul acum și bucurați-vă de o experiență de neuitat în Toplița
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/book">
                <motion.button
                  className="button-primary text-lg px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rezervă Acum
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="button-outline-white text-lg px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactează-ne
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;