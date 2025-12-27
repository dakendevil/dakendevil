import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'hover:text-green-500' },
  { icon: Mail, label: 'Email', href: '#', color: 'hover:text-blue-500' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Form Submission",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleSocialClick = (label) => {
    toast({
      title: `🚧 ${label} Link`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Let's create something amazing together
          </p>
          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-600 transition-colors h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-600 transition-colors h-12"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-500 focus:border-red-600 transition-colors min-h-[150px] resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 font-semibold text-base transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleSocialClick(social.label)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className={`w-full flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-xl text-gray-300 ${social.color} transition-all duration-300`}
                    >
                      <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-medium">{social.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Ready to Start?</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you need a complete brand identity or a single design piece, we're here to bring your vision to life with creativity and precision.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500">
            © 2025 DakenDevil. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;