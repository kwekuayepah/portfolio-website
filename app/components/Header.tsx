'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="border-b border-skin-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-skin-primary hover:text-skin-accent transition-colors"
            aria-label="Home"
          >
            <Logo variant="minimal" height={32} />
          </Link>

          <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12">
            <Link
              href="/posts"
              className="text-skin-base hover:text-skin-primary transition-colors text-sm sm:text-base"
            >
              Posts
            </Link>
            <Link
              href="/projects"
              className="text-skin-base hover:text-skin-primary transition-colors text-sm sm:text-base"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-skin-base hover:text-skin-primary transition-colors text-sm sm:text-base"
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