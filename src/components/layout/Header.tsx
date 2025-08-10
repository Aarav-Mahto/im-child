//src/components/layout/Header.tsx


'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/header.module.css'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleCTA = () => {
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>✨</div>
            <span className={styles.logoText}>Wondrous</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.navigation}>
            <button 
              onClick={() => scrollToSection('architecture')}
              className={styles.navLink}
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('ai-workforce')}
              className={styles.navLink}
            >
              AI Team
            </button>
            <button 
              onClick={() => scrollToSection('revenue-impact')}
              className={styles.navLink}
            >
              Results
            </button>
            <button 
              onClick={handleCTA}
              className={styles.ctaButton}
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNavigation} ${mobileMenuOpen ? styles.open : ''}`}>
          <button 
            onClick={() => scrollToSection('architecture')}
            className={styles.mobileNavLink}
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('ai-workforce')}
            className={styles.mobileNavLink}
          >
            AI Team
          </button>
          <button 
            onClick={() => scrollToSection('revenue-impact')}
            className={styles.mobileNavLink}
          >
            Results
          </button>
          <button 
            onClick={handleCTA}
            className={styles.mobileCTA}
          >
            Get Started
          </button>
        </div>
      </Container>
    </header>
  )
}

export default Header