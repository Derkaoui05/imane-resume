"use client"
import { motion } from "framer-motion"
export const FloatingIcons: React.FC = () => {
    const icons = [
      "💻", "🚀", "🎨", "📱", "⚛️", "🌐", "🔧", "📊", "🎯", "🔍","☁️",
    ]
  
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
            initial={{ x: Math.random() * window.innerWidth, y: -50 }}
            animate={{
              y: window.innerHeight + 50,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ left: `${(index / icons.length) * 100}%` }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    )
  }