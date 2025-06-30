"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Define the Activity interface based on your existing data structure
interface Location {
  address: string;
  coordinates: string;
  lat: number;
  lng: number;
}

interface Activity {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  difficulty: string;
  description: string;
  features: string[];
  images: StaticImageData[];
  location: Location;
  color: string;
  accent: string;
}

// Props interface with explicit activity property
interface ActivityDetailsProps {
  activity: Activity;
}

// Dynamically import the map component to avoid SSR issues
const LeafletMap = dynamic(() => import('../../../components/LeafletMap/ClientLeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading map...</div>
    </div>
  ),
});

export default function ActivityDetails({ activity }: ActivityDetailsProps) {
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
        <Link href="/activities" className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Înapoi la activități
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Image gallery */}
          <motion.div variants={itemVariants} className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
            {activity.images && activity.images.length > 0 && (
              <Image
                src={activity.images[currentImageIndex]}
                alt={activity.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
            
            {/* Image navigation */}
            {activity.images && activity.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {activity.images.map((_, index) => (
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

          {/* Activity details */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="text-4xl font-bold mb-2">{activity.name}</h1>
            <div className={`${activity.accent} text-white px-3 py-1 rounded-full text-sm inline-block mb-6 w-fit`}>
              {activity.category}
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{activity.description}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-sm font-medium text-gray-500">Distanță</h3>
                <p className="text-lg font-semibold">{activity.distance}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-sm font-medium text-gray-500">Durată</h3>
                <p className="text-lg font-semibold">{activity.duration}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-sm font-medium text-gray-500">Dificultate</h3>
                <p className="text-lg font-semibold">{activity.difficulty}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Caracteristici</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {activity.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Map section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Locație</h3>
              <div className="h-[300px] rounded-xl overflow-hidden shadow-lg">
                <LeafletMap
                  lat={activity.location.lat}
                  lng={activity.location.lng}
                  height="100%"
                  className="rounded-xl"
                  popupText={activity.location.address}
                />
              </div>
              <p className="mt-2 text-gray-600">{activity.location.address}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
