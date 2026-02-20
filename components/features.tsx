'use client'

import { motion } from 'framer-motion'
import { Clock, Apple, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'The 4-Hour Protocol',
    description:
      'Efficiency-focused workouts designed for executives who have no time to waste. Our protocol delivers maximum results from just four strategic hours per week -- no marathon gym sessions required.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
    imageAlt: 'Focused athlete performing an efficient strength training workout',
  },
  {
    icon: Apple,
    title: 'Bio-Individual Nutrition',
    description:
      'Science-based flexible dieting tailored to your metabolic profile, food preferences, and lifestyle. No cookie-cutter meal plans. Eat the foods you love while engineering the body you want.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    imageAlt: 'Healthy meal prep with fresh ingredients on a modern counter',
  },
  {
    icon: MessageCircle,
    title: 'Asynchronous Coaching',
    description:
      '24/7 accountability through our dedicated coaching app. Log workouts, track meals, ask questions, and get expert feedback on your schedule -- not ours. Your coach is always one message away.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    imageAlt: 'Modern coaching app interface on a smartphone',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function Features() {
  return (
    <section id="method" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mb-20 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-emerald-500">
            The Method
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Engineered for the Busiest 1%
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three pillars of transformation, built around your schedule.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isReversed = i % 2 !== 0

            return (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col items-center gap-12 md:flex-row ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl md:w-1/2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${feature.image}?w=800&h=600&fit=crop&q=80`}
                    alt={feature.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Text */}
                <div className="w-full space-y-5 md:w-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Icon className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
