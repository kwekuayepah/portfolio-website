export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-skin-primary mb-8">About</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-skin-primary text-lg font-medium mb-6">Who I Am</h2>
          <div className="text-skin-base text-base leading-relaxed space-y-4">
            <p>
              I'm a software engineer with a background in computer engineering and a passion for solving complex problems. 
              With demonstrated expertise in fintech and payment solutions, I build scalable systems that serve both 
              businesses and customers.
            </p>
            <div>
              <p className="mb-3">When I'm not architecting distributed systems, you'll find me:</p>
              <ul className="space-y-1 pl-4">
                <li><span className="text-skin-primary">Staying Active:</span> At the gym, pushing my limits and maintaining balance.</li>
                <li><span className="text-skin-primary">Court Side:</span> Watching basketball and appreciating the strategy behind the game.</li>
                <li><span className="text-skin-primary">Capturing Moments:</span> Photography while exploring Ghana's rich landscapes and venturing beyond borders.</li>
                <li><span className="text-skin-primary">Discovering Life:</span> On a personal journey to uncover what makes life fascinating through travel and new experiences.</li>
              </ul>
            </div>
            <p>
              I'm a learner. I love to challenge myself to learn new things and solve complex problems. I enjoy using 
              open source projects. This is my way of motivating myself that there's more knowledge to be acquired.
            </p>
          </div>
        </section>
        
        <section className="border-t border-skin-line pt-6">
          <h2 className="text-skin-primary text-lg font-medium mb-6">Get in Touch</h2>
          <div className="text-skin-base text-base leading-relaxed space-y-4">
            <p>
              I'm always interested in connecting with fellow developers, discussing new technologies, 
              or collaborating on interesting projects. Feel free to reach out!
            </p>
            <div className="space-y-2">
              <p>
                <span className="text-skin-primary">Email:</span> 
                <a href="mailto:kweku.ayepah@gmail.com" className="text-skin-accent hover:text-skin-primary transition-colors ml-1">
                  kweku.ayepah@gmail.com
                </a>
              </p>
              <p>
                <span className="text-skin-primary">LinkedIn:</span> 
                <a 
                  href="https://www.linkedin.com/in/kweku-ayepah-mensah-251453131/" 
                  className="text-skin-accent hover:text-skin-primary transition-colors ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kweku-ayepah-mensah
                </a>
              </p>
              <p>
                <span className="text-skin-primary">GitHub:</span> 
                <a 
                  href="https://github.com/kwekuayepah" 
                  className="text-skin-accent hover:text-skin-primary transition-colors ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kwekuayepah
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}