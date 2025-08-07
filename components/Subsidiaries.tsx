'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building2, Calendar, MapPin } from 'lucide-react'

interface Subsidiary {
  id: string
  name: string
  fullName: string
  logo: string
  image: string
  description: string
  services: string[]
  industry: string
  established: string
  location: string
  seoKeywords: string[]
  primaryColor: string
}

const subsidiaries: Subsidiary[] = [
  {
    id: 'lji',
    name: 'LJI',
    fullName: 'PT. Lumbung Jaya Internasional',
    logo: '/images/logos/logo-lji.png',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20coal%20transportation%20ships%20and%20logistics%20fleet%20in%20Indonesian%20waters%2C%20professional%20maritime%20operations%2C%20blue%20ocean%20background%2C%20industrial%20photography%20style&image_size=landscape_4_3',
    description: "Indonesia's premier coal transportation company established in 2018, holding official IUP-OPK license for coal transportation and sales. We provide comprehensive logistics solutions serving diverse cargo transportation needs across Indonesian archipelago with modern fleet and professional expertise.",
    services: ['Coal Transportation & Logistics', 'Salt Transportation Services', 'Corn & Agricultural Products Transport', 'Sand & Construction Materials', 'General Cargo & Freight Services'],
    industry: 'Transportation & Logistics',
    established: 'Est. 2018',
    location: 'Indonesia',
    seoKeywords: ['coal transportation Indonesia', 'logistics services', 'cargo transport', 'IUP-OPK license', 'Indonesian freight'],
    primaryColor: 'blue'
  },
  {
    id: 'let',
    name: 'LET',
    fullName: 'PT. Lumbung Energi Trading',
    logo: '/images/logos/logo-let.png',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=energy%20trading%20operations%20with%20coal%20mining%20facilities%2C%20industrial%20energy%20infrastructure%2C%20modern%20mining%20equipment%2C%20professional%20business%20atmosphere%2C%20blue%20and%20gray%20tones&image_size=landscape_4_3',
    description: 'Leading energy trading company and integral part of Lumbung Group, specializing in coal trading and mining products across Indonesia. Legally recognized by Ministry of Energy and Mineral Resources with official IUP-OPK license obtained in 2021, ensuring compliance and quality in energy sector operations.',
    services: ['Coal Sales & Distribution', 'Mining Products Trading', 'Energy Market Consulting', 'Commodity Market Analysis'],
    industry: 'Energy Trading',
    established: 'Est. 2021',
    location: 'Indonesia',
    seoKeywords: ['coal trading Indonesia', 'energy trading', 'mining products', 'commodity trading', 'energy consulting'],
    primaryColor: 'slate'
  },
  {
    id: 'lti',
    name: 'LTI',
    fullName: 'PT. Lumbung Technologies Indonesia',
    logo: '/images/logos/logo-lti.png',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20technology%20office%20with%20solar%20panels%20and%20IT%20infrastructure%2C%20software%20development%20workspace%2C%20renewable%20energy%20systems%2C%20clean%20blue%20and%20white%20design&image_size=landscape_4_3',
    description: 'Leading Indonesian technology company providing innovative IT solutions and renewable solar energy systems. We drive digital transformation and sustainable energy adoption through cutting-edge software development, solar installations, and comprehensive technology consulting services.',
    services: ['Custom Software Development', 'Solar Energy Systems Installation', 'IT Infrastructure Consulting', 'Digital Transformation Solutions'],
    industry: 'Technology & Renewable Energy',
    established: 'Est. 2020',
    location: 'Indonesia',
    seoKeywords: ['software development Indonesia', 'solar energy systems', 'IT consulting', 'digital transformation', 'renewable energy'],
    primaryColor: 'blue'
  },
  {
    id: 'lsa',
    name: 'LSA',
    fullName: 'PT. Lumbung Sukses Agro',
    logo: '/images/logos/logo-lsa.png',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20farming%20technology%20with%20solar%20panels%20in%20agricultural%20fields%2C%20modern%20agro%20technology%20systems%2C%20sustainable%20agriculture%2C%20green%20and%20blue%20color%20scheme&image_size=landscape_4_3',
    description: 'Pioneering sustainable agricultural energy solutions company that empowers modern farming practices through innovative agro-technology and renewable energy systems. We specialize in smart farming solutions that enhance agricultural productivity while promoting environmental sustainability.',
    services: ['Agricultural Energy Solutions', 'Smart Farming Technology Systems', 'Renewable Energy for Agriculture', 'Agro Technology Innovation'],
    industry: 'Agricultural Technology',
    established: 'Est. 2019',
    location: 'Indonesia',
    seoKeywords: ['agricultural technology', 'smart farming Indonesia', 'agro energy solutions', 'sustainable agriculture', 'farming innovation'],
    primaryColor: 'emerald'
  },
  {
    id: 'lth',
    name: 'LTH',
    fullName: 'PT. Lumbung Tour Haramain',
    logo: '/images/logos/logo-lth2.png',
    image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Islamic%20pilgrimage%20travel%20with%20Kaaba%20and%20modern%20travel%20services%2C%20spiritual%20journey%20atmosphere%2C%20professional%20travel%20agency%20setting%2C%20blue%20and%20white%20tones&image_size=landscape_4_3',
    description: 'Premium Indonesian travel agency specializing in Umrah pilgrimage services and comprehensive Islamic travel solutions. We are committed to providing exceptional spiritual journey experiences with professional guidance, comfortable accommodations, and complete travel arrangements for pilgrims.',
    services: ['Umrah Pilgrimage Packages', 'Islamic Pilgrimage Tours', 'Religious Travel Consulting', 'Spiritual Journey Services'],
    industry: 'Travel & Tourism',
    established: 'Est. 2017',
    location: 'Indonesia',
    seoKeywords: ['Umrah travel Indonesia', 'pilgrimage tours', 'Islamic travel', 'religious tourism', 'spiritual journey'],
    primaryColor: 'indigo'
  }
]

