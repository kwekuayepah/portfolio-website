import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAllPosts, getPostsByCategory, type Post } from '@/lib/posts'

interface PostsPageProps {
  searchParams: { category?: string }
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const category = searchParams.category as 'technical' | 'personal' | undefined
  
  let posts: Post[]
  if (category) {
    posts = await getPostsByCategory(category)
  } else {
    posts = await getAllPosts()
  }
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium text-skin-primary">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Posts` : 'All Posts'}
        </h1>
        <div className="flex space-x-4 text-sm">
          <a 
            href="/posts" 
            className={`transition-colors ${!category ? 'text-skin-primary' : 'text-skin-base hover:text-skin-primary'}`}
          >
            All
          </a>
          <a 
            href="/posts?category=technical" 
            className={`transition-colors ${category === 'technical' ? 'text-skin-primary' : 'text-skin-base hover:text-skin-primary'}`}
          >
            Technical
          </a>
          <a 
            href="/posts?category=personal" 
            className={`transition-colors ${category === 'personal' ? 'text-skin-primary' : 'text-skin-base hover:text-skin-primary'}`}
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