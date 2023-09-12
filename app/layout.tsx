import SupabaseProvider from '@/providers/SupabaseProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import ModalProvider from '@/providers/ModalProvider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'

const sans = Open_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Worse discord',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <ClerkProvider>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <ModalProvider />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
