'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'I work 60+ hours a week. Is this realistic?',
    answer:
      'Absolutely. This program was designed specifically for high-performing professionals with demanding schedules. The 4-Hour Protocol requires only four strategic training sessions per week, each under 60 minutes. Our asynchronous coaching model means you check in on your time -- not ours. Over 80% of our clients work 50-70 hour weeks.',
  },
  {
    question: 'I travel frequently. Can this work?',
    answer:
      'Yes. Travel is one of the most common concerns, and our program addresses it head-on. You will receive hotel/gym-free workout alternatives, travel-specific meal strategies, and on-the-go supplement protocols. Your coach adjusts your plan in real-time based on your travel schedule through the app.',
  },
  {
    question: 'Are the meal plans strict and restrictive?',
    answer:
      'Not at all. Bio-Individual Nutrition is the opposite of restrictive. We build your plan around the foods you already enjoy and the restaurants you already visit. You will learn a flexible framework based on macronutrient targets and meal timing -- not a rigid list of allowed foods. Clients are often surprised by how much freedom they have.',
  },
  {
    question: 'How is this different from a fitness app?',
    answer:
      'A fitness app gives you generic algorithms. This program gives you a dedicated human coach who learns your body, your schedule, your stress patterns, and your preferences. Every workout is prescribed for you. Every nutrition adjustment is made by a professional reviewing your data. The difference is personalization, accountability, and expertise -- and it shows in the results.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-emerald-500">
            FAQ
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Common Questions
          </h2>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-muted/30 px-6 transition data-[state=open]:border-emerald-500/30"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-foreground hover:no-underline hover:text-emerald-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
