"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { IoClose, IoGrid, IoSquare } from 'react-icons/io5';
import pensiuneaValcan from '../../../public/webp/valcan.webp'; 
import pensiuneaValcanTwo from '../../../public/webp/roomtwoo.webp';
import pensiuneaValcanThree from '../../../public/webp/roomtwo.webp'; 
import pensiuneaValcanFour from '../../../public/webp/roomthreee.webp';
import pensiuneaValcanFive from '../../../public/webp/roomthree.webp'; 
import pensiuneaValcanSix from '../../../public/webp/roomone.webp';
import pensiuneaValcanSeven from '../../../public/webp/roomon.webp';
import pensiuneaValcanEight from '../../../public/webp/lacvalc.webp';
import pensiuneaValcanNine from '../../../public/webp/lac.webp';
import pensiuneaValcanTen from '../../../public/webp/ciubar.webp';
import pensiuneaValcanEleven from '../../../public/webp/casaval.webp';
import pensiuneaValcanTwelve from '../../../public/webp/casava.webp';
import pensiuneaValcanThirteen from '../../../public/webp/casav.webp';
import pensiuneaValcanFourteen from '../../../public/webp/casatwo.webp';
import pensiuneaValcanFifteen from '../../../public/webp/casaciubar.webp';
import pensiuneaValcanSixteen from '../../../public/webp/casa.webp';
import pensiuneaValcanSeventeen from '../../../public/webp/bucatariee.webp';
import pensiuneaValcanEighteen from '../../../public/webp/bucatarie.webp';
import pensiuneaValcanNineteen from '../../../public/webp/baiepriv.webp';
import pensiuneaValcanTwenty from '../../../public/webp/baiecomunatwo.webp';
import pensiuneaValcanTwentyOne from '../../../public/webp/baiecomuna.webp';
import GalleryDecorativeBackground from './components/GalleryDecorativeBackground';
import GalleryHeroSection from './components/GalleryHeroSection';
import GalleryCategoryFilter from './components/GalleryCategoryFilter';
import GalleryGrid from './components/GalleryGrid';
import GalleryLightbox from './components/GalleryLightbox';

// Gallery images with actual URLs
const galleryImages = [
  {
    id: 1,
    src: pensiuneaValcan.src,
    alt: 'Pensiunea Valcan - Vedere Generală', 
    category: 'rooms',
    featured: true
  },
  {
    id: 2,
    src: pensiuneaValcanTwo.src,
    alt: "Camera Delux",
    category: 'rooms'
  },
  {
    id: 3,
    src: pensiuneaValcanThree.src,
    alt: "Camera Delux",
    category: 'rooms',
  },
  {
    id: 4,
    src: pensiuneaValcanFour.src,
    alt: 'Camera Delux cu Vedere la Lac',
    category: 'rooms',
    featured: true
  },
  {
    id: 5,
    src: pensiuneaValcanFive.src,
    alt: 'Camera Standard',
    category: 'rooms'
  },
  {
    id: 6,
    src: pensiuneaValcanSix.src,
    alt: 'Camera 2 persoane',
    category: 'rooms',
    featured: true
  },
  {
    id: 7,
    src: pensiuneaValcanSeven.src,
    alt: 'Camera 2 persoane cu Vedere la Lac',
    category: 'rooms'
  },
  {
    id: 8,
    src: pensiuneaValcanEight.src,
    alt: 'Lacul Valcan - Vedere Generală',
    category: 'exterior',
    featured: true
  },
  {
    id: 9,
    src: pensiuneaValcanNine.src,
    alt: 'Lacul Valcan',
    category: 'exterior'
  },
  {
    id: 10,
    src: pensiuneaValcanTen.src,
    alt: 'Ciubar',
    category: 'facilities',
    featured: true
  },
  {
    id: 11,
    src: pensiuneaValcanEleven.src,
    alt: 'Casa Valcan',
    category: 'exterior'
  },
  {
    id: 12,
    src: pensiuneaValcanTwelve.src,
    alt: 'Casa Valcan',
    category: 'exterior',
  },
  {
    id: 13,
    src: pensiuneaValcanThirteen.src,
    alt: 'Casa Valcan',
    category: 'exterior',
  },
  {
    id: 14,
    src: pensiuneaValcanFourteen.src,
    alt: 'Casa Valcan',
    category: 'exterior'
  },
  {
    id: 15,
    src: pensiuneaValcanFifteen.src,
    alt: 'Ciubar Casa Valcan',
    category: 'facilities'
  },
  {
    id: 16,
    src: pensiuneaValcanSixteen.src,
    alt: 'Casa Valcan',
    category: 'exterior'
  },  
  {
    id: 17,
    src: pensiuneaValcanSeventeen.src,
    alt: 'Bucatarie Casa Valcan',
    category: 'rooms',
  },
  {
    id: 18,
    src: pensiuneaValcanEighteen.src,
    alt: 'Bucatarie Casa Valcan',
    category: 'rooms'
  },
  {
    id: 19,
    src: pensiuneaValcanNineteen.src,
    alt: 'Baie Privata Casa Valcan',
    category: 'rooms',
  },
  {
    id: 20,
    src: pensiuneaValcanTwenty.src,
    alt: 'Baie Comună Casa Valcan',
    category: 'rooms'
  },
  {
    id: 21,
    src: pensiuneaValcanTwentyOne.src,
    alt: 'Baie Comună Casa Valcan',
    category: 'exterior',
  }
];

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
