"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FeatureBadge from './FeatureBadge';

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

interface RoomCardProps {
  room: Room;
  index: number;
  mousePosition: { x: number; y: number };
  onBook: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, index, mousePosition, onBook }) => {
  // Use mousePosition directly, which comes from the useMousePosition hook
  // that already safely handles window references
  const offsetX = mousePosition.x * 20;
  const offsetY = mousePosition.y * 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div
        className={`relative overflow-visible p-1 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
      >
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${room.color} opacity-30 blur-xl transform -translate-y-1`} />
        <div className={`flex flex-col lg:flex-row bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
          {/* Room Images with Parallax Effect */}
          <div className="relative lg:w-1/2 h-[400px] lg:h-auto group overflow-hidden">
            <Link href={`/rooms/${room.id}`} className="absolute inset-0 z-20">
              <span className="sr-only">View {room.name} details</span>
            </Link>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 z-10"></div>
            <div className="absolute inset-0 overflow-hidden">
              {room.images && room.images.length > 0 && (
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
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
              <Link href={`/rooms/${room.id}`} className="hover:opacity-80 transition-opacity">
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
              </Link>
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
              onClick={onBook}
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
};

export default RoomCard;
