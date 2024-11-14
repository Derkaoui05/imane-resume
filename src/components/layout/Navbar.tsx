'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Home, Mail, User, Zap } from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface DockItemProps {
  icon: React.ReactNode
  label: string
  href: string
}

const DockItem: React.FC<DockItemProps> = ({ icon, label, href }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href}>
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 text-gray-300 cursor-pointer"
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(59, 130, 246, 0.5)",
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {icon}
              </motion.div>
            </motion.div>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="text-foreground " >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const DockNavigation: React.FC = () => {
  const dockItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home", href: "/" },
    { icon: <User className="w-6 h-6" />, label: "Profile", href: "/profile" },
    { icon: <Zap className="w-6 h-6" />, label: "Resume", href: "/resume" },
    { icon: <Mail className="w-6 h-6" />, label: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-4 z-50 left-1/2 transform -translate-x-1/2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <motion.div
          className="flex space-x-4 items-center justify-evenly bg-background/30 backdrop-blur-md p-3 rounded-full border border-gray-700"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {dockItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                },
              }}
            >
              <DockItem icon={item.icon} label={item.label} href={item.href} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  )
}

export default function Navbar() {
  return <DockNavigation />
}