
"use client";

import React from 'react'
import Container from '../common/Container'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 mb-12">
            {/* Footer Brand */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl shadow-md">
                  🚀
                </div>
                <span className="text-2xl font-extrabold text-white">AllWondrous</span>
              </div>
              <p className="text-white/80 leading-relaxed text-base max-w-72">
                The intelligent business operating system that transforms how you work, grow, and succeed. 
                Powered by AI, built for results.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 transition-all duration-300 ease-out-cubic no-underline hover:bg-white/20 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                >
                  📧
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 transition-all duration-300 ease-out-cubic no-underline hover:bg-white/20 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 transition-all duration-300 ease-out-cubic no-underline hover:bg-white/20 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                >
                  💼
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:col-span-3 gap-8 md:gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Product</h4>
                <button
                  onClick={() => scrollToSection('architecture')}
                  className="bg-none border-none text-white/70 text-sm cursor-pointer transition-all duration-300 text-left py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1"
                >
                  AI Modules
                </button>
                <button
                  onClick={() => scrollToSection('ai-workforce')}
                  className="bg-none border-none text-white/70 text-sm cursor-pointer transition-all duration-300 text-left py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1"
                >
                  AI Workforce
                </button>
                <button
                  onClick={() => scrollToSection('revenue-impact')}
                  className="bg-none border-none text-white/70 text-sm cursor-pointer transition-all duration-300 text-left py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1"
                >
                  Revenue Results
                </button>
                <button
                  onClick={() => scrollToSection('magic-inbox')}
                  className="bg-none border-none text-white/70 text-sm cursor-pointer transition-all duration-300 text-left py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1"
                >
                  Smart Communication
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Company</h4>
                <a href="/about" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">About Us</a>
                <a href="/careers" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Careers</a>
                <a href="/blog" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Blog</a>
                <a href="/press" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Press</a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Resources</h4>
                <a href="/help" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Help Center</a>
                <a href="/guides" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Guides</a>
                <a href="/api" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">API Docs</a>
                <a href="/status" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">System Status</a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Legal</h4>
                <a href="/privacy" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Privacy Policy</a>
                <a href="/terms" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Terms of Service</a>
                <a href="/cookies" className="text-white/70 text-sm no-underline transition-all duration-300 py-1 relative hover:text-white hover:pl-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-gradient-to-r before:from-brand-purple before:to-brand-accent before:transition-all before:duration-300 hover:before:w-1">Cookie Policy</a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between text-center md:text-left">
              <p className="text-white/60 text-sm m-0">
                © 2024 AllWondrous. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-white/60 text-sm">Built with ❤️ for business growth</span>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white/70 cursor-pointer transition-all duration-300 ease-out-cubic hover:bg-white/20 hover:text-white hover:-translate-y-0.5 hover:shadow-md active:-translate-y-0"
                >
                  ↑
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
