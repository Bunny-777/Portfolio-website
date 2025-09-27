"use client";

import { motion } from "framer-motion";
import { Github, Mail, ChevronDown, User } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground transition-colors duration-300"
    >
      {/* Background overlay (light/dark adaptive) */}
      <div className="absolute inset-0 bg-background" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full glass glass-hover p-1 mb-6">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-gray-200 to-white dark:from-gray-700 dark:to-gray-900 flex items-center justify-center transition-colors">
                <User className="w-20 h-20 text-foreground" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Bunny
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold mb-6 text-foreground"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Passionate developer creating innovative web solutions with modern
          technologies. Specializing in React, Next.js, and building exceptional
          user experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/projects"
            className="px-8 py-3 border rounded-lg font-semibold glass-hover transition-all duration-300 flex items-center gap-2 border-foreground text-foreground"
          >
            <Github size={20} />
            View Projects
          </Link>

          <Link href="#connect">
            <button className="px-8 py-3 border rounded-lg font-semibold glass-hover transition-all duration-300 flex items-center gap-2 border-foreground text-foreground">
              <Mail size={20} />
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-100 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer glass glass-hover p-2 rounded-full text-muted-foreground"
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
