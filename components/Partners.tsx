'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Partner {
  id: string
  name: string
  logo: string
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '3',
    name: 'Amazon',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '4',
    name: 'Tesla',
    logo: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '5',
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '6',
    name: 'Samsung',
    logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '7',
    name: 'IBM',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '8',
    name: 'Oracle',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
]

const Partners = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="typography-heading text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="typography-body text-foreground/70 max-w-2xl mx-auto">
            We are proud to partner with leading organizations across various industries, building lasting relationships based on trust and mutual success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative w-32 h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-background rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="typography-subheading text-foreground mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="typography-body text-foreground/70 mb-6">
              Join our network of successful partners and discover how we can create synergies that drive mutual growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="typography-button bg-brand text-brand-foreground px-8 py-3 rounded-lg hover:bg-brand/90 transition-colors duration-200">
                Become a Partner
              </Button>
              <Button variant="outline" className="typography-button border-2 border-brand text-brand px-8 py-3 rounded-lg hover:bg-brand hover:text-brand-foreground transition-colors duration-200">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners