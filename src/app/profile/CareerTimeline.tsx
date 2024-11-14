"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
  year: string
  title: string
  company: string
  description: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    year: "2023",
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    description: "Led a team of developers in creating cutting-edge web applications using Next.js and React.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipeline, reducing deployment time by 60%",
      "Mentored junior developers, increasing team productivity by 25%"
    ]
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects using various web technologies.",
    achievements: [
      "Designed and implemented a scalable microservices architecture",
      "Reduced server costs by 30% through efficient database optimization",
      "Received 'Employee of the Year' award for outstanding performance"
    ]
  },
  {
    year: "2019",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    description: "Assisted in the development of the company's main product, a social media management tool.",
    achievements: [
      "Contributed to the front-end development using React and Redux",
      "Implemented responsive design, improving mobile user experience",
      "Participated in code reviews and improved coding standards"
    ]
  }
]

export function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, containerHeight])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="flex flex-col items-center justify-center py-10 md:py-24">
        <h2 className="text-lg md:text-4xl mb-4 text-foreground max-w-4xl font-bold">
          My Career Journey
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-sm">
          Here&apos;s a timeline of my professional experiences and achievements over the years.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20">
        {experiences.map((experience, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-border p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
                {experience.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                {experience.year}
              </h3>
              <Card className="w-full mb-6">
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
        <div
          style={{
            height: containerHeight + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%]  via-muted-foreground to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}