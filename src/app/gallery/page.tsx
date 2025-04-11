"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import camera from '../../../public/camera.jpg';

// In a real application, you would have multiple images
const images = Array(12).fill(camera);

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src={camera}
          alt="Gallery Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Galerie Foto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explorați frumusețea și atmosfera pensiunii noastre prin intermediul imaginilor
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
              </motion.div>
            ))}
          </div>
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
            <div className="relative w-full max-w-6xl aspect-video">
              <Image
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
