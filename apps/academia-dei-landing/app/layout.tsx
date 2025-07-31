import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Academia de Música Dei | Aprendemos a Entender, no a Memorizar',
  description: 'Descubre tu talento musical en la Academia de Música Dei. Clases de canto, guitarra, piano, violín, batería, saxofón y bajo en San Pedro Garza García.',
  keywords: 'academia de música, clases de música, San Pedro Garza García, canto, guitarra, piano, violín, batería, saxofón, bajo',
  openGraph: {
    title: 'Academia de Música Dei',
    description: 'Aprendemos a Entender, no a Memorizar',
    images: ['/assets/images/logo.png'],
    locale: 'es_MX',
    type: 'website',
  },
  icons: {
    icon: '/assets/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}