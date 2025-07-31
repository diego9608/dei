'use client'

import { useState, useEffect } from 'react'

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showIndicator, setShowIndicator] = useState(true)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    const handleKeyPress = async (e: KeyboardEvent) => {
      // Tecla F para fullscreen
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen()
        } else {
          await document.exitFullscreen()
        }
      }
      
      // ESC ya funciona por defecto para salir de fullscreen
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyPress)
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  // Ocultar indicador después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicator(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Indicador sutil en la esquina */}
      {!isFullscreen && showIndicator && (
        <div className="fixed bottom-4 right-4 z-50 text-xs text-gray-400 bg-white/80 backdrop-blur px-3 py-2 rounded-lg shadow-sm animate-fade-in">
          Presiona <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600 font-mono">F</kbd> para pantalla completa
        </div>
      )}
    </>
  )
}