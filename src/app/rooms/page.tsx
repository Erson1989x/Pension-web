"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import camera from '../../../public/camera.webp';
import roomone from '../../../public/rooms/roomone/roomone.webp';
import roomtwo from '../../../public/rooms/roomtwo/roomtwo.webp';
import roomthree from '../../../public/rooms/roomthree/roomthree.webp';

const rooms = [
  {
    id: 'deluxe-mountain-view',
    name: 'Deluxe Double Room',
    description: 'O cameră spațioasă cu vedere la munte.Cu baie si bucatarie comune. Bucurați-vă de priveliști impresionante și aer proaspăt de munte.',
    longDescription: 'Bucurați-vă de priveliștea spectaculoasă a munților din această cameră elegantă. Dotată cu un pat king-size confortabil si o canapea extensibila, baie comună si bucatarie comună, perfect pentru a savura cafeaua de dimineață în mijlocul naturii.',
    price: 195,
    size: '45 m²',
    capacity: '2 persoane + 1 copil',
    beds: '1 pat king-size + 1 canapea extensibila',
    features: [
      'Vedere panoramică la munte',
      'Baie comună',
      'Bucatarie comună',
      'TV HD',
      'Wi-Fi gratuit',
      'Ciubăr',    
    ],
    color: 'from-blue-500/20 to-cyan-400/20',
    accent: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    images: [roomone]
  },
  {
    id: 'family-suite',
    name: 'Double Room ',
    description: 'O cameră spațioasă cu vedere la gradina, și zonă de relaxare, perfectă pentru familii care doresc să se bucure de natură împreună.',
    longDescription: 'Perfect pentru familie, această cameră oferă spațiu generos și toate facilitățile necesare pentru un sejur confortabil in inima naturii.',
    price: 173,
    size: '38 m²',
    capacity: '2 persoane',
    beds: '1 pat king-size',
    features: [
      'Vedere la gradina',
      'Zonă de relaxare',
      'Wi-Fi gratuit',
      'Baie comună',
      'TV',
      'Ciubăr',
    ],
    color: 'from-emerald-500/20 to-teal-400/20',
    accent: 'bg-gradient-to-r from-emerald-500 to-teal-400',
    images: [roomtwo]
  },
  {
    id: 'premium-suite',
    name: 'Deluxe Double Room',
    description: 'O cameră spațioasă cu vedere la munte.Cu baie privata si bucatarie comune. Bucurați-vă de priveliști impresionante și aer proaspăt de munte.',
    longDescription: 'Bucurați-vă de priveliștea spectaculoasă a munților din această cameră elegantă. Dotată cu un pat king-size confortabil, baie privata si bucatarie comună, perfect pentru a savura cafeaua de dimineață în mijlocul naturii.',
    price: 197,
    size: '38 m²',
    capacity: '2 persoane',
    beds: '1 pat king-size premium',
    features: [
      'Wi-Fi gratuit',
      'Baie privata',
      'Bucatarie comună',
      'TV',
      'Ciubăr',
      'Zonă de relaxare',
    ],
    color: 'from-purple-500/20 to-indigo-400/20',
    accent: 'bg-gradient-to-r from-purple-500 to-indigo-400',
    images: [roomthree]
  }
];

interface IFloatingEle {
  delay:number,
  size:number,
  left:any,
  top:any,
  color:string,
  blur:boolean
}

