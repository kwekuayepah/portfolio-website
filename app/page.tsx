import { getPostsByCategory, type Post } from '@/lib/posts'
import { projects } from '@/lib/projects'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'

export default async function Home() {
  const technicalPosts = await getPostsByCategory('technical')
  const personalPosts = await getPostsByCategory('personal')
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
      <Hero />

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
              {technicalPosts.length > 0 ? (
                technicalPosts.map((post) => (
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
                ))
              ) : (
                <div className="border border-skin-line border-dashed rounded-lg p-8 text-center">
                  <p className="text-skin-base text-sm">No technical posts yet. Working on something interesting!</p>
                </div>
              )}
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

      <FeaturedProjects projects={projects.filter(p => p.featured).slice(0, 3)} />
    </main>
  )
}
