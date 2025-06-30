import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

interface GalleryGridProps {
  filteredImages: GalleryImage[];
  viewMode: 'grid' | 'masonry';
  isLoading: boolean;
  setSelectedImage: (id: number) => void;
  categories: Category[];
}

const GalleryGrid = ({ filteredImages, viewMode, isLoading, setSelectedImage, categories }: GalleryGridProps) => (
  <section className="py-6 px-4 sm:px-6 lg:px-8">
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={
            viewMode === 'masonry'
              ? 'columns-1 sm:columns-2 lg:columns-3 gap-6'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          }
        >
          {Array(6).fill(null).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                transition: { duration: 1.5, repeat: Infinity, delay: index * 0.2 }
              }}
              className={
                viewMode === 'masonry'
                  ? 'mb-6 break-inside-avoid'
                  : ''
              }
              style={{ aspectRatio: '1/1' }}
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
          className={
            viewMode === 'masonry'
              ? 'columns-1 sm:columns-2 lg:columns-3 gap-8'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          }
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.05, type: 'spring', stiffness: 50, damping: 15 }}
              className={
                viewMode === 'masonry'
                  ? 'mb-8 break-inside-avoid'
                  : image.featured && viewMode === 'grid'
                    ? 'sm:row-span-2 sm:col-span-2 aspect-square sm:aspect-auto'
                    : ''
              }
            >
              <Link href={`/gallery/${image.id}`}>
                <motion.div 
                  className="image-container group h-full relative"
                  whileHover={{ y: -8, transition: { type: 'spring', stiffness: 200 } }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-sm h-full perspective transform-gpu">
                  <div className="overflow-hidden rounded-2xl">
                    <motion.div
                      className="relative w-full h-full transform-gpu"
                      whileHover={{ scale: 1.1, transition: { duration: 1.2 } }}
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
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categories.find(c => c.id === image.category)?.color || 'from-primary to-secondary'}`}
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
                <motion.div 
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10"
                  layoutId={`image-glow-${image.id}`}
                ></motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </section>
);

export default GalleryGrid;
