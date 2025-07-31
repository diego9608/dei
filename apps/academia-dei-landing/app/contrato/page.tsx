'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  FileText, CheckCircle, AlertCircle, Calendar,
  DollarSign, Shield, Clock, Users, Zap, Target, Download
} from 'lucide-react'
import Link from 'next/link'

export default function Contrato() {
  const ref = useRef(null)
  const clientCanvasRef = useRef<HTMLCanvasElement>(null)
  const consultantCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawingClient, setIsDrawingClient] = useState(false)
  const [isDrawingConsultant, setIsDrawingConsultant] = useState(false)
  const [clientSignature, setClientSignature] = useState<string>('')
  const [consultantSignature, setConsultantSignature] = useState<string>('')

  useEffect(() => {
    const setupCanvas = (canvas: HTMLCanvasElement) => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.strokeStyle = '#1a1a1a'
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
      }
    }

    if (clientCanvasRef.current) setupCanvas(clientCanvasRef.current)
    if (consultantCanvasRef.current) setupCanvas(consultantCanvasRef.current)
  }, [])

  const startDrawing = (canvas: HTMLCanvasElement, isClient: boolean) => {
    if (isClient) {
      setIsDrawingClient(true)
    } else {
      setIsDrawingConsultant(true)
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>, canvas: HTMLCanvasElement, isClient: boolean) => {
    if ((!isClient && !isDrawingConsultant) || (isClient && !isDrawingClient)) return
    
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
      ctx.lineTo(x, y)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
    }
  }

  const stopDrawing = (canvas: HTMLCanvasElement, isClient: boolean) => {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.beginPath()
    }
    
    if (isClient) {
      setIsDrawingClient(false)
      setClientSignature(canvas.toDataURL())
    } else {
      setIsDrawingConsultant(false)
      setConsultantSignature(canvas.toDataURL())
    }
  }

  const clearSignature = (isClient: boolean) => {
    const canvas = isClient ? clientCanvasRef.current : consultantCanvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      if (isClient) {
        setClientSignature('')
      } else {
        setConsultantSignature('')
      }
    }
  }
  
  const handleDownloadContract = () => {
    // Crear contenido HTML del contrato
    const contractContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Acuerdo de Transformación Digital - Academia Dei</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; }
          h1 { color: #1a1a1a; text-align: center; }
          h2 { color: #1a1a1a; margin-top: 30px; }
          h3 { color: #333; }
          .header { text-align: center; margin-bottom: 40px; }
          .section { margin-bottom: 30px; }
          .terms { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .signature { display: flex; justify-content: space-between; margin-top: 60px; }
          .signature-box { width: 45%; text-align: center; }
          .signature-line { border-bottom: 2px solid #333; margin-bottom: 10px; height: 40px; }
          ul { padding-left: 20px; }
          .highlight { background-color: #fffacd; padding: 2px 4px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>ACUERDO DE TRANSFORMACIÓN DIGITAL</h1>
          <p><strong>Academia de Música Dei + Diego Villarreal | Alear Transformación Digital</strong></p>
          <p>Fecha: ${new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div class="section">
          <h2>1. OBJETIVO DEL ACUERDO</h2>
          <p>Transformar la Academia de Música Dei de una ocupación del 35% a un mínimo del 70% en 90 días, implementando sistemas de automatización, marketing digital y procesos optimizados que generen un crecimiento sostenible.</p>
        </div>
        
        <div class="section">
          <h2>2. INVERSIÓN Y ESTRUCTURA DE PAGOS</h2>
          <div class="terms">
            <ul>
              <li>Retainer mensual: <strong>$25,000 MXN + IVA</strong></li>
              <li>Publicidad Google Ads: <strong>$10,000 MXN/mes</strong></li>
              <li>Publicidad Meta Ads: <strong>$15,000 MXN/mes</strong></li>
              <li>Total mensual: <strong class="highlight">$50,000 MXN + IVA</strong></li>
              <li>Periodo mínimo de prueba: <strong>90 días</strong></li>
              <li>Pago por adelantado cada mes</li>
              <li>Opción sin factura: <strong>$50,000 MXN (sin IVA)</strong></li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>3. SERVICIOS INCLUIDOS</h2>
          <ul>
            <li>✓ Auditoría inicial y diagnóstico de ocupación</li>
            <li>✓ Diseño de estrategia de crecimiento personalizada</li>
            <li>✓ Implementación de sistema de automatización</li>
            <li>✓ Configuración de CRM y WhatsApp Business</li>
            <li>✓ Creación de landing page y presencia digital</li>
            <li>✓ Capacitación del personal en nuevos procesos</li>
            <li>✓ Seguimiento semanal y ajustes de estrategia</li>
            <li>✓ Reportes mensuales de métricas y ROI</li>
            <li>✓ Publicidad digital: $10,000 Google Ads + $15,000 Meta Ads</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>4. GARANTÍA DE RESULTADOS</h2>
          <div class="terms">
            <p><strong>Si no se recupera la inversión en nuevos alumnos durante los primeros 90 días, continuamos trabajando sin cobrar retainer hasta lograr el ROI.</strong></p>
            <ul>
              <li>Solo aplica si se implementan todas las estrategias acordadas</li>
              <li>La garantía aplica al retainer de $25,000, no a la inversión publicitaria</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>5. COMPROMISOS DEL CLIENTE</h2>
          <ul>
            <li>Asignar un punto de contacto dedicado</li>
            <li>Implementar las estrategias recomendadas</li>
            <li>Proporcionar acceso a métricas y sistemas</li>
            <li>Aprobar creativos y estrategias de publicidad oportunamente</li>
          </ul>
        </div>
        
        <div class="signature">
          <div class="signature-box">
            <div class="signature-line">${clientSignature ? `<img src="${clientSignature}" style="max-height: 60px; margin: 10px auto; display: block;" />` : ''}</div>
            <p><strong>Alonso González</strong><br>
            Director General<br>
            Academia de Música Dei</p>
          </div>
          <div class="signature-box">
            <div class="signature-line">${consultantSignature ? `<img src="${consultantSignature}" style="max-height: 60px; margin: 10px auto; display: block;" />` : ''}</div>
            <p><strong>Diego Villarreal</strong><br>
            Consultor Estratégico<br>
            Alear Transformación Digital</p>
          </div>
        </div>
      </body>
      </html>
    `
    
    // Crear blob y descargar
    const blob = new Blob([contractContent], { type: 'text/html' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `Contrato_Academia_Dei_${new Date().toISOString().split('T')[0]}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    
    // Después de descargar, abrir WhatsApp
    setTimeout(() => {
      window.open('https://wa.me/436765748509?text=He%20descargado%20y%20revisado%20el%20contrato.%20Estoy%20listo%20para%20proceder.', '_blank')
    }, 1000)
  }

  const servicios = [
    { item: "Auditoría inicial y diagnóstico de ocupación", included: true },
    { item: "Diseño de estrategia de crecimiento personalizada", included: true },
    { item: "Implementación de sistema de automatización", included: true },
    { item: "Configuración de CRM y WhatsApp Business", included: true },
    { item: "Creación de landing page y presencia digital", included: true },
    { item: "Capacitación del personal en nuevos procesos", included: true },
    { item: "Seguimiento semanal y ajustes de estrategia", included: true },
    { item: "Reportes mensuales de métricas y ROI", included: true },
    { item: "Publicidad digital: $10,000 Google Ads + $15,000 Meta Ads", included: true },
    { item: "Contratación de personal adicional", included: false },
    { item: "Remodelación física de instalaciones", included: false },
    { item: "Licencias de software de terceros", included: false },
  ]

  const timeline = [
    { week: "Semana 1-2", tasks: "Auditoría completa + Setup inicial" },
    { week: "Semana 3-4", tasks: "Implementación de automatizaciones" },
    { week: "Mes 2", tasks: "Optimización y primeros resultados" },
    { week: "Mes 3", tasks: "Escalamiento y evaluación de ROI" },
  ]

  const terminos = [
    {
      titulo: "Inversión y Pagos",
      items: [
        "Retainer mensual: $25,000 MXN + IVA",
        "Publicidad Google Ads: $10,000 MXN/mes",
        "Publicidad Meta Ads: $15,000 MXN/mes", 
        "Total mensual: $50,000 MXN + IVA",
        "Periodo mínimo de prueba: 90 días",
        "Pago por adelantado cada mes",
        "Opción sin factura: $50,000 MXN (sin IVA)"
      ]
    },
    {
      titulo: "Garantía de Resultados",
      items: [
        "Si no se recupera la inversión en nuevos alumnos durante los primeros 90 días",
        "Continuamos trabajando sin cobrar retainer hasta lograr el ROI",
        "Solo aplica si se implementan todas las estrategias acordadas",
        "La garantía aplica al retainer de $25,000, no a la inversión publicitaria"
      ]
    },
    {
      titulo: "Compromisos del Cliente",
      items: [
        "Asignar un punto de contacto dedicado",
        "Implementar las estrategias recomendadas",
        "Proporcionar acceso a métricas y sistemas",
        "Aprobar creativos y estrategias de publicidad oportunamente"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-dei-dark text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FileText className="w-16 h-16 text-dei-gold mx-auto mb-6" />
            <h1 className="heading-1 mb-4">
              Acuerdo de Transformación Digital
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academia de Música Dei + Diego Villarreal | Alear Transformación Digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Objetivo del Acuerdo
              </h2>
              <p className="text-lg text-dei-gray mb-4">
                Transformar la Academia de Música Dei de una ocupación del 35% a un mínimo 
                del 70% en 90 días, implementando sistemas de automatización, marketing digital 
                y procesos optimizados que generen un crecimiento sostenible.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Target className="w-12 h-12 text-dei-gold mx-auto mb-2" />
                  <p className="font-bold text-2xl text-dei-dark">70%</p>
                  <p className="text-sm text-dei-gray">Ocupación objetivo</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-dei-gold mx-auto mb-2" />
                  <p className="font-bold text-2xl text-dei-dark">90 días</p>
                  <p className="text-sm text-dei-gray">Periodo de prueba</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-dei-gold mx-auto mb-2" />
                  <p className="font-bold text-2xl text-dei-dark">$50,000</p>
                  <p className="text-sm text-dei-gray">Inversión mensual</p>
                </div>
              </div>
            </div>

            {/* Servicios Incluidos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Alcance de Servicios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {servicios.map((servicio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start space-x-3 p-4 rounded-lg ${
                      servicio.included ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    {servicio.included ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${
                      servicio.included ? 'text-gray-800' : 'text-gray-600'
                    }`}>
                      {servicio.item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Cronograma de Implementación
              </h2>
              <div className="space-y-4">
                {timeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-dei-gold/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-dei-gold" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-dei-dark">{phase.week}</p>
                      <p className="text-dei-gray">{phase.tasks}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Términos y Condiciones */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6">
                Términos y Condiciones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {terminos.map((seccion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md"
                  >
                    <h3 className="font-bold text-lg text-dei-dark mb-4">
                      {seccion.titulo}
                    </h3>
                    <ul className="space-y-2">
                      {seccion.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-dei-gray flex items-start">
                          <span className="text-dei-gold mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Firmas */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dei-dark mb-8 text-center">
                Aceptación del Acuerdo
              </h2>
              <div className="flex">
                <div className="flex-1 text-center border-r border-gray-300">
                  <p className="text-sm text-dei-gray mb-2">Firma del Cliente</p>
                  <div className="relative mx-4 mb-4">
                    <canvas
                      ref={clientCanvasRef}
                      className="w-full h-32 border-2 border-gray-300 rounded cursor-crosshair bg-white"
                      onMouseDown={(e) => startDrawing(e.currentTarget, true)}
                      onMouseMove={(e) => draw(e, e.currentTarget, true)}
                      onMouseUp={(e) => stopDrawing(e.currentTarget, true)}
                      onMouseLeave={(e) => stopDrawing(e.currentTarget, true)}
                    />
                    <button
                      onClick={() => clearSignature(true)}
                      className="absolute top-2 right-2 text-xs text-gray-500 hover:text-gray-700"
                    >
                      Limpiar
                    </button>
                  </div>
                  <p className="font-semibold text-dei-dark">Alonso González</p>
                  <p className="text-sm text-dei-gray">Director General</p>
                  <p className="text-sm text-dei-gray">Academia de Música Dei</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-sm text-dei-gray mb-2">Firma del Consultor</p>
                  <div className="relative mx-4 mb-4">
                    <canvas
                      ref={consultantCanvasRef}
                      className="w-full h-32 border-2 border-gray-300 rounded cursor-crosshair bg-white"
                      onMouseDown={(e) => startDrawing(e.currentTarget, false)}
                      onMouseMove={(e) => draw(e, e.currentTarget, false)}
                      onMouseUp={(e) => stopDrawing(e.currentTarget, false)}
                      onMouseLeave={(e) => stopDrawing(e.currentTarget, false)}
                    />
                    <button
                      onClick={() => clearSignature(false)}
                      className="absolute top-2 right-2 text-xs text-gray-500 hover:text-gray-700"
                    >
                      Limpiar
                    </button>
                  </div>
                  <p className="font-semibold text-dei-dark">Diego Villarreal</p>
                  <p className="text-sm text-dei-gray">Consultor Estratégico</p>
                  <p className="text-sm text-dei-gray">Alear Transformación Digital</p>
                </div>
              </div>
              <p className="text-center text-sm text-dei-gray mt-8">
                Fecha: {new Date().toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-12 text-center">
              <div className="flex justify-center">
                <button
                  onClick={handleDownloadContract}
                  className="btn-primary inline-flex items-center px-12 py-4"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Acepto los términos
                </button>
              </div>
              <p className="text-sm text-dei-gray mt-6">
                ¿Preguntas? Llama directo: 81 1743 7991
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}