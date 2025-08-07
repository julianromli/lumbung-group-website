'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Indonesian Business District"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-4xl font-bold md:typography-heading-hero lg:typography-heading-hero text-white mb-6">
          <TextAnimate animation="slideUp" by="word" className="text-white">
            Building Indonesia&apos;s
          </TextAnimate>
          <span className="block">
            <TextAnimate animation="slideUp" delay={0.3} by="word" className="text-white">
              Future Together
            </TextAnimate>
          </span>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="typography-body text-white/90 mb-8 max-w-2xl mx-auto"
        >
          A leading Indonesian conglomerate powering progress across logistics, energy, technology, and travel services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="typography-button bg-brand hover:bg-brand/90 text-brand-foreground px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
          {/* <button className="typography-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/20">
            Our Services
          </button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
      </motion.div>
    </section>
  )
}

export default Hero