// Decorative floating element component
const FloatingElement:React.FC<IFloatingEle> = ({ delay = 0, size, left, top, color, blur = false }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${blur ? 'backdrop-blur-xl' : ''} mix-blend-multiply opacity-70`}
      style={{ 
        width: size, 
        height: size, 
        left: `${left}%`, 
        top: `${top}%`,
        filter: blur ? 'blur(8px)' : 'none'
      }}
      animate={{
        y: [0, 15, 0],
        x: [0, 5, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    />
  );
};

interface FeatureBadgeProps {
  feature : any,
  index:number,
  accent:string
}

// Hover Card effect component
const FeatureBadge:React.FC<FeatureBadgeProps> = ({ feature, index, accent }) => {
  return (
    <motion.div 
      className={`flex items-center text-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -3 }}
    >
      <div className={`w-2 h-full self-stretch ${accent} mr-2`}></div>
      <div className="flex items-center text-gray-700 py-2 px-3">
        <svg className="w-4 h-4 mr-2 text-current group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span className="text-sm">{feature}</span>
      </div>
    </motion.div>
  );
};

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });

  // Mouse position parallax effect
  const handleMouseMove = (e:any) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // For smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const springY = useSpring(y, { stiffness: 50, damping: 30 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Hero Section with Parallax Effect */}
      <section ref={parallaxRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: springY }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={camera}
            alt="Rooms Hero"
            fill
            className="object-cover transform scale-110"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        
        {/* Decorative Elements */}
        <FloatingElement delay={0} size={120} left={15} top={30} color="bg-blue-300/20" blur />
        <FloatingElement delay={2} size={80} left={80} top={40} color="bg-purple-300/20" blur />
        <FloatingElement delay={4} size={150} left={70} top={70} color="bg-indigo-300/20" blur />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center text-white max-w-4xl px-4"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Camerele Noastre
            </span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200"
          >
            Descoperiți confortul și eleganța camerelor noastre, fiecare oferind o experiență unică de cazare
          </motion.p>
        </motion.div>
      </section>

      {/* Rooms Grid with 3D Effects and Modernized Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement delay={1} size={250} left={-5} top={20} color="bg-blue-200/10" blur={true} />
          <FloatingElement delay={3} size={300} left={90} top={50} color="bg-purple-200/10" blur={true} />
          <FloatingElement delay={5} size={200} left={50} top={80} color="bg-indigo-200/10" blur={true} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-24"
          >
            {rooms.map((room, index) => {
              // Calculate dynamic offset based on mouse position for parallax hover effect
              const offsetX = ((mousePosition.x / window.innerWidth) - 0.5) * 20;
              const offsetY = ((mousePosition.y / window.innerHeight) - 0.5) * 10;
              
              return (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <div 
                    className={`relative overflow-visible p-1 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${room.color} opacity-30 blur-xl transform -translate-y-1`} />
                    
                    <div className={`flex flex-col lg:flex-row bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                    >
                      {/* Room Images with Parallax Effect */}
                      <div className="relative lg:w-1/2 h-[400px] lg:h-auto group overflow-hidden">
                        <motion.div
                          style={{ 
                            x: offsetX, 
                            y: offsetY,
                            scale: 1.1 
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 50, 
                            damping: 30 
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={room.images[0]}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Floating room details badge on hover */}
                        <motion.div 
                          initial={{ y: 60, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 transform group-hover:translate-y-0 translate-y-20 transition-transform duration-500 shadow-lg"
                        >
                          <div className={`w-full h-0.5 ${room.accent} mb-3 rounded-full`} />
                          <p className="text-lg font-medium text-gray-900">{room.description}</p>
                        </motion.div>
                      </div>

                      {/* Room Details with Modern UI */}
                      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                          <motion.h2 
                            className="text-3xl lg:text-4xl font-bold text-gray-900 relative inline-block"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            {room.name}
                            <motion.span 
                              className={`absolute bottom-0 left-0 h-1 ${room.accent} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </motion.h2>
                          <motion.div 
                            className="text-right mt-2 md:mt-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className={`px-4 py-2 rounded-full ${room.accent} text-white`}>
                              <p className="text-3xl font-bold">{room.price} RON</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">per noapte</p>
                          </motion.div>
                        </div>

                        <motion.div 
                          className="grid grid-cols-2 gap-4 mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <div className="flex items-center text-gray-600 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100">
                            <motion.svg 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.8 }}
                              className={`w-5 h-5 mr-3 text-gradient-to-r ${room.accent}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </motion.svg>
                            {room.size}
                          </div>
                          <div className="flex items-center text-gray-600 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100">
                            <motion.svg 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.8 }}
                              className={`w-5 h-5 mr-3 text-gradient-to-r ${room.accent}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </motion.svg>
                            {room.capacity}
                          </div>
                        </motion.div>

                        <motion.p 
                          className="text-gray-600 mb-8 flex-grow"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.2 }}
                        >
                          {room.longDescription}
                        </motion.p>

                        <div className="mb-8">
                          <motion.h3 
                            className="text-lg font-semibold text-gray-900 mb-4 relative inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            Facilități:
                            <motion.span 
                              className={`absolute bottom-0 left-0 h-0.5 ${room.accent} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            />
                          </motion.h3>
                          <div className="grid grid-cols-2 gap-3">
                            {room.features.map((feature, featureIndex) => (
                              <FeatureBadge 
                                key={featureIndex} 
                                feature={feature} 
                                index={featureIndex}
                                accent={room.accent}
                              />
                            ))}
                          </div>
                        </div>

                        <motion.button 
                          className={`w-full py-4 rounded-xl font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl ${room.accent} text-white`}
                          onClick={() => setSelectedRoom(room.id)}
                          whileHover={{ 
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          Rezervă Acum
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Booking Modal with Enhanced Design */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-white/20"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Rezervare</h3>
              <p className="mb-6 text-gray-600">Completați formularul pentru a rezerva camera selectată.</p>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nume și Prenume</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                      <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                  </div>
                </div>
                
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    type="button"
                  >
                    Confirmă Rezervarea
                  </motion.button>
                  
                  <button 
                    onClick={() => setSelectedRoom(null)}
                    className="w-full text-gray-600 mt-4 py-2 hover:text-gray-900 transition-colors duration-200"
                    type="button"
                  >
                    Anulează
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
