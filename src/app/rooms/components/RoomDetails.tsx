"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

// Define the Room interface based on your existing data structure
interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  size: string;
  capacity: string;
  beds: string;
  features: string[];
  color: string;
  accent: string;
  images: any[];
}

// Props interface with explicit room property
interface RoomDetailsProps {
  room: Room;
}

export default function RoomDetails({ room }: RoomDetailsProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <Link href="/rooms" className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Înapoi la camere
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Image gallery */}
          <motion.div variants={itemVariants} className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
            {room.images && room.images.length > 0 && (
              <Image
                src={room.images[currentImageIndex]}
                alt={room.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
            
            {/* Image navigation */}
            {room.images && room.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Room details */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-4xl font-bold mb-2">{room.name}</h1>
            <div className={`${room.accent} text-white px-3 py-1 rounded-full text-sm inline-block mb-6 w-fit`}>
              {room.price}
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{room.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Facilități</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {room.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Capacitate</h3>
              <p className="text-gray-700">{room.capacity}</p>
            </div>
            
            <div className="mt-auto">
              <button
                onClick={() => setIsContactOpen(true)}
                className={`w-full py-4 rounded-xl font-semibold transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl ${room.accent} text-white`}
              >
                Rezervă acum
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
