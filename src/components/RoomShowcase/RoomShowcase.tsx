"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import camera from '../../../public/rooms/roomone/roomone.webp';
import cameratwo from '../../../public/rooms/roomtwo/roomtwo.webp';
import camerathree from '../../../public/rooms/roomthree/roomthree.webp';

// Room data with enhanced information
const rooms = [
  {
    id: 'deluxe-mountain-view',
    name: 'Deluxe Double Room (2 Adults + 1 Child)',
    description: 'O cameră spațioasă cu vedere la munte.Cu baie si bucatarie comune. Bucurați-vă de priveliști impresionante și aer proaspăt de munte.',
    price: 195,
    size: '45 m²',
    capacity: '2 persoane + 1 copil',
    beds: '1 pat king size + 1 canapea extensibila',
    features: ['Vedere la munte', 'Wi-Fi gratuit', 'Baie comună', 'bucatarie comună', 'TV HD'],
    image: camera,
    accent: 'from-cyan-500 to-blue-600',
    shadow: 'cyan-500/20'
  },
  {
    id: 'family-suite',
    name: 'Double Room (2 Adults)',
    description: 'O cameră spațioasă cu vedere la gradina, și zonă de relaxare, perfectă pentru familii care doresc să se bucure de natură împreună.',
    price: 173,
    size: '38 m²',
    capacity: '2 persoane',
    beds: '1 pat king size',
    features: ['Vedere la gradina',  'Zonă de living', 'Wi-Fi gratuit', 'Baie comună', 'TV'],
    image: cameratwo,
    accent: 'from-amber-500 to-orange-600',
    shadow: 'amber-500/20'
  },
  {
    id: 'premium-suite',
    name: 'Deluxe Double Room (2 Adults)',
    description: 'O cameră spațioasă cu vedere la munte.Cu baie privata si bucatarie comune. Bucurați-vă de priveliști impresionante și aer proaspăt de munte.',
    price: 197,
    size: '38 m²',
    capacity: '2 persoane',
    beds: '1 pat king size',
    features: ['Vedere la gradina', 'Baie privata', 'Bucatarie comună', 'Wi-Fi gratuit', 'TV HD'],
    image: camerathree,
    accent: 'from-emerald-500 to-teal-600',
    shadow: 'emerald-500/20'
  },
];

const RoomShowcase = () => {
  const [activeRoom, setActiveRoom] = useState<string>('deluxe-mountain-view');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" });
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  
  // Advanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
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

  // Feature animation for hover effect
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-surface-2 to-surface-1 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface-1 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold font-heading text-text-1 mb-6"
            variants={titleVariants}
          >
            <span className="opacity-75">Cazare</span> <span className="text-gradient">Elegantă</span> și <span className="relative">
              Confortabilă
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-secondary/20 blur-sm rounded-full"></span>
            </span>
          </motion.h2>
          
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full mx-auto mb-8"
            variants={underlineVariants}
          ></motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-text-2 leading-relaxed"
            variants={titleVariants}
            transition={{ delay: 0.3 }}
          >
            Descoperiți camerele și suitele noastre atent concepute, 
            fiecare oferind confort premium și farmec montan autentic.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Room cards */}
          <motion.div
            className="flex flex-col space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer p-0.5 transition-all duration-500 
                           ${room.id === activeRoom 
                              ? `bg-gradient-to-r ${room.accent} shadow-xl shadow-${room.shadow}` 
                              : 'bg-surface-2/80 shadow-md hover:shadow-lg'}`}
                variants={cardVariants}
                onClick={() => setActiveRoom(room.id)}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-surface-1 rounded-[10px] p-6 h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-heading text-text-1 flex items-center">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${room.accent}`}></span>
                      {room.name}
                    </h3>
                    <div className="flex items-center">
                      <span className={`text-xl font-bold ${room.id === activeRoom ? 'text-primary' : 'text-text-1'}`}>
                        {room.price} RON
                      </span>
                      <span className="ml-1 text-xs text-text-2">/noapte</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="flex items-center text-sm text-text-2">
                      <svg className="w-4 h-4 mr-1.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      {room.size}
                    </div>
                    <div className="flex items-center text-sm text-text-2">
                      <svg className="w-4 h-4 mr-1.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      {room.capacity}
                    </div>
                    <div className="flex items-center text-sm text-text-2">
                      <svg className="w-4 h-4 mr-1.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                      {room.beds}
                    </div>
                  </div>
                  
                  <div className="mt-3 line-clamp-2 text-text-2 text-sm">
                    {room.description}
                  </div>
                  
                  {room.id === activeRoom && (
                    <motion.div 
                      className="flex items-center mt-3 text-sm font-medium text-primary"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Room showcase */}
          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden"
            style={{ opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                className="absolute inset-0 rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: room.id === activeRoom ? 1 : 0,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Parallax image container */}
                <motion.div 
                  className="absolute inset-0 scale-110" 
                  style={{ y: room.id === activeRoom ? y : 0 }}
                >
                  {/* Image */}
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    priority={room.id === 'deluxe-mountain-view'}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </motion.div>
                
                {/* Content */}
                {room.id === activeRoom && (
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <motion.h3
                      className="text-3xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {room.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-white/80 mb-6 max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {room.description}
                    </motion.p>
                    
                    <motion.div 
                      className="grid grid-cols-2 gap-3 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {room.features.slice(0, 6).map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center text-sm text-white/80"
                          variants={featureVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className={`mr-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${room.accent}`}></div>
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mt-auto"
                    >
                      <Link href={`/rooms/${room.id}`}>
                        <motion.div
                          className={`inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r ${room.accent} 
                                     text-white font-medium hover:shadow-lg hover:shadow-black/20 group`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span>Rezervă acum</span>
                          <svg 
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link href="/rooms">
            <motion.div
              className="inline-flex items-center text-primary font-medium px-8 py-4 rounded-full 
                       border border-primary/20 hover:border-primary/50 transition-all 
                       hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Descoperă toate camerele</span>
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
  );
};

export default RoomShowcase;