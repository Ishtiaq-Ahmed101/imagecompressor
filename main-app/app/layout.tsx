import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from 'next/head' // Import the Head component
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata: Metadata = {
  title: 'Compress And Resize Images, imagecompressor for free',
  description: 'Compress and resize images easily with our online image compression and resizing tool. Reduce file sizes for faster loading web pages for free And you can also Resize the images for free. You can upload more than 100 images and compress images with just one click.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}