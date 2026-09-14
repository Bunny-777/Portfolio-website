import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Skills.css'

const skillGroups = [
    {
        category: 'AI / ML',
        skills: ['RAG', 'LangChain', 'LangGraph', 'Agentic AI', 'Generative AI', 'Deep Learning', 'NLP', 'ASR', 'TTS', 'VAD', 'Hugging Face', 'FAISS'],
    },
    {
        category: 'Languages',
        skills: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'NoSQL', 'XML'],
    },
    {
        category: 'Backend & Cloud',
        skills: ['FastAPI', 'Node.js', 'Express.js', 'Django', 'REST APIs', 'AWS', 'CI/CD Pipelines', 'Linux'],
    },
    {
        category: 'Frontend & Mobile',
        skills: ['ReactJS', 'Redux', 'Next.js', 'Flutter', 'React Native', 'Android Studio'],
    },
    {
        category: 'Databases',
        skills: ['MongoDB', 'PostgreSQL', 'SQL', 'NoSQL'],
    },
    {
        category: 'Tools & Version Control',
        skills: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'Cursor AI'],
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } }
}

const groupVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-label">Skills</h2>
            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {skillGroups.map((group) => (
                    <motion.div key={group.category} className="skill-group" variants={groupVariants}>
                        <p className="skill-category">{group.category}</p>
                        <div className="skill-pills">
                            {group.skills.map((skill) => (
                                <span key={skill} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
