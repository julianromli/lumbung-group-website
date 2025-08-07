'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Subsidiary {
  id: string
  name: string
  fullName: string
  logo: string
  description: string
  services: string[]
}

const subsidiaries: Subsidiary[] = [
  {
    id: 'lji',
    name: 'LJI',
    fullName: 'PT. Lumbung Jaya Internasional',
    logo: '/images/logos/logo-lji.png',
    description: 'Established in 2018, we are a specialized transportation company with IUP-OPK license for coal transportation and sales, serving diverse cargo needs across Indonesia.',
    services: ['Coal Transportation', 'Salt Transportation', 'Corn Transportation', 'Sand Transportation', 'General Cargo & Others']
  },
  {
    id: 'let',
    name: 'LET',
    fullName: 'PT. Lumbung Energi Trading',
    logo: '/images/logos/logo-let.png',
    description: 'An integral part of Lumbung Group focusing on energy industry in Indonesia. We specialize in coal trading and mining products, legally recognized by Ministry of Energy and Mineral Resources through IUP-OPK license obtained in 2021.',
    services: ['Coal Sales', 'Mining Products Trading', 'Energy Consulting', 'Market Analysis']
  },
  {
    id: 'lti',
    name: 'LTI',
    fullName: 'PT. Lumbung Technologies Indonesia',
    logo: '/images/logos/logo-lti.png',
    description: 'Leading technology company providing innovative IT solutions and renewable solar energy systems to drive digital transformation and sustainable energy adoption.',
    services: ['Software Development', 'Solar Energy Systems', 'IT Consulting', 'Digital Transformation']
  },
  {
    id: 'lsa',
    name: 'LSA',
    fullName: 'PT. Lumbung Sukses Agro',
    logo: '/images/logos/logo-lsa.png',
    description: 'Pioneering sustainable agricultural energy solutions that empower modern farming practices through innovative technology and renewable energy systems.',
    services: ['Agricultural Energy Solutions', 'Smart Farming Technology', 'Renewable Energy Systems', 'Agro Technology Innovation']
  },
  {
    id: 'lth',
    name: 'LTH',
    fullName: 'PT. Lumbung Tour Haramain',
    logo: '/images/logos/logo-lth2.png',
    description: 'Premium travel agency specializing in Umrah pilgrimage services and comprehensive travel solutions, committed to providing exceptional spiritual journey experiences.',
    services: ['Umrah Packages', 'Pilgrimage Tours', 'Travel Consulting', 'Spiritual Journey Services']
  }
]

const Subsidiaries = () => {
  const [activeTab, setActiveTab] = useState('lji')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const activeSubsidiary = subsidiaries.find(sub => sub.id === activeTab)

  return (
    <section id="services" className="py-20 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="typography-heading text-foreground mb-4">
            Our Subsidiary Companies
          </h2>
          <p className="typography-body text-foreground/70 max-w-2xl mx-auto">
            Five specialized companies working in synergy to deliver comprehensive solutions across multiple industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-muted">
            {subsidiaries.map((subsidiary) => (
              <Button
                key={subsidiary.id}
                onClick={() => setActiveTab(subsidiary.id)}
                variant={activeTab === subsidiary.id ? "default" : "ghost"}
                className={`flex-1 min-w-0 px-4 py-4 transition-all duration-300 relative overflow-hidden rounded-lg ${
                  activeTab === subsidiary.id
                    ? 'bg-brand shadow-lg transform scale-105'
                    : 'bg-white hover:bg-gray-50 hover:shadow-md border border-gray-200'
                }`}
              >
                {activeTab === subsidiary.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent animate-pulse" />
                )}
                <div className="flex justify-center items-center relative z-10">
                  <div className="w-20 h-20 relative">
                  <Image
                    src={subsidiary.logo}
                    alt={`${subsidiary.name} Logo`}
                    fill
                    className={`object-contain transition-all duration-300 ${
                       activeSubsidiary?.id === subsidiary.id
                         ? 'brightness-0 invert' 
                         : ''
                     }`}
                  />
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeSubsidiary && (
              <motion.div
                key={activeSubsidiary.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <h3 className="typography-subheading text-foreground mb-2">
                      {activeSubsidiary.fullName}
                    </h3>
                  </div>
                  <p className="typography-body text-foreground/70 mb-6">
                    {activeSubsidiary.description}
                  </p>
                  <div>
                    <h4 className="typography-button text-foreground mb-3">Key Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {activeSubsidiary.services.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center typography-caption text-foreground/70"
                        >
                          <div className="w-2 h-2 bg-brand rounded-full mr-2"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg overflow-hidden">
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src="https://images.unsplash.com/photo-1752867494500-9ea9322f58c9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`${activeSubsidiary.name} Office`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Subsidiaries