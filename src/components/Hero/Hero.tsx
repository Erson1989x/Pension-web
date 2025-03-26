"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import header from '../../../public/header.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={header}
          alt="Mountain Pension View"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block">Pensiune Vilcan</span>
            <span className="block mt-2">Campingplatz</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl mb-10 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Descoperiți refugiul nostru de lux montan cu priveliști impresionante și servicii excepționale.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/book">
              <motion.button 
                className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium transition-all hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rezerva Acum
              </motion.button>
            </Link>
            
            <Link href="/rooms">
              <motion.button 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium transition-all hover:bg-white hover:text-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vizualizeaza Camerele
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll</span>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;