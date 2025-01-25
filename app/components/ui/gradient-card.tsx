'use client'

import { cn } from '../../utils/client'
import { motion, AnimatePresence } from "framer-motion"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
}

export function GradientCard({ 
  children, 
  className,
}: GradientCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-lg",
          "bg-neutral-50/50 dark:bg-neutral-900/50",
          "border border-neutral-200 dark:border-neutral-800",
          className
        )}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-violet-100/10 to-fuchsia-100/10 dark:from-violet-900/10 dark:to-fuchsia-900/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-20" />

        <div className="relative">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function GradientCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "p-4 md:p-6",
        "text-neutral-700 dark:text-neutral-300",
        className
      )} 
      {...props} 
    />
  )
} 