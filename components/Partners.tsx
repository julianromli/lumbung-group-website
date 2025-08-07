'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/magicui/marquee'

interface Partner {
  id: string
  name: string
  logo: string
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Google',
    logo: 'https://logo.svgcdn.com/l/google.svg'
  },
  {
    id: '2',
    name: 'Microsoft',
    logo: 'https://logo.svgcdn.com/l/microsoft-windows.svg'
  },
  {
    id: '3',
    name: 'Intel',
    logo: 'https://logo.svgcdn.com/l/intel.svg'
  },
  {
    id: '4',
    name: 'NVIDIA',
    logo: 'https://logo.svgcdn.com/l/nvidia.svg'
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
        >
          <Marquee pauseOnHover={true} className="[--duration:20s]">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-6 transition-shadow duration-300 group mx-4"
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
              </div>
            ))}
          </Marquee>
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