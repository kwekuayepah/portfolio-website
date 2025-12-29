import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Source_Serif_4 } from 'next/font/google'
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

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kwekuayepah.com'),
  title: 'Kweku Ayepah',
  description: 'Software Engineer specializing in backend development, microservices, and scalable systems.',
  keywords: 'backend engineer, software engineer, microservices, cloud architecture, TypeScript, Node.js, Python, Kweku Ayepah',
  authors: [{ name: 'Kweku Ayepah' }],
  openGraph: {
    title: 'Kweku Ayepah',
    description: 'Software Engineer specializing in backend development, microservices, and scalable systems.',
    url: 'https://kwekuayepah.com',
    siteName: 'Kweku Ayepah',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
      <body className={`${dmMono.variable} ${dmSans.variable} ${sourceSerif.variable} font-mono antialiased bg-skin-fill text-skin-base transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
