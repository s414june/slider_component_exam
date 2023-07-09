import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://s414june.github.io/'),
  title: 'Best Seller Gaming PC',
  description: 'Best Seller Gaming PC-Prebuilt & Custom',
  openGraph:{
    images:process.env.BASE_PATH + '/images/pc/pc_1.webp'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
