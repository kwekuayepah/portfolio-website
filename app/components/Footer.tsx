import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-3xl mx-auto px-0">
        <hr className="border-skin-line" aria-hidden="true" />
      </div>
      <div className="footer-wrapper">
        <div className="social-icons flex">
          <a 
            href="https://github.com/kwekuayepah" 
            className="group link-button"
            title="Kweku Ayepah on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/kwekuayepah" 
            className="group link-button"
            title="Kweku Ayepah on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:kweku@example.com" 
            className="group link-button"
            title="Email Kweku Ayepah"
          >
            <Mail size={20} />
          </a>
        </div>
        <div className="copyright-wrapper">
          <span>Copyright © 2025</span>
          <span className="separator">&nbsp;|&nbsp;</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}