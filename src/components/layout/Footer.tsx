'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Coffee, Github, Linkedin, Twitter } from 'lucide-react'
import ShimmerButton from '../ui/shimmer-button'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <footer ref={ref} className="text-white py-12">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div variants={itemVariants}>
            <ShimmerButton onClick={() => window.location.href = 'mailto:imaneryad29@gmail.com'}>
              ✦︎︎ Let&apos;s Work Together ✦︎︎
            </ShimmerButton>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            variants={itemVariants}
          >
            <a href="https://github.com/Imane029" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </motion.div>
          
          <motion.p 
            className="text-sm flex items-center justify-center flex-wrap"
            variants={itemVariants}
          >
            <span className="mr-2">Built by Imane Ryad with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 inline" />
            <span className="mx-2">and</span>
            <Coffee className="w-4 h-4 mx-1 text-yellow-500 inline" />
          </motion.p>
          
          <motion.p 
            className="text-xs text-gray-400"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Imane Ryad. All rights reserved.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  )
}