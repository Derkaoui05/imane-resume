import { motion, useInView } from "framer-motion"
import React, { useRef, ReactNode } from "react"

interface FadeInWhenInViewProps {
  children: ReactNode
  delay?: number
}

export function FadeInWhenInView({ children, delay = 0.3 }: FadeInWhenInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
