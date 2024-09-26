import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const Why = () => {
  const reasons = [
    {
      title: "Personalized wellness plans",
      description: "Tailored to your unique needs and goals, our AI-driven plans adapt as you progress."
    },
    {
      title: "Seamless integration with your lifestyle",
      description: "Effortlessly sync with your calendar, health devices, and daily routines."
    },
    {
      title: "AI-powered insights and recommendations",
      description: "Gain valuable insights and receive actionable recommendations to improve your well-being."
    },
    {
      title: "Privacy-focused and secure",
      description: "Your data is encrypted and protected, ensuring your personal information remains confidential."
    }
  ]

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
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-600"
          >
            Why Choose BalanceWell?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 text-center"
          >
            Discover how BalanceWell can transform your life and help you achieve the perfect work-life harmony.
          </motion.p>
          <ul className="space-y-6 sm:space-y-8">
            {reasons.map((reason, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <CheckCircle className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-blue-600 opacity-10 transform -skew-y-6"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['10,000+ Active Users', '95% Customer Satisfaction', '30-Day Money-Back Guarantee'].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h4 className="text-2xl font-bold text-blue-600 mb-2">{stat.split(' ')[0]}</h4>
                <p className="text-gray-600">{stat.split(' ').slice(1).join(' ')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why