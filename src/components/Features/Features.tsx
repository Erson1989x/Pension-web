"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWifi, FaCampground, FaFish, FaMountain, FaFire, FaCalendarAlt } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaWifi className="text-blue-600" />,
    title: "High-Speed WiFi",
    description: "Rămâneți conectați cu internet de mare viteză gratuit pe întreaga proprietate"
  },
  {
    icon: <FaCampground className="text-blue-600" />,
    title: "Loc de Camping",
    description: "Închirierea de locuri de camping pentru corturi și rulote"
  },
  {
    icon: <FaFish className="text-blue-600" />,
    title: "Lac de Pescuit",
    description: "Pescuit la lacul privat din incinta pensiunii"
  },
  {
    icon: <FaMountain className="text-blue-600" />,
    title: "Excursii Montane",
    description: "Excursii montane și trasee turistice"
  },
  {
    icon: <FaFire className="text-blue-600" />,
    title: "Gratar si foc de tabara",
    description: "Zona special amenajată pentru grătar și foc de tabără"
  },
  {
    icon: <FaCalendarAlt className="text-blue-600" />,
    title: "Evenimente Speciale",
    description: "Organizarea de evenimente speciale, cum ar fi nunți, boteze sau petreceri"
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Facilități și Servicii Excepționale
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Descoperiți atențiile deosebite și serviciile premium care vă fac șederea cu adevărat de neuitat
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a 
            href="/amenities" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Vezi Toate Facilitățile
            <svg 
              className="ml-2 w-5 h-5" 
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;