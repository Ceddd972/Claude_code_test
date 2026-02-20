'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Coach Alex's program transformed not just my body, but my entire lifestyle. I've kept off the weight for over a year now.",
    author: 'Sarah J.',
    role: 'Surgeon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    quote:
      "I was skeptical, but the personalized approach and weekly check-ins kept me accountable. Best investment I've made in myself.",
    author: 'Michael T.',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    quote:
      'The nutrition coaching was game-changing. I finally understand how to eat for my goals without feeling deprived.',
    author: 'Jennifer L.',
    role: 'Lawyer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    quote:
      '12 weeks, -20 lbs, and a completely different me. Coach Alex delivers on every promise.',
    author: 'David R.',
    role: 'Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function Testimonials() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Trusted by High Performers
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/30 p-8 transition-colors hover:border-emerald-500/30"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-emerald-500 text-emerald-500"
                  />
                ))}
              </div>
              <p className="mb-6 text-base leading-relaxed text-foreground/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${testimonial.image}?w=88&h=88&fit=crop&q=80`}
                    alt={testimonial.author}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
