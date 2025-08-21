import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Stats />
    </div>
  )
}