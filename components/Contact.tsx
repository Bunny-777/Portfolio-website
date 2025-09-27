'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    social: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Contact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <div>
                <label htmlFor="social" className="block text-sm font-medium text-gray-300 mb-2">
                  Social (optional)
                </label>
                <input
                  type="text"
                  id="social"
                  name="social"
                  value={formData.social}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Link to your social profile"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 glass glass-hover text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="p-8 rounded-xl glass glass-hover">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-full glass flex items-center justify-center mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
                <p className="text-gray-400">
                  Ready to work together? I'd love to hear from you!
                </p>
              </div>

              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Twitter size={24} />
                </motion.a>
                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full glass glass-hover text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>

            <div className="p-6 rounded-xl glass text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Open for Opportunities</h4>
              <p className="text-gray-400 text-sm">
                Currently available for freelance projects and full-time positions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}