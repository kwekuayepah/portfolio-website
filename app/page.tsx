import Breadcrumb from './components/Breadcrumb'
import { Calendar } from 'lucide-react'

interface Post {
  title: string
  description: string
  date: string
  slug: string
  category: string
}

const featuredPosts: Post[] = [
  {
    title: 'Building Scalable Microservices Architecture',
    description: 'Learn how to design and implement microservices that scale with your business needs, covering essential patterns from service discovery to load balancing.',
    date: 'May 13, 2025',
    slug: 'building-scalable-microservices-architecture',
    category: 'Backend Development'
  },
  {
    title: 'Advanced Backend Development with Node.js and TypeScript', 
    description: 'Dive into advanced Node.js patterns and TypeScript techniques for building robust backend applications with clean architecture.',
    date: 'May 6, 2025',
    slug: 'advanced-backend-development-nodejs-typescript',
    category: 'Backend Development'
  },
  {
    title: 'Database Optimization for High-Traffic Applications',
    description: 'Master database optimization techniques including indexing strategies, query optimization, and connection pooling for applications handling millions of requests.',
    date: 'April 28, 2025', 
    slug: 'database-optimization-high-traffic',
    category: 'Database'
  },
  {
    title: 'Implementing Authentication & Authorization Systems',
    description: 'Step-by-step guide to building secure authentication systems using JWT tokens, OAuth 2.0, and role-based access control.',
    date: 'April 15, 2025',
    slug: 'authentication-authorization-systems',
    category: 'Security'
  }
]

export default function Home() {
  const breadcrumbItems = [
    { label: 'Home', current: true }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section with Profile */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-skin-line">
                <img 
                  src="/IMG 0473.jpg" 
                  alt="Kweku Ayepah - Backend Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 md:w-40 mt-4">
                <ul className="text-center text-skin-base text-sm font-medium leading-tight list-disc list-inside space-y-1">
                  <li>Software Engineer</li>
                  <li>Problem Solver</li>
                  <li>Explorer</li>
                  <li>Continuous Learner</li>
                </ul>
              </div>
            </div>
            
            {/* Welcome Content */}
            <div className="flex-1">
              <h1 className="text-3xl font-medium text-skin-base mb-2">Hey, there! 👋</h1>
              <p className="text-skin-base mb-6">
                I'm a software engineer with a background in computer engineering and a passion for solving complex problems. 
                With demonstrated expertise in fintech and payment solutions, I build scalable systems that serve both 
                businesses and customers.
              </p>
              <div className="text-skin-base mb-6">
                <p className="mb-4">When I'm not architecting distributed systems, you'll find me:</p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Staying Active</strong>: At the gym, pushing my limits and maintaining balance.</li>
                  <li><strong>Court Side</strong>: Watching basketball and appreciating the strategy behind the game.</li>
                  <li><strong>Capturing Moments</strong>: Photography while exploring Ghana's rich landscapes and venturing beyond borders.</li>
                  <li><strong>Discovering Life</strong>: On a personal journey to uncover what makes life fascinating through travel and new experiences.</li>
                </ul>
              </div>
              <p className="text-skin-base">
                I'm a learner. I love to challenge myself to learn new things and solve complex problems. I enjoy using 
                open source projects. This is my way of motivating myself that there's more knowledge to be acquired.
              </p>
            </div>
          </div>
        </section>
        
        <div className="max-w-3xl">
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-skin-base mb-6">Featured Posts</h2>
          <ul className="space-y-6">
            {featuredPosts.slice(0, 1).map((post, index) => (
              <li key={index} className="my-6">
                <a 
                  href={`/posts/${post.slug}`}
                  className="text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block"
                >
                  <h3 className="font-medium text-lg decoration-dashed hover:underline">
                    {post.title}
                  </h3>
                </a>
                <div className="opacity-80 flex items-center space-x-2 mt-2">
                  <Calendar className="w-5 h-5 fill-skin-base" aria-hidden="true" />
                  <span className="sr-only">Posted on:</span>
                  <span className="italic text-sm text-skin-base">{post.date}</span>
                  <span className="mx-2 text-skin-base">•</span>
                  <span className="text-sm text-skin-base">{post.category}</span>
                </div>
                <p className="text-skin-base mt-2">{post.description}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <a 
              href="/posts" 
              className="text-skin-accent font-medium hover:underline"
            >
              View all posts →
            </a>
          </div>
        </section>
        
        </div>
      </main>
    </>
  )
}
