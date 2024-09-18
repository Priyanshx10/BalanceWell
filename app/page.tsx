'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Menu, User, X, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState({
    primary: 'bg-blue-600',
    secondary: 'bg-green-500',
    text: 'text-gray-800',
    buttonText: 'text-white'
  })
  const features = [
    { title: "Task Management", description: "Organize your work and personal tasks efficiently", icon: "📋" },
    { title: "Health Tracking", description: "Monitor your wellness habits and achieve your health goals", icon: "❤️" },
    { title: "Wellness Reminders", description: "Get timely reminders for breaks and wellness activities", icon: "⏰" },
    { title: "Analytics", description: "Gain insights into your productivity and well-being", icon: "📊" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const themes = [
      { primary: 'bg-blue-600', secondary: 'bg-green-500', text: 'text-gray-800', buttonText: 'text-white' },
      { primary: 'bg-purple-600', secondary: 'bg-yellow-500', text: 'text-gray-900', buttonText: 'text-gray-100' },
      { primary: 'bg-red-600', secondary: 'bg-indigo-500', text: 'text-gray-100', buttonText: 'text-gray-900' },
    ]
    const interval = setInterval(() => {
      setTheme(themes[Math.floor(Math.random() * themes.length)])
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`flex flex-col min-h-screen bg-gray-50 ${theme.text}`}>
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="BalanceWell Logo" width={40} height={40} />
            <span className={`text-xl font-bold ${theme.primary.replace('bg-', 'text-')}`}>BalanceWell</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/features" className={`${theme.text} hover:${theme.primary.replace('bg-', 'text-')}`}>Features</Link>
            <Link href="/pricing" className={`${theme.text} hover:${theme.primary.replace('bg-', 'text-')}`}>Pricing</Link>
            <Link href="/about" className={`${theme.text} hover:${theme.primary.replace('bg-', 'text-')}`}>About</Link>
            <Link href="/login" className={`${theme.primary} text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}>
              <User className="inline-block mr-2" size={18} />
              Login
            </Link>
          </nav>
          <button className={`md:hidden ${theme.text}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-2 px-4 space-y-2">
            <Link href="/features" className={`block py-2 ${theme.text} hover:bg-gray-100 rounded`}>Features</Link>
            <Link href="/pricing" className={`block py-2 ${theme.text} hover:bg-gray-100 rounded`}>Pricing</Link>
            <Link href="/about" className={`block py-2 ${theme.text} hover:bg-gray-100 rounded`}>About</Link>
            <Link href="/login" className={`block py-2 ${theme.text} hover:bg-gray-100 rounded`}>Login</Link>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`relative ${theme.primary} text-white py-20 sm:py-32`}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8"
              >
                Welcome to BalanceWell
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl mb-10 sm:mb-12"
              >
                Your personal assistant for work-life balance and lifestyle improvement
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link
                  href="/get-started"
                  className={`bg-white ${theme.primary.replace('bg-', 'text-')} px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center group shadow-lg`}
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/free-trial"
                  className={`bg-transparent text-white px-8 py-4 rounded-full text-xl font-bold border-2 border-white hover:bg-white hover:${theme.primary.replace('bg-', 'text-')} transition-all duration-300 shadow-lg`}
                >
                  Free Trial
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${theme.primary.replace('bg-', 'text-')}`}>Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                    activeFeature === index ? `ring-2 ${theme.primary.replace('bg-', 'ring-')}` : ''
                  }`}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className={`text-2xl font-semibold mb-4 ${theme.primary.replace('bg-', 'text-')}`}>{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 sm:py-32 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${theme.primary.replace('bg-', 'text-')}`}>What Our Users Say</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
              <p className="text-xl sm:text-2xl italic mb-6">"BalanceWell has completely transformed how I manage my work-life balance. I'm more productive and happier than ever!"</p>
              <div className="flex items-center">
                <Image src="/placeholder-avatar.jpg" alt="User Avatar" width={60} height={60} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-lg">Jane Doe</p>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BalanceWell Section */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className={`text-3xl sm:text-4xl font-bold mb-8 ${theme.primary.replace('bg-', 'text-')}`}>Why Choose BalanceWell?</h2>
              <ul className="text-left space-y-4 sm:space-y-6">
                {[
                  "Personalized wellness plans",
                  "Seamless integration with your lifestyle",
                  "AI-powered insights and recommendations",
                  "Privacy-focused and secure"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className={`${theme.primary.replace('bg-', 'text-')} mr-4 flex-shrink-0`} size={24} />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            <div className="lg:col-span-2">
              <h4 className="font-semibold text-xl mb-4">BalanceWell</h4>
              <p className="text-gray-400 mb-6">Your personal assistant for work-life balance and lifestyle improvement.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay up to date with our latest features and updates.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="submit" className={`${theme.primary} text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity`}>
                  <Mail size={24} />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2023 BalanceWell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}