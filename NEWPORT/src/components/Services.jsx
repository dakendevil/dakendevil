import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Shirt, FileImage, Layers } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleServiceClick = () => {
    toast({
      title: "🚧 Project Gallery",
      description: "Full gallery view isn't implemented yet. Enjoy the preview! 🚀",
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const hoverContentVariants = {
    hidden: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    hover: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="services" className="min-h-screen py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Hover over cards to view our latest work
          </p>
          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 1: Logo Design */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 cursor-pointer overflow-hidden h-[450px]"
            onClick={handleServiceClick}
          >
             {/* Default Content */}
             <div className="relative z-10 h-full flex flex-col justify-between group-hover:opacity-0 transition-all duration-500 group-hover:scale-95 group-hover:blur-sm">
                <div>
                  <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <Palette className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Logo Design</h3>
                  <p className="text-gray-400 leading-relaxed">Unique and memorable brand identities that capture your essence and resonate with your audience. We craft logos that stand the test of time.</p>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  View Portfolio →
                </div>
             </div>

             {/* Hover Grid */}
             <motion.div 
                variants={hoverContentVariants}
                className="absolute inset-0 z-20 p-4 bg-black/95 flex flex-col justify-center"
             >
                <div className="grid grid-cols-2 gap-3 h-full">
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Minimalist geometric logo design" src="https://images.unsplash.com/photo-1695173583133-c19731e2df44" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Abstract modern startup logo" src="https://images.unsplash.com/photo-1585065799297-ce07d1855c01" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Vintage typography logo badge" src="https://images.unsplash.com/photo-1561310777-4275734e9d1e" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Tech company brand mark" src="https://images.unsplash.com/photo-1693480145921-381cc5cd5153" />
                  </motion.div>
                </div>
             </motion.div>
          </motion.div>

          {/* Service 2: Mockup Building */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 cursor-pointer overflow-hidden h-[450px]"
            onClick={handleServiceClick}
          >
             {/* Default Content */}
             <div className="relative z-10 h-full flex flex-col justify-between group-hover:opacity-0 transition-all duration-500 group-hover:scale-95 group-hover:blur-sm">
                <div>
                  <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileImage className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Mockup Building</h3>
                  <p className="text-gray-400 leading-relaxed">Professional product mockups that showcase your designs in realistic and compelling scenarios. Bring your concepts to life before production.</p>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  View Portfolio →
                </div>
             </div>

             {/* Hover Grid */}
             <motion.div 
                variants={hoverContentVariants}
                className="absolute inset-0 z-20 p-4 bg-black/95 flex flex-col justify-center"
             >
                <div className="grid grid-cols-2 gap-3 h-full">
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Box packaging mockup" src="https://images.unsplash.com/photo-1702475139168-a1e29301ec0b" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Smartphone app screen mockup" src="https://images.unsplash.com/photo-1634403665443-81dc4d75843a" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Business card stack mockup" src="https://images.unsplash.com/photo-1704030459018-88ad4a4c7446" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Billboard advertising mockup" src="https://images.unsplash.com/photo-1686692768423-0d5cd19ee1b7" />
                  </motion.div>
                </div>
             </motion.div>
          </motion.div>

          {/* Service 3: Apparel Design */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 cursor-pointer overflow-hidden h-[450px]"
            onClick={handleServiceClick}
          >
             {/* Default Content */}
             <div className="relative z-10 h-full flex flex-col justify-between group-hover:opacity-0 transition-all duration-500 group-hover:scale-95 group-hover:blur-sm">
                <div>
                  <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shirt className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Apparel Design</h3>
                  <p className="text-gray-400 leading-relaxed">Creative t-shirt and clothing designs that make bold statements and turn heads. From streetwear to corporate merchandising.</p>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  View Portfolio →
                </div>
             </div>

             {/* Hover Grid */}
             <motion.div 
                variants={hoverContentVariants}
                className="absolute inset-0 z-20 p-4 bg-black/95 flex flex-col justify-center"
             >
                <div className="grid grid-cols-2 gap-3 h-full">
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Streetwear t-shirt graphic" src="https://images.unsplash.com/photo-1576005290531-ffa6fba0bc93" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Hoodie mockup design" src="https://images.unsplash.com/photo-1552169113-e367653a9d5b" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Sports jersey design" src="https://images.unsplash.com/photo-1694604339987-b57aa4865bdb" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Cap embroidery design" src="https://images.unsplash.com/photo-1702507694880-5d738ba889a1" />
                  </motion.div>
                </div>
             </motion.div>
          </motion.div>

          {/* Service 4: Poster & Banner Design */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 cursor-pointer overflow-hidden h-[450px]"
            onClick={handleServiceClick}
          >
             {/* Default Content */}
             <div className="relative z-10 h-full flex flex-col justify-between group-hover:opacity-0 transition-all duration-500 group-hover:scale-95 group-hover:blur-sm">
                <div>
                  <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <Layers className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Poster & Banner Design</h3>
                  <p className="text-gray-400 leading-relaxed">Eye-catching posters, event flexes, and banners designed to command attention and deliver your message instantly to your target audience.</p>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  View Portfolio →
                </div>
             </div>

             {/* Hover Grid */}
             <motion.div 
                variants={hoverContentVariants}
                className="absolute inset-0 z-20 p-4 bg-black/95 flex flex-col justify-center"
             >
                <div className="grid grid-cols-2 gap-3 h-full">
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Music festival poster" src="https://images.unsplash.com/photo-1569268309506-b153bdae6cfd" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Corporate event banner" src="https://images.unsplash.com/photo-1479501596412-7b2031f23ac2" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Movie poster artwork" src="https://images.unsplash.com/photo-1545682774-29055d6d17e3" />
                  </motion.div>
                  <motion.div variants={imageVariants} className="relative rounded-lg overflow-hidden border border-gray-800">
                    <img className="w-full h-full object-cover" alt="Social media promo banner" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0" />
                  </motion.div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;