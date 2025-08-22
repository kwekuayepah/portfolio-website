import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Post {
  id: string
  title: string
  description: string
  date: string
  slug: string
  tags: string[]
  readTime: string
  category: 'technical' | 'personal'
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Building Scalable Microservices Architecture',
    description: 'Learn how to design and implement microservices that scale with your business needs, covering essential patterns from service discovery to load balancing.',
    date: 'May 13, 2025',
    slug: 'building-scalable-microservices-architecture',
    tags: ['Microservices', 'Architecture', 'Backend'],
    readTime: '8 min read',
    category: 'technical'
  },
  {
    id: '2', 
    title: 'Advanced Backend Development with Node.js and TypeScript',
    description: 'Dive into advanced Node.js patterns and TypeScript techniques for building robust backend applications with clean architecture.',
    date: 'May 6, 2025',
    slug: 'advanced-backend-development-nodejs-typescript',
    tags: ['Node.js', 'TypeScript', 'Backend'],
    readTime: '12 min read',
    category: 'technical'
  },
  {
    id: '3',
    title: 'Finding Balance: Life as a Software Engineer in Ghana',
    description: 'Reflections on navigating career growth, personal interests, and cultural identity while building a tech career from Accra.',
    date: 'April 28, 2025',
    slug: 'finding-balance-life-engineer-ghana',
    tags: ['Life', 'Ghana', 'Career', 'Balance'],
    readTime: '6 min read',
    category: 'personal'
  },
  {
    id: '4',
    title: 'The Art of Basketball Strategy: Lessons for Life',
    description: 'What watching basketball taught me about patience, strategy, and finding beauty in the complexity of teamwork.',
    date: 'April 15, 2025',
    slug: 'basketball-strategy-lessons-life',
    tags: ['Basketball', 'Strategy', 'Life Lessons', 'Sports'],
    readTime: '5 min read',
    category: 'personal'
  },
  {
    id: '5',
    title: 'Database Optimization for High-Traffic Applications',
    description: 'Master database optimization techniques including indexing strategies, query optimization, and connection pooling for applications handling millions of requests.',
    date: 'April 9, 2025',
    slug: 'database-optimization-high-traffic',
    tags: ['Database', 'Performance', 'Optimization'],
    readTime: '10 min read',
    category: 'technical'
  },
  {
    id: '6',
    title: 'Through the Lens: Street Photography in Accra',
    description: 'Exploring the vibrant streets of Accra through photography, capturing moments that tell stories of resilience, community, and everyday beauty.',
    date: 'March 22, 2025',
    slug: 'through-lens-street-photography-accra',
    tags: ['Photography', 'Accra', 'Street Art', 'Culture'],
    readTime: '7 min read',
    category: 'personal'
  }
]

export default function PostsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium text-skin-primary">All Posts</h1>
        <div className="flex space-x-4 text-sm">
          <a 
            href="/posts" 
            className="text-skin-primary hover:text-skin-accent transition-colors"
          >
            All
          </a>
          <a 
            href="/posts?category=technical" 
            className="text-skin-base hover:text-skin-primary transition-colors"
          >
            Technical
          </a>
          <a 
            href="/posts?category=personal" 
            className="text-skin-base hover:text-skin-primary transition-colors"
          >
            Personal
          </a>
        </div>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border border-skin-line rounded-lg p-4 hover:border-skin-accent transition-colors">
            <a 
              href={`/posts/${post.slug}`}
              className="group block"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-skin-primary text-base font-medium group-hover:text-skin-accent transition-colors flex-1 pr-2">
                  {post.title}
                </h2>
                <span className={`inline-block px-3 py-1 text-sm rounded flex-shrink-0 ${
                  post.category === 'technical' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {post.category === 'technical' ? 'Technical' : 'Personal'}
                </span>
              </div>
              
              <p className="text-skin-base text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 text-sm bg-skin-card text-skin-base rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-2 text-sm text-skin-base">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
      
      <nav className="flex justify-between items-center mt-12 pt-8 border-t border-skin-line" aria-label="Pagination">
        <a 
          href="#" 
          className="flex items-center space-x-1 text-skin-base hover:text-skin-primary transition-colors text-sm opacity-50 cursor-not-allowed"
          aria-label="Previous"
          aria-disabled="true"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </a>
        <a 
          href="/posts/2" 
          className="flex items-center space-x-1 text-skin-base hover:text-skin-primary transition-colors text-sm"
          aria-label="Next"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </nav>
    </main>
  )
}