'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        key={progress}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  )
}