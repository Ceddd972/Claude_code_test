'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { AnimatedOrbs } from '@/components/animated-orbs'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-28 md:pb-28 md:pt-36">
      <AnimatedOrbs />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Elite Body Recomposition
              </span>
              <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Elite Results for Busy Professionals.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                The 12-week blueprint for fat loss and muscle gain without living in the gym.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#checkout"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-8 py-3.5 text-sm font-bold uppercase text-black transition-colors hover:bg-emerald-600"
              >
                Get the 12-Week Program
              </Link>
              <Link
                href="#results"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                See Results
              </Link>
            </div>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {[
                'Only 4 spots remaining for February',
                'Results or 100% refund guaranteed',
                '1-on-1 personalized coaching',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl md:aspect-square"
          >
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop&q=80"
              alt="Elite fitness coaching session in a modern gym"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
