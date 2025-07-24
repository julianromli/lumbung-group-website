import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Subsidiaries from '@/components/Subsidiaries'
import Products from '@/components/Products'
import CtaVideo from '@/components/CtaVideo'
import Partners from '@/components/Partners'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Header />
      <Hero />
      <About />
      <Subsidiaries />
      <Products />
      <CtaVideo />
      <Partners />
      <Gallery />
      <Footer />
    </main>
  )
}