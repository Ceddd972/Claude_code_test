import type { Metadata, Viewport } from 'next'
import { Geist, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Coach Alex Rivera | Elite Fitness Transformation',
  description: 'Transform your physique with personalized elite fitness coaching. 500+ professionals transformed. Results or refund guaranteed.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
