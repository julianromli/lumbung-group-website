'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must not exceed 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  category: z.string().min(1, 'Please select a category'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100, 'Subject must not exceed 100 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must not exceed 1000 characters')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', data)
      reset()
      alert('Your message has been sent successfully!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mt-12 mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ready to help you with the best solutions for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-brand">
                    Send Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we will contact you shortly
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          {...register('name')}
                          className={`h-12 border-gray-200 focus:border-brand focus:ring-brand transition-colors duration-200 ${
                            errors.name ? 'border-red-500 focus:border-red-500' : ''
                          }`}
                        />
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-600"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@email.com"
                          {...register('email')}
                          className={`h-12 border-gray-200 focus:border-brand focus:ring-brand transition-colors duration-200 ${
                            errors.email ? 'border-red-500 focus:border-red-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-600"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+62 xxx xxxx xxxx"
                          {...register('phone')}
                          className="h-12 border-gray-200 focus:border-brand focus:ring-brand"
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Company name"
                          {...register('company')}
                          className="h-12 border-gray-200 focus:border-brand focus:ring-brand"
                        />
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                          Category *
                        </Label>
                        <Select onValueChange={(value) => setValue('category', value)} value={watch('category')}>
                          <SelectTrigger className={`h-12 border-gray-200 focus:border-brand focus:ring-brand ${
                            errors.category ? 'border-red-500 focus:border-red-500' : ''
                          }`}>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="investment">Investment</SelectItem>
                            <SelectItem value="career">Career</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.category && (
                          <p className="text-sm text-red-600">{errors.category.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="Message subject"
                          {...register('subject')}
                          className={`h-12 border-gray-200 focus:border-brand focus:ring-brand ${
                            errors.subject ? 'border-red-500 focus:border-red-500' : ''
                          }`}
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-600">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Write your message here..."
                        {...register('message')}
                        rows={6}
                        className={`border-gray-200 focus:border-brand focus:ring-brand resize-none ${
                          errors.message ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                      />
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-600"
                        >
                          {errors.message.message}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-brand hover:bg-brand/90 text-white font-medium disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <Card className="h-full shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-brand mb-4">
                    Contact Information
                  </CardTitle>
                  <p className="text-gray-600">
                    Contact us for more information about our services and partnerships.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-brand/10 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Head Office</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Ruko Pariwarna Niaga No. 7<br />
                        Kota Baru Parahyangan<br />
                        Kab. Bandung Barat
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-brand/10 p-3 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                      <p className="text-gray-600">+62 822-888-236</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-brand/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                      <p className="text-gray-600">support@lumbunggroup.co.id</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-brand/10 p-3 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operating Hours</h4>
                      <div className="space-y-1">
                        <p className="text-gray-600">Monday - Friday: 08:00 - 17:00 WIB</p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our office for further discussion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-xl border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.205594374716!2d107.468109474972!3d-6.865948993132653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8794b636fd000d4f%3A0x976e7adeaba2f368!2sLUMBUNG%20GROUP!5e0!3m2!1sen!2sid!4v1754540213308!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor Pusat Lumbung Group"
                    className="grayscale-0 hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Overlay untuk loading */}
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm md:text-base">Memuat peta...</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}