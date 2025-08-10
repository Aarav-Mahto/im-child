'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

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
    capabilities: ['Instant booking responses', 'Payment processing', 'Schedule optimization', 'Customer support'],
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
    capabilities: ['Churn prediction', 'Personalized outreach', 'Member celebrations', 'Re-engagement campaigns'],
    impact: '47% churn reduction',
    status: 'Nurturing members'
  },
  {
    avatar: '🏆',
    name: 'Jordan',
    role: 'Team Motivator',
    personality: 'Inspiring, supportive, brings out the best in everyone',
    capabilities: ['Performance insights', 'Goal tracking', 'Recognition programs', 'Training suggestions'],
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden" id="ai-workforce">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <Container>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            🤖 Your AI Team
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Meet Your New <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Dream Team</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Four AI specialists who work 24/7, never call in sick, and genuinely care 
            about your studio&apos;s success as much as you do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
          {aiAgents.map((agent, index) => (
            <div key={index} className="glass-strong p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group fade-in">
              <div className={styles.agentHeader}>
                <div className={styles.agentAvatar}>
                  <span className={styles.avatarIcon}>{agent.avatar}</span>
                  <div className={styles.statusIndicator}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>{agent.status}</span>
                  </div>
                </div>
                <div className={styles.agentImpact}>{agent.impact}</div>
              </div>
              
              <div className={styles.agentInfo}>
                <h3 className={styles.agentName}>{agent.name}</h3>
                <p className={styles.agentRole}>{agent.role}</p>
                <p className={styles.agentPersonality}>&quot;{agent.personality}&quot;</p>
              </div>
              
              <div className={styles.agentCapabilities}>
                <h4 className={styles.capabilitiesTitle}>Specializes in:</h4>
                <div className={styles.capabilityTags}>
                  {agent.capabilities.map((capability, capIndex) => (
                    <span key={capIndex} className={styles.capabilityTag}>
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.teamShowcase}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseIcon}>⚡</div>
              <h3 className={styles.showcaseTitle}>Always On</h3>
              <p className={styles.showcaseText}>
                Your AI team works 24/7, 365 days a year. No holidays, 
                no sick days, no bad moods.
              </p>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseIcon}>🎯</div>
              <h3 className={styles.showcaseTitle}>Zero Errors</h3>
              <p className={styles.showcaseText}>
                Perfect accuracy every time. No double bookings, 
                no missed payments, no forgotten follow-ups.
              </p>
            </div>
            
            <div className={styles.showcaseCard}>
              <div className={styles.showcaseIcon}>💡</div>
              <h3 className={styles.showcaseTitle}>Gets Smarter</h3>
              <p className={styles.showcaseText}>
                Learns your studio&apos;s unique patterns and preferences 
                to serve your members better every day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AIWorkforce