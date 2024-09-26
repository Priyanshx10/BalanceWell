import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  const teamMembers = [
    { role: 'CEO', name: 'Jane Doe', image: '/team/ceo.jpg' },
    { role: 'CTO', name: 'John Smith', image: '/team/cto.jpg' },
    { role: 'Lead Designer', name: 'Alice Johnson', image: '/team/designer.jpg' },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About BalanceWell</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At BalanceWell, we&apos;re dedicated to helping you achieve the perfect harmony between work and life. Our innovative app combines task management, health tracking, and wellness features to empower you to lead a balanced, fulfilling life.
          </p>
          <Image
            src="/mission-image.jpg"
            alt="BalanceWell Mission"
            width={600}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            We&apos;re a diverse group of professionals passionate about technology, health, and productivity. Our team brings together expertise from various fields to create a truly comprehensive work-life balance solution.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-semibold">{member.role}</p>
                <p className="text-gray-600">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hello, don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:contact@balancewell.com"
              className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Email Us
            </a>
            <Link href="/features" className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage