'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Search, Moon, Sun, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="border-b border-skin-line bg-skin-fill">
      <div className="nav-container">
        <div className="top-nav-wrap">
          <Link href="/" className="logo">
            <div className="site-title">Kweku Ayepah</div>
          </Link>
          <nav id="nav-menu">
            <button 
              className="hamburger-menu focus-outline"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-items"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`icon-container ${isMenuOpen ? 'relative' : 'flex'}`}>
                <div 
                  id="first-line" 
                  className={isMenuOpen ? 'rotate-45 absolute bottom-1/2' : ''}
                />
                <div 
                  id="second-line" 
                  className={isMenuOpen ? '!w-full -rotate-45 absolute bottom-1/2' : ''}
                />
                <div 
                  id="third-line" 
                  className={isMenuOpen ? 'display-none' : ''}
                />
              </div>
            </button>
            <ul 
              id="menu-items" 
              className={`${isMenuOpen ? '' : 'display-none'} sm:flex`}
            >
              <li>
                <Link href="/posts" className="nav-link">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/tags" className="nav-link">
                  Tags
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/search" 
                  className="group focus-outline p-3 sm:p-1"
                  aria-label="search"
                  title="Search"
                >
                  <Search className="scale-125 sm:scale-100" size={20} />
                </Link>
              </li>
              <li>
                <button 
                  id="theme-btn" 
                  className="focus-outline"
                  title="Toggles light & dark"
                  aria-label={theme}
                  aria-live="polite"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? (
                    <Sun size={20} />
                  ) : (
                    <Moon size={20} />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}