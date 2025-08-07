'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  description?: string
}

// Sample gallery data - replace with actual images
const galleryItems: GalleryItem[] = [
  // LJI Portfolio
  {
    id: '1',
    title: 'Coal Transportation Fleet',
    category: 'LJI',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    description: 'Modern coal transportation vehicles serving mining operations'
  },
  {
    id: '2',
    title: 'Logistics Operations',
    category: 'LJI',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    description: 'Efficient cargo handling and distribution services'
  },
  {
    id: '3',
    title: 'Port Operations',
    category: 'LJI',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
    description: 'Strategic port operations and cargo management'
  },
  
  // LET Portfolio
  {
    id: '4',
    title: 'Coal Mining Site',
    category: 'LET',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
    description: 'Sustainable coal mining operations'
  },
  {
    id: '5',
    title: 'Energy Trading Center',
    category: 'LET',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Advanced energy trading and market analysis'
  },
  
  // LTI Portfolio
  {
    id: '6',
    title: 'Solar Panel Installation',
    category: 'LTI',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    description: 'Renewable solar energy system implementation'
  },
  {
    id: '7',
    title: 'Smart Technology Solutions',
    category: 'LTI',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    description: 'Innovative IT solutions and digital transformation'
  },
  
  // LSA Portfolio
  {
    id: '8',
    title: 'Smart Farming Technology',
    category: 'LSA',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    description: 'Advanced agricultural technology solutions'
  },
  {
    id: '9',
    title: 'Agricultural Energy Systems',
    category: 'LSA',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    description: 'Sustainable energy solutions for modern farming'
  },
  
  // LTH Portfolio
  {
    id: '10',
    title: 'Umrah Pilgrimage Services',
    category: 'LTH',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
    description: 'Premium spiritual journey experiences'
  },
  {
    id: '11',
    title: 'Travel Consultation',
    category: 'LTH',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    description: 'Comprehensive travel planning and consultation'
  },
  
  // Event Portfolio
  {
    id: '12',
    title: 'Corporate Event 2024',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    description: 'Annual corporate gathering and networking event'
  },
  {
    id: '13',
    title: 'Industry Conference',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'Leading industry conference and knowledge sharing'
  },
  {
    id: '14',
    title: 'Team Building Activity',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    description: 'Company team building and collaboration activities'
  }
]

const categories = ['All', 'LJI', 'LET', 'LTI', 'LSA', 'LTH', 'Event']

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="gallery" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="typography-heading text-foreground mb-4">
            Company Gallery
          </h2>
          <p className="typography-body text-foreground/70 max-w-2xl mx-auto">
            Explore our portfolio and documentation showcasing our achievements across all subsidiary companies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "secondary"}
              className={`typography-button px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand text-brand-foreground shadow-lg transform scale-105'
                  : 'bg-muted text-foreground hover:bg-muted/80 hover:shadow-md'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid with Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Scroll Buttons */}
          <Button
            onClick={() => scroll('left')}
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand text-brand-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={() => scroll('right')}
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand text-brand-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="typography-caption inline-block bg-brand px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="typography-subheading">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-background rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={() => setSelectedImage(null)}
                size="icon"
                variant="ghost"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </Button>
              
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="typography-caption bg-brand text-brand-foreground px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="typography-subheading text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="typography-body text-foreground/70">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Gallery