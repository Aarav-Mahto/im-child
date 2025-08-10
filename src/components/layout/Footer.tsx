
//src/components/layout/Footer.tsx

'use client'

import Container from '@/components/common/Container'
import styles from '@/styles/footer.module.css'

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>✨</div>
                <span className={styles.logoText}>Wondrous</span>
              </div>
              <p className={styles.brandDescription}>
                The AI Operating System for Modern Fitness Studios. 
                Transform your business while you focus on what you love.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Product</h4>
                <button 
                  onClick={() => scrollToSection('architecture')}
                  className={styles.footerLink}
                >
                  AI Modules
                </button>
                <button 
                  onClick={() => scrollToSection('ai-workforce')}
                  className={styles.footerLink}
                >
                  AI Workforce
                </button>
                <button 
                  onClick={() => scrollToSection('revenue-impact')}
                  className={styles.footerLink}
                >
                  Revenue Results
                </button>
                <button 
                  onClick={() => scrollToSection('magic-inbox')}
                  className={styles.footerLink}
                >
                  Smart Communication
                </button>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Company</h4>
                <a href="/about" className={styles.footerLink}>About Us</a>
                <a href="/careers" className={styles.footerLink}>Careers</a>
                <a href="/blog" className={styles.footerLink}>Blog</a>
                <a href="/press" className={styles.footerLink}>Press</a>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Support</h4>
                <a href="/help" className={styles.footerLink}>Help Center</a>
                <a href="/contact" className={styles.footerLink}>Contact</a>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className={styles.footerLink}
                >
                  Book Demo
                </button>
                <a href="/status" className={styles.footerLink}>System Status</a>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Legal</h4>
                <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
                <a href="/terms" className={styles.footerLink}>Terms of Service</a>
                <a href="/security" className={styles.footerLink}>Security</a>
                <a href="/gdpr" className={styles.footerLink}>GDPR</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.bottomContent}>
              <p className={styles.copyright}>
                &copy; 2024 Wondrous Technologies Ltd. All rights reserved.
              </p>
              
              <div className={styles.bottomLinks}>
                <span className={styles.bottomText}>Made with ❤️ for studio owners</span>
                <button 
                  onClick={scrollToTop}
                  className={styles.scrollToTop}
                  aria-label="Scroll to top"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer