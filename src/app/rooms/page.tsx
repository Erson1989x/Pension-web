"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import camera from '../../../public/camera.jpg';

const rooms = [
  {
    id: 'deluxe-mountain-view',
    name: 'Camera cu vedere la munte',
    description: 'O cameră spațioasă cu vedere la munte, balcon privat și facilități moderne.',
    longDescription: 'Bucurați-vă de priveliștea spectaculoasă a munților din această cameră elegantă. Dotată cu un pat king-size confortabil, baie privată de lux, și un balcon spațios perfect pentru a savura cafeaua de dimineață în mijlocul naturii.',
    price: 180,
    size: '32 m²',
    capacity: '2 persoane',
    beds: '1 pat king-size',
    features: [
      'Vedere panoramică la munte',
      'Balcon privat mobilat',
      'Baie de lux cu duș walk-in',
      'Smart TV 4K',
      'Mini bar',
      'Wifi gratuit',
      'Aer condiționat',
      'Seif în cameră'
    ],
    images: [camera, camera, camera]
  },
  {
    id: 'family-suite',
    name: 'Camera de familie',
    description: 'O cameră spațioasă cu vedere la pădure, chicinetă și zonă de relaxare.',
    longDescription: 'Perfect pentru familii, această suită oferă spațiu generos și toate facilitățile necesare pentru un sejur confortabil. Include o zonă de living separată, chicinetă complet utilată și două băi pentru confort maxim.',
    price: 250,
    size: '48 m²',
    capacity: '4 persoane',
    beds: '1 pat king-size + 2 paturi single',
    features: [
      'Vedere la pădure',
      'Chicinetă complet utilată',
      'Zonă de living separată',
      'Două băi',
      'Smart TV 4K',
      'Wifi gratuit',
      'Aer condiționat',
      'Masă de dining'
    ],
    images: [camera, camera, camera]
  },
  {
    id: 'premium-suite',
    name: 'Suita Premium',
    description: 'O suită luxoasă cu vedere panoramică, șemineu și facilități premium.',
    longDescription: 'Experimentați luxul suprem în suita noastră premium. Cu vedere panoramică la 180°, șemineu romantic, și o terasă privată spațioasă, această suită oferă o experiență de neuitat.',
    price: 320,
    size: '60 m²',
    capacity: '2 persoane',
    beds: '1 pat king-size premium',
    features: [
      'Vedere panoramică 180°',
      'Terasă privată mare',
      'Șemineu',
      'Jacuzzi',
      'Sistem audio premium',
      'Smart TV 4K',
      'Mini bar premium',
      'Room service 24/7'
    ],
    images: [camera, camera, camera]
  }
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={camera}
          alt="Rooms Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Camerele Noastre</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Descoperiți confortul și eleganța camerelor noastre, fiecare oferind o experiență unică de cazare
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg"
              >
                {/* Room Images Carousel */}
                <div className="relative lg:w-1/2 h-[300px] lg:h-auto">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Room Details */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold text-gray-900">{room.name}</h2>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">${room.price}</p>
                      <p className="text-sm text-gray-500">per noapte</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{room.longDescription}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      {room.size}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      {room.capacity}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Facilități:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Rezervă Acum
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
