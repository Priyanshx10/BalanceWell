'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: ['Task Management', 'Calendar Integration', 'Basic Health Tracking'],
    },
    {
      name: 'Pro',
      price: '$19.99',
      features: ['All Basic Features', 'Advanced Analytics', 'Guided Wellness Exercises'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['All Pro Features', 'Team Management', 'Custom Integrations'],
    },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Choose Your BalanceWell Plan
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{plan.name}</h2>
              <p className="text-5xl font-extrabold text-blue-600 mb-6">{plan.price}</p>
              <ul className="text-gray-600 mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 + index * 0.2 }}
                  >
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage