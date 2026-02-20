'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'

interface JoinProgramModalProps {
  isOpen: boolean
  onClose: () => void
}

export function JoinProgramModal({ isOpen, onClose }: JoinProgramModalProps) {
  const features = [
    'Personalized 12-week transformation plan',
    'Weekly progress tracking and adjustments',
    'Nutrition guidance and meal planning',
    'Weekly coaching calls',
    'Private WhatsApp support group',
    '100% money-back guarantee',
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
            className="fixed inset-x-4 top-[5vh] z-50 max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background p-8 shadow-2xl mx-auto max-w-md"
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Join the Executive Physique Program
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Limited to 4 spots per month
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-8 space-y-3">
              <p className="text-lg font-bold text-emerald-500">What's Included:</p>
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-muted-foreground">Investment:</span>
                <span className="font-heading text-3xl font-bold text-foreground">$497</span>
              </div>
              <p className="text-xs text-muted-foreground">One-time payment. Results guaranteed or money back.</p>
            </div>

            <div className="space-y-3">
              <a
                href="#checkout"
                onClick={onClose}
                className="block w-full rounded-lg bg-emerald-500 px-6 py-3 text-center font-bold uppercase text-black transition-colors hover:bg-emerald-600"
              >
                Enroll Now
              </a>
              <button
                onClick={onClose}
                className="w-full rounded-lg border border-border py-3 font-bold uppercase text-foreground transition-colors hover:bg-muted"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
