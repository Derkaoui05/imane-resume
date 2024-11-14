'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { projects, Project } from '@/utlis/data'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 last:mb-0"
    >
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-4 text-primary">{project.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.status === 'completed' && (
            <>
              <Button variant="outline" className="group hover:bg-primary hover:text-primary-foreground" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  See Live
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="group hover:bg-primary hover:text-primary-foreground" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  Source Code
                  <Github className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </>
          )}
          {project.status === 'coming-soon' && (
            <Button variant="outline" disabled className="opacity-50">
              Coming Soon
            </Button>
          )}
          {project.status === 'in-progress' && (
            <Button variant="outline" disabled className="opacity-50">
              In Progress
            </Button>
          )}
        </div>
      </div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover mix-blend-overlay opacity-75 transition-all duration-500 hover:opacity-100 hover:mix-blend-normal"
        />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 ">
      <div className="container px-4 mx-auto">
        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-24 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}