import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Projects.css'

const projects = [
    {
        name: 'HireSense AI',
        tagline: 'Real-Time AI Interview Platform',
        description:
            'Architected a real-time AI interview platform with a full voice pipeline (VAD, ASR, NLU, LLM, TTS) achieving sub-2-second conversational latency for natural interview flow. Implemented ElevenLabs Scribe v1 and Turbo v2 across 3 core modules for speech recognition and voice responses, maintaining 100% CI pass rate via Git, GitHub, and GitHub Actions.',
        tags: ['PyTorch', 'TensorFlow', 'ASR', 'TTS', 'LLM', 'ElevenLabs', 'GitHub Actions'],
        links: {
            live: '',
            github: 'https://github.com/Bunny-777/HireSense-AI',
        },
    },
    {
        name: 'RAG-Chat',
        tagline: 'Video & Document Context-Aware Q&A',
        description:
            'Developed a Retrieval-Augmented Generation application letting users chat with any YouTube video via its URL; chunked and embedded transcripts into 500+ vector segments using Hugging Face, indexed via FAISS for sub-second context retrieval per query. Integrated LangChain with Groq Llama 3.3 70B to generate accurate, context-aware responses while minimizing hallucinations.',
        tags: ['Python', 'LangChain', 'FAISS', 'Hugging Face', 'Groq', 'Llama 3.3 70B'],
        links: {
            live: '',
            github: 'https://github.com/Bunny-777/RAG-chat',
        },
    },
    {
        name: 'CrashGuard',
        tagline: 'Road Accident Detection & Emergency Alert',
        description:
            'Designed an Android application that detects road accidents within 10 seconds using smartphone sensors and automatically triggers emergency alerts, with real-time monitoring through an intuitive mobile interface.',
        tags: ['Kotlin', 'Android Studio', 'Sensors', 'Emergency Alert', 'Mobile'],
        links: {
            live: '',
            github: 'https://github.com/Bunny-777/Crash-Gaurd',
        },
    },
]

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.08 }
    })
}

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-label">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.name}
                        className="project-card"
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <div className="project-header">
                            <div>
                                <div className="project-name-row">
                                    <h3 className="project-name">{project.name}</h3>
                                </div>
                                <p className="project-tagline">{project.tagline}</p>
                            </div>
                            <div className="project-links">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        aria-label="Live demo"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                )}
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    aria-label="GitHub"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="project-tags">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
