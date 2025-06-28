"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { IoClose, IoGrid, IoSquare } from 'react-icons/io5';
import GalleryDecorativeBackground from './components/GalleryDecorativeBackground';
import GalleryHeroSection from './components/GalleryHeroSection';
import GalleryCategoryFilter from './components/GalleryCategoryFilter';
import GalleryGrid from './components/GalleryGrid';
import GalleryLightbox from './components/GalleryLightbox';
import { galleryImages } from './data/galleryImages';

// Image categories with enhanced color data
const categories = [
  { id: 'all', name: 'Toate', color: 'from-primary to-secondary' },
  { id: 'rooms', name: 'Camere', color: 'from-cyan-500 to-blue-600' },
  { id: 'exterior', name: 'Exterior', color: 'from-emerald-500 to-teal-600' },
  { id: 'facilities', name: 'Facilități', color: 'from-purple-500 to-pink-600' }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Handle cursor position for interactive effects
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

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
    <main className="min-h-screen pt-24 bg-gradient-to-b from-surface-1 to-surface-2 overflow-hidden" onMouseMove={handleMouseMove}>
      <GalleryDecorativeBackground scrollYProgress={scrollYProgress} y={y} />
      <GalleryHeroSection opacity={opacity} scale={scale} scrollYProgress={scrollYProgress} />
      <div id="gallery" className="container-width pb-24">
        <GalleryCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <GalleryGrid
          filteredImages={filteredImages}
          viewMode={viewMode}
          isLoading={isLoading}
          setSelectedImage={setSelectedImage}
          categories={categories}
        />
      </div>
      <GalleryLightbox
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        navigateImage={navigateImage}
        galleryImages={galleryImages}
        categories={categories}
        currentImageIndex={currentImageIndex}
        filteredImages={filteredImages}
        cursorPosition={cursorPosition}
      />
    </main>
  );
};

export default GalleryPage;
