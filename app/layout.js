import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vakati Nanda Vardhan | UI/UX Associate & Engineering Student',
  description: 'Portfolio of Vakati Nanda Vardhan - UI/UX Associate, Engineering Student specializing in Robotics, IoT, and User-Centered Design',
  keywords: 'UI/UX Designer, Engineering Student, Robotics, IoT, Web Developer, Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}