import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BackgroundElements from '@/components/BackgroundElements'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transformación Digital - Academia de Música',
  description: 'Sistema probado para llenar sus salones de 8am a 8pm como las academias centenarias',
  openGraph: {
    title: 'Transformación Digital - Academia de Música',
    description: 'Sistema probado para llenar sus salones de 8am a 8pm',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BackgroundElements />
        {children}
      </body>
    </html>
  )
}