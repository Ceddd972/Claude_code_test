'use client'

import { motion } from 'framer-motion'

export function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Orb 1 - Large emerald orb, top right */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent blur-3xl"
      />

      {/* Orb 2 - Medium blue-tinted orb, bottom left */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-transparent blur-3xl dark:from-emerald-600/20"
      />

      {/* Orb 3 - Small accent orb, center-right */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-bl from-emerald-500/15 via-emerald-400/5 to-transparent blur-3xl"
      />

      {/* Orb 4 - Subtle accent, bottom right */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tl from-emerald-400/10 via-emerald-300/5 to-transparent blur-3xl"
      />
    </div>
  )
}
