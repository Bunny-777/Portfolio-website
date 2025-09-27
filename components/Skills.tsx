'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const skills = [
  {
    name: 'React',
    icon: 'R',
    description: 'Building interactive user interfaces with components, hooks, and modern React patterns.',
    level: 5,
  },
  {
    name: 'Next.js',
    icon: 'N',
    description: 'Creating full-stack applications with SSR, API routes, and optimized performance.',
    level: 5,
  },
  {
    name: 'TypeScript',
    icon: 'T',
    description: 'Writing type-safe code with enhanced developer experience and better maintainability.',
    level: 4,
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools that power my development journey
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 rounded-xl glass glass-hover transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">{skill.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.description}</p>
              
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/skills" className="inline-flex items-center px-6 py-3 glass glass-hover text-white rounded-lg font-medium transition-all duration-300">
            View All Skills
            <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}