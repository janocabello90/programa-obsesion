import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ACTIVA - El programa de 4 meses para activar tu clínica (0–100K)',
  description: 'Programa de 4 meses para activar una clínica con dirección, margen y recurrencia. ACTIVA → OPTIMIZA → ESCALA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
