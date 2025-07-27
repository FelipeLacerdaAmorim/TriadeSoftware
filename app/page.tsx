import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  )
} 