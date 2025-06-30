"use client";

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { galleryImages } from '../data/galleryImages';

// Define the GalleryImage interface
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

// Props interface with explicit image property
interface GalleryImageDetailProps {
  image: GalleryImage;
}

export default function GalleryImageDetail({ image }: GalleryImageDetailProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Find current image index and calculate next/previous image IDs
  const currentIndex = galleryImages.findIndex(img => img.id === image.id);
  const nextImageId = galleryImages[(currentIndex + 1) % galleryImages.length].id;
  const prevImageId = galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length].id;

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
        <Link href="/gallery" className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Înapoi la galerie
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Image display */}
          <motion.div 
            variants={itemVariants} 
            className="relative w-full max-w-5xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
                onLoadingComplete={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
              <Link href={`/gallery/${prevImageId}`} className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors">
                <IoArrowBack size={24} />
              </Link>
              <Link href={`/gallery/${nextImageId}`} className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors">
                <IoArrowForward size={24} />
              </Link>
            </div>
          </motion.div>

          {/* Image details */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">{image.alt}</h1>
            <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-6">
              {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
            </div>
          </motion.div>

          {/* Related images */}
          <motion.div variants={itemVariants} className="w-full mt-12">
            <h2 className="text-2xl font-bold mb-6">Mai multe imagini</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages
                .filter(img => img.id !== image.id && img.category === image.category)
                .slice(0, 4)
                .map(relatedImage => (
                  <Link key={relatedImage.id} href={`/gallery/${relatedImage.id}`} className="block">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <Image
                        src={relatedImage.src}
                        alt={relatedImage.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
