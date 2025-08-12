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
      ? 'bg-black/20 backdrop-blur-xl text-white shadow-lg py-2'
      : 'bg-black/80 backdrop-blur-xl border-b border-white/20 py-3'
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
              ✨
            </div>
            <span className="font-extrabold bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">
              Wondrous
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden text-neutral-100 lg:flex items-center md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-8">
            <button
              onClick={() => scrollToSection('architecture')}
              className="bg-none border-none whitespace-nowrap font-medium text-sm lg:text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              AI Modules
            </button>
            <button
              onClick={() => scrollToSection('ai-workforce')}
              className="bg-none border-none whitespace-nowrap font-medium text-sm lg:text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              AI Workforce
            </button>
            <button
              onClick={() => scrollToSection('revenue-impact')}
              className="bg-none border-none whitespace-nowrap font-medium text-sm lg:text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Revenue Results
            </button>
            <button
              onClick={() => scrollToSection('magic-inbox')}
              className="bg-none border-none whitespace-nowrap font-medium text-sm lg:text-base cursor-pointer transition-all duration-300 relative py-2 hover:text-brand-purple hover:-translate-y-px after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-brand-purple after:to-brand-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Smart Communication
            </button>
            <div className="w-full flex justify-center">
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-full bg-neutral-50 rounded-sm opacity-100 left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute block h-0.5 w-full bg-neutral-50 rounded-sm opacity-100 left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 -left-12' : 'top-2'}`}></span>
              <span className={`absolute block h-0.5 w-full bg-neutral-50 rounded-sm opacity-100 left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`block absolute top-full left-0 right-0 bg-black/95 text-neutral-100 backdrop-blur-xl border-b border-neutral-200 shadow-2xl transition-all duration-300 ease-out-cubic lg:hidden ${isMobileMenuOpen
              ? 'translate-y-0 opacity-100 visible'
              : '-translate-y-full opacity-0 invisible'
            }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="py-2">
            <button
              className="block w-full border-none font-medium text-base cursor-pointer py-4 px-6 text-left transition-all duration-300 ease-in-out border-b border-neutral-100 hover:text-text-primary hover:bg-neutral-50"
              onClick={() => scrollToSection('architecture')}
            >
              AI Modules
            </button>
            <button
              className="block w-full border-none font-medium text-base cursor-pointer py-4 px-6 text-left transition-all duration-300 ease-in-out border-b border-neutral-100 hover:text-text-primary hover:bg-neutral-50"
              onClick={() => scrollToSection('ai-workforce')}
            >
              AI Workforce
            </button>
            <button
              className="block w-full border-none font-medium text-base cursor-pointer py-4 px-6 text-left transition-all duration-300 ease-in-out border-b border-neutral-100 hover:text-text-primary hover:bg-neutral-50"
              onClick={() => scrollToSection('revenue-impact')}
            >
              Revenue Results
            </button>
            <button
              className="block w-full border-none font-medium text-base cursor-pointer py-4 px-6 text-left transition-all duration-300 ease-in-out hover:text-text-primary hover:bg-neutral-50"
              onClick={() => scrollToSection('magic-inbox')}
            >
              Smart Communication
            </button>
            <div className="w-full flex justify-center">
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header