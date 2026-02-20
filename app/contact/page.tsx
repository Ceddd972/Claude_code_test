import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { ContactCTA } from '@/components/contact-cta'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'Contact Coach Alex Rivera | Get Your Transformation Started',
  description: 'Reach out to Coach Alex Rivera to discuss your fitness goals and start your transformation journey.',
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-24 pb-24">
        <section className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="font-heading text-5xl font-bold text-foreground sm:text-6xl mb-4 text-balance">
              Let's Work Together
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Ready to transform your physique? Fill out the form below and let's discuss your fitness goals.
            </p>
          </div>

          <ContactForm />
        </section>
      </div>

      <ContactCTA />

      <Footer />
      <Toaster />
    </main>
  )
}
