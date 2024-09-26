'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FeaturesPage = () => {
  const features = [
    { title: 'Task Management', description: 'Organize and prioritize your tasks effortlessly' },
    { title: 'Health Tracking', description: 'Monitor your wellness goals and habits' },
    { title: 'Calendar Integration', description: 'Seamlessly sync with your existing calendars' },
    { title: 'Guided Relaxation', description: 'Access guided meditation and relaxation exercises' },
    { title: 'Analytics Dashboard', description: 'Gain insights into your productivity and well-being' },
    { title: 'Social Accountability', description: 'Join groups to share progress and stay motivated' },
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
          BalanceWell Features
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage