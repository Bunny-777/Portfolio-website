import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './ResumeModal.css'

interface ResumeModalProps {
    isOpen: boolean
    onClose: () => void
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    const handleDownload = async (e: React.MouseEvent) => {
        try {
            const res = await fetch('/resume.pdf', { method: 'HEAD' })
            if (res.ok && res.status === 200) {
                // Standalone PDF exists, continue default download
                return
            }
        } catch {
            // fallback
        }
        // If standalone PDF is not present, launch high-res print to PDF
        e.preventDefault()
        window.print()
    }

    if (!isOpen) return null

    return (
        <motion.div
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="resume-modal-container"
                initial={{ scale: 0.94, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Top Header */}
                <div className="resume-modal-header">
                    <div className="resume-modal-title-group">
                        <span className="resume-modal-badge">Interactive Resume</span>
                        <h2 className="resume-modal-title">Kushagra Shrivastava</h2>
                    </div>
                    <div className="resume-modal-actions">
                        <a
                            href="/resume.pdf"
                            download="Kushagra_Shrivastava_Resume.pdf"
                            onClick={handleDownload}
                            className="resume-action-btn"
                            title="Download PDF Resume"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download PDF
                        </a>
                        <button className="resume-close-btn" onClick={onClose} title="Close (Esc)">
                            ✕
                        </button>
                    </div>
                </div>

                {/* Resume Document Content */}
                <div className="resume-modal-body">
                    {/* Header */}
                    <div className="resume-doc-header">
                        <h1 className="resume-doc-name">Kushagra Shrivastava</h1>
                        <p className="resume-doc-contact">
                            Noida, Uttar Pradesh • +91 9389728258 • kushagrashri777@gmail.com
                        </p>
                        <div className="resume-doc-links">
                            <a href="https://www.linkedin.com/in/bunny777/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <span>•</span>
                            <a href="https://github.com/Bunny-777" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <span>•</span>
                            <a href="https://x.com/bunny__777" target="_blank" rel="noopener noreferrer">X / Twitter</a>
                        </div>
                    </div>

                    {/* Experience */}
                    <section className="resume-section">
                        <h2 className="resume-section-title">Experience</h2>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    EVE Healthcare <span className="resume-item-subtitle">| Founding Software Development Engineer</span>
                                </h3>
                                <span className="resume-item-date">Aug 2026 – Present</span>
                            </div>
                            <div className="resume-item-location">Gurugram, Haryana</div>
                            <ul className="resume-bullets">
                                <li>Building and scaling backend systems using Python and Django, developing production-ready APIs and core application functionality.</li>
                                <li>Working across the product lifecycle as a founding engineer, contributing to backend architecture, feature development, database integration, and deployment.</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    Adnecto Technologies (OPC) Private Limited <span className="resume-item-subtitle">| Junior MERN Stack Developer</span>
                                </h3>
                                <span className="resume-item-date">Feb 2026 – Apr 2026</span>
                            </div>
                            <div className="resume-item-location">Remote</div>
                            <ul className="resume-bullets">
                                <li>Delivered 5 REST API endpoints with Node.js and Express and 3 responsive React interfaces as part of a 4-member MERN stack team, shipping production features across the application.</li>
                                <li>Streamlined frontend-backend integration across 2 web applications, coordinating with 1 senior developer to ensure seamless data flow between REST APIs and the React client.</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    Digital Guru <span className="resume-item-subtitle">| Full Stack Web Developer</span>
                                </h3>
                                <span className="resume-item-date">May 2025 – Dec 2025</span>
                            </div>
                            <div className="resume-item-location">Remote</div>
                            <ul className="resume-bullets">
                                <li>Engineered AI integration and backend logic across 4+ web applications, building and optimizing 10+ end-to-end features across the full stack over an 8-month tenure.</li>
                                <li>Automated deployment of 6+ production modules by coordinating application architecture and CI/CD pipelines, ensuring zero-downtime releases across frontend and backend layers.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="resume-section">
                        <h2 className="resume-section-title">Projects</h2>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    HireSense AI <span className="resume-item-subtitle">| PyTorch, TensorFlow, ASR, TTS, LLM</span>
                                </h3>
                                <span className="resume-item-date">Jul 2026</span>
                            </div>
                            <a href="https://github.com/Bunny-777/HireSense-AI" target="_blank" rel="noopener noreferrer" className="resume-link-text">
                                github.com/Bunny-777/HireSense-AI ↗
                            </a>
                            <ul className="resume-bullets">
                                <li>Architected a real-time AI interview platform with a full voice pipeline (VAD, ASR, NLU, LLM, TTS) achieving sub-2-second conversational latency for natural interview flow.</li>
                                <li>Implemented ElevenLabs Scribe v1 and Turbo v2 across 3 core modules for speech recognition and voice responses, maintaining 100% CI pass rate via Git, GitHub, and GitHub Actions.</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    RAG-Chat <span className="resume-item-subtitle">| Python, LangChain, FAISS, Hugging Face, Groq</span>
                                </h3>
                                <span className="resume-item-date">Jun 2026</span>
                            </div>
                            <a href="https://github.com/Bunny-777/RAG-chat" target="_blank" rel="noopener noreferrer" className="resume-link-text">
                                github.com/Bunny-777/RAG-chat ↗
                            </a>
                            <ul className="resume-bullets">
                                <li>Developed a Retrieval-Augmented Generation application letting users chat with any YouTube video via its URL; chunked and embedded transcripts into 500+ vector segments using Hugging Face, indexed via FAISS for sub-second context retrieval per query.</li>
                                <li>Integrated LangChain with Groq Llama 3.3 70B to generate accurate, context-aware responses while minimizing hallucinations.</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    CrashGuard <span className="resume-item-subtitle">| Kotlin, Android Studio</span>
                                </h3>
                                <span className="resume-item-date">Aug 2025</span>
                            </div>
                            <a href="https://github.com/Bunny-777/Crash-Gaurd" target="_blank" rel="noopener noreferrer" className="resume-link-text">
                                github.com/Bunny-777/Crash-Gaurd ↗
                            </a>
                            <ul className="resume-bullets">
                                <li>Designed an Android application that detects road accidents within 10 seconds using smartphone sensors and automatically triggers emergency alerts, with real-time monitoring through an intuitive mobile interface.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="resume-section">
                        <h2 className="resume-section-title">Technical Skills</h2>
                        <div className="resume-skills-grid">
                            <div className="resume-skill-row">
                                <span className="resume-skill-label">AI / ML:</span>
                                <span className="resume-skill-vals">RAG, LangChain, LangGraph, Agentic AI, Generative AI, Machine Learning, Deep Learning, Natural Language Processing, ASR, TTS, VAD, Hugging Face, FAISS</span>
                            </div>
                            <div className="resume-skill-row">
                                <span className="resume-skill-label">Languages:</span>
                                <span className="resume-skill-vals">Python, Java, C, C++, JavaScript, SQL, NoSQL, XML</span>
                            </div>
                            <div className="resume-skill-row">
                                <span className="resume-skill-label">Backend / Infra:</span>
                                <span className="resume-skill-vals">FastAPI, Node.js, Express.js, Django, REST API design, AWS, CI/CD Pipelines, Git, GitHub, GitHub Actions, Linux</span>
                            </div>
                            <div className="resume-skill-row">
                                <span className="resume-skill-label">Frontend / Mobile:</span>
                                <span className="resume-skill-vals">ReactJS, Redux, Next.js, Flutter, React Native, Android Studio</span>
                            </div>
                            <div className="resume-skill-row">
                                <span className="resume-skill-label">Databases:</span>
                                <span className="resume-skill-vals">MongoDB, PostgreSQL</span>
                            </div>
                            <div className="resume-skill-row">
                                <span className="resume-skill-label">Tools:</span>
                                <span className="resume-skill-vals">VS Code, Cursor AI</span>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="resume-section">
                        <h2 className="resume-section-title">Education</h2>
                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    J.S.S. Academy of Technical Education <span className="resume-item-subtitle">| B.Tech, Computer Science and Engineering</span>
                                </h3>
                                <span className="resume-item-date">Oct 2023 – Present</span>
                            </div>
                            <div className="resume-item-location">CGPA: 8.3 · Noida, Uttar Pradesh</div>
                        </div>
                        <div className="resume-item">
                            <div className="resume-item-header">
                                <h3 className="resume-item-title">
                                    AM World School <span className="resume-item-subtitle">| Class XII, PCMB</span>
                                </h3>
                                <span className="resume-item-date">Apr 2021 – May 2022</span>
                            </div>
                            <div className="resume-item-location">Percentage: 95% · Chandausi, Uttar Pradesh</div>
                        </div>
                    </section>

                    {/* Certifications & Achievements */}
                    <section className="resume-section" style={{ marginBottom: 0 }}>
                        <h2 className="resume-section-title">Certifications & Achievements</h2>
                        <ul className="resume-ach-list">
                            <li><strong>Winner</strong>, ConvergX Hackathon – JSS Noida</li>
                            <li><strong>Top 40</strong>, Hackground 2025 (Gurugram) among 1200+ teams</li>
                            <li><strong>Rank 1</strong>, GDSC Recruitment Competition (HackerRank)</li>
                            <li><strong>Amazon AWS Certificate</strong></li>
                            <li><strong>Rank 1075</strong>, LeetCode Biweekly 156 among 22,000+ participants</li>
                            <li><strong>Knight, LeetCode</strong> · 1000+ problems solved · 1700+ contest rating</li>
                            <li><strong>2-Star, CodeChef</strong></li>
                        </ul>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ResumeModal
