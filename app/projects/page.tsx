import Breadcrumb from '../components/Breadcrumb'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform handling 10,000+ concurrent users with microservices architecture and real-time inventory management.',
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes']
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    description: 'Developed a real-time analytics system processing millions of events per day with Apache Kafka and Elasticsearch for data visualization.',
    technologies: ['Python', 'Kafka', 'Elasticsearch', 'React', 'WebSockets']
  },
  {
    id: '3',
    title: 'API Gateway & Authentication Service',
    description: 'Designed and implemented a secure API gateway with OAuth 2.0 authentication, rate limiting, and request/response transformation capabilities.',
    technologies: ['Go', 'JWT', 'OAuth 2.0', 'MongoDB', 'nginx']
  },
  {
    id: '4',
    title: 'Payment Processing System',
    description: 'Built a robust payment processing system handling multiple payment methods with fraud detection and automated reconciliation.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Stripe API']
  }
]

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