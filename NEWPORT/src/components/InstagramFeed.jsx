import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const InstagramFeed = () => {
  const { toast } = useToast();

  const handlePostClick = () => {
    toast({
      title: "🚧 Instagram Integration",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="instagram" className="py-24 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-red-600" />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Instagram </span>
              <span className="text-red-600">Feed</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg mt-4">
            Follow us for daily design inspiration
          </p>
          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-6" />
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={handlePostClick}
              className="aspect-square bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/30 group-hover:to-red-600/10 transition-all duration-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePostClick}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-semibold inline-flex items-center gap-2 hover:from-red-700 hover:to-red-800 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow @DakenDevil
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;