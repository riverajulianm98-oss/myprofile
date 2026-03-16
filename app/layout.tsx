import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppFloatingButton from './components/CartDrawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio de Julián Rivera',
  description: 'Portfolio profesional para promocionar proyectos a clientes y empleadores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
