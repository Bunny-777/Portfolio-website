'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const allProjects = [
  {
    title: 'Social Media Application',
    description:
      'A dynamic full-stack social platform built for seamless user interaction, enabling content sharing, real-time engagement, and performance-optimized database management.',
    image: '/social_media.jpeg',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/Bunny-777/Social-media-app.git',
    live: '#',
    category: 'Full Stack',
  },
  {
    title: 'Event API',
    description:
      'A backend project built using Node.js, Express, and PostgreSQL with Prisma ORM. This API provides a complete event management system where users can create events, register or cancel participation, and view statistics for each event.',
    image: '/event_api.jpeg',
    tags: ['Node.js', 'Javascript', 'PostgreSQL', 'POSTMAN'],
    github: 'https://github.com/Bunny-777/Event-api.git',
    live: 'https://event-api-89d4.onrender.com/',
    category: 'Backend',
  },
  {
    title: 'Fitness Dashboard',
    description:
      'An interactive fitness tracking dashboard designed to monitor daily health metrics including step count, water intake, and calories burned through an intuitive interface.',
    image: '/fitness_dashboard.jpeg',
    tags: ['React.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/Bunny-777/Fitness-Dashboard.git',
    live: 'https://fitness-dashboard-puce.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'School API',
    description:
      'A scalable RESTful API designed for a school management system, featuring secure authentication, role-based access, and real-time data handling with Express and MongoDB.',
    image: '/school_api.jpeg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Bunny-777/School-api.git',
    live: 'https://api-d3s3.onrender.com/',
    category: 'Backend',
  },
  {
    title: 'Trading Dashboard',
    description:
      'A real-time trading and portfolio monitoring dashboard with drag-and-drop features, live data visualization, and a clean, responsive interface for traders and analysts.',
    image: '/trading_dashboard.jpeg',
    tags: ['React.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/Bunny-777/Trading-dashboard.git',
    live: 'https://bunnytrades.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'Chat Application',
    description:
      'A real-time communication platform supporting one-on-one and group chats, built with Socket.io for instant updates and MongoDB for reliable message persistence.',
    image: '/chat_application.jpeg',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Bunny-777/Basic-Chat-application.git',
    live: 'https://basic-chat-application-c0pc.onrender.com/',
    category: 'Full Stack',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern and responsive personal portfolio website featuring dark/light mode support, smooth animations, and an elegant design built with Next.js and Framer Motion.',
    image: '/portfolio.jpeg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Bunny-777/Portfolio-website.git',
    live: 'https://bunny-portfolio-gray.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'Admin Dashboard',
    description:
      'A personal productivity dashboard used for expense tracking, goal management, and calendar integration, designed with a focus on usability and offline support (PWA).',
    image: '/admin_dashboard.jpeg',
    tags: ['React', 'Chart.js', 'Local Storage', 'PWA'],
    github: 'https://github.com/Bunny-777/Admin-Dashboard.git',
    live: 'https://admin-dashboard-bunny.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'Resume Store',
    description:
      'An elegant web platform that allows users to explore and select from a curated collection of professional resume templates tailored to different use cases.',
    image: '/resume_store.jpeg',
    tags: ['React.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/Bunny-777/Resume-Store.git',
    live: 'https://resume-store.vercel.app/',
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
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-muted to-background flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Code className="w-16 h-16 text-muted-foreground opacity-70" />
                  </div>
                )}
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
