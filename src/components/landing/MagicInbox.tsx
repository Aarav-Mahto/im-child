//src/components/landing/MagicInbox.tsx

'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'

interface CommunicationExample {
  title: string;
  scenario: string;
  message: string;
  outcome: string;
  icon: string;
}

const communicationExamples: CommunicationExample[] = [
  {
    title: 'Perfect Timing',
    scenario: 'Member hasn\'t booked in 2 weeks',
    message: '"Hi Sarah! Noticed you\'ve been busy lately. Your favorite Tuesday yoga is available this week - shall I hold your usual spot? 🧘‍♀️"',
    outcome: '73% re-engagement rate',
    icon: '🎯'
  },
  {
    title: 'Helpful Upselling',
    scenario: 'Member books single session',
    message: '"Great choice on the PT session with James! FYI - our 4-session package saves £40 and James has Tuesday 7pm free. No pressure though! 💪"',
    outcome: '42% upgrade rate',
    icon: '💎'
  },
  {
    title: 'Genuine Care',
    scenario: 'Member misses their 3rd class',
    message: '"Hey Tom! Everything okay? Missing your Wednesday sessions isn\'t like you. Need to reschedule or just life being crazy? We\'re here when you\'re ready! ❤️"',
    outcome: '89% response rate',
    icon: '💝'
  }
]

const MagicInbox: React.FC = () => {
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden" id="magic-inbox">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            💬 Smart Communication
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Your <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Magic Inbox</span> That Actually Works
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            No more staring at blank screens wondering what to say. Our AI crafts 
            messages that sound exactly like you — warm, professional, and genuinely helpful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {communicationExamples.map((example, index) => (
            <div key={index} className="glass-strong p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group fade-in">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">{example.title}</h3>
                <div className="text-brand-accent font-semibold mb-3">{example.scenario}</div>
              </div>

              <p className="text-white/70 text-sm mb-6 italic">{example.scenario}</p>

              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                    <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                  </div>
                  <span className="text-xs text-white/60 font-semibold">From: Your Studio</span>
                </div>
                <div className="p-4 text-sm leading-relaxed text-white/90">
                  {example.message}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-brand-success/10 rounded-2xl border border-brand-success/20">
                <span className="text-2xl">✨</span>
                <span className="text-brand-success font-medium">{example.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="py-16 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-serif">
              What Makes Our AI Different
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-strong p-8 text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-bold text-white mb-3">Emotional Intelligence</h4>
                <p className="text-white/70 leading-relaxed">
                  Understands context, mood, and member history to craft messages that actually resonate.
                </p>
              </div>

              <div className="glass-strong p-8 text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-xl font-bold text-white mb-3">Perfect Timing</h4>
                <p className="text-white/70 leading-relaxed">
                  Knows when to reach out, when to follow up, and when to give space.
                </p>
              </div>

              <div className="glass-strong p-8 text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="text-xl font-bold text-white mb-3">Genuinely Helpful</h4>
                <p className="text-white/70 leading-relaxed">
                  Never feels like marketing. Always feels like a friend who happens to run a studio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="glass-strong p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
              &quot;I actually look forward to their messages. They&apos;re helpful, never pushy, and somehow always know exactly what I need to hear.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">SM</div>
              <div>
                <span className="block text-white font-semibold">Sarah M.</span>
                <span className="block text-white/60 text-sm">Yoga Member, London</span>
              </div>
            </div>
          </div>

          <div className="glass-strong p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
              &quot;My members constantly compliment our communication. They have no idea it&apos;s AI - it just feels like we really care about them.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">JK</div>
              <div>
                <span className="block text-white font-semibold">James K.</span>
                <span className="block text-white/60 text-sm">Studio Owner, Manchester</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MagicInbox