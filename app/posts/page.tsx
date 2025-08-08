import { Calendar } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Post {
  id: string
  title: string
  description: string
  date: string
  slug: string
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Building Scalable Microservices Architecture',
    description: 'Learn how to design and implement microservices that scale with your business needs, covering essential patterns from service discovery to load balancing.',
    date: 'May 13, 2025',
    slug: 'building-scalable-microservices-architecture'
  },
  {
    id: '2', 
    title: 'Advanced Backend Development with Node.js and TypeScript',
    description: 'Dive into advanced Node.js patterns and TypeScript techniques for building robust backend applications with clean architecture.',
    date: 'May 6, 2025',
    slug: 'advanced-backend-development-nodejs-typescript'
  },
  {
    id: '3',
    title: 'Database Optimization for High-Traffic Applications',
    description: 'Master database optimization techniques including indexing strategies, query optimization, and connection pooling for applications handling millions of requests.',
    date: 'April 28, 2025',
    slug: 'database-optimization-high-traffic'
  },
  {
    id: '4',
    title: 'Implementing Authentication & Authorization Systems',
    description: 'Step-by-step guide to building secure authentication systems using JWT tokens, OAuth 2.0, and role-based access control.',
    date: 'April 15, 2025',
    slug: 'authentication-authorization-systems'
  },
  {
    id: '5',
    title: 'API Design Best Practices for Modern Applications',
    description: 'Comprehensive guide to designing RESTful APIs that are intuitive, secure, and maintainable for long-term success.',
    date: 'April 9, 2025',
    slug: 'api-design-best-practices'
  },
  {
    id: '6',
    title: 'Container Orchestration with Kubernetes',
    description: 'From Docker containers to Kubernetes clusters - learn how to deploy and manage your applications at scale with confidence.',
    date: 'December 4, 2024',
    slug: 'container-orchestration-kubernetes'
  }
]

export default function PostsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Posts (page 1)', current: true }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-skin-base mb-2">Posts</h1>
        <p className="text-skin-base mb-8">All the articles I've posted.</p>
        
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="my-6">
              <a 
                href={`/posts/${post.slug}`}
                className="text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block"
              >
                <h2 className="font-medium text-lg decoration-dashed hover:underline">
                  {post.title}
                </h2>
              </a>
              <div className="opacity-80 flex items-center space-x-2 mt-2">
                <Calendar className="w-5 h-5 fill-skin-base" aria-hidden="true" />
                <span className="sr-only">Posted on:</span>
                <span className="italic text-sm text-skin-base">{post.date}</span>
              </div>
              <p className="text-skin-base mt-2">{post.description}</p>
            </li>
          ))}
        </ul>
        
        <nav className="pagination-wrapper" aria-label="Pagination">
          <a 
            href="#" 
            tabIndex={-1}
            className="group mr-4 select-none disabled opacity-50 cursor-not-allowed"
            aria-label="Previous"
            aria-disabled="true"
          >
            <ChevronLeft className="disabled-svg" size={20} />
            Prev
          </a>
          <a 
            href="/posts/2" 
            tabIndex={0}
            className="group ml-4 select-none"
            aria-label="Next"
          >
            Next
            <ChevronRight size={20} />
          </a>
        </nav>
      </main>
    </>
  )
}