import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-skin-line">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Links */}
          <div>
            <h3 className="text-skin-primary text-base font-medium mb-4">Personal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/about" 
                  className="text-skin-base hover:text-skin-primary transition-colors text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/posts" 
                  className="text-skin-base hover:text-skin-primary transition-colors text-base"
                >
                  Posts
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  className="text-skin-base hover:text-skin-primary transition-colors text-base"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          {/* Site Links */}
          <div>
            <h3 className="text-skin-primary text-base font-medium mb-4">Site</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/posts?category=technical" 
                  className="text-skin-base hover:text-skin-primary transition-colors text-base"
                >
                  Technical
                </a>
              </li>
              <li>
                <a 
                  href="/posts?category=personal" 
                  className="text-skin-base hover:text-skin-primary transition-colors text-base"
                >
                  Personal
                </a>
              </li>
              <li>
                <a 
                  href="/tags" 
                  className="text-skin-base hover:text-skin-primary transition-colors text-base"
                >
                  Tags
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-skin-primary text-base font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:kweku.ayepah@gmail.com" 
                  className="flex items-center space-x-2 text-skin-base hover:text-skin-primary transition-colors text-base group"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/kwekuayepah" 
                  className="flex items-center space-x-2 text-skin-base hover:text-skin-primary transition-colors text-base group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/kweku-ayepah-mensah-251453131/" 
                  className="flex items-center space-x-2 text-skin-base hover:text-skin-primary transition-colors text-base group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-skin-line flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <p className="text-skin-base text-xs font-mono">
            © 2025 Kweku Ayepah
          </p>
          <div className="flex items-center space-x-4 text-xs text-skin-base">
            <span>Made with Next.js</span>
            <span>•</span>
            <span>Hosted on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}