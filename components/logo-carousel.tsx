'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Phone, Facebook, Github, Dribbble, Instagram } from 'lucide-react'

const logos = [
  { icon: Twitter, name: 'X (Twitter)' },
  { icon: Phone, name: 'WhatsApp' },
  { icon: Facebook, name: 'Facebook' },
  { icon: Github, name: 'GitHub' },
  { icon: Dribbble, name: 'Dribbble' },
  { icon: Instagram, name: 'Instagram' },
]

export default function LogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="overflow-hidden py-12">
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * (100 / 6)}%` }}
        transition={{ duration: 0.5 }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-1/6 px-4 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <logo.icon 
              size={32} 
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300" 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

