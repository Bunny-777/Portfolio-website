import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Terminal.css'

interface Command {
    input: string
    output?: React.ReactNode
}

const Terminal = () => {
    const [commands, setCommands] = useState<Command[]>([])
    const [currentInput, setCurrentInput] = useState('')
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)
    const [modalTitle, setModalTitle] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const terminalEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [commands])

    const projects = [
        {
            name: 'HireSense AI',
            description: 'Real-Time AI interview platform with sub-2s voice latency using ElevenLabs Scribe v1 & Turbo v2',
            tech: ['PyTorch', 'TensorFlow', 'ASR/TTS', 'LLM', 'ElevenLabs', 'GitHub Actions'],
            github: 'https://github.com/Bunny-777/HireSense-AI',
            demo: '#'
        },
        {
            name: 'RAG-Chat',
            description: 'Retrieval-Augmented Generation app to chat with any YouTube video via FAISS vector search & Groq Llama 3.3',
            tech: ['Python', 'LangChain', 'FAISS', 'Hugging Face', 'Groq', 'Llama 3.3'],
            github: 'https://github.com/Bunny-777/RAG-chat',
            demo: '#'
        },
        {
            name: 'CrashGuard',
            description: 'Android application detecting road accidents within 10s via smartphone sensors with real-time alerts',
            tech: ['Kotlin', 'Android Studio', 'Sensors', 'Emergency Alert'],
            github: 'https://github.com/Bunny-777/Crash-Gaurd',
            demo: '#'
        }
    ]

    const skills = {
        'AI / ML': ['RAG', 'LangChain', 'LangGraph', 'Agentic AI', 'Generative AI', 'Deep Learning', 'NLP', 'ASR', 'TTS', 'VAD', 'FAISS'],
        'Languages': ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'NoSQL', 'XML'],
        'Backend & Cloud': ['FastAPI', 'Node.js', 'Express.js', 'Django', 'REST APIs', 'AWS', 'CI/CD Pipelines', 'Linux'],
        'Frontend & Mobile': ['ReactJS', 'Redux', 'Next.js', 'Flutter', 'React Native', 'Android Studio'],
        'Databases & Tools': ['MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'VS Code', 'Cursor AI']
    }

    const openModal = (title: string, content: React.ReactNode) => {
        setModalTitle(title)
        setModalContent(content)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setTimeout(() => {
            setModalContent(null)
            setModalTitle('')
        }, 300)
    }

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase()

        switch (trimmedCmd) {
            case 'help':
                // Add command with output to history (renders in terminal)
                setCommands(prev => [...prev, {
                    input: cmd,
                    output: (
                        <div className="help-output">
                            <div className="command-list">
                                <div><span className="cmd">about</span> - Learn more about me</div>
                                <div><span className="cmd">projects</span> - View my projects</div>
                                <div><span className="cmd">skills</span> - See my technical skills</div>
                                <div><span className="cmd">resume</span> - Open my resume</div>
                                <div><span className="cmd">contact</span> - Get in touch</div>
                                <div><span className="cmd">clear</span> - Clear terminal</div>
                            </div>
                        </div>
                    )
                }])
                return

            case 'about':
                setCommands(prev => [...prev, { input: cmd }])
                openModal('About Kushagra', (
                    <div className="about-output">
                        <p>Hi! I'm Kushagra Shrivastava — Founding Software Development Engineer at EVE Healthcare and B.Tech CSE student at JSS Noida.</p>
                        <p>I specialize in building scalable Python/Django backends, production REST APIs, and state-of-the-art Generative AI & RAG pipelines. Knight on LeetCode (1000+ problems solved).</p>
                    </div>
                ))
                break

            case 'projects':
                setCommands(prev => [...prev, { input: cmd }])
                openModal('My Projects', (
                    <div className="projects-output">
                        {projects.map((project, index) => (
                            <div key={index} className="project-item">
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
                break

            case 'skills':
                setCommands(prev => [...prev, { input: cmd }])
                openModal('Technical Skills', (
                    <div className="skills-output">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <div key={category} className="skill-category">
                                <h3 className="category-name">{category}</h3>
                                <div className="skill-tags">
                                    {skillList.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))
                break

            case 'resume':
                setCommands(prev => [...prev, { input: cmd }])
                openModal('Resume', (
                    <div className="resume-output">
                        <p>Preparing resume download...</p>
                        <a href="/resume.pdf" download="Kushagra_Shrivastava_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
                            → Click here to download resume PDF
                        </a>
                    </div>
                ))
                break

            case 'contact':
                setCommands(prev => [...prev, { input: cmd }])
                openModal('Get In Touch', (
                    <div className="contact-output">
                        <div className="contact-list">
                            <div>📧 Email: <a href="mailto:kushagrashri777@gmail.com">kushagrashri777@gmail.com</a></div>
                            <div>📞 Phone: <a href="tel:+919389728258">+91 9389728258</a></div>
                            <div>🐙 GitHub: <a href="https://github.com/Bunny-777" target="_blank" rel="noopener noreferrer">github.com/Bunny-777</a></div>
                            <div>💼 LinkedIn: <a href="https://www.linkedin.com/in/bunny777/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bunny777</a></div>
                            <div>🐦 X / Twitter: <a href="https://x.com/bunny__777" target="_blank" rel="noopener noreferrer">@bunny__777</a></div>
                            <div>📍 Location: Noida, Uttar Pradesh</div>
                        </div>
                    </div>
                ))
                break

            case 'clear':
                setCommands([])
                return

            case '':
                return

            default:
                setCommands(prev => [...prev, { input: cmd }])
                openModal('Error', (
                    <div className="error-output">
                        Command not found: '{cmd}'. Type 'help' for available commands.
                    </div>
                ))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (currentInput.trim()) {
            handleCommand(currentInput)
            setCurrentInput('')
        }
    }

    return (
        <>
            <div className="terminal-container">
                <div className="terminal-output">
                    <div className="welcome-message">
                        <div className="ascii-art">
                            ╔═══════════════════════════════════════╗
                            ║   Welcome to Kushagra's Terminal      ║
                            ╚═══════════════════════════════════════╝
                        </div>
                        <p>Type 'help' to see available commands</p>
                    </div>

                    <AnimatePresence>
                        {commands.map((cmd, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="command-block"
                            >
                                <div className="command-input-line">
                                    <span className="prompt">visitor@portfolio:~$</span>
                                    <span className="command-text">{cmd.input}</span>
                                </div>
                                {cmd.output && (
                                    <div className="command-output">
                                        {cmd.output}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <div ref={terminalEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="terminal-input-form">
                    <span className="prompt">visitor@portfolio:~$</span>
                    <input
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        className="terminal-input"
                        autoFocus
                        spellCheck={false}
                    />
                </form>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="terminal-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="terminal-modal"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h2 className="modal-title">{modalTitle}</h2>
                                <button className="modal-close" onClick={closeModal}>
                                    ✕
                                </button>
                            </div>
                            <div className="modal-content">
                                {modalContent}
                            </div>
                            <div className="modal-footer">
                                <button className="modal-close-btn" onClick={closeModal}>
                                    [CLOSE]
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Terminal
