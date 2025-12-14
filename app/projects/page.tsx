import Breadcrumb from '../components/Breadcrumb'

import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', current: true }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-skin-base mb-2">Projects</h1>
        <p className="text-skin-base mb-8">Some of the projects I've built over the years.</p>

        <div className="grid gap-8 md:grid-cols-1">
          {projects.map((project) => (
            <div key={project.id} className="border border-skin-line rounded-lg p-6 hover:border-skin-accent transition-colors">
              <h2 className="text-xl font-medium text-skin-base mb-3">
                {project.title}
              </h2>
              <p className="text-skin-base mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-skin-card text-skin-base text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}