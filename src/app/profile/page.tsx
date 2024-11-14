"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CareerTimeline } from "./CareerTimeline";
import { TechStack } from "./tool-stack";

const AboutPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center min-h-screen py-10 md:py-24 overflow-hidden"
      >
        {/* about section */}
        <section className="mb-10">
          <motion.div className="flex flex-col text-center items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                y: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
              }}
            >
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={160}
                height={150}
                className="rounded-full"
              />
            </motion.div>
            <div className="text-center max-w-2xl px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-semibold text-gray-200 mb-4"
              >
                My Journey as a Full-Stack Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-gray-400"
              >
                As a full-stack developer, I navigate seamlessly between
                front-end and back-end environments, utilizing a blend of
                technologies like <strong>Next.js</strong>,{" "}
                <strong>Angular</strong>, and <strong>TypeScript</strong> to
                create responsive, efficient applications. I bring ideas to life
                with <strong>Tailwind CSS</strong> for styling,{" "}
                <strong>Framer Motion</strong> for animations, and{" "}
                <strong>shadcn</strong> for component design.
                <br />
                <br />
                My career has been shaped by the drive to transform complex
                concepts into user-friendly, high-performance solutions. I
                approach every project as a unique challenge, with an eye for
                both functionality and design, ensuring that each experience is
                as engaging as it is powerful. By leveraging my skills across
                the stack, I build software that stands out—secure, scalable,
                and crafted to make a meaningful impact.
              </motion.p>
            </div>
          </motion.div>
        </section>
      </motion.div>
      {/* experiences section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-10 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <CareerTimeline />
        </motion.div>
      </section>

      {/* techstack section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-10 md:py-24 overflow-hidden">
        <TechStack />
      </section>
    </>
  );
};

export default AboutPage;
