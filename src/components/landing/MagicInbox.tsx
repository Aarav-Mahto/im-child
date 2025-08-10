
//src/components/landing/MagicInbox.tsx

'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

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
    <section ref={sectionRef} className={styles.communicationSection} id="magic-inbox">
      <Container>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span>💬 Smart Communication</span>
          </div>
          
          <h2 className={styles.sectionTitle}>
            Every Message Feels <span className={styles.highlight}>Personal</span>
          </h2>
          
          <p className={styles.sectionSubtitle}>
            Your AI doesn&apos;t just send messages — it creates genuine connections. 
            See how intelligent communication transforms relationships.
          </p>
        </div>

        <div className={styles.examplesGrid}>
          {communicationExamples.map((example, index) => (
            <div key={index} className={`${styles.exampleCard} fade-in`}>
              <div className={styles.exampleHeader}>
                <div className={styles.exampleIcon}>
                  <span>{example.icon}</span>
                </div>
                <div className={styles.exampleOutcome}>{example.outcome}</div>
              </div>
              
              <h3 className={styles.exampleTitle}>{example.title}</h3>
              <p className={styles.exampleScenario}>{example.scenario}</p>
              
              <div className={styles.messagePreview}>
                <div className={styles.messageHeader}>
                  <div className={styles.messageDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.messageFrom}>Wondrous AI</span>
                </div>
                <p className={styles.messageContent}>{example.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.communicationShowcase}>
          <div className={styles.showcaseContent}>
            <h3 className={styles.showcaseTitle}>
              What Makes Our AI Different
            </h3>
            
            <div className={styles.differentiators}>
              <div className={styles.differentiatorCard}>
                <div className={styles.differentiatorIcon}>🧠</div>
                <h4 className={styles.differentiatorTitle}>Emotional Intelligence</h4>
                <p className={styles.differentiatorText}>
                  Understands context, mood, and member history to craft messages that actually resonate.
                </p>
              </div>
              
              <div className={styles.differentiatorCard}>
                <div className={styles.differentiatorIcon}>⏰</div>
                <h4 className={styles.differentiatorTitle}>Perfect Timing</h4>
                <p className={styles.differentiatorText}>
                  Knows when to reach out, when to follow up, and when to give space.
                </p>
              </div>
              
              <div className={styles.differentiatorCard}>
                <div className={styles.differentiatorIcon}>❤️</div>
                <h4 className={styles.differentiatorTitle}>Genuinely Helpful</h4>
                <p className={styles.differentiatorText}>
                  Never feels like marketing. Always feels like a friend who happens to run a studio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              &quot;I actually look forward to their messages. They&apos;re helpful, never pushy, and somehow always know exactly what I need to hear.&quot;
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>SM</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Sarah M.</span>
                <span className={styles.authorRole}>Yoga Member, London</span>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              &quot;My members constantly compliment our communication. They have no idea it&apos;s AI - it just feels like we really care about them.&quot;
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>JK</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>James K.</span>
                <span className={styles.authorRole}>Studio Owner, Manchester</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MagicInbox