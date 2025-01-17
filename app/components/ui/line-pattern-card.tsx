'use client'

import { cn } from '../../utils/client'
import { motion } from "framer-motion"

interface LinePatternCardProps {
  children: React.ReactNode
  className?: string
}

export function LinePatternCard({ 
  children, 
  className,
}: LinePatternCardProps) {
  return (
    <motion.div
      className={cn(
        "border w-full rounded-md overflow-hidden",
        "bg-white dark:bg-black",
        "border-neutral-200 dark:border-neutral-800",
        "relative",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#80808012,#80808012_1px,transparent_1px,transparent_20px)]" />
      <div className="relative">
        {children}
      </div>
    </motion.div>
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