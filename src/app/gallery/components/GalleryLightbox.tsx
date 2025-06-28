import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

interface Category {
  id: string;
  name: string;
  color: string;
}

interface GalleryLightboxProps {
  selectedImage: number | null;
  setSelectedImage: (id: number | null) => void;
  navigateImage: (dir: 'next' | 'prev') => void;
  galleryImages: GalleryImage[];
  categories: Category[];
  currentImageIndex: number;
  filteredImages: GalleryImage[];
  cursorPosition: { x: number; y: number };
}

const GalleryLightbox = ({
  selectedImage,
  setSelectedImage,
  navigateImage,
  galleryImages,
  categories,
  currentImageIndex,
  filteredImages,
  cursorPosition
}: GalleryLightboxProps) => (
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
        {/* Navigation Buttons */}
        <motion.button
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white z-10 border border-white/10"
          onClick={e => { e.stopPropagation(); navigateImage('prev'); }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
        <motion.button
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white z-10 border border-white/10"
          onClick={e => { e.stopPropagation(); navigateImage('next'); }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
        <motion.button
          className="absolute top-6 right-6 z-10 text-white w-12 h-12 p-0 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-colors"
          onClick={e => { e.stopPropagation(); setSelectedImage(null); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoClose size={24} />
        </motion.button>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-6xl aspect-auto max-h-[80vh]"
          onClick={e => e.stopPropagation()}
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
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-lg text-white p-6 rounded-b-2xl border-t border-white/10"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', delay: 0.2, stiffness: 100, damping: 20 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categories.find(c => c.id === galleryImages.find(img => img.id === selectedImage)?.category)?.color || 'from-primary to-secondary'}`}>
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
);

export default GalleryLightbox;
