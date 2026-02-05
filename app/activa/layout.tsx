import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACTIVA - Programa de 4 meses para activar tu clínica (0–100K)',
  description: 'ACTIVA es el programa de 4 meses para dueños de clínicas 0–100K que quieren dirección, margen y sistemas reales. PNL → Estrategia → Implementación.',
  openGraph: {
    title: 'ACTIVA - Programa de 4 meses para activar tu clínica',
    description: 'Dirección, margen y sistemas reales para clínicas 0–100K',
    type: 'website',
  },
}

export default function ActivaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
