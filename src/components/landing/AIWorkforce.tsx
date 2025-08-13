'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'
import { GoDotFill } from 'react-icons/go';

interface AIAgent {
  avatar: string;
  name: string;
  role: string;
  personality: string;
  capabilities: string[];
  impact: string;
  status: string;
}

const aiAgents: AIAgent[] = [
  {
    avatar: '💬',
    name: 'Alex',
    role: 'Booking Specialist',
    personality: 'Friendly, efficient, never misses a detail',
    capabilities: ['Instant booking responses', 'Payment processing', 'Schedule Optimisation', 'Customer support'],
    impact: 'Zero missed enquiries',
    status: 'Active now'
  },
  {
    avatar: '📊',
    name: 'Maya',
    role: 'Operations Manager',
    personality: 'Analytical, proactive, always one step ahead',
    capabilities: ['Schedule conflicts', 'Resource planning', 'Performance tracking', 'Automated workflows'],
    impact: '18hrs admin saved',
    status: 'Optimizing schedules'
  },
  {
    avatar: '💝',
    name: 'Sam',
    role: 'Retention Specialist',
    personality: 'Caring, intuitive, genuinely wants members to succeed',
    capabilities: ['Churn prediction', 'Personalised outreach', 'Member celebrations', 'Re-engagement campaigns'],
    impact: '47% churn reduction',
    status: 'Nurturing members'
  },
  {
    avatar: '🏆',
    name: 'Jordan',
    role: 'Team Motivator',
    personality: 'Inspiring, supportive, brings out the best in everyone',
    capabilities: ['Performance insights', 'Goal tracking', 'Recognition Programmes', 'Training suggestions'],
    impact: '40% team engagement',
    status: 'Coaching trainers'
  }
]

const AIWorkforce: React.FC = () => {
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
    <section ref={sectionRef} className="py-10 md:pt-32 bg-gradient-to-br from-neutral-50 to-white text-white relative overflow-hidden" id="ai-workforce">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            🤖 Your AI Team
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-serif">
            Meet Your New <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Dream Team</span>
          </h2>

          <p className="text-md sm:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Four AI specialists who work 24/7, never call in sick, and genuinely care
            about your studio&apos;s success as much as you do.
          </p>
        </div>

        {/* AI Agent Cards */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 mb-16 relative z-10">
          {aiAgents.map((agent, index) => (
            <div key={index} className="glass-strong max-w-[350px] p-9 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group fade-in">
              <div className="flex gap-5 items-center justify-center mb-6">
                <div className="flex items-center gap-4 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl">
                    {agent.avatar}
                  </div>
                  <div className="flex items-center justify-between absolute -bottom-3 left-1/2 -translate-x-1/2 bg-neutral-800 w-fit p-[2px] border border-neutral-500 rounded">
                    <GoDotFill size={20} className='text-green-600' />
                    <span className="text-brand-success whitespace-nowrap pr-1 text-[10px] font-medium">{agent.status}</span>
                  </div>
                </div>
                <div className="bg-brand-success/10 whitespace-nowrap text-brand-success px-3 py-1 rounded-full text-sm font-bold border border-brand-success/20">
                  {agent.impact}
                </div>
              </div>

              <div className="mb-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-neutral-800 mb-2 font-serif">{agent.name}</h3>
                <p className="text-brand-accent font-semibold text-lg mb-3">{agent.role}</p>
                <p className="text-neutral-600 italic leading-relaxed">&quot;{agent.personality}&quot;</p>
              </div>

              <div>
                <h4 className="text-neutral-800 font-semibold mb-3">Specializes in:</h4>
                <div className="flex flex-wrap gap-1 border">
                  {agent.capabilities.map((capability, capIndex) => (
                    <span key={capIndex} className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs bg-blue-100 text-neutral-600 font-bold">
                      <span className="size-1.5 inline-block rounded-full bg-blue-800"></span>
                      {capability}
                    </span>
                  ))}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Cards */}
        <div className="mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
            <div className="glass-light p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:bg-white/20 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4 font-serif transition-all duration-300 group-hover:text-brand-accent">Always On</h3>
              <p className="text-neutral-700 leading-relaxed transition-all duration-300 group-hover:text-neutral-800">
                Your AI team works 24/7, 365 days a year. No holidays,
                no sick days, no bad moods.
              </p>
            </div>
            <div className="glass-light p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:bg-white/20 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                🎯
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4 font-serif transition-all duration-300 group-hover:text-brand-accent">Zero Errors</h3>
              <p className="text-neutral-700 leading-relaxed transition-all duration-300 group-hover:text-neutral-700">
                Perfect accuracy every time. No double bookings,
                no missed payments, no forgotten follow-ups.
              </p>
            </div>
            <div className="glass-light p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:bg-white/20 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                💡
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-4 font-serif transition-all duration-300 group-hover:text-brand-accent">Gets Smarter</h3>
              <p className="text-neutral-700 leading-relaxed transition-all duration-300 group-hover:text-neutral-800">
                Learns your studio&apos;s unique patterns and preferences
                to serve your members better every day.
              </p>
            </div>
          </div>
        </div >
      </Container >
    </section >
  )
}

export default AIWorkforce
