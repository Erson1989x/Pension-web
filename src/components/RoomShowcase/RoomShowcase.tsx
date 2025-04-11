"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import camera from '../../../public/camera.jpg';

// Room data - replace with your actual room information
const rooms = [
  {
    id: 'deluxe-mountain-view',
    name: 'Camera cu vedere la munte',
    description: 'O cameră spațioasă cu vedere la munte, balcon privat și facilități moderne.',
    price: 180,
    size: '32 m²',
    capacity: '2 persoane',
    beds: '1 pat',
    features: ['Mountain View', 'Free Wi-Fi', 'Private Bathroom', 'Balcony'],
    image: { camera },
  },
  {
    id: 'family-suite',
    name: 'Camera de familie',
    description: 'O cameră spațioasă cu vedere la pădure, chicinetă și zonă de relaxare.',
    price: 250,
    size: '48 m²',
    capacity: '4 persoane',
    beds: '2 paturi',
    features: ['Forest View', 'Kitchenette', 'Living Area', 'Two Bathrooms'],
    image: { camera },
  },
  {
    id: 'premium-suite',
    name: 'Camera unu',
    description: 'O camera spaatzioasa cu vedere panoramic, balcon privat si facilitati moderne.',
    price: 320,
    size: '60 m²',
    capacity: '2 persoane',
    beds: '1 pat',
    features: ['Panoramic View', 'Private Terrace', 'Fireplace', 'Jacuzzi'],
    image: { camera },
  },
];

const RoomShowcase = () => {
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  return (
    <section className="py-20 surface-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Cazare Elegantă și Confortabilă
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted">
            Descoperiți camerele și suitele noastre atent concepute, fiecare oferind confort și farmec montan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="surface-1 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={camera}
                  alt={room.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredRoom === room.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl font-semibold tracking-tight">{room.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-lg font-bold">${room.price}</span>
                    <span className="ml-1 text-sm opacity-90">/ night</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted mb-4">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center text-sm text-muted">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    {room.size}
                  </div>
                  <div className="flex items-center text-sm text-muted">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    {room.capacity}
                  </div>
                  <div className="flex items-center text-sm text-muted">
                    <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    {room.beds}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/rooms">
            <motion.button
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Rooms
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomShowcase;