'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { 
  FileText, CheckCircle, AlertCircle, Calendar,
  DollarSign, Shield, Clock, Users, Zap, Target, Download,
  TrendingUp, Rocket
} from 'lucide-react'
import Link from 'next/link'

export default function Contrato2() {
  const ref = useRef(null)
  
  const handleDownloadContract = () => {
    // Crear contenido HTML del contrato
    const contractContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Acuerdo Estratégico Esencial - Academia Dei</title>
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
          .highlight { background-color: #90EE90; padding: 2px 6px; font-weight: bold; }
          .savings { background-color: #FFE4B5; padding: 10px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>ACUERDO ESTRATÉGICO ESENCIAL</h1>
          <p><strong>Academia de Música Dei + Diego Villarreal | Alear Transformación Digital</strong></p>
          <p>Fecha: ${new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div class="savings">
            <p><strong>OFERTA ESPECIAL: 50% de ahorro en consultoría</strong></p>
          </div>
        </div>
        
        <div class="section">
          <h2>1. OBJETIVO DEL ACUERDO</h2>
          <p>Implementar estrategia de crecimiento digital enfocada en resultados inmediatos, 
          llevando la academia del 35% al 60% de ocupación en 60 días mediante publicidad 
          digital agresiva y optimización de conversión.</p>
        </div>
        
        <div class="section">
          <h2>2. INVERSIÓN OPTIMIZADA</h2>
          <div class="terms">
            <ul>
              <li>Retainer estratégico: <strong class="highlight">$15,000 MXN + IVA</strong> (antes $25,000)</li>
              <li>Inversión directa en publicidad: <strong>$10,000 MXN/mes</strong></li>
              <li>Total mensual: <strong class="highlight">$25,000 MXN + IVA</strong></li>
              <li>Periodo de prueba: <strong>60 días</strong></li>
              <li>Opción sin factura: <strong>$25,000 MXN (sin IVA)</strong></li>
            </ul>
            <p><em>Nota: Los $10,000 de publicidad se administran directamente desde las cuentas 
            del cliente para máxima transparencia y control.</em></p>
          </div>
        </div>
        
        <div class="section">
          <h2>3. SERVICIOS INCLUIDOS</h2>
          <ul>
            <li>✓ Auditoría express y plan de acción inmediato</li>
            <li>✓ Configuración y optimización de campañas publicitarias</li>
            <li>✓ Landing page de alta conversión</li>
            <li>✓ Automatización básica de WhatsApp Business</li>
            <li>✓ Scripts de venta probados</li>
            <li>✓ Reportes semanales de resultados</li>
            <li>✓ Ajustes de campaña en tiempo real</li>
            <li>✓ Asesoría directa por WhatsApp</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>4. GARANTÍA DE RESULTADOS RÁPIDOS</h2>
          <div class="terms">
            <p><strong>Si no generas mínimo 20 leads calificados en los primeros 30 días, 
            el segundo mes es GRATIS.</strong></p>
            <ul>
              <li>Aplica solo al retainer de $15,000</li>
              <li>Requiere inversión mínima de $10,000 en publicidad</li>
              <li>Cliente debe responder leads en menos de 1 hora</li>
            </ul>
          </div>
        </div>
        
        <div class="section">
          <h2>5. COMPROMISOS SIMPLIFICADOS</h2>
          <ul>
            <li>Respuesta rápida a leads (máximo 1 hora)</li>
            <li>Aprobar creativos en 24 horas</li>
            <li>Acceso a cuentas publicitarias</li>
            <li>Una llamada semanal de 30 minutos</li>
          </ul>
        </div>
        
        <div class="section">
          <h2>6. TÉRMINOS FLEXIBLES</h2>
          <ul>
            <li>Sin contrato a largo plazo</li>
            <li>Cancelación con 15 días de aviso</li>
            <li>Posibilidad de upgrade al plan completo</li>
            <li>Todos los assets creados son propiedad del cliente</li>
          </ul>
        </div>
        
        <div class="signature">
          <div class="signature-box">
            <div class="signature-line"></div>
            <p><strong>Alonso González</strong><br>
            Director General<br>
            Academia de Música Dei</p>
          </div>
          <div class="signature-box">
            <div class="signature-line"></div>
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
    link.download = `Contrato_Esencial_Academia_Dei_${new Date().toISOString().split('T')[0]}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    
    // Después de descargar, abrir WhatsApp
    setTimeout(() => {
      window.open('https://wa.me/436765748509?text=Me%20interesa%20el%20plan%20esencial%20de%20$25,000.%20He%20descargado%20el%20contrato.', '_blank')
    }, 1000)
  }

  const servicios = [
    { item: "Auditoría express y plan de acción en 48 horas", included: true },
    { item: "Configuración completa de campañas publicitarias", included: true },
    { item: "Landing page optimizada para conversión", included: true },
    { item: "WhatsApp Business con respuestas automáticas", included: true },
    { item: "Scripts de venta y cierre probados", included: true },
    { item: "Reportes semanales con métricas clave", included: true },
    { item: "Soporte directo por WhatsApp", included: true },
    { item: "Garantía de 20 leads en 30 días", included: true },
    { item: "Sistema CRM complejo", included: false },
    { item: "Múltiples landing pages", included: false },
    { item: "Producción de video profesional", included: false },
    { item: "Email marketing avanzado", included: false },
  ]

  const beneficios = [
    {
      icon: TrendingUp,
      titulo: "50% menos inversión",
      descripcion: "Mismo objetivo con presupuesto optimizado"
    },
    {
      icon: Rocket,
      titulo: "Resultados en 30 días",
      descripcion: "Enfoque 100% en generación de leads"
    },
    {
      icon: Target,
      titulo: "Sin compromisos largos",
      descripcion: "Prueba 60 días, cancela cuando quieras"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-yellow-400 text-green-800 px-6 py-2 rounded-full font-bold mb-6">
              <Zap className="w-5 h-5 mr-2" />
              OFERTA ESPECIAL: 50% DESCUENTO
            </div>
            
            <h1 className="heading-1 mb-4">
              Plan Esencial de Crecimiento
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              La opción inteligente para empezar a crecer sin comprometer tu presupuesto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparación Visual */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Plan Premium */}
              <div className="bg-gray-100 rounded-2xl p-8 relative opacity-75">
                <div className="absolute -top-3 -right-3 bg-gray-400 text-white px-4 py-1 rounded-full text-sm">
                  Plan Premium
                </div>
                <h3 className="text-2xl font-bold text-gray-600 mb-4">Plan Completo</h3>
                <p className="text-4xl font-bold text-gray-500 mb-2">$50,000<span className="text-lg">/mes</span></p>
                <ul className="space-y-2 text-gray-600">
                  <li>• $25,000 consultoría</li>
                  <li>• $25,000 publicidad incluida</li>
                  <li>• 90 días mínimo</li>
                  <li>• Todo incluido</li>
                </ul>
              </div>

              {/* Plan Esencial */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 relative transform scale-105 shadow-xl">
                <div className="absolute -top-3 -right-3 bg-green-600 text-white px-4 py-1 rounded-full text-sm animate-pulse">
                  Recomendado
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Plan Esencial</h3>
                <p className="text-4xl font-bold text-green-700 mb-2">$25,000<span className="text-lg">/mes</span></p>
                <ul className="space-y-2 text-green-700">
                  <li className="font-semibold">• $15,000 consultoría (-40%)</li>
                  <li>• $10,000 publicidad directa</li>
                  <li>• 60 días prueba</li>
                  <li>• Resultados rápidos</li>
                </ul>
                <div className="mt-4 bg-yellow-300 text-yellow-900 px-4 py-2 rounded-lg text-center font-bold">
                  Ahorras $25,000 en 2 meses
                </div>
              </div>
            </div>

            {/* Beneficios clave */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <beneficio.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-dei-dark mb-2">{beneficio.titulo}</h3>
                  <p className="text-dei-gray">{beneficio.descripcion}</p>
                </motion.div>
              ))}
            </div>

            {/* Servicios */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6 text-center">
                ¿Qué incluye el Plan Esencial?
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
                      servicio.included ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    {servicio.included ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${
                      servicio.included ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {servicio.item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Garantía */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl p-8 text-center mb-12"
            >
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Garantía de Resultados Rápidos
              </h3>
              <p className="text-xl mb-2">
                20 leads calificados en 30 días o el segundo mes es
              </p>
              <p className="text-4xl font-bold text-yellow-400">GRATIS</p>
            </motion.div>

            {/* Timeline simplificado */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dei-dark mb-6 text-center">
                Inicio Inmediato
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { dia: "Día 1-2", tarea: "Auditoría y estrategia" },
                  { dia: "Día 3-5", tarea: "Landing y campañas" },
                  { dia: "Día 7", tarea: "Primeros leads llegando" },
                  { dia: "Día 30", tarea: "20+ leads garantizados" },
                ].map((fase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                  >
                    <p className="text-green-600 font-bold mb-2">{fase.dia}</p>
                    <p className="text-sm text-dei-gray">{fase.tarea}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 mb-8"
              >
                <p className="text-2xl font-bold text-dei-dark mb-4">
                  Empieza con solo $25,000/mes
                </p>
                <p className="text-lg text-dei-gray mb-6">
                  Sin compromisos a largo plazo • Cancela cuando quieras
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDownloadContract}
                    className="btn-primary bg-green-600 hover:bg-green-700 inline-flex items-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar contrato esencial
                  </button>
                  <Link
                    href="/contrato"
                    className="btn-secondary"
                  >
                    Ver plan completo
                  </Link>
                </div>
              </motion.div>
              
              <p className="text-sm text-dei-gray">
                ¿Preguntas? WhatsApp directo: +43 676 5748509
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}