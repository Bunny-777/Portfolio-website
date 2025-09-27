'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
    image: '/api/placeholder/400/250',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
];

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Featured work showcasing my technical skills and creativity
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl glass glass-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Code className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs glass text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
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
          <Link href="/projects" className="inline-flex items-center px-6 py-3 glass glass-hover text-white rounded-lg font-medium transition-all duration-300">
            View All Projects
            <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}