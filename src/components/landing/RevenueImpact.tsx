
//src/components/landing/RevenueImpact.tsx

'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

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
    <section ref={sectionRef} className={styles.revenueSection} id="revenue-impact">
      <Container>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span>💎 Proven Results</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            Real Revenue. <span className={styles.highlight}>Real Results.</span>
          </h2>
          
          <p className={styles.sectionSubtitle}>
            Stop wondering &quot;what if&quot; and start seeing actual numbers. 
            Our AI doesn&apos;t just promise growth — it delivers it.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {revenueMetrics.map((metric, index) => (
            <div key={index} className={`${styles.metricCard} fade-in`}>
              <div className={styles.metricHeader}>
                <div className={styles.metricIcon}>
                  <span>{metric.icon}</span>
                </div>
                <div className={styles.metricTrend}>{metric.trend}</div>
              </div>
              
              <div className={styles.metricValue}>{metric.value}</div>
              <h3 className={styles.metricLabel}>{metric.label}</h3>
              <p className={styles.metricDescription}>{metric.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.revenueBreakdown}>
          <div className={styles.breakdownCard}>
            <h3 className={styles.breakdownTitle}>
              How We Generate <span className={styles.highlight}>£14K+ Monthly</span>
            </h3>
            <p className={styles.breakdownSubtitle}>
              Real revenue streams, not marketing fluff
            </p>
            
            <div className={styles.revenueStreams}>
              <div className={styles.streamItem}>
                <div className={styles.streamIcon}>🎯</div>
                <div className={styles.streamContent}>
                  <div className={styles.streamAmount}>£6,200</div>
                  <div className={styles.streamSource}>Smart Booking Conversion</div>
                  <div className={styles.streamDetail}>AI converts 3.2X more enquiries into paid sessions</div>
                </div>
              </div>
              
              <div className={styles.streamItem}>
                <div className={styles.streamIcon}>💝</div>
                <div className={styles.streamContent}>
                  <div className={styles.streamAmount}>£4,800</div>
                  <div className={styles.streamSource}>Retention & Re-engagement</div>
                  <div className={styles.streamDetail}>Predictive AI prevents churn and wins back lost members</div>
                </div>
              </div>
              
              <div className={styles.streamItem}>
                <div className={styles.streamIcon}>⚡</div>
                <div className={styles.streamContent}>
                  <div className={styles.streamAmount}>£3,247</div>
                  <div className={styles.streamSource}>Intelligent Upselling</div>
                  <div className={styles.streamDetail}>Perfect timing suggestions that feel helpful, not pushy</div>
                </div>
              </div>
            </div>
            
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>✨</div>
              <div className={styles.guaranteeText}>
                <strong>ROI Guarantee:</strong> See measurable results within 30 days or we&apos;ll refund your investment.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socialProofStats}>
          <div className={styles.proofStat}>
            <span className={styles.proofNumber}>200+</span>
            <span className={styles.proofLabel}>Studios transformed</span>
          </div>
          <div className={styles.proofStat}>
            <span className={styles.proofNumber}>£2.3M+</span>
            <span className={styles.proofLabel}>Extra revenue generated</span>
          </div>
          <div className={styles.proofStat}>
            <span className={styles.proofNumber}>98%</span>
            <span className={styles.proofLabel}>Would recommend</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RevenueImpact