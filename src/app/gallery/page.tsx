"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import camera from '../../../public/camera.jpg';

// In a real application, you would have multiple images
const images = Array(12).fill(camera);

// Image categories
const categories = [
  { id: 'all', name: 'Toate' },
  { id: 'rooms', name: 'Camere' },
  { id: 'exterior', name: 'Exterior' },
  { id: 'restaurant', name: 'Restaurant' },
  { id: 'facilities', name: 'Facilități' }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src={camera}
          alt="Gallery Hero"
          fill
          className="object-cover transform scale-110 motion-safe:animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Galerie Foto
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            Explorați frumusețea și atmosfera pensiunii noastre prin intermediul imaginilor
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Array(6).fill(null).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-2xl animate-pulse"
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square cursor-pointer group"
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-lg font-semibold">Imagine {index + 1}</h3>
                      <p className="text-sm text-gray-200">Descriere frumoasă a imaginii</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black/50 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-200 group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
                }}
              >
                <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-200 group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
                }}
              >
                <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all duration-200 group"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white backdrop-blur-sm">
                {selectedImage + 1} / {images.length}
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-xl font-semibold text-white mb-2">Imagine {selectedImage + 1}</h3>
                <p className="text-gray-300">Descriere detaliată a imaginii care oferă mai multe informații despre locație și context.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
