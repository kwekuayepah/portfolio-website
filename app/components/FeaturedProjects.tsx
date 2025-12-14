'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Project } from '@/lib/projects'

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="py-12 border-t border-skin-line">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-skin-primary">Featured Projects</h2>
                <a
                    href="/projects"
                    className="text-skin-accent hover:text-skin-primary transition-colors flex items-center gap-1 text-sm font-medium"
                >
                    View all <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative bg-skin-card border border-skin-line rounded-xl p-6 hover:border-skin-accent transition-colors shadow-sm hover:shadow-md"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-skin-primary group-hover:text-skin-accent transition-colors">
                                {project.title}
                            </h3>
                            {project.link && (
                                <ExternalLink size={18} className="text-skin-base group-hover:text-skin-accent transition-colors" />
                            )}
                        </div>

                        <p className="text-skin-base text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-skin-card-muted text-xs font-medium text-skin-base rounded-md border border-skin-line"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="px-2 py-1 text-xs text-skin-base opacity-60">
                                    +{project.technologies.length - 4}
                                </span>
                            )}
                        </div>

                        {/* Clickable overlay */}
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label={`View ${project.title}`}></a>
                        ) : (
                            <a href="/projects" className="absolute inset-0" aria-label={`View ${project.title}`}></a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
