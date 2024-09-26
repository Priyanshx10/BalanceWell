'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-lg shadow-blue-500/50 z-10">
      <hr className="border-t border-white w-full my-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <Image src="/balancewell-logo.png" alt="BalanceWell Logo" width={150} height={50} className="mx-auto sm:mx-0" />
            <p className="text-sm mt-2">Improve your work-life balance and well-being.</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Product', 'Pricing', 'Case Studies', 'Mobile Apps', 'Desktop Apps', 'Browser Extensions', 'API'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              {['Time Billing', 'Employee Time Tracking', 'Project Time Tracking', 'Payroll'].map((item) => (
                <li key={item}><Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-white">{item}</Link></li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">BalanceWell vs.</h3>
            <ul className="space-y-2">
              {['Clockify', 'Harvest', 'Hubstaff', 'Timely'].map((item) => (
                <li key={item}><Link href={`/vs-${item.toLowerCase()}`} className="text-sm hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              {['Automated time tracking', 'Online work timer', 'Timesheet reports', 'Invoicing', 'Time reporting and analytics', 'Integrations', 'All features'].map((item) => (
                <li key={item}><Link href={`/features/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} BalanceWell. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Link key={index} href="#" className="text-white hover:text-white"><Icon size={20} /></Link>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center gap-2">
            {['Help', 'Support & Knowledge Base', 'Talk to Sales', 'Affiliate Program', 'Media Kit', 'Privacy & Terms', 'Status'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="hover:text-white">{item}</Link>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-white">
          <h4 className="font-semibold mb-2">Resources</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {['Work From Home Hub', 'Timesheet Templates', 'Time Card Calculator'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer