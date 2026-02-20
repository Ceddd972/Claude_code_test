import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { FeaturedIn } from '@/components/featured-in'
import { Features } from '@/components/features'
import { Results } from '@/components/results'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { Guarantee } from '@/components/guarantee'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <main>
      {/* 1. Sticky Header */}
      <Header />

      {/* 2. Hero (Split-Z) */}
      <Hero />

      {/* 3. About Coach Alex */}
      <About />

      {/* 4. Social Proof (Logo Marquee) */}
      <FeaturedIn />

      {/* 4. The Method (Zig-Zag) */}
      <Features />

      {/* 5. Transformation (Bento Grid) */}
      <Results />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Pricing ($497 Card) */}
      <Pricing />

      {/* 8. FAQ (Accordion) */}
      <FAQ />

      {/* 9. Guarantee */}
      <Guarantee />

      {/* 10. Final CTA */}
      <CTA />

      {/* Checkout anchor */}
      <div id="checkout" className="scroll-mt-20" />

      {/* 11. Footer (4-Column) */}
      <Footer />

      <Toaster />
    </main>
  )
}
