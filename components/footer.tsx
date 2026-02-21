'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function Footer() {
  const [email, setEmail] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.trim() && emailRegex.test(email)) {
      toast.success('Thanks for subscribing! Check your email for a welcome guide.')
      setEmail('')
    } else {
      toast.error('Please enter a valid email address.')
    }
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          {...fadeUp}
          className="mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Col 1: Brand + Social */}
          <div className="space-y-5">
            <p className="font-heading text-lg font-bold tracking-tight text-foreground">ALEX RIVERA</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Elite body recomposition coaching for busy professionals.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-emerald-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-emerald-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-emerald-400">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Programs</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="#method" className="transition-colors hover:text-emerald-400">The Method</Link></li>
              <li><Link href="#results" className="transition-colors hover:text-emerald-400">Transformations</Link></li>
              <li><Link href="#pricing" className="transition-colors hover:text-emerald-400">Executive Physique</Link></li>
              <li><Link href="#checkout" className="transition-colors hover:text-emerald-400">Apply Now</Link></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="#faq" className="transition-colors hover:text-emerald-400">FAQ</Link></li>
              <li><Link href="#" className="transition-colors hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link href="#" className="transition-colors hover:text-emerald-400">Terms of Service</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Inner Circle Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Inner Circle</h4>
            <p className="text-sm text-muted-foreground">
              Weekly performance tips and transformation stories.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold uppercase text-black transition-colors hover:bg-emerald-600"
              >
                Join
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          {...fadeUp}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Coach Alex Rivera. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            Medical Disclaimer: This program is not a substitute for professional medical advice. Always consult with a healthcare provider before starting any new fitness regimen.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
