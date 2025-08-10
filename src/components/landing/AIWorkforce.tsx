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
    <section ref={sectionRef} className={styles.workforceSection} id="ai-workforce">
      <Container>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span>🤖 Your AI Team</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            Meet Your New <span className={styles.highlight}>Dream Team</span>
          </h2>
          
          <p className={styles.sectionSubtitle}>
            Four AI specialists who work 24/7, never call in sick, and genuinely care 
            about your studio&apos;s success as much as you do.
          </p>
        </div>

        <div className={styles.agentGrid}>
          {aiAgents.map((agent, index) => (
            <div key={index} className={`${styles.agentCard} fade-in`}>
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