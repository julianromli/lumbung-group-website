'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const CtaVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const openVideo = () => {
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
  }

  return (
    <section className="py-20 bg-brand text-brand-foreground relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Office Background"
          fill
          className="object-cover opacity-20"
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6"
          >
            Driving Progress Through Synergy
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base font-normal leading-relaxed text-white/90 max-w-3xl mx-auto mb-12"
          >
            We believe in the power of collaboration and innovation. Our integrated approach across logistics, energy, technology, and travel creates synergies that drive sustainable growth and deliver exceptional value to our partners and communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={openVideo}
              className="group flex items-center justify-center w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Play company video"
            >
              <PlayIcon className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
            </button>
            
            <div className="text-center sm:text-left">
              <div className="text-lg font-semibold mb-1">Watch Our Story</div>
              <div className="text-sm text-white/80">Discover how we're shaping the future together</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-white/80">Subsidiary Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Satisfied Clients</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onClose={closeVideo} className="relative z-50">
        <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
              aria-label="Close video"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
            
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <div className="text-center text-white">
                <PlayIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Company Video</p>
                <p className="text-sm opacity-75 mt-2">Video content would be embedded here</p>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}

export default CtaVideo