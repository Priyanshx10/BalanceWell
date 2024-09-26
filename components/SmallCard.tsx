import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Shield, Clock, Cloud, ArrowRight } from 'lucide-react'

const SmallCard = () => {
  const features = [
    { icon: <Users className="w-6 h-6 text-blue-500" />, text: "Managing a large team? Let us show you around." },
    { icon: <CheckCircle className="w-6 h-6 text-green-500" />, text: "Cross-platform apps for all time tracking preferences." },
    { icon: <Shield className="w-6 h-6 text-purple-500" />, text: "GDPR-compliant. Your security is our priority." },
    { icon: <Clock className="w-6 h-6 text-yellow-500" />, text: "Top-rated support with a response time of 3 hours!" },
    { icon: <Cloud className="w-6 h-6 text-indigo-500" />, text: "99% uptime for your peace of mind." },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Teams of 15+ are eligible for a custom demo</h2>
            <p className="text-xl text-gray-600 mb-8">See how BalanceWell works at scale and transforms your team&apos;s productivity.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              Book a Demo
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </motion.button>
          </div>
          <div className="bg-gray-50 p-8 sm:p-12">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-md">
                    {feature.icon}
                  </div>
                  <p className="text-lg text-gray-700">{feature.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 text-center"
            >
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition duration-300">
                Learn more about our enterprise solutions
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SmallCard