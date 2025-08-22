import { Github, Linkedin, Mail } from 'lucide-react'
import { getPostsByCategory, type Post } from '@/lib/posts'

export default async function Home() {
  const technicalPosts = await getPostsByCategory('technical')
  const personalPosts = await getPostsByCategory('personal')
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        {/* Profile Picture */}
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden">
            <img 
              src="/IMG 0473.jpg" 
              alt="Kweku Ayepah" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-xl sm:text-2xl font-medium text-skin-primary mb-2">Kweku Ayepah</h1>
        <p className="text-skin-base text-sm sm:text-base mb-6">Software Engineer</p>
        
        {/* Bio */}
        <p className="text-skin-base text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto text-left leading-relaxed">
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
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <h3 className="text-skin-primary text-base font-medium group-hover:text-skin-accent transition-colors">
                      {post.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded self-start sm:flex-shrink-0">
                      Technical
                    </span>
                  </div>
                  
                  <p className="text-skin-base text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 text-xs sm:text-sm bg-skin-card text-skin-base rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-skin-base">
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
              <h3 className="text-skin-primary text-base font-medium">Life & Musings</h3>
              <a 
                href="/posts?category=personal" 
                className="text-skin-accent hover:text-skin-primary transition-colors text-sm"
              >
                View all →
              </a>
            </div>
          <div className="space-y-4">
            {personalPosts.slice(0, 2).map((post) => (
              <article key={post.id} className="border border-skin-line rounded-lg p-4 hover:border-skin-accent transition-colors">
                <a 
                  href={`/posts/${post.slug}`}
                  className="group block"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <h3 className="text-skin-primary text-base font-medium group-hover:text-skin-accent transition-colors">
                      {post.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded self-start sm:flex-shrink-0">
                      Personal
                    </span>
                  </div>
                  
                  <p className="text-skin-base text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 text-xs sm:text-sm bg-skin-card text-skin-base rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-skin-base">
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
