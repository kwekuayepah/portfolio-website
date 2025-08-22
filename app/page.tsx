import { Github, Linkedin, Mail } from 'lucide-react'

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

const technicalPosts: Post[] = [
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
  }
]

const personalPosts: Post[] = [
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
  }
]

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
            <img 
              src="/IMG 0473.jpg" 
              alt="Kweku Ayepah" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-2xl font-medium text-skin-primary mb-2">Kweku Ayepah</h1>
        <p className="text-skin-base text-base mb-6">Software Engineer</p>
        
        {/* Bio */}
        <p className="text-skin-base text-base mb-12 max-w-2xl mx-auto text-left">
          From architecting distributed payment systems to capturing Ghana's stunning landscapes through my lens, I'm a software engineer who believes the best solutions come from understanding both complex code and the world around us. Currently building scalable fintech solutions and sharing my thoughts on everything from system architecture to life's unexpected moments, while staying curious about what's next.
        </p>
        
      </div>
      
      {/* Writing Sections */}
      <div className="border-t border-skin-line pt-8">
        <div className="mb-8">
          <h2 className="text-skin-primary text-xl font-medium">Kweku's Thoughts...</h2>
        </div>
        
        <div className="space-y-12">
          {/* Technical Writing */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-skin-primary text-base font-medium">Technical</h3>
              <a 
                href="/posts?category=technical" 
                className="text-skin-accent hover:text-skin-primary transition-colors text-sm"
              >
                View all →
              </a>
            </div>
          <div className="space-y-4">
            {technicalPosts.map((post) => (
              <article key={post.id} className="border border-skin-line rounded-lg p-4 hover:border-skin-accent transition-colors">
                <a 
                  href={`/posts/${post.slug}`}
                  className="group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-skin-primary text-base font-medium group-hover:text-skin-accent transition-colors flex-1 pr-2">
                      {post.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded flex-shrink-0">
                      Technical
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
        </section>

          {/* Personal Writing */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-skin-primary text-base font-medium">Personal</h3>
              <a 
                href="/posts?category=personal" 
                className="text-skin-accent hover:text-skin-primary transition-colors text-sm"
              >
                View all →
              </a>
            </div>
          <div className="space-y-4">
            {personalPosts.map((post) => (
              <article key={post.id} className="border border-skin-line rounded-lg p-4 hover:border-skin-accent transition-colors">
                <a 
                  href={`/posts/${post.slug}`}
                  className="group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-skin-primary text-base font-medium group-hover:text-skin-accent transition-colors flex-1 pr-2">
                      {post.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded flex-shrink-0">
                      Personal
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
          </section>
        </div>
      </div>
    </main>
  )
}
