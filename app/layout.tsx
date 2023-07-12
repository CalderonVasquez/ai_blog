import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'AI-Boosted Entrepreneur',
  description: 'We educate small businesses and solopreneurs on all aspects of Artificial Intelligence (AI).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {

  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
