'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Users, Dumbbell } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

const credentials = [
  {
    icon: GraduationCap,
    label: 'M.S. Exercise Science',
    detail: 'Stanford University2',
  },
  {
    icon: Award,
    label: 'CSCS Certified',
    detail: 'Strength & Conditioning',
  },
  {
    icon: Users,
    label: '500+ Clients',
    detail: 'Professionals Transformed',
  },
  {
    icon: Dumbbell,
    label: '12+ Years',
    detail: 'Elite Coaching Experience',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Portrait */}
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&h=900&fit=crop&q=80"
                alt="Coach Alex Rivera in a professional training environment"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                  Your Coach
                </p>
                <p className="font-heading text-2xl font-bold text-white">
                  Alex Rivera
                </p>
              </div>
            </div>
            {/* Decorative emerald accent */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-emerald-500/20 bg-emerald-500/5" />
          </motion.div>

          {/* Bio content */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
              About Coach Alex
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl text-balance">
              I Built My Career Coaching People Who Don{"'"}t Have Time to Waste
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                After a decade of working exclusively with surgeons, founders, and C-suite
                executives, I designed a system that delivers elite-level physique results
                within the constraints of a 60-hour work week.
              </p>
              <p>
                My approach is rooted in exercise science, not trends. Every protocol is
                backed by peer-reviewed research and refined through 500+ real-world client
                transformations. No guesswork, no generic templates.
              </p>
              <p>
                I believe the best program is the one you can actually follow. That is why
                every plan I build respects your schedule, your travel, and your life outside
                the gym.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                    <cred.icon className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{cred.label}</p>
                    <p className="text-xs text-muted-foreground">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
