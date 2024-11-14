"use client";
import IconCloud from "@/components/ui/icon-cloud";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "android",
  "html5",
  "css3",
  "vercel",
  "postman",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 "
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl font-bold text-center mb-8 text-foreground"
      >
        My Tech Stack
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <IconCloud iconSlugs={slugs} />
      </motion.div>
    </motion.div>
  );
}
