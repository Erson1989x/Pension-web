import { motion } from "framer-motion";

interface CategoryFiltersProps {
  categories: { id: string; name: string; color: string }[];
  selectedCategory: string;
  onCategoryChange: (id: string) => void;
}

const CategoryFilters = ({ categories, selectedCategory, onCategoryChange }: CategoryFiltersProps) => (
  <div className="flex flex-wrap justify-center gap-4">
    {categories.map((category, index) => (
      <motion.button
        key={category.id}
        onClick={() => onCategoryChange(category.id)}
        className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
          selectedCategory === category.id
            ? `${category.color} scale-105`
            : "bg-gray-400 hover:bg-gray-500"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {category.name}
      </motion.button>
    ))}
  </div>
);

export default CategoryFilters;
