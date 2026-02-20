'use client'

import { motion } from 'framer-motion'

function ForbesLogo() {
  return (
    <svg viewBox="0 0 200 50" className="h-8 w-auto" fill="currentColor" aria-label="Forbes">
      <text x="10" y="38" fontFamily="Georgia, serif" fontSize="40" fontWeight="bold" letterSpacing="3">
        Forbes
      </text>
    </svg>
  )
}

function MensHealthLogo() {
  return (
    <svg viewBox="0 0 260 50" className="h-8 w-auto" fill="currentColor" aria-label="Men's Health">
      <text x="5" y="36" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" letterSpacing="1" style={{ textTransform: 'uppercase' }}>
        {"MEN'S HEALTH"}
      </text>
    </svg>
  )
}

function MuscleAndFitnessLogo() {
  return (
    <svg viewBox="0 0 320 50" className="h-8 w-auto" fill="currentColor" aria-label="Muscle and Fitness">
      <text x="5" y="36" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" letterSpacing="2" style={{ textTransform: 'uppercase' }}>
        {"MUSCLE & FITNESS"}
      </text>
    </svg>
  )
}

const logos = [
  { name: 'Forbes', Component: ForbesLogo },
  { name: "Men's Health", Component: MensHealthLogo },
  { name: 'Muscle & Fitness', Component: MuscleAndFitnessLogo },
]

export function FeaturedIn() {
  // Duplicate the logos array for seamless infinite scroll
  const duplicated = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="overflow-hidden border-y border-border/50 bg-muted/30 py-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
      >
        As Featured In
      </motion.p>

      <div className="group relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {duplicated.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex flex-shrink-0 items-center justify-center px-4 text-muted-foreground/40 grayscale transition-all hover:text-muted-foreground/70 hover:grayscale-0"
            >
              <logo.Component />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
