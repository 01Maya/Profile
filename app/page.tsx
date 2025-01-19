'use client'

import { Briefcase, Monitor, Paintbrush, Code, Mail, FileText, Linkedin, Dribbble, Instagram, ArrowRight, Folder } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import LogoCarousel from '@/components/logo-carousel'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-6 bg-[#f5f5f5]/80 backdrop-blur-sm z-50"
      >
        <div className="flex items-center gap-4">
          <Link href="mailto:example@example.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
            <Mail size={16} />
            <span>example@example.com</span>
          </Link>
          <Link href="/copy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
            <FileText size={16} />
            <span>Copy</span>
          </Link>
          <Link href="/cv" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
            <FileText size={16} />
            <span>CV</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/linkedin" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={16} />
          </Link>
          <Link href="/dribbble" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <Dribbble size={16} />
          </Link>
          <Link href="/instagram" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <Instagram size={16} />
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="text-center px-4 pt-32 pb-20"
      >
        <motion.div variants={fadeIn} className="relative w-28 h-28 mx-auto mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FLOWER.jpg-lEHA0K6cPLknhdzTJ1069JOnOwwPvo.jpeg"
            alt="Pink and white tulips"
            width={112}
            height={112}
            className="rounded-full object-cover border-4 border-white shadow-lg"
            priority
          />
          <motion.div 
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute -right-2 -top-2 bg-white rounded-full p-1 shadow-sm"
          >
            👋
          </motion.div>
        </motion.div>
        <motion.h1 
          variants={fadeIn}
          className="text-4xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight mb-8"
        >
          Building digital products, brands, and experience.
        </motion.h1>
        <motion.div variants={fadeIn}>
          <Button 
            variant="default" 
            className="bg-black text-white rounded-full px-6 hover:bg-gray-800 transition-colors group"
          >
            Learn More 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </motion.div>
      </motion.section>

      {/* Logos Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full py-16"
      >
        <LogoCarousel />
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-8"
      >
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Collaborate with brands and agencies
          </h2>
          <p className="text-xl text-gray-600">
            to create impactful results.
          </p>
        </motion.div>

        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { icon: <Briefcase className="w-8 h-8" />, title: "UI & UX", desc: "Design user interfaces that are intuitive, efficient, and enjoyable to use." },
            { icon: <Monitor className="w-8 h-8" />, title: "Web & Mobile App", desc: "Transform your ideas into exceptional web and mobile app experiences." },
            { icon: <Paintbrush className="w-8 h-8" />, title: "Design & Creative", desc: "Create unique designs that connect with your audience." },
            { icon: <Code className="w-8 h-8" />, title: "Development", desc: "Bring your vision to life with the latest technology and design trends." }
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
              className="text-center p-6 rounded-xl hover:bg-white transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-20"
      >
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Folder size={48} className="text-gray-600" />
          </motion.div>
        </motion.div>
        <motion.h2 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Tell me about your next project
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-4 justify-center"
        >
          <Button 
            variant="default" 
            className="bg-black text-white rounded-full px-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105 group"
          >
            Send Me 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full px-6 transition-all duration-300 hover:scale-105 group"
          >
            WhatsApp
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-between items-center px-8 py-6 border-t border-gray-200"
      >
        <p className="text-sm text-gray-600">
          © 2024 All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { name: 'LinkedIn', icon: <Linkedin size={16} /> },
            { name: 'Dribbble', icon: <Dribbble size={16} /> },
            { name: 'Instagram', icon: <Instagram size={16} /> }
          ].map((social, i) => (
            <Link 
              key={i}
              href={`/${social.name.toLowerCase()}`} 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </motion.footer>
    </div>
  )
}

