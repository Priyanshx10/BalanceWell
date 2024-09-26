import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Image from 'next/image'

const PreFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Transform Your Life with BalanceWell
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto"
          >
            Experience the power of AI-driven insights, personalized wellness plans, and seamless task management. Start your journey to a more balanced and fulfilling lifestyle today.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-blue-800 hover:text-grey-600 flex items-center justify-center shadow-lg"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-800 text-white font-bold py-4 px-8 rounded-full transition duration-300 hover:bg-blue-600 hover:text-grey-600 flex items-center justify-center shadow-lg"
            >
              Schedule a Demo
              <PlayCircle className="ml-2" size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center space-x-6"
        >
          {['Trusted by 10,000+ users', '30-day money-back guarantee', '24/7 customer support'].map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="h-5 w-5 text-green-400 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm sm:text-base">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PreFooter