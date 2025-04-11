"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { IoClose, IoGrid, IoSquare } from 'react-icons/io5';

// Gallery images with actual URLs
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60',
    alt: 'Cameră Dublă Deluxe',
    category: 'rooms',
    featured: true
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
    category: 'restaurant',
    featured: true
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
    category: 'facilities',
    featured: true
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
    category: 'exterior',
    featured: true
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
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsLoading(false), 500);
  };

  const filteredImages = galleryImages.filter(
    img => activeCategory === 'all' || img.category === activeCategory
  );
  
  // For lightbox navigation - using useCallback to prevent unnecessary rerenders
  useEffect(() => {
    if (selectedImage !== null) {
      const index = filteredImages.findIndex(img => img.id === selectedImage);
      if (index !== -1) {
        setCurrentImageIndex(index);
      }
    }
  }, [selectedImage, filteredImages]);
  
  const navigateImage = useCallback((direction: 'next' | 'prev') => {
    if (direction === 'next') {
      const nextIndex = (currentImageIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    } else {
      const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  }, [currentImageIndex, filteredImages, setSelectedImage]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, filteredImages, navigateImage]);

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-surface-1 to-surface-2">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ opacity, scale }}
        >
          <Image
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&auto=format&fit=crop&q=80"
            alt="Gallery Hero"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className="overlay-blur" />
        </motion.div>
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          >
            <a href="#gallery" className="button-outline-white inline-flex items-center gap-2">
              <span>Vezi Galeria</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div id="gallery" className="container-width pb-24">
        {/* Category Filter with View Options */}
        <section className="py-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold font-heading text-text-1">Fotografii</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-surface-3 text-text-2'}`}
                aria-label="Grid view"
              >
                <IoGrid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'masonry' ? 'bg-primary text-white' : 'bg-surface-3 text-text-2'}`}
                aria-label="Masonry view"
              >
                <IoSquare size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-md scale-105'
                    : 'bg-white text-text-2 hover:bg-surface-2 hover:scale-105 border border-surface-3'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Gallery Grid with Masonry or Grid Layout */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${
                  viewMode === 'masonry' 
                    ? 'columns-1 sm:columns-2 lg:columns-3 gap-4'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                }`}
              >
                {Array(6).fill(null).map((_, index) => (
                  <div
                    key={index}
                    className={`${
                      viewMode === 'masonry' 
                        ? 'mb-4 break-inside-avoid'
                        : ''
                    } aspect-square bg-surface-3 rounded-2xl animate-pulse-subtle`}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${
                  viewMode === 'masonry' 
                    ? 'columns-1 sm:columns-2 lg:columns-3 gap-6'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                }`}
              >
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className={`${
                      viewMode === 'masonry' 
                        ? 'mb-6 break-inside-avoid'
                        : image.featured && viewMode === 'grid'
                          ? 'row-span-2 col-span-2 aspect-square sm:aspect-auto'
                          : ''
                    }`}
                  >
                    <motion.div 
                      className="image-container group h-full"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedImage(image.id)}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-sm h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-xl font-medium mb-2">{image.alt}</p>
                            <div className="flex items-center gap-2">
                              <span className="badge">{categories.find(c => c.id === image.category)?.name}</span>
                              {image.featured && <span className="badge bg-secondary bg-opacity-20 text-secondary">Featured</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* Enhanced Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7m0 0l-7 7-7-7m7 7V3" />
              </svg>
            </motion.button>
            
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-30 text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            
            <button
              className="absolute top-4 right-4 z-10 text-white text-4xl p-2 bg-black bg-opacity-30 rounded-full hover:bg-black hover:bg-opacity-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <IoClose />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-white p-4 rounded-b-2xl">
                <p className="text-xl font-medium">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </p>
                <p className="text-sm opacity-80">
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;
