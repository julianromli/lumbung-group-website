'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="typography-heading text-gray-900"
              >
                About{' '}
                <span className="bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent">
                  Lumbung Group
                </span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-20 h-1 bg-gradient-to-r from-brand to-blue-400 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="typography-body text-gray-700"
            >
              Lumbung Group is a leading Indonesian conglomerate with a focus on various strategic business sectors. Committed to providing the best sustainable solutions, the group continues to innovate and evolve to meet the needs of a dynamic market.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="typography-body text-gray-700"
            >
              The group consists of four subsidiaries that operate in key sectors: logistics, energy, information technology, and travel services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-brand mb-2">4</div>
                <div className="typography-caption text-gray-600 font-medium">Subsidiaries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-brand mb-2">25+</div>
                <div className="typography-caption text-gray-600 font-medium">Years Experience</div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="typography-button bg-brand hover:bg-brand/90 text-brand-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&auto=format&fit=crop&w=1926&q=80"
                alt="Lumbung Group Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            {/* Card 1 - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-xl border border-gray-100 max-w-[160px] md:max-w-none"
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-brand to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="typography-caption font-semibold text-gray-900 truncate">Innovation Driven</div>
                  <div className="text-[10px] text-gray-600 truncate">Sustainable Solutions</div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-xl border border-gray-100 max-w-[160px] md:max-w-none"
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-brand to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="typography-caption font-semibold text-gray-900 truncate">Trusted Partner</div>
                  <div className="text-[10px] text-gray-600 truncate">Reliable Service</div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Top Center */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 md:-top-12 bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-xl border border-gray-100 max-w-[160px] md:max-w-none"
            >
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-brand to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="typography-caption font-semibold text-gray-900 truncate">Expert Team</div>
                  <div className="text-[10px] text-gray-600 truncate">Professional Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About