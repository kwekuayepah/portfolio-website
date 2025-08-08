import Breadcrumb from '../components/Breadcrumb'

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About', current: true }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-skin-line">
                <img 
                  src="/IMG 0473.jpg" 
                  alt="Kweku Ayepah - Backend Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-medium text-skin-base mb-2">About</h1>
              <p className="text-skin-base mb-6">Learn more about my journey as a backend engineer.</p>
            </div>
          </div>
        </section>
        
        <div className="max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-skin-base mb-6">Who I Am</h2>
              <p className="text-skin-base leading-relaxed mb-6">
                I'm Kweku Ayepah, a backend engineer with over 5 years of experience building scalable, 
                high-performance applications. My passion lies in creating robust systems that 
                handle real-world challenges with elegant solutions.
              </p>
              <p className="text-skin-base leading-relaxed mb-6">
                I specialize in microservices architecture, database optimization, and API design. 
                My approach combines technical excellence with practical problem-solving to deliver 
                systems that not only work but scale gracefully under pressure.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-skin-base mb-6">What I Do</h2>
              <p className="text-skin-base leading-relaxed mb-6">
                Currently working at a leading tech company where I help build systems that 
                serve millions of users worldwide. My daily work involves architecting microservices, 
                optimizing database performance, and ensuring our APIs can handle massive scale.
              </p>
              <p className="text-skin-base leading-relaxed mb-6">
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles, or mentoring junior developers. I believe in sharing 
                knowledge and helping the developer community grow.
              </p>
            </section>
            
            <section className="border-t border-skin-line pt-8">
              <h2 className="text-2xl font-medium text-skin-base mb-6">Get in Touch</h2>
              <p className="text-skin-base leading-relaxed mb-6">
                I'm always interested in connecting with fellow developers, discussing new technologies, 
                or collaborating on interesting projects. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <p className="text-skin-base">
                  <strong>Email:</strong> 
                  <a href="mailto:kweku@example.com" className="text-skin-accent hover:underline ml-2">
                    kweku@example.com
                  </a>
                </p>
                <p className="text-skin-base">
                  <strong>LinkedIn:</strong> 
                  <a 
                    href="https://linkedin.com/in/kwekuayepah" 
                    className="text-skin-accent hover:underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kwekuayepah
                  </a>
                </p>
                <p className="text-skin-base">
                  <strong>GitHub:</strong> 
                  <a 
                    href="https://github.com/kwekuayepah" 
                    className="text-skin-accent hover:underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kwekuayepah
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}