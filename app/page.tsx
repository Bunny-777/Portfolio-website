'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}