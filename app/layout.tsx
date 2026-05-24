import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kenny Ji - AI & Finance Portfolio',
  description: 'Professional portfolio showcasing AI/ML projects and finance experience. Seeking opportunities in AI and finance.',
  keywords: ['AI', 'Machine Learning', 'Finance', 'Portfolio', 'Data Science'],
  authors: [{ name: 'Kenny Ji' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Kenny Ji - AI & Finance Portfolio',
    description: 'Professional portfolio showcasing AI/ML projects and finance experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06b6d4" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2306b6d4'>K</text></svg>" />
      </head>
      <body className="bg-dark text-slate-200">
        {children}
      </body>
    </html>
  )
}
