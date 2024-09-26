import React from 'react'
import { motion } from 'framer-motion'

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Features = ({ features }: { features: Feature[] | undefined }) => {
  if (!features) return null; // Check if features is undefined and return early if true

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <hr className="border-t border-white w-full my-10" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 p-3 sm:p-4 md:p-6 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-opacity-20 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {React.cloneElement(feature.icon, { className: 'text-white mb-2 sm:mb-3 md:mb-4', size: 24 })}
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features