export default function Subsidiaries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'text-blue-600'
      },
      slate: {
        badge: 'bg-slate-100 text-slate-800 border-slate-200',
        button: 'bg-slate-600 hover:bg-slate-700',
        accent: 'text-slate-600'
      },
      emerald: {
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        accent: 'text-emerald-600'
      },
      indigo: {
        badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        button: 'bg-indigo-600 hover:bg-indigo-700',
        accent: 'text-indigo-600'
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-20 bg-background from-gray-50 via-blue-50 to-slate-100" ref={ref} itemScope itemType="https://schema.org/Organization">

      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" itemProp="name">
            Our Subsidiaries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" itemProp="description">
            Discover our diverse portfolio of companies, each specializing in different industries 
            and contributing to Indonesia's economic growth through innovative solutions and professional services.
          </p>
        </motion.header>

        {/* Subsidiaries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {subsidiaries.map((subsidiary, index) => {
            const colors = getColorClasses(subsidiary.primaryColor)
            
            return (
              <motion.article
                key={subsidiary.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                itemScope
                itemType="https://schema.org/Organization"
              >
                <Card className="group h-full overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  {/* Company Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={subsidiary.image}
                      alt={`${subsidiary.fullName} operations`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Logo Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <Image
                          src={subsidiary.logo}
                          alt={`${subsidiary.fullName} logo`}
                          width={80}
                          height={40}
                          className="h-8 w-auto object-contain"
                          itemProp="logo"
                        />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Company Info Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className={`${colors.badge} text-xs font-medium`}>
                          <Building2 className="w-3 h-3 mr-1" />
                          {subsidiary.industry}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {subsidiary.established}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {subsidiary.location}
                        </Badge>
                      </div>
                      
                      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors" itemProp="name">
                        {subsidiary.fullName}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3" itemProp="description">
                      {subsidiary.description}
                    </p>

                    {/* Key Services */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Services</h3>
                      <div className="space-y-2">
                        {subsidiary.services.slice(0, 3).map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                            <div className={`w-2 h-2 rounded-full mr-3 ${colors.accent.replace('text-', 'bg-')}`}></div>
                            <span className="line-clamp-1">{service}</span>
                          </div>
                        ))}
                        {subsidiary.services.length > 3 && (
                          <div className="text-xs text-gray-500 mt-2">
                            +{subsidiary.services.length - 3} more services
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className={`${colors.button} text-white flex-1 group/btn`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-gray-200 text-gray-700 hover:bg-gray-50"
                      >
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            )
          })}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  )
}