'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { JoinProgramModal } from '@/components/join-program-modal'
import { ReasonsModal } from '@/components/reasons-modal'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false },
}

export function ContactCTA() {
  const [joinModalOpen, setJoinModalOpen] = useState(false)
  const [reasonsModalOpen, setReasonsModalOpen] = useState(false)

  return (
    <>
      <JoinProgramModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
      <ReasonsModal isOpen={reasonsModalOpen} onClose={() => setReasonsModalOpen(false)} />
      <section className="border-y border-border bg-muted py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fadeUp} className="space-y-10 text-center">
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Ready to Transform?
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We've received your inquiry and will get back to you within 24 hours.
                In the meantime, here's what to expect:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-3 rounded-lg border border-border bg-background p-6">
                <CheckCircle className="mx-auto h-8 w-8 text-emerald-500" />
                <h3 className="font-semibold text-foreground">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  30-minute call to discuss your goals and fitness history
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-background p-6">
                <CheckCircle className="mx-auto h-8 w-8 text-emerald-500" />
                <h3 className="font-semibold text-foreground">Custom Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored 12-week program designed for your specific needs
                </p>
              </div>

              <div className="space-y-3 rounded-lg border border-border bg-background p-6">
                <CheckCircle className="mx-auto h-8 w-8 text-emerald-500" />
                <h3 className="font-semibold text-foreground">Results Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  Visible transformation or 100% of your money back
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-sm text-muted-foreground">
                Don't wait—limited spots available for February intake
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={() => setJoinModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-10 py-4 text-base font-bold uppercase text-black transition-colors hover:bg-emerald-600"
                >
                  Join the program
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setReasonsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-lg border border-border px-10 py-4 text-base font-bold uppercase text-foreground transition-colors hover:bg-muted"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
