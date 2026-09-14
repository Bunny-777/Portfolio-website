import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Experience.css'

const experiences = [
    {
        role: 'Founding Software Development Engineer',
        company: 'EVE Healthcare',
        url: '',
        period: 'Aug 2026 – Present',
        location: 'Gurugram, Haryana',
        bullets: [
            'Building and scaling backend systems using Python and Django, developing production-ready APIs and core application functionality.',
            'Working across the product lifecycle as a founding engineer, contributing to backend architecture, feature development, database integration, and deployment.',
        ],
    },
    {
        role: 'Junior MERN Stack Developer',
        company: 'Adnecto Technologies (OPC) Private Limited',
        url: '',
        period: 'Feb 2026 – Apr 2026',
        location: 'Remote',
        bullets: [
            'Delivered 5 REST API endpoints with Node.js and Express and 3 responsive React interfaces as part of a 4-member MERN stack team, shipping production features across the application.',
            'Streamlined frontend-backend integration across 2 web applications, coordinating with 1 senior developer to ensure seamless data flow between REST APIs and the React client.',
        ],
    },
    {
        role: 'Full Stack Web Developer',
        company: 'Digital Guru',
        url: '',
        period: 'May 2025 – Dec 2025',
        location: 'Remote',
        bullets: [
            'Engineered AI integration and backend logic across 4+ web applications, building and optimizing 10+ end-to-end features across the full stack over an 8-month tenure.',
            'Automated deployment of 6+ production modules by coordinating application architecture and CI/CD pipelines, ensuring zero-downtime releases across frontend and backend layers.',
        ],
    },
]

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const liVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-label">Experience</h2>
            <div className="exp-list">
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.company}
                        className="exp-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <div className="exp-header">
                            <div className="exp-meta">
                                <h3 className="exp-role">{exp.role}</h3>
                                <div className="exp-company-row">
                                    <span className="exp-company">{exp.company}</span>
                                    {exp.url && (
                                        <a
                                            href={exp.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="exp-live-link"
                                            title="View live site"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            kanpurdentallab.com
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="exp-dates">
                                <span className="exp-period">{exp.period}</span>
                                <span className="exp-location">{exp.location}</span>
                            </div>
                        </div>

                        <motion.ul
                            className="exp-bullets"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            {exp.bullets.map((b, i) => (
                                <motion.li key={i} className="exp-bullet" variants={liVariants}>
                                    {b}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience
