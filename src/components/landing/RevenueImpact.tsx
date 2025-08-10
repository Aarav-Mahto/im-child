
//src/components/landing/RevenueImpact.tsx

'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'

interface RevenueMetric {
  value: string;
  label: string;
  description: string;
  icon: string;
  trend: string;
}

const revenueMetrics: RevenueMetric[] = [
  {
    value: '£14,247',
    label: 'Average Monthly Boost',
    description: 'Extra revenue generated through intelligent booking optimization and retention.',
    icon: '💰',
    trend: '+127% vs baseline'
  },
  {
    value: '3.2X',
    label: 'More Bookings',
    description: 'AI converts enquiries that would normally be lost to competitors.',
    icon: '📈',
    trend: '+220% conversion'
  },
  {
    value: '47%',
    label: 'Churn Reduction',
    description: 'Predictive AI catches at-risk members before they even know they want to leave.',
    icon: '🛡️',
    trend: 'Industry leading'
  }
]

const RevenueImpact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.fade-in')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden" id="revenue-impact">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <Container>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            💎 Proven Results
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Real Revenue. <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Real Results.</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stop wondering &quot;what if&quot; and start seeing actual numbers. 
            Our AI doesn&apos;t just promise growth — it delivers it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          {revenueMetrics.map((metric, index) => (
            <div key={index} className="glass-strong p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:bg-white/20 relative overflow-hidden group fade-in cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <span>{metric.icon}</span>
                </div>
                <div className="bg-brand-success/10 text-brand-success px-3 py-1 rounded-full text-sm font-bold border border-brand-success/20 transition-all duration-300 group-hover:bg-brand-success/20 group-hover:scale-105">
                  {metric.trend}
                </div>
              </div>
              
              <div className="text-4xl font-bold text-white mb-3 font-serif transition-all duration-300 group-hover:text-brand-accent">{metric.value}</div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif transition-all duration-300 group-hover:text-brand-accent">{metric.label}</h3>
              <p className="text-white/80 leading-relaxed transition-all duration-300 group-hover:text-white/90">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative z-10">
          <div className="glass-strong p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-4 text-center font-serif">
              How We Generate <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">£14K+ Monthly</span>
            </h3>
            <p className="text-xl text-white/80 text-center mb-12 max-w-2xl mx-auto">
              Real revenue streams, not marketing fluff
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  🎯
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-brand-success mb-1">£6,200</div>
                  <div className="text-lg font-semibold text-white mb-2">Smart Booking Conversion</div>
                  <div className="text-white/80">AI converts 3.2X more enquiries into paid sessions</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  💝
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-brand-success mb-1">£4,800</div>
                  <div className="text-lg font-semibold text-white mb-2">Retention & Re-engagement</div>
                  <div className="text-white/80">Predictive AI prevents churn and wins back lost members</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  ⚡
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-brand-success mb-1">£3,247</div>
                  <div className="text-lg font-semibold text-white mb-2">Intelligent Upselling</div>
                  <div className="text-white/80">Perfect timing suggestions that feel helpful, not pushy</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-brand-purple/20 to-brand-accent/20 rounded-2xl border border-brand-purple/30">
              <div className="text-3xl">✨</div>
              <div className="text-white">
                <strong>ROI Guarantee:</strong> See measurable results within 30 days or we&apos;ll refund your investment.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-accent mb-2 font-serif">200+</div>
            <div className="text-white/80">Studios transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-accent mb-2 font-serif">£2.3M+</div>
            <div className="text-white/80">Extra revenue generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-accent mb-2 font-serif">98%</div>
            <div className="text-white/80">Would recommend</div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RevenueImpact