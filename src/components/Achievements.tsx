import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './Achievements.css'

const achievements = [
    {
        name: 'ConvergX Hackathon – JSS Noida',
        award: 'Winner 🏆',
        description: 'Secured 1st Place at the ConvergX Hackathon organized at J.S.S. Academy of Technical Education, Noida.',
    },
    {
        name: 'Hackground 2025 (Gurugram)',
        award: 'Top 40 / 1200+ Teams',
        description: 'Selected in the Top 40 finalists out of 1200+ competing teams at Hackground 2025 in Gurugram.',
    },
    {
        name: 'GDSC Recruitment Competition',
        award: 'Rank 1 · HackerRank',
        description: 'Achieved Rank 1 in Google Developer Student Clubs competitive programming recruitment contest.',
    },
    {
        name: 'LeetCode Competitive Programming',
        award: 'Knight Badge · 1700+ Rating',
        description: 'Solved 1000+ algorithmic problems. Secured Global Rank 1075 in LeetCode Biweekly Contest 156 among 22,000+ participants.',
    },
    {
        name: 'Amazon AWS & CodeChef',
        award: 'AWS Certified · 2-Star',
        description: 'Earned official Amazon AWS Certificate; 2-Star rated competitive programmer on CodeChef and active on Codeforces.',
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <h2 className="section-label">Achievements</h2>
            <motion.div
                className="ach-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                {achievements.map((a) => (
                    <motion.div
                        key={a.name}
                        className="ach-card"
                        variants={cardVariants}
                    >
                        <p className="ach-award">{a.award}</p>
                        <h3 className="ach-name">{a.name}</h3>
                        <p className="ach-desc">{a.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Achievements
