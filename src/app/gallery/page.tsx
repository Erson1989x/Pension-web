"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

// Gallery images with actual URLs
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60',
    alt: 'Cameră Dublă Deluxe',
    category: 'rooms'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=60',
    alt: 'Cameră Twin Premium',
    category: 'rooms'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&auto=format&fit=crop&q=60',
    alt: 'Apartament Executive',
    category: 'rooms'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60',
    alt: 'Restaurant Principal',
    category: 'restaurant'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=60',
    alt: 'Terasă Restaurant',
    category: 'restaurant'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop&q=60',
    alt: 'Piscină Infinity',
    category: 'facilities'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60',
    alt: 'Sală de Fitness',
    category: 'facilities'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=800&auto=format&fit=crop&q=60',
    alt: 'Vedere Panoramică',
    category: 'exterior'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=60',
    alt: 'Grădină și Terasă',
    category: 'exterior'
  }
];

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
    setTimeout(() => setIsLoading(false), 500);
  };

  const filteredImages = galleryImages.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&auto=format&fit=crop&q=60"
          alt="Gallery Hero"
          fill
          className="object-cover"
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
                    ? 'bg-primary text-white shadow-lg scale-105'
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
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image.id)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-lg font-medium">{image.alt}</p>
                      </div>
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
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:opacity-75 transition-opacity"
              onClick={() => setSelectedImage(null)}
            >
              <IoClose />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;
