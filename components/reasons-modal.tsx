'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, TrendingUp, Users } from 'lucide-react'

interface ReasonsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReasonsModal({ isOpen, onClose }: ReasonsModalProps) {
  const reasons = [
    {
      icon: Zap,
      title: 'Proven Method',
      description: 'Our system has transformed 500+ professionals. The formula works when you work it.',
    },
    {
      icon: TrendingUp,
      title: 'Real Results',
      description: 'Average transformation: 18-22 lbs of fat loss in 12 weeks with visible muscle definition.',
    },
    {
      icon: Users,
      title: 'Personal Accountability',
      description: 'Weekly coaching calls keep you accountable and motivated through the entire journey.',
    },
    {
      icon: Zap,
      title: 'Expert Guidance',
      description: 'Certified personal trainer with 12+ years of experience training high-performers.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Results',
      description: 'Learn habits that stick. 98% of our clients maintain their results after the program.',
    },
    {
      icon: Users,
      title: 'Money-Back Guarantee',
      description: 'No results? No charge. We are that confident in our program and your commitment.',
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-x-4 top-[5vh] z-50 max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background p-8 shadow-2xl mx-auto max-w-2xl"
          >
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Why Choose Alex Rivera?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Six reasons to invest in your transformation
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-lg border border-border bg-muted p-5"
                  >
                    <Icon className="mb-3 h-6 w-6 text-emerald-500" />
                    <h3 className="mb-2 font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-6">
              <p className="font-semibold text-foreground">
                "The results are real because the method is real. No shortcuts, no gimmicks. Just science-backed coaching."
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Coach Alex Rivera
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="#checkout"
                onClick={onClose}
                className="flex-1 rounded-lg bg-emerald-500 px-6 py-3 text-center font-bold uppercase text-black transition-colors hover:bg-emerald-600"
              >
                Join Now
              </a>
              <button
                onClick={onClose}
                className="flex-1 rounded-lg border border-border py-3 font-bold uppercase text-foreground transition-colors hover:bg-muted"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
