import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Classes from '@/components/Classes'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Classes />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}