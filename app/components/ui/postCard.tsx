'use client'

import { cn } from '../../utils/client'
import { motion } from "framer-motion"

interface PostCardProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm'
}

export function PostCard({
  children,
  className,
  size = 'default'
}: PostCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg",
        "bg-neutral-50/70 dark:bg-neutral-900/70",
        "border border-neutral-200 dark:border-neutral-800",
        size === 'sm' && "scale-[0.7]",
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        ease: "easeOut"
      }}
    >
      <div className="relative">
        {children}
      </div>
    </motion.div>
  )
}

export function PostCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
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
