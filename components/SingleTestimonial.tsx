import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'

const SingleTestimonial = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-[size:20px_20px]" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-gradient-to-r from-blue-100 to-gray-100"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800"
        >
          Transforming Lives, Not Competing
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl"
        >
          <Quote className="w-16 h-16 text-blue-600 mb-8" />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-medium mb-10 text-gray-800 leading-relaxed"
          >
            &ldquo;At BalanceWell, we&apos;re not here to fuel competition. Our mission is to empower individuals to enhance their lifestyles, find harmony, and unlock their full potential. We believe that true success comes from personal growth and well-being, not from outdoing others.&rdquo;
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center"
          >
            <div className="mr-6">
              <Image 
                src="/placeholder.svg?height=100&width=100" 
                alt="Priyansh" 
                width={100} 
                height={100} 
                className="rounded-full border-4 border-blue-600 shadow-lg"
              />
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-800">Priyansh</p>
              <p className="text-blue-600 font-medium text-lg">CEO, BalanceWell</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a 
            href="#learn-more" 
            className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-lg font-bold rounded-full text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Vision
            <ArrowRight className="ml-2 h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default SingleTestimonial