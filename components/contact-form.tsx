'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false },
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Message sent! I will get back to you within 24 hours.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      {/* Contact Information */}
      <motion.div {...fadeUp} className="space-y-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-6">Get In Touch</h3>
          <p className="text-muted-foreground mb-8">
            Have questions about the program? Want to schedule a consultation? Reach out and let's discuss your transformation goals.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <Mail className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <a href="mailto:coach@alexrivera.com" className="text-muted-foreground hover:text-emerald-500 transition">
                coach@alexrivera.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <Phone className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <a href="tel:+14155551234" className="text-muted-foreground hover:text-emerald-500 transition">
                +1 (415) 555-1234
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
              <MapPin className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Location</p>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Response time: Usually within 24 hours on weekdays
          </p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        {...fadeUp}
        onSubmit={handleSubmit}
        className="lg:col-span-2 space-y-6 rounded-2xl border border-border bg-muted/50 p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none transition"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none transition resize-none"
            placeholder="Tell me about your fitness goals and what you're looking for..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-emerald-500 px-6 py-3 font-bold uppercase text-black transition-colors hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to be contacted about your inquiry. We respect your privacy.
        </p>
      </motion.form>
    </div>
  )
}
