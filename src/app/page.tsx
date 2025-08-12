//src/app/page.tsx

import Layout from '@/components/layout/layout'
import Hero from '@/components/landing/Hero'
import OSArchitecture from '@/components/landing/OSArchitecture'
import AIWorkforce from '@/components/landing/AIWorkforce'
import RevenueImpact from '@/components/landing/RevenueImpact'
import MagicInbox from '@/components/landing/MagicInbox'
import SimpleCTA from '@/components/landing/SimpleCTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OSArchitecture />
      <AIWorkforce />
      <RevenueImpact />
      <MagicInbox />
      <SimpleCTA />
    </Layout>
  )
}