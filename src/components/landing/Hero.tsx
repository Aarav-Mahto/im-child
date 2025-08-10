
//src/components/landing/Hero.tsx

'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)

  const handleDemoClick = () => {
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExploreClick = () => {
    const architectureSection = document.getElementById('architecture')
    if (architectureSection) {
      architectureSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.fade-in')
        elements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('visible')
          }, index * 200)
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <div className={styles.heroText}>
              <div className={styles.heroTag}>
                <span>✨ AI-Powered Studio OS</span>
              </div>
              
              <h1 className={`${styles.heroTitle} fade-in`}>
                Your Studio Runs
                <span className={styles.titleHighlight}> Itself</span>
              </h1>
              
              <p className={`${styles.heroSubtitle} fade-in`}>
                Stop drowning in admin. Our AI workforce handles bookings, 
                retention, and growth while you focus on coaching.
              </p>

              <div className={`${styles.heroButtons} fade-in`}>
                <button 
                  onClick={handleDemoClick}
                  className={styles.btnPrimary}
                >
                  <span>Watch Demo</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={handleExploreClick}
                  className={styles.btnSecondary}
                >
                  How it works
                </button>
              </div>

              <div className={`${styles.socialProof} fade-in`}>
                <div className={styles.proofItem}>
                  <span className={styles.proofNumber}>200+</span>
                  <span className={styles.proofText}>Studios transformed</span>
                </div>
                <div className={styles.proofDivider}></div>
                <div className={styles.proofItem}>
                  <span className={styles.proofNumber}>£2.3M+</span>
                  <span className={styles.proofText}>Extra revenue generated</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={`${styles.dashboardPreview} fade-in`}>
                <div className={styles.dashboardHeader}>
                  <div className={styles.headerDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.headerTitle}>Wondrous Studio</div>
                </div>
                
                <div className={styles.dashboardContent}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricValue}>£14,247</div>
                    <div className={styles.metricLabel}>This month</div>
                    <div className={styles.metricTrend}>↗ +32%</div>
                  </div>
                  
                  <div className={styles.metricCard}>
                    <div className={styles.metricValue}>94%</div>
                    <div className={styles.metricLabel}>Retention</div>
                    <div className={styles.metricTrend}>↗ +12%</div>
                  </div>
                  
                  <div className={styles.activityFeed}>
                    <div className={styles.activityItem}>
                      <div className={styles.activityIcon}>🤖</div>
                      <div className={styles.activityText}>
                        <strong>AI booked</strong> Sarah&apos;s PT session
                      </div>
                      <div className={styles.activityTime}>2m ago</div>
                    </div>
                    
                    <div className={styles.activityItem}>
                      <div className={styles.activityIcon}>💝</div>
                      <div className={styles.activityText}>
                        <strong>Retention AI</strong> re-engaged James
                      </div>
                      <div className={styles.activityTime}>5m ago</div>
                    </div>
                    
                    <div className={styles.activityItem}>
                      <div className={styles.activityIcon}>📊</div>
                      <div className={styles.activityText}>
                        <strong>Insights</strong> suggest Tuesday 7pm slots
                      </div>
                      <div className={styles.activityTime}>12m ago</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingElements}>
                <div className={styles.floatingCard} style={{animationDelay: '0.5s'}}>
                  <span className={styles.cardEmoji}>⚡</span>
                  <span className={styles.cardText}>18hrs saved weekly</span>
                </div>
                
                <div className={styles.floatingCard} style={{animationDelay: '1s'}}>
                  <span className={styles.cardEmoji}>🎯</span>
                  <span className={styles.cardText}>Zero missed bookings</span>
                </div>
                
                <div className={styles.floatingCard} style={{animationDelay: '1.5s'}}>
                  <span className={styles.cardEmoji}>💎</span>
                  <span className={styles.cardText}>Premium member experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero