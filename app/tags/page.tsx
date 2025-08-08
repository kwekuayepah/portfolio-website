import Breadcrumb from '../components/Breadcrumb'

interface Tag {
  name: string
  count: number
  description: string
}

const tags: Tag[] = [
  {
    name: 'Backend Development',
    count: 8,
    description: 'Articles about backend architecture, patterns, and best practices'
  },
  {
    name: 'Database',
    count: 5,
    description: 'Database optimization, design patterns, and performance tuning'
  },
  {
    name: 'API Design',
    count: 4,
    description: 'RESTful API design, GraphQL, and API best practices'
  },
  {
    name: 'Microservices',
    count: 6,
    description: 'Microservices architecture, patterns, and implementation strategies'
  },
  {
    name: 'Security',
    count: 3,
    description: 'Authentication, authorization, and security best practices'
  },
  {
    name: 'DevOps',
    count: 4,
    description: 'Container orchestration, CI/CD, and deployment strategies'
  },
  {
    name: 'Performance',
    count: 7,
    description: 'Application performance, optimization techniques, and monitoring'
  },
  {
    name: 'Node.js',
    count: 5,
    description: 'Node.js development, patterns, and ecosystem'
  }
]

const createSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export default function TagsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tags', current: true }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-skin-base mb-2">Tags</h1>
        <p className="text-skin-base mb-8">Explore posts by topic and technology.</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {tags.map((tag) => (
            <a 
              key={tag.name}
              href={`/tags/${createSlug(tag.name)}`}
              className="block border border-skin-line rounded-lg p-6 hover:border-skin-accent transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-medium text-skin-accent group-hover:underline">
                  {tag.name}
                </h2>
                <span className="px-3 py-1 bg-skin-card text-skin-base text-sm rounded">
                  {tag.count} {tag.count === 1 ? 'post' : 'posts'}
                </span>
              </div>
              <p className="text-skin-base">
                {tag.description}
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}