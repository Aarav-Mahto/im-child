//src/components/landing/MagicInbox.tsx

'use client'

import React from 'react'
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
    message: '"Hi Sarah! Noticed you\'ve been busy lately. Your Favourite Tuesday yoga is available this week - shall I hold your usual spot? 🧘‍♀️"',
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
    <section ref={sectionRef} className="py-10 md:py-32 bg-white text-neutral-800 relative overflow-hidden" id="magic-inbox">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div> */}

      <Container>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            💬 Smart Communication
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Every Message Feels <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Personal</span>
          </h2>

          <p className="text-md sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Your AI doesn't just send messages — it creates genuine connections. See how intelligent communication transforms relationships.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-8 mb-5 md:mb-16 relative z-10 w-fit mx-auto">
          {communicationExamples.map((example, index) => (
            <div key={index} className="glass-strong border !bg-neutral-200 border-neutral-400 max-w-[300px] p-4 xl:p-8 transition-all rounded-lg duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group fade-in">
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{example.icon}</span>
                </div>
                <div className="flex items-center gap-3 px-4 w-fit bg-brand-success/10 rounded-2xl border border-brand-success/20">
                  <span className="text-brand-success whitespace-nowrap font-medium">{example.outcome}</span>
                </div>
              </div>

              <div className="my-3">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{example.title}</h3>
                <div className="text-brand-accent font-semibold">{example.scenario}</div>
              </div>

              <div className="bg-white text-neutral-800 border border-white/10 rounded-2xl overflow-hidden mb-6">
                <div className="flex items-center justify-between px-4 py-3 bg-neutral-100 border-b border-neutral-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <span className="text-xs text-neutral-500 font-semibold">Wondrous AI</span>
                </div>
                <div className="p-4 text-xs leading-relaxed text-neutral-800 ">
                  {example.message}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-16 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              What Makes Our AI Different
            </h3>

            <div className="flex flex-row flex-wrap justify-center gap-8 w-fit mx-auto">
              <div className="glass-strong flex flex-col items-center justify-center !bg-neutral-200 rounded-lg max-w-[250px] p-8 text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-lg font-bold text-neutral-900 mb-3">Emotional Intelligence</h4>
                <p className="text-neutral-700 italic text-sm leading-relaxed">
                  Understands context, mood, and member history to craft messages that actually resonate.
                </p>
              </div>

              <div className="glass-strong flex flex-col items-center justify-center !bg-neutral-200 rounded-lg max-w-[250px] p-8 text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-lg font-bold text-neutral-900 mb-3">Perfect Timing</h4>
                <p className="text-neutral-700 italic text-sm leading-relaxed">
                  Knows when to reach out, when to follow up, and when to give space.
                </p>
              </div>

              <div className="glass-strong flex flex-col items-center justify-center !bg-neutral-200 rounded-lg max-w-[250px] p-8 text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-4xl mb-4">❤️</div>
                <h4 className="text-lg font-bold text-neutral-900 mb-3">Genuinely Helpful</h4>
                <p className="text-neutral-700 italic text-sm leading-relaxed">
                  Never feels like marketing. Always feels like a friend who happens to run a studio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="glass-strong !bg-neutral-200 p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-neutral-900 text-lg leading-relaxed mb-6 italic">
              &quot;My members constantly compliment our communication. They have no idea it&apos;s AI - it just feels like we really care about them.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">SM</div>
              <div>
                <span className="block text-neutral-800 font-semibold">Sarah M.</span>
                <span className="block text-neutral-600 text-sm">Yoga Member, London</span>
              </div>
            </div>
          </div>

          <div className="glass-strong !bg-neutral-300 p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-neutral-900 text-lg leading-relaxed mb-6 italic">
              &quot;I actually look forward to their messages. They&apos;re helpful, never pushy, and somehow always know exactly what I need to hear.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">JK</div>
              <div>
                <span className="block text-neutral-800 font-semibold">James K.</span>
                <span className="block text-neutral-600 text-sm">Studio Owner, Manchester</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MagicInbox