'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import PreFooter from '@/components/PreFooter'
import SmallCard from '@/components/SmallCard'
import Features from '@/components/Features'
import Why from '@/components/Why'
import SingleTestimonial from '@/components/SingleTestimonial'
export default function Home() {
  const [theme, setTheme] = useState({
    primary: 'bg-blue-600',
    secondary: 'bg-green-500',
    text: 'text-gray-800',
    buttonText: 'text-white'
  })
  const features = [
    { title: "Task Management", description: "Organize your work and personal tasks efficiently", icon: <span className="text-white">🚀</span> },
    { title: "Health Tracking", description: "Monitor your wellness habits and achieve your health goals", icon: <span className="text-white">🏥</span> },
    { title: "Wellness Reminders", description: "Get timely reminders for breaks and wellness activities", icon: <span className="text-white">🔔</span> },
    { title: "Analytics", description: "Gain insights into your productivity and well-being", icon: <span className="text-white">📈</span> },
  ]

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
      <Hero/>
      <main className="flex-grow">
        {/* Features Section */}
        <Features features={features.map(feature => ({...feature, icon: <span>{feature.icon}</span>}))}/>

        {/* Testimonial Section */}
        <SingleTestimonial/>

        {/* Why Choose BalanceWell Section */}
        <Why/>
        <SmallCard/>
        <PreFooter/>
      </main>
    </div>
  )
}