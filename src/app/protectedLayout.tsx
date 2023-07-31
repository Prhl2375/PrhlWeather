import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PrhlWeather',
  description: 'Weather by Prhl',

}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/img/logo.png" />
      </head>
      <body className={inter.className}>
        <main className="flex bg-white dark:bg-black min-h-screen justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
