import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import ResumeModal from './ResumeModal'
import './Hero.css'

const ROLES = [
    'Founding Software Development Engineer.',
    'I build scalable backend & AI pipelines.',
    'I engineer real-time AI & RAG systems.',
]

const TRIGGER_WORD = 'resume'

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    }

    const [roleIndex, setRoleIndex] = useState(0)
    const [resumeFlash, setResumeFlash] = useState(false)
    const [isResumeOpen, setIsResumeOpen] = useState(false)
    const typedRef = useRef('')

    // Rotating role text
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex(i => (i + 1) % ROLES.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    // Global keyboard listener for "resume"
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            // Ignore if user is typing inside an input/textarea
            const tag = (e.target as HTMLElement).tagName
            if (tag === 'INPUT' || tag === 'TEXTAREA') return

            const char = e.key.length === 1 ? e.key.toLowerCase() : ''
            if (!char) return

            typedRef.current = (typedRef.current + char).slice(-TRIGGER_WORD.length)

            if (typedRef.current === TRIGGER_WORD) {
                typedRef.current = ''
                // Flash the hint, then open modal
                setResumeFlash(true)
                setTimeout(() => {
                    setResumeFlash(false)
                    setIsResumeOpen(true)
                }, 200)
            }
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    return (
        <section id="home" className="hero">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Avatar */}
                <motion.div className="hero-avatar" variants={itemVariants}>
                    <img src="/avatar.jpeg" alt="Bunny" className="avatar-img" />
                </motion.div>

                {/* Name */}
                <motion.h1 className="hero-title" variants={itemVariants}>
                    Bunny
                </motion.h1>

                {/* Role — rotating with AnimatePresence */}
                <motion.div className="hero-role-wrap" variants={itemVariants}>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={roleIndex}
                            className="hero-role"
                            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
                            transition={{ duration: 0.55, ease: 'easeInOut' }}
                        >
                            {ROLES[roleIndex]}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>

                {/* Description */}
                <motion.p className="hero-description" variants={itemVariants}>
                    Founding Software Development Engineer building production-grade backend architectures,
                    scalable Python/Django APIs, and cutting-edge Generative AI & RAG pipelines.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="hero-cta" variants={itemVariants}>
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* Resume hint */}
                <motion.p
                    className={`resume-hint ${resumeFlash ? 'resume-hint-flash' : ''}`}
                    variants={itemVariants}
                >
                    <span className="resume-hint-key">type</span>
                    {' '}
                    <button
                        onClick={() => setIsResumeOpen(true)}
                        className="resume-hint-word"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                    >
                        resume
                    </button>
                    {' '}
                    <span className="resume-hint-key">anywhere to open my resume</span>
                </motion.p>

            </motion.div>

            {/* Interactive Resume Modal */}
            <AnimatePresence>
                {isResumeOpen && (
                    <ResumeModal
                        isOpen={isResumeOpen}
                        onClose={() => setIsResumeOpen(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}

export default Hero
