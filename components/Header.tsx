'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/50" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: 10 }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-grey-300 hover:text-grey-400 transition duration-300">
              BalanceWell
            </Link>
          </motion.div>
          {!isMobileView && (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="ml-10 flex items-baseline space-x-4"
              >
                {['Use Cases', 'Features', 'Solutions', 'Pricing', 'Apps', 'Resources'].map((item, index) => (
                  <Link key={index} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-grey-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:shadow-md">
                    {item}
                  </Link>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Link href="/book-demo" className="text-grey-300 hover:text-grey-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:shadow-md">
                  Book a Demo
                </Link>
                <Link href="/login" className="text-white hover:text-grey-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:shadow-md">
                  Log In
                </Link>
                <Link href="/try-free" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-medium transition duration-300 flex items-center hover:shadow-md">
                  Try for Free
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            </>
          )}
          {isMobileView && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-grey-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-300 transition duration-300 hover:shadow-md"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          )}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileView && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700"
        >
          {['Use Cases', 'Features', 'Solutions', 'Pricing', 'Apps', 'Resources', 'Book a Demo', 'Log In'].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-grey-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300 hover:shadow-md">
              {item}
            </Link>
          ))}
          <Link href="/try-free" className="bg-white text-blue-600 hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300 mt-4 hover:shadow-md">
            Try for Free
          </Link>
        </motion.div>
      )}
    </header>
  )
}

export default Header