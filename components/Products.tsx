'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  title: string
  description: string
  image: string
  category: string
}

const products: Product[] = [
  {
    id: '1',
    title: 'Integrated Logistics Solutions',
    description: 'End-to-end supply chain management with real-time tracking and optimization for maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Logistics'
  },
  {
    id: '2',
    title: 'Solar Energy Systems',
    description: 'Cutting-edge photovoltaic solutions for residential, commercial, and industrial applications.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Energy'
  },
  {
    id: '3',
    title: 'Digital Transformation Platform',
    description: 'Comprehensive IT solutions to modernize business operations and enhance digital capabilities.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    category: 'Technology'
  },
  {
    id: '4',
    title: 'Energy Trading Platform',
    description: 'Advanced trading systems for energy commodities with market analysis and risk management.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Energy'
  },
  {
    id: '5',
    title: 'Smart Agriculture Solutions',
    description: 'IoT-enabled farming technologies for sustainable and efficient agricultural practices.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Agriculture'
  },
  {
    id: '6',
    title: 'Premium Travel Services',
    description: 'Luxury travel packages and spiritual pilgrimage services with personalized experiences.',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Travel'
  }
]

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-foreground mb-4">
            Our Innovative Products
          </h2>
          <p className="text-base font-normal leading-relaxed text-foreground/70 max-w-2xl mx-auto">
            Discover our comprehensive range of products and services designed to drive innovation and efficiency across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-brand text-brand-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-brand font-semibold hover:text-brand/80 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-brand text-brand-foreground px-8 py-3 rounded-lg hover:bg-brand/90 transition-colors duration-200 font-medium">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products