import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Binx.Page',
    template: '%s | Binx.Page',
  },
  description: 'Personal website of Zac Bagley.',
  keywords: ['software engineer', 'web development', 'blog', 'tech', 'programming', 'Zac Bagley', 'portfolio'],
  openGraph: {
    title: 'Binx.Page',
    description: 'Personal website of Zac Bagley.',
    url: baseUrl,
    siteName: 'Binx.Page',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  }
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased flex flex-col mx-auto min-h-screen">
        <main className="flex-auto min-w-0 flex flex-col px-4 sm:px-8">
          <div className="mx-auto max-w-4xl w-full">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  )
}
