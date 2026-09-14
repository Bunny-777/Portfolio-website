import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import SpaceBackground from './components/SpaceBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import WhoAmI from './components/WhoAmI'

function App() {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="app">
      <SpaceBackground />
      <Navbar showAbout={showAbout} onToggleAbout={() => setShowAbout(v => !v)} />

      <AnimatePresence mode="wait">
        {showAbout ? (
          <motion.div
            key="whoami"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <WhoAmI />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Hero />
            <div className="divider" />
            <Experience />
            <div className="divider" />
            <Projects />
            <div className="divider" />
            <Achievements />
            <div className="divider" />
            <Skills />
            <div className="divider" />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

