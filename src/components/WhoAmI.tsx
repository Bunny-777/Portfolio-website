import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './WhoAmI.css'

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const WhoAmI = () => {
    return (
        <div className="whoami-page">
            <motion.article
                className="whoami-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className="whoami-title" variants={itemVariants}>
                    who am i?
                </motion.h1>

                <motion.div className="whoami-body" variants={itemVariants}>
                    <p>
                        i'm <span className="hi">Kushagra Shrivastava</span> — a developer pursuing <span className="hi">B.Tech in Computer Science and Engineering at J.S.S. Academy of Technical Education, Noida</span> (CGPA: 8.3). I believe in building production-ready software for real users and real impact.
                    </p>

                    <p>
                        currently, i'm working as a <span className="hi">Founding Software Development Engineer at EVE Healthcare</span>, architecting backend systems with Python and Django, building robust APIs, and scaling core features from scratch.
                    </p>

                    <p>
                        my core expertise lies at the intersection of <span className="hi">scalable backend architectures</span> and <span className="hi">Applied AI / ML</span> — from low-latency conversational voice pipelines (VAD, ASR, LLM, TTS) achieving sub-2-second response times, to vector-indexed Retrieval-Augmented Generation (RAG) platforms using LangChain and FAISS.
                    </p>

                    <p>
                        i'm passionate about problem-solving. i'm a <span className="hi">Knight on LeetCode</span> with over <span className="hi">1000+ algorithmic problems solved</span>, ranked 1075 globally in Biweekly Contest 156 (22,000+ participants), and secured <span className="hi">Rank 1 in GDSC Recruitment Competition</span> on HackerRank.
                    </p>

                    <p>
                        i love competing in hackathons: won 1st place at the <span className="hi">ConvergX Hackathon (JSS Noida)</span> and placed in the <span className="hi">Top 40 out of 1200+ teams at Hackground 2025</span> in Gurugram.
                    </p>

                    <p>
                        i believe in continuous execution — building clean systems, shipping fast, and constantly raising the engineering bar.
                    </p>
                </motion.div>
            </motion.article>
        </div>
    )
}

export default WhoAmI
