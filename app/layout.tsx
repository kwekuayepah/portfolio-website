import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Footer from './components/Footer'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-ibm-plex-mono'
})

export const metadata: Metadata = {
  title: 'The Kweku Ayepah',
  description: 'A place for developers to have a great time while learning about backend development, microservices, and scalable systems.',
  keywords: 'backend engineer, software engineer, microservices, cloud architecture, TypeScript, Node.js, Python',
  authors: [{ name: 'Kweku Ayepah' }],
  openGraph: {
    title: 'Kweku Ayepah | Welcome, Developer',
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
      <body className={`${ibmPlexMono.variable} font-mono antialiased bg-skin-fill text-skin-base transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
