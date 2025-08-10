
//src/components/landing/SimpleCTA.tsx

'use client'

import { useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

const SimpleCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const handleWatchDemo = () => {
    // In a real implementation, this would open a demo modal or redirect to demo page
    window.open('https://calendly.com/wondrous-demo', '_blank')
  }

  const handleLearnMore = () => {
    // Scroll to architecture section to learn more
    const architectureSection = document.getElementById('architecture')
    if (architectureSection) {
      architectureSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className={styles.simpleCTASection} id="demo">
      <Container>
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your <span className={styles.highlight}>Studio?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              See Wondrous in action with a personalized 5-minute demo. 
              No commitment, no sales pitch - just results.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <button 
              onClick={handleWatchDemo}
              className={styles.primaryCTA}
            >
              <span>Watch Demo</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={handleLearnMore}
              className={styles.secondaryCTA}
            >
              Learn More
            </button>
          </div>

          <div className={styles.trustSignals}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⚡</div>
              <div className={styles.trustText}>
                <span className={styles.trustTitle}>24hr Setup</span>
                <span className={styles.trustDetail}>Live in one day</span>
              </div>
            </div>
            
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🔒</div>
              <div className={styles.trustText}>
                <span className={styles.trustTitle}>Bank Security</span>
                <span className={styles.trustDetail}>Your data protected</span>
              </div>
            </div>
            
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>📈</div>
              <div className={styles.trustText}>
                <span className={styles.trustTitle}>30-Day Results</span>
                <span className={styles.trustDetail}>Or money back</span>
              </div>
            </div>
            
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>💬</div>
              <div className={styles.trustText}>
                <span className={styles.trustTitle}>24/7 Support</span>
                <span className={styles.trustDetail}>We&apos;re here to help</span>
              </div>
            </div>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.proofStats}>
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
            
            <p className={styles.proofText}>
              Join studio owners who&apos;ve already transformed their businesses with Wondrous
            </p>
          </div>

          <div className={styles.urgencyNote}>
            <div className={styles.urgencyIcon}>🔥</div>
            <p className={styles.urgencyText}>
              <strong>Limited Time:</strong> Get premium onboarding support with your first month. 
              Book your demo before this offer expires.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SimpleCTA