'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from "@/components/sections/Hero"
import Loading from './loading'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <>
            <Hero key="hero" />
            <Services key="services" />
            <Projects key="projects" />
          </>
        )}
      </AnimatePresence>
    </>
  )
}