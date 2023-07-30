import 'styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToHomeButton from '@/components/BackToHomeButton';


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
        <div className="mx-auto  max-w-2xl px-8 bg-slate-100">
          <Header />
          {children}
          <BackToHomeButton />
          <Footer />
        </div>
      </body>
    </html>
  )
}
