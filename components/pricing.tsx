'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ShieldCheck } from 'lucide-react'

const features = [
  'The 4-Hour Workout Protocol',
  'Bio-Individual Nutrition Blueprint',
  '24/7 Asynchronous Coaching App',
  'Weekly Video Check-ins',
  'Custom Supplement Guide',
  'Private Community Access',
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Investment
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            One Program. Complete Transformation.
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-lg"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
            {/* Card Header */}
            <div className="border-b border-emerald-500/20 bg-emerald-500/10 px-8 py-8 text-center">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                12-Week Program
              </p>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Executive Physique
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-heading text-5xl font-bold text-foreground">$497</span>
                <span className="text-sm text-muted-foreground">/one-time</span>
              </div>
            </div>

            {/* Feature List */}
            <div className="px-8 py-8">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="#checkout"
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-emerald-500 px-8 py-4 text-sm font-bold uppercase text-black transition-colors hover:bg-emerald-600"
              >
                Get the 12-Week Program
              </Link>

              {/* Guarantee Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-center">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <p className="text-xs font-medium text-muted-foreground">
                  Results or 100% Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
