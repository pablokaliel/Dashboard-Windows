import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import FooterComponent from './components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Win11',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <>
      <body className={openSans.className}>{children}</body>
      <FooterComponent/>
      </>
    </html>
  )
}
