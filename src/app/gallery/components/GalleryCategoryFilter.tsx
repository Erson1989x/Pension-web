import { motion } from 'framer-motion';
import { IoGrid, IoSquare } from 'react-icons/io5';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface GalleryCategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  viewMode: 'grid' | 'masonry';
  setViewMode: (mode: 'grid' | 'masonry') => void;
}

const GalleryCategoryFilter = ({ categories, activeCategory, onCategoryChange, viewMode, setViewMode }: GalleryCategoryFilterProps) => (
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
          onClick={() => onCategoryChange(category.id)}
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
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-0 blur-md transition-opacity duration-300 \
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
);

export default GalleryCategoryFilter;
