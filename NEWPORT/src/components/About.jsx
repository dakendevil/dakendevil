import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Zap, value: '500+', label: 'Projects Completed' }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-red-600">DakenDevil</span>
          </h2>
          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-6" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              At DakenDevil, we believe that great design is more than just aesthetics—it's about creating visual stories that resonate with your audience and elevate your brand to new heights.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With years of experience in the design industry, we specialize in crafting unique brand identities, stunning apparel designs, and eye-catching marketing materials that make a lasting impression.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our passion for design excellence and commitment to client satisfaction drives everything we do. We don't just create designs—we create experiences that speak louder than words.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 flex items-center gap-6"
                >
                  <div className="w-16 h-16 bg-red-600/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;