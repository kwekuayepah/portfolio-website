'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="border-b border-skin-line">
      <div className="max-w-4xl mx-auto px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-skin-primary hover:text-skin-accent transition-colors text-base font-medium"
          >
            Kweku Ayepah
          </Link>
          
          <div className="flex items-center space-x-12">
            <Link 
              href="/posts" 
              className="text-skin-base hover:text-skin-primary transition-colors text-base"
            >
              Posts
            </Link>
            <Link 
              href="/projects" 
              className="text-skin-base hover:text-skin-primary transition-colors text-base"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="text-skin-base hover:text-skin-primary transition-colors text-base"
            >
              About
            </Link>
            <button 
              onClick={toggleTheme}
              className="text-skin-base hover:text-skin-primary transition-colors p-1"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}