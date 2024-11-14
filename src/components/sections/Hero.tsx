"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const ShinyButton = React.memo(({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      className="relative overflow-hidden bg-gray-800 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white opacity-10"
        animate={{
          left: ["-100%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "linear",
        }}
      />
    </Button>
  )
})
ShinyButton.displayName = 'ShinyButton'

const TypewriterText: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = texts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
      } else {
        setCurrentText(text.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1))
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <h1 className="text-6xl md:text-8xl font-bold mb-6 h-32 md:h-40">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        {currentText}
      </span>
      <span className="animate-blink">|</span>
    </h1>
  )
}



export default function Hero() {
  
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen py-12 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <ShinyButton>Explore My Work</ShinyButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <TypewriterText texts={["Hi there!", "I am Imane Ryad", "Full Stack Developer","Java Developer"]} />
        </motion.div>
      </motion.div>

      <motion.div
        className=" text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-3xl md:text-4xl capitalize font-semibold text-gray-300">
        shaping intuitive experiences.
        </p>
      </motion.div>
  </section>
  )
}