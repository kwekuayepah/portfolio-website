'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
    return (
        <section className="py-12 sm:py-20">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center sm:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-skin-primary mb-4 tracking-tight">
                        Kweku Ayepah
                    </h1>
                    <p className="text-xl sm:text-2xl text-skin-base mb-6 font-light">
                        Software Engineer
                    </p>
                    <p className="text-skin-base text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto sm:mx-0">
                        Building scalable fintech solutions and capturing moments through my lens.
                        I bridge the gap between complex systems and intuitive user experiences.
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-4 mb-8">
                        <a
                            href="mailto:hello@example.com"
                            className="p-2 text-skin-base hover:text-skin-accent transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-skin-base hover:text-skin-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-skin-base hover:text-skin-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-skin-primary text-skin-fill rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            View Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="/about"
                            className="px-6 py-3 border border-skin-line text-skin-base rounded-lg font-medium hover:border-skin-accent hover:text-skin-accent transition-colors"
                        >
                            More About Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-40 h-40 sm:w-64 sm:h-64 flex-shrink-0"
                >
                    <div className="absolute inset-0 bg-skin-accent/10 rounded-full blur-2xl transform translate-y-4"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-skin-card shadow-xl">
                        <img
                            src="/IMG 0473.jpg"
                            alt="Kweku Ayepah"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
