'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function Guarantee() {
  return (
    <section className="overflow-hidden border-y border-emerald-500/10 bg-emerald-500/5 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
            <ShieldCheck className="h-8 w-8 text-emerald-400" />
          </div>

          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Results or Your Money Back
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I am so confident in my coaching that if you do not achieve visible results in 12 weeks,
            you get 100% of your money back. No questions asked. No fine print.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="space-y-2">
              <p className="font-heading text-3xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
            <div className="space-y-2">
              <p className="font-heading text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Guarantee</p>
            </div>
            <div className="space-y-2">
              <p className="font-heading text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
