'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-background to-secondary">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-8 text-6xl"
        >
          <Frown className="w-24 h-24 mx-auto text-primary" />
        </motion.div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary">404 - Page Not Found</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild className="font-semibold">
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go back home
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}