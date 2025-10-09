'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Digital Guruji',
    period: '2023 - Present',
    location: 'Work from Home',
    description: 'Leading development of scalable web applications using Next js, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
  {
    title: 'Designer',
    company: 'Tenacious',
    period: '2023 - present',
    location: 'JSS Noida',
    description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience.',
    skills: ['Figma', 'Photoshop', 'Adobe illustrate', 'Gamma'],
  },
];

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <section id="experience" className="min-h-screen py-20 relative bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white to-gray-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row gap-6 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex relative z-10">
                  <div className="w-16 h-16 rounded-full glass glass-hover flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-full bg-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="p-8 rounded-xl glass glass-hover transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-white font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-500 mt-2 lg:mt-0 lg:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs glass text-white rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}