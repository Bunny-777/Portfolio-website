'use client';

import { useState } from 'react'; // 🐛 FIXED: Added missing useState import
import { motion, AnimatePresence } from 'framer-motion'; // ✨ IMPROVEMENT: Added AnimatePresence
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// --- DATA ---
const allSkills = [
  { name: 'React', icon: 'R', description: 'Building interactive user interfaces with components, hooks, and modern React patterns.', level: 5, category: 'Frontend' },
  { name: 'Next.js', icon: 'N', description: 'Creating full-stack applications with SSR, API routes, and optimized performance.', level: 5, category: 'Frontend' },
  { name: 'TypeScript', icon: 'T', description: 'Writing type-safe code with enhanced developer experience and better maintainability.', level: 4, category: 'Language' },
  { name: 'Node.js', icon: 'N', description: 'Developing scalable server-side applications and RESTful APIs.', level: 4, category: 'Backend' },
  { name: 'MongoDB', icon: 'M', description: 'Designing and managing NoSQL databases for modern applications.', level: 4, category: 'Database' },
  { name: 'Tailwind CSS', icon: 'T', description: 'Crafting beautiful, responsive designs with utility-first CSS framework.', level: 5, category: 'Frontend' },
  { name: 'Express.js', icon: 'E', description: 'Building robust web applications and APIs with Node.js framework.', level: 4, category: 'Backend' },
  { name: 'PostgreSQL', icon: 'P', description: 'Working with relational databases and complex queries.', level: 3, category: 'Database' },
  { name: 'GraphQL', icon: 'G', description: 'Implementing efficient data fetching with query language for APIs.', level: 3, category: 'Backend' },
  { name: 'Docker', icon: 'D', description: 'Containerizing applications for consistent deployment environments.', level: 3, category: 'DevOps' },
  { name: 'AWS', icon: 'A', description: 'Deploying and managing applications on cloud infrastructure.', level: 3, category: 'DevOps' },
  { name: 'Git', icon: 'G', description: 'Version control and collaborative development workflows.', level: 5, category: 'Tools' }
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Language', 'Tools'];

// --- COMPONENT ---
export default function SkillsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? allSkills
    : allSkills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: { // ✨ IMPROVEMENT: Added exit animation for filtering
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <main className="min-h-screen bg-black bg-pattern">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            All Skills
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass text-white'
                  : 'text-gray-400 hover:text-white glass-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          layout // ✨ IMPROVEMENT: Animates container size changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name} // Key is crucial for AnimatePresence
                variants={itemVariants}
                layout // ✨ IMPROVEMENT: Animates position changes
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 rounded-xl glass glass-hover transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{skill.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < skill.level
                          ? 'bg-white'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}