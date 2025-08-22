import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'

interface PostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-skin-base mb-4">
            <a href="/posts" className="hover:text-skin-primary transition-colors">
              ← Back to posts
            </a>
          </div>
          
          <h1 className="text-3xl font-bold text-skin-primary mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-skin-base">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className={`px-2 py-1 rounded text-xs ${
                post.category === 'technical' 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                  : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              }`}>
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block px-3 py-1 text-sm bg-skin-card text-skin-base rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-skin-base"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-skin-line">
          <div className="flex justify-between items-center">
            <a 
              href="/posts" 
              className="text-skin-accent hover:text-skin-primary transition-colors text-sm"
            >
              ← Back to all posts
            </a>
            <div className="text-sm text-skin-base">
              Published {post.date}
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Kweku Ayepah`,
    description: post.description,
  }
}