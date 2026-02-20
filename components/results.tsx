'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Quote } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function Results() {
  return (
    <section id="results" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Transformations
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Real Results. Real Professionals.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Card 1: Mark S. transformation -- spans 2 cols */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-background md:col-span-2 md:row-span-2"
          >
            <div className="flex h-full flex-col">
              {/* Image area */}
              <div className="relative h-72 md:h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=600&fit=crop&q=80"
                  alt="Mark S. transformation result after 90 days of elite coaching"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase text-black">
                    90-Day Transformation
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Mark S., CEO</h3>
                </div>
              </div>
              {/* Stats */}
              <div className="flex flex-1 items-center justify-between gap-6 p-6">
                <div>
                  <p className="text-3xl font-bold text-foreground">-22 lbs</p>
                  <p className="text-sm text-muted-foreground">Fat Lost</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">8%</p>
                  <p className="text-sm text-muted-foreground">Body Fat</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="text-3xl font-bold text-foreground">90</p>
                  <p className="text-sm text-muted-foreground">Days</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Big Stat */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center"
          >
            <TrendingUp className="mb-4 h-8 w-8 text-emerald-500" />
            <p className="font-heading text-5xl font-bold text-foreground md:text-6xl">500+</p>
            <p className="mt-2 text-lg font-medium text-muted-foreground">Professionals</p>
            <p className="text-lg font-medium text-muted-foreground">Transformed</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-emerald-500" />
          </motion.div>

          {/* Card 3: Sarah J. testimonial */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8"
          >
            <div>
              <Quote className="mb-4 h-6 w-6 text-emerald-500" />
              <p className="text-base leading-relaxed text-foreground">
                &ldquo;This program respects my 60-hour work week. I never thought I could look this good while running a surgical department.&rdquo;
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80"
                  alt="Sarah J."
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Sarah J.</p>
                <p className="text-xs text-muted-foreground">Surgeon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
