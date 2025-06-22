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
      {/* Decorative floating elements */}
      <motion.div 
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      ></motion.div>
      <motion.div 
        className="fixed bottom-1/4 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        style={{ y }}
      ></motion.div>
      
      {/* Hero Section with Enhanced Parallax Effect */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ opacity, scale }}
        >
          <Image
            src={pensiuneaValcan}
            alt="Gallery Hero"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 mix-blend-multiply"></div>
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40"
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * -100 - 10 + "%"],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear" 
              }}
              style={{ 
                width: Math.random() * 4 + 1, 
                height: Math.random() * 4 + 1,
                filter: "blur(1px)"
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl px-4"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
            initial="initial"
            animate="animate"
          >
            <motion.span className="inline-block">Galerie</motion.span>{" "}
            <motion.span className="inline-block text-gradient">Foto</motion.span>
            <motion.div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-20 bg-secondary/10 blur-3xl rounded-full"></motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explorați frumusețea și atmosfera pensiunii noastre prin intermediul imaginilor
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10"
          >
            <a 
              href="#gallery" 
              className="relative group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm 
                       border border-white/20 rounded-full text-white hover:bg-white/20 transition-all 
                       hover:shadow-lg hover:shadow-white/5"
            >
              <span className="font-medium">Vezi Galeria</span>
              <motion.span 
                animate={{ y: [0, 5, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.span>
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/60 to-secondary/60 blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10"></span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div id="gallery" className="container-width pb-24">
        {/* Category Filter with View Options - Enhanced */}
        <section className="py-16 px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-1 mb-2">Fotografii</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="flex gap-3 items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-text-2 text-sm font-medium">View:</span>
              <div className="flex bg-surface-3/50 p-1 rounded-lg">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-md transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'bg-transparent text-text-2 hover:text-primary'
                  }`}
                  aria-label="Grid view"
                >
                  <IoGrid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('masonry')}
                  className={`p-2.5 rounded-md transition-all ${
                    viewMode === 'masonry' 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'bg-transparent text-text-2 hover:text-primary'
                  }`}
                  aria-label="Masonry view"
                >
                  <IoSquare size={18} />
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all`}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.span
                  className={`absolute inset-0 rounded-full ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} opacity-100`
                      : 'bg-white opacity-100'
                  }`}
                  layoutId={`category-bg-${category.id}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                ></motion.span>
                
                <motion.span 
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-0 blur-md transition-opacity duration-300 
                              ${activeCategory === category.id ? 'opacity-50' : 'opacity-0 group-hover:opacity-30'}`}
                ></motion.span>
                
                <motion.span className={`relative z-10 ${
                  activeCategory === category.id ? 'text-white' : 'text-text-2'
                }`}>
                  {category.name}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* Gallery Grid with Masonry or Grid Layout - Enhanced */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${
                  viewMode === 'masonry' 
                    ? 'columns-1 sm:columns-2 lg:columns-3 gap-6'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                }`}
              >
                {Array(6).fill(null).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: index * 0.2 
                      }
                    }}
                    className={`${
                      viewMode === 'masonry' 
                        ? 'mb-6 break-inside-avoid'
                        : ''
                    } aspect-square bg-surface-3/60 rounded-2xl overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${
                  viewMode === 'masonry' 
                    ? 'columns-1 sm:columns-2 lg:columns-3 gap-8'
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
                }`}
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 50,
                      damping: 15
                    }}
                    className={`${
                      viewMode === 'masonry' 
                        ? 'mb-8 break-inside-avoid'
                        : image.featured && viewMode === 'grid'
                          ? 'sm:row-span-2 sm:col-span-2 aspect-square sm:aspect-auto'
                          : ''
                    }`}
                  >
                    <motion.div 
                      className="image-container group h-full relative"
                      whileHover={{ 
                        y: -8,
                        transition: { type: "spring", stiffness: 200 }
                      }}
                      onClick={() => setSelectedImage(image.id)}
                    >
                      {/* Card with 3D perspective effect */}
                      <div className="relative overflow-hidden rounded-2xl shadow-sm h-full perspective transform-gpu">
                        {/* Image with parallax effect */}
                        <div className="overflow-hidden rounded-2xl">
                          <motion.div
                            className="relative w-full h-full transform-gpu"
                            whileHover={{ 
                              scale: 1.1,
                              transition: { duration: 1.2 }
                            }}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          </motion.div>
                        </div>
                        
                        {/* Overlay with info */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"
                          style={{
                            backgroundImage: image.featured 
                              ? `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), transparent)`
                              : `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)`
                          }}
                        >
                          <motion.p 
                            className="text-white text-xl font-medium mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            {image.alt}
                          </motion.p>
                          
                          <div className="flex items-center gap-3">
                            <motion.span 
                              className={`px-3 py-1 rounded-full text-xs font-medium text-white 
                                        bg-gradient-to-r ${categories.find(c => c.id === image.category)?.color || 'from-primary to-secondary'}`}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2, duration: 0.3 }}
                            >
                              {categories.find(c => c.id === image.category)?.name}
                            </motion.span>
                            
                            {image.featured && (
                              <motion.span 
                                className="px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                              >
                                Featured
                              </motion.span>
                            )}
                          </div>
                          
                          <motion.div 
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Subtle glow effect */}
                      <motion.div 
                        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"
                        layoutId={`image-glow-${image.id}`}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* Enhanced Immersive Lightbox with Cursor-aware Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Interactive gradient background */}
            <motion.div 
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`
              }}
            />
            
            {/* Navigation Buttons with enhanced design */}
            <motion.button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white z-10 border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
            
            <motion.button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white z-10 border border-white/10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            
            <motion.button
              className="absolute top-6 right-6 z-10 text-white w-12 h-12 p-0 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose size={24} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-6xl aspect-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl h-full w-full">
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Enhanced image info panel with animation */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg text-white p-6 rounded-b-2xl border-t border-white/10"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 100, damping: 20 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {galleryImages.find(img => img.id === selectedImage)?.alt}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white 
                                      bg-gradient-to-r ${categories.find(c => c.id === galleryImages.find(img => img.id === selectedImage)?.category)?.color || 'from-primary to-secondary'}`}>
                        {categories.find(c => c.id === galleryImages.find(img => img.id === selectedImage)?.category)?.name}
                      </span>
                      
                      {galleryImages.find(img => img.id === selectedImage)?.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Keyboard navigation hint */}
            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 text-white/60 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-white/10 rounded-md mr-1">←</kbd>
                Previous
              </span>
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-white/10 rounded-md mr-1">→</kbd>
                Next
              </span>
              <span className="flex items-center">
                <kbd className="px-2 py-1 bg-white/10 rounded-md mr-1">ESC</kbd>
                Close
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;
