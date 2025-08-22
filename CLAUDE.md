# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website for a Senior Backend Engineer built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The site features a minimalist design with smooth animations and dark/light theme support.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Prerequisites
- Node.js 18+
- npm or yarn

## Architecture

### Core Technologies
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom theme system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: IBM Plex Mono (Google Fonts)

### Theme System
The project uses a sophisticated theme system with CSS custom properties:
- Colors are defined using `skin-*` utility classes in `tailwind.config.js`
- Dark mode support via `class` strategy
- Theme persistence handled in `app/layout.tsx` with hydration-safe script

### File Structure
```
app/
├── components/           # Reusable UI components
│   ├── Breadcrumb.tsx   # Navigation breadcrumbs
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Site header with navigation
│   └── ThemeProvider.tsx # Theme context provider
├── about/page.tsx       # About page
├── posts/page.tsx       # Blog posts listing
├── projects/page.tsx    # Projects showcase
├── search/page.tsx      # Search functionality
├── tags/page.tsx        # Tag-based filtering
├── globals.css          # Global styles and CSS variables
├── layout.tsx           # Root layout with theme setup
└── page.tsx             # Homepage with hero and featured posts
```

### Styling Conventions
- Uses Tailwind's utility-first approach
- Custom color system with CSS variables for theme switching
- Consistent spacing and typography scale
- Custom animations defined in `tailwind.config.js`
- Font family: IBM Plex Mono for consistent monospace aesthetic

### Component Patterns
- TypeScript interfaces for data structures (e.g., `Post` interface in `page.tsx`)
- Functional components with proper typing
- Static data arrays for content (featured posts, etc.)
- Accessibility considerations with proper ARIA labels and semantic HTML

### Configuration Notes
- `@/*` path alias configured in `tsconfig.json` for cleaner imports
- Dark mode configured via Tailwind's `class` strategy
- Next.js configuration is minimal (default setup)
- Tailwind content paths include all relevant directories

### Key Features
- Server-side rendering with Next.js App Router
- Theme-aware color system
- Responsive design with mobile-first approach
- SEO optimized with proper metadata
- Performance optimized for 95+ Lighthouse scores