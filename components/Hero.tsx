import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BarChart2, Calendar, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Transform Your Life with <span className="text-gray-200">BalanceWell</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-200">
              Discover the perfect harmony between work, health, and personal life. BalanceWell is your AI-powered companion for a more balanced and fulfilling lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/demo"
                className="bg-blue-800 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-900 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: Calendar, title: "Smart Scheduling" },
                { icon: Heart, title: "Health Tracking" },
                { icon: BarChart2, title: "Productivity Insights" },
                { icon: ArrowRight, title: "Personalized Goals" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-3 sm:p-4 md:p-6 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:scale-105 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="text-gray-200 mb-2 sm:mb-3 md:mb-4" size={24} />
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero