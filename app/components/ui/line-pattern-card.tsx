'use client'

import { cn } from '../../utils/client'
import { motion, AnimatePresence } from "framer-motion"

interface LinePatternCardProps {
  children: React.ReactNode
  className?: string
}

export function LinePatternCard({ 
  children, 
  className,
}: LinePatternCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "border w-full rounded-md overflow-hidden",
          "bg-white dark:bg-black",
          "border-neutral-200 dark:border-neutral-800",
          "relative",
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          y: {
            duration: 0.2
          }
        }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#80808012,#80808012_1px,transparent_1px,transparent_20px)]" />
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function LinePatternCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("text-left p-4 md:p-6", className)} 
      {...props} 
    />
  )
} 