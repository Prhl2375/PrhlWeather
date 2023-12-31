import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PrhlWeather',
  description: 'Weather by Prhl',

}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/img/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
