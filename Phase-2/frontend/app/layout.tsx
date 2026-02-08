import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme'
import { ToastProvider } from '@/components/ui/Toast'
import Header from '@/components/layout/Header'
import PageTransition from '@/components/layout/PageTransition'

/**
 * T009: Configure Roboto font (Simple, Readable)
 * Weights 400 and 700 for good balance
 */
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Omtodo',
  description: 'A stunning, professional-grade todo application',
}

/**
 * T014: Root layout wrapping children with ThemeProvider
 * ThemeProvider manages theme detection, persistence, and class toggling
 * T077: ToastProvider for toast notifications
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider>
          <ToastProvider>
            <Header />
              <main>
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
