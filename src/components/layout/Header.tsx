'use client'

import React, { useState, useEffect } from 'react'
import Container from '../common/Container'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const headerClasses = [
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-cubic',
    isScrolled 
      ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' 
      : 'bg-white/80 backdrop-blur-xl border-b border-white/20 py-3'
  ].join(' ')

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/"
            className="flex items-center gap-3 font-bold text-xl text-text-primary no-underline transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl shadow-md">
              🚀
            </div>
            <span className="font-extrabold bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">
              AllWondrous
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('architecture')}
              className="bg-none border-none text-text-secondary font-medium text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              AI Modules
            </button>
            <button
              onClick={() => scrollToSection('ai-workforce')}
              className="bg-none border-none text-text-secondary font-medium text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              AI Workforce
            </button>
            <button
              onClick={() => scrollToSection('revenue-impact')}
              className="bg-none border-none text-text-secondary font-medium text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Revenue Results
            </button>
            <button
              onClick={() => scrollToSection('magic-inbox')}
              className="bg-none border-none text-text-secondary font-medium text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Smart Communication
            </button>
            <button className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white border-none px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300 ease-out-cubic shadow-md hover:-translate-y-0.5 hover:shadow-lg active:-translate-y-0">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-full bg-text-primary rounded-sm opacity-100 left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute block h-0.5 w-full bg-text-primary rounded-sm opacity-100 left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 -left-12' : 'top-2'}`}></span>
              <span className={`absolute block h-0.5 w-full bg-text-primary rounded-sm opacity-100 left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`block absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-white/20 shadow-xl transition-all duration-300 ease-out-cubic p-4 md:hidden ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100 visible' 
              : '-translate-y-full opacity-0 invisible'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <button 
            className="block w-full bg-none border-none text-text-secondary font-medium text-base cursor-pointer p-4 text-left transition-all duration-300 ease-in-out border-b border-black/5 hover:text-text-primary hover:bg-neutral-50"
            onClick={() => scrollToSection('architecture')}
          >
            AI Modules
          </button>
          <button 
            className="block w-full bg-none border-none text-text-secondary font-medium text-base cursor-pointer p-4 text-left transition-all duration-300 ease-in-out border-b border-black/5 hover:text-text-primary hover:bg-neutral-50"
            onClick={() => scrollToSection('ai-workforce')}
          >
            AI Workforce
          </button>
          <button 
            className="block w-full bg-none border-none text-text-secondary font-medium text-base cursor-pointer p-4 text-left transition-all duration-300 ease-in-out border-b border-black/5 hover:text-text-primary hover:bg-neutral-50"
            onClick={() => scrollToSection('revenue-impact')}
          >
            Revenue Results
          </button>
          <button 
            className="block w-full bg-none border-none text-text-secondary font-medium text-base cursor-pointer p-4 text-left transition-all duration-300 ease-in-out hover:text-text-primary hover:bg-neutral-50"
            onClick={() => scrollToSection('magic-inbox')}
          >
            Smart Communication
          </button>
          <button className="block w-full mx-4 mt-4 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white border-none px-4 py-4 rounded-xl font-semibold text-base cursor-pointer transition-all duration-300 ease-out-cubic shadow-md hover:-translate-y-0.5 hover:shadow-lg">
            Get Started
          </button>
        </nav>
      </Container>
    </header>
  )
}

export default Header