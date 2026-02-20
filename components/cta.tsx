'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false },
}

export function CTA() {
  return (
    <section className="border-t border-border bg-muted py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div {...fadeUp} className="space-y-8">
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl text-balance">
            The Physique You Want. The Performance You Need.
          </h2>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            Only 4 spots remaining for February.
          </p>

          <Link
            href="#checkout"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-10 py-4 text-base font-bold uppercase text-black transition-colors hover:bg-emerald-600"
          >
            Start Your Transformation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
