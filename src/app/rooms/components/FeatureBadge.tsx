import { motion } from 'framer-motion';
import React from 'react';

interface FeatureBadgeProps {
  feature: string;
  index: number;
  accent: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ feature, index, accent }) => {
  return (
    <motion.div
      className={`flex items-center text-gray-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -3 }}
    >
      <div className={`w-2 h-full self-stretch ${accent} mr-2`}></div>
      <div className="flex items-center text-gray-700 py-2 px-3">
        <svg className="w-4 h-4 mr-2 text-current group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span className="text-sm">{feature}</span>
      </div>
    </motion.div>
  );
};

export default FeatureBadge;
