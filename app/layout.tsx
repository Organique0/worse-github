import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import ModalProvider from '@/providers/ModalProvider'
import { ThemeProvider } from '@/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import { SocketProvider } from '@/providers/SocketProvider'
import { QueryProvider } from '@/providers/QueryProvider'


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
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <SocketProvider>
            <ClerkProvider appearance={{ baseTheme: dark }}>
              <ModalProvider />
              <QueryProvider>
                {children}
              </QueryProvider>
            </ClerkProvider>
          </SocketProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
