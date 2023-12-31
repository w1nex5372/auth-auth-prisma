import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ButtonProvider } from '@/context/ButtonContext'
import Provider from '@/context/provider'
import { NavMenuProvider } from '@/context/NavMenuContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any; // Make session optional
}) {
  return (
    <html lang="en">
      <Provider session={session}>
        <NavMenuProvider>
     
 
        <ButtonProvider>
          <body className={inter.className}>{children}</body>
        </ButtonProvider>
     

      </NavMenuProvider>
      </Provider>
    </html>
  );
}
