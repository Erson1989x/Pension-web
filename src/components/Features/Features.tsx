"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// We'll use the Image component for feature backgrounds
import Image from 'next/image';
import { 
  FaWifi, FaCampground, FaFish, FaMountain, 
  FaFire, FaCalendarAlt, FaArrowRight 
} from 'react-icons/fa';

// Enhanced features data with additional properties
const featuresData = [
  {
    icon: <FaWifi />,
    title: "High-Speed WiFi",
    description: "Rămâneți conectați la internet de mare viteză gratuit pe întreaga proprietate",
    bgColor: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-600",
    accent: "#10b981",
    image: "/images/wifi.jpg" // Add actual image paths
  },
  {
    icon: <FaCampground />,
    title: "Loc de Camping",
    description: "Închirierea de locuri de camping pentru corturi și rulote într-un spațiu natural și liniștit",
    bgColor: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-600",
    accent: "#d97706",
    image: "/images/camping.jpg"
  },
  {
    icon: <FaFish />,
    title: "Lac de Pescuit",
    description: "Pescuit la lacul privat din incinta pensiunii, ideal pentru momente de relaxare și aventură",
    bgColor: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600",
    accent: "#2563eb",
    image: "/images/fishing.jpg"
  },
  {
    icon: <FaMountain />,
    title: "Excursii Montane",
    description: "Excursii montane ghidate și trasee turistice pentru a descoperi frumusețea naturii din împrejurimi",
    bgColor: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-600",
    accent: "#0891b2",
    image: "/images/mountain.jpg"
  },
  {
    icon: <FaFire />,
    title: "Grătar și Foc de Tabără",
    description: "Zonă special amenajată pentru grătar și foc de tabără, perfectă pentru seri memorabile în natură",
    bgColor: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-600",
    accent: "#ea580c",
    image: "/images/fire.jpg"
  },
  {
    icon: <FaCalendarAlt />,
    title: "Evenimente Speciale",
    description: "Organizarea de evenimente speciale, cum ar fi nunți, botezuri sau petreceri în cadrul natural spectaculos",
    bgColor: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600",
    accent: "#9333ea",
    image: "/images/events.jpg"
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: false, margin: "-100px 0px" });
  
  // Advanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };
  
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "120px",
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      } 
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-surface-1 to-surface-2 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Facilități și Servicii <span className="text-gradient">Excepționale</span>
          </motion.h2>
          
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto mb-8"
            variants={underlineVariants}
          ></motion.div>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-text-2 leading-relaxed"
            variants={titleVariants}
            transition={{ delay: 0.3 }}
          >
            Descoperiți serviciile premium care vă fac 
            șederea cu adevărat de neuitat
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 200 }
              }}
            >
              <div className={`
                w-full h-full rounded-2xl overflow-hidden 
                card p-0.5 bg-gradient-to-br ${feature.bgColor}
                backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500
              `}>
                <div className="bg-surface-1 rounded-[14px] p-8 h-full flex flex-col relative">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 opacity-5 rounded-[14px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/0 z-10"></div>
                    {/* Using a background color as fallback until real images are added */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor}`}></div>
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill
                      className="object-cover rounded-[14px]"
                    />
                  </div>
                  
                  {/* Content above the background */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className={`w-12 h-12 ${feature.iconColor} bg-gradient-to-br ${feature.bgColor} rounded-xl 
                                  flex items-center justify-center text-xl shadow-sm
                                  group-hover:shadow-md group-hover:scale-110 
                                  transition-all duration-300`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-text-1 ml-4">{feature.title}</h3>
                    </div>
                    
                    <p className="text-text-2 leading-relaxed mb-6 flex-grow">
                      {feature.description}
                    </p>
                    
                    <motion.div 
                      className="mt-auto relative overflow-hidden group-hover:opacity-100 opacity-80 transition-opacity"
                      initial="rest"
                      whileHover="hover"
                    >
                      <motion.div 
                        className={`h-0.5 w-full ${feature.iconColor} bg-opacity-30`}
                        layout
                      />
                      <motion.div 
                        className={`h-0.5 ${feature.iconColor} absolute bottom-0 left-0`}
                        variants={{
                          rest: { width: "0%" },
                          hover: { width: "100%" }
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex justify-between items-center pt-3">
                        <motion.div
                          className={`ml-2 ${feature.iconColor}`}
                          variants={{
                            rest: { x: -4, opacity: 0 },
                            hover: { x: 0, opacity: 1 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaArrowRight size={14} />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent orb */}
              <motion.div 
                className="absolute -z-10 rounded-full blur-2xl opacity-40"
                style={{ 
                  background: feature.accent,
                  width: activeFeature === index ? "180%" : "30%",
                  height: activeFeature === index ? "180%" : "30%",
                  top: "50%", 
                  left: "50%",
                  x: "-50%",
                  y: "-50%"
                }}
                animate={{
                  width: activeFeature === index ? "180%" : "30%",
                  height: activeFeature === index ? "180%" : "30%",
                  opacity: activeFeature === index ? 0.15 : 0.05
                }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.a 
            href="/amenities" 
            className="inline-flex items-center text-primary font-medium px-8 py-4 rounded-full 
                       border border-primary/20 hover:border-primary/50 transition-all 
                       hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="ml-2 group-hover:ml-3 transition-all"
              variants={{
                hover: { x: 5 }
              }}
            >
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;