import { Josefin_Sans } from 'next/font/google'
import ThemeProvider from './provider'
import './globals.css'

const josefin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" enableSystem>
        <body className={josefin.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
