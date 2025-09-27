'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
    image: '/api/placeholder/400/250',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    github: '#',
    live: '#',
    category: 'Full Stack',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: '#',
    live: '#',
    category: 'Full Stack',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Weather API', 'Chart.js', 'Tailwind'],
    github: '#',
    live: '#',
    category: 'Frontend',
  },
  {
    title: 'Social Media API',
    description:
      'RESTful API for social media platform with user authentication, posts, comments, and real-time notifications.',
    image: '/api/placeholder/400/250',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    live: '#',
    category: 'Backend',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern portfolio website with dark/light theme, smooth animations, and responsive design.',
    image: '/api/placeholder/400/250',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    github: '#',
    live: '#',
    category: 'Frontend',
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    category: 'Full Stack',
  },
  {
    title: 'Blog CMS',
    description:
      'Content management system for blogs with markdown support, SEO optimization, and analytics dashboard.',
    image: '/api/placeholder/400/250',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    github: '#',
    live: '#',
    category: 'Full Stack',
  },
  {
    title: 'Expense Tracker',
    description:
      'Personal finance management app with budget tracking, expense categorization, and financial insights.',
    image: '/api/placeholder/400/250',
    tags: ['React', 'Chart.js', 'Local Storage', 'PWA'],
    github: '#',
    live: '#',
    category: 'Frontend',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function ProjectsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

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
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
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
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete showcase of my work, technical achievements, and creative
            solutions
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
                  ? 'glass text-foreground'
                  : 'text-muted-foreground hover:text-foreground glass-hover'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl glass glass-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Code className="w-16 h-16 text-muted-foreground opacity-70" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs glass text-foreground rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs glass text-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
