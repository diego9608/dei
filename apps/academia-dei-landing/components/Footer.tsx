import { Instagram, Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-dei-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/assets/images/logo.png"
              alt="Academia de Música Dei"
              width={120}
              height={120}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400">
              Aprendemos a Entender, no a Memorizar
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#clases" className="hover:text-white transition-colors">Clases</a></li>
              <li><a href="#eventos" className="hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>81 1215 1125</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>alonso_gz@hotmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Pedro Garza García</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <a
              href="https://www.instagram.com/deiacademia/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@deiacademia</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Academia de Música Dei. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}