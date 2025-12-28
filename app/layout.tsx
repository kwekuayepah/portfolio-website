import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

export const metadata: Metadata = {
  title: 'Kweku Ayepah',
  description: 'A place for developers to have a great time while learning about backend development, microservices, and scalable systems.',
  keywords: 'backend engineer, software engineer, microservices, cloud architecture, TypeScript, Node.js, Python',
  authors: [{ name: 'Kweku Ayepah' }],
  openGraph: {
    title: 'Kweku Ayepah',
    description: 'A place for developers to have a great time while learning about backend development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })()
          `
        }} />
      </head>
      <body className={`${dmMono.variable} ${dmSans.variable} font-mono antialiased bg-skin-fill text-skin-base transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
