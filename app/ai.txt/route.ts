import { NextResponse } from 'next/server'

export async function GET() {
  const content = `
# Coach Alex Rivera — Elite Body Recomposition for Busy Professionals

## Hero

**Elite Body Recomposition**

### Elite Results for Busy Professionals.

The 12-week blueprint for fat loss and muscle gain without living in the gym.

**CTAs**
- GET THE 12-WEEK PROGRAM
- See Results

**Trust signals**
- Only 4 spots remaining for February
- Results or 100% refund guaranteed
- 1-on-1 personalized coaching

---

## About

### I Built My Career Coaching People Who Don't Have Time to Waste

After a decade of working exclusively with surgeons, founders, and C-suite
executives, I designed a system that delivers elite-level physique results
within the constraints of a 60-hour work week.

My approach is rooted in exercise science, not trends. Every protocol is
backed by peer-reviewed research and refined through 500+ real-world client
transformations. No guesswork, no generic templates.

I believe the best program is the one you can actually follow. That is why
every plan I build respects your schedule, your travel, and your life outside
the gym.

**Credentials**
- M.S. Exercise Science — Stanford University
- CSCS Certified — Strength & Conditioning
- 500+ Clients — Professionals Transformed
- 12+ Years — Elite Coaching Experience

---

## Features

**The Method**

### Engineered for the Busiest 1%
Three pillars of transformation, built around your schedule.

**1. The 4-Hour Protocol**
Efficiency-focused workouts designed for executives who have no time to waste.
Our protocol delivers maximum results from just four strategic hours per week —
no marathon gym sessions required.

**2. Bio-Individual Nutrition**
Science-based flexible dieting tailored to your metabolic profile, food
preferences, and lifestyle. No cookie-cutter meal plans. Eat the foods you love
while engineering the body you want.

**3. Asynchronous Coaching**
24/7 accountability through our dedicated coaching app. Log workouts, track
meals, ask questions, and get expert feedback on your schedule — not ours.
Your coach is always one message away.

---

## Results

**Transformations**

### Real Results. Real Professionals.

**500+ Professionals Transformed**

**Case Study: Mark S., CEO — 90-Day Transformation**
- -22 lbs Fat Lost
- 8% Body Fat
- 90 Days

**Client Quote**
"This program respects my 60-hour work week. I never thought I could look this
good while running a surgical department."
— Sarah J., Surgeon

---

## Pricing

**Investment**

### One Program. Complete Transformation.

**12-Week Program — Executive Physique**
Price: $497 one-time

**Includes:**
- The 4-Hour Workout Protocol
- Bio-Individual Nutrition Blueprint
- 24/7 Asynchronous Coaching App
- Weekly Video Check-ins
- Custom Supplement Guide
- Private Community Access

**CTA:** GET THE 12-WEEK PROGRAM

**Guarantee:** Results or 100% Money-Back Guarantee

---

## Testimonials

### Trusted by High Performers

**Sarah J., Surgeon** — ⭐⭐⭐⭐⭐
"Coach Alex's program transformed not just my body, but my entire lifestyle. 
I've kept off the weight for over a year now."

**Michael T., CEO** — ⭐⭐⭐⭐⭐
"I was skeptical, but the personalized approach and weekly check-ins kept me 
accountable. Best investment I've made in myself."

**Jennifer L., Lawyer** — ⭐⭐⭐⭐⭐
"The nutrition coaching was game-changing. I finally understand how to eat for 
my goals without feeling deprived."

**David R., Investor** — ⭐⭐⭐⭐⭐
"12 weeks, -20 lbs, and a completely different me. Coach Alex delivers on 
every promise."

---

## FAQ

### Common Questions

**I work 60+ hours a week. Is this realistic?**
Absolutely. This program was designed specifically for high-performing professionals 
with demanding schedules. The 4-Hour Protocol requires only four strategic training 
sessions per week, each under 60 minutes. Our asynchronous coaching model means you 
check in on your time -- not ours. Over 80% of our clients work 50-70 hour weeks.

---

## Guarantee

### Results or Your Money Back

I am so confident in my coaching that if you do not achieve visible results in 
12 weeks, you get 100% of your money back. No questions asked. No fine print.

**Stats:**
- 98% Completion Rate
- 100% Satisfaction Guarantee
- 500+ Happy Clients

---

## Featured In

**As Featured In:**
Forbes | Men's Health | Muscle & Fitness

---

## Call to Action

### The Physique You Want. The Performance You Need.

Only 4 spots remaining for February.

**CTA:** START YOUR TRANSFORMATION

---

## Contact

Coach Alex Rivera
Website: https://v0-coach-alex-rivera-prototype.vercel.app
Email: cedricbelhk@gmailcom
`.trim()

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}