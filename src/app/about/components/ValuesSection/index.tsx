// src/components/about/ValuesSection.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the values data
const values = [
  {
    icon: "/icons/heart.svg",
    title: "Ospitalitate",
    description: "Punem suflet în fiecare interacțiune și ne asigurăm că te simți ca acasă din momentul în care pășești pe ușa noastră."
  },
  {
    icon: "/icons/quality.svg",
    title: "Calitate",
    description: "Ne angajăm să oferim servicii de cea mai înaltă calitate, de la cazare și până la cele mai mici detalii ale experienței tale."
  },
  {
    icon: "/icons/nature.svg",
    title: "Respect pentru natură",
    description: "Implementăm practici sustenabile și promovăm respectul pentru mediul înconjurător în toate activitățile noastre."
  },
  {
    icon: "/icons/community.svg",
    title: "Comunitate",
    description: "Susținem comunitatea locală și promovăm tradițiile și valorile autentice ale regiunii noastre."
  }
];

const ValuesSection = () => {
  // Animation variants
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-background-2">
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
            Valorile <span className="text-gradient">Noastre</span>
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
            Principiile care ne ghidează și ne inspiră să oferim experiențe memorabile oaspeților noștri
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-background-1 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-16 w-16 mb-6 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={32}
                    height={32}
                    className="text-primary"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-text-1 text-center">{value.title}</h3>
              <p className="text-text-2 text-center">{value.description}</p>
              
              <motion.div 
                className="h-0.5 w-0 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
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
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;