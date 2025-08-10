//src/components/landing/OSArchitecture.tsx

'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

interface OSModule {
  icon: string;
  title: string;
  description: string;
  features: string[];
  metric: string;
  color: string;
}

const osModules: OSModule[] = [
  {
    icon: '🧠',
    title: 'Intelligent Booking',
    description: 'AI that never sleeps, never makes mistakes, and converts every enquiry into revenue.',
    features: ['24/7 instant responses', 'Smart pricing suggestions', 'Automatic confirmations'],
    metric: '3.2X more bookings',
    color: 'purple'
  },
  {
    icon: '💝',
    title: 'Retention Engine',
    description: 'Predictive intelligence that keeps members engaged without being pushy.',
    features: ['Churn prediction', 'Personalized nudges', 'Milestone celebrations'],
    metric: '47% less churn',
    color: 'pink'
  },
  {
    icon: '⚡',
    title: 'Revenue Optimizer',
    description: 'Subtle upsells and perfect timing that feels helpful, never sales-y.',
    features: ['Smart recommendations', 'Package suggestions', 'Pricing intelligence'],
    metric: '£14K monthly boost',
    color: 'cyan'
  },
  {
    icon: '📊',
    title: 'Actionable Insights',
    description: 'Real insights you can act on immediately. No spreadsheets, no analysis paralysis.',
    features: ['One-click reports', 'Trend alerts', 'Growth opportunities'],
    metric: 'Decisions in seconds',
    color: 'green'
  },
  {
    icon: '🤖',
    title: 'Admin Automation',
    description: 'All the boring stuff handled invisibly while you focus on what you love.',
    features: ['Smart scheduling', 'Payment processing', 'Member communications'],
    metric: '18hrs saved weekly',
    color: 'orange'
  },
  {
    icon: '✨',
    title: 'Member Experience',
    description: 'Every touchpoint perfectly timed to create moments of delight and connection.',
    features: ['Seamless journeys', 'Surprise moments', 'Community building'],
    metric: '94% satisfaction',
    color: 'violet'
  }
]

const OSArchitecture: React.FC = () => {
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
              }, index * 100)
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
    <section ref={sectionRef} className={styles.osSection} id="architecture">
      <Container>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span>🔮 Studio Intelligence</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            Six AI Modules Working as <span className={styles.highlight}>One Brain</span>
          </h2>
          
          <p className={styles.sectionSubtitle}>
            While you focus on coaching, our AI handles everything else — 
            seamlessly, intelligently, 24/7.
          </p>
        </div>

        <div className={styles.moduleGrid}>
          {osModules.map((module, index) => (
            <div key={index} className={`${styles.moduleCard} ${styles[`module${module.color.charAt(0).toUpperCase()}${module.color.slice(1)}`]} fade-in`}>
              <div className={styles.moduleHeader}>
                <div className={styles.moduleIcon}>
                  <span>{module.icon}</span>
                </div>
                <div className={styles.moduleMetric}>{module.metric}</div>
              </div>
              
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <p className={styles.moduleDescription}>{module.description}</p>
              
              <div className={styles.moduleFeatures}>
                {module.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.featureTag}>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.osShowcase}>
          <div className={styles.showcaseCard}>
            <div className={styles.showcaseContent}>
              <h3 className={styles.showcaseTitle}>
                From Overwhelmed to <span className={styles.highlight}>Unstoppable</span>
              </h3>
              <p className={styles.showcaseDescription}>
                Join 200+ studio owners who&apos;ve transformed their businesses from 
                stressful admin nightmares into smooth, profitable operations.
              </p>
              
              <div className={styles.transformationFlow}>
                <div className={styles.flowCard}>
                  <div className={styles.flowIcon}>😰</div>
                  <div className={styles.flowText}>
                    <strong>Before:</strong> Drowning in admin, missing bookings, losing members
                  </div>
                </div>
                
                <div className={styles.flowArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className={styles.flowCard}>
                  <div className={styles.flowIcon}>🚀</div>
                  <div className={styles.flowText}>
                    <strong>After:</strong> AI handles everything, revenue grows, you focus on coaching
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OSArchitecture