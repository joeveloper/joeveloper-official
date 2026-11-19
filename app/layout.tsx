import './globals.css'
import { Inter_Tight } from 'next/font/google'
import type { Metadata } from 'next'
const font = Inter_Tight({ subsets: ['latin'], display: 'swap' })
export const metadata: Metadata = {
  title: 'Joeveloper® — Digital Transformation / AI / Technology',
  description: 'We transform processes, products and possibilities through AI, software and digital expertise.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={font.className}>{children}</body></html>
}
