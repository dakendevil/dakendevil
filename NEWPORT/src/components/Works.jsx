import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const categories = [
  'All',
  'Logo Design',
  'T-Shirt Design',
  'Mockups',
  'Posters',
  'Event Flex/Banners'
];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { toast } = useToast();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    toast({
      title: "🚧 Portfolio Coming Soon",
      description: "Work samples will be added shortly. This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="works" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Selected </span>
            <span className="text-red-600">Works</span>
          </h2>
          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-6" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'border-gray-800 text-gray-400 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Empty portfolio grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="aspect-square bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden cursor-pointer group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-600/5 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-700 text-sm font-light">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;