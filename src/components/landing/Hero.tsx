
"use client";

import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-accent/5 pointer-events-none"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 60%), 
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 60%),
          radial-gradient(circle at 60% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)
        `
      }}></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Container>
        <div className="grid gap-8 lg:gap-16 items-center relative z-10 py-8 lg:py-16 xl:py-20 lg:grid-cols-2">
          {/* Hero Text - Enhanced Responsive */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-xs sm:text-sm font-semibold mb-6 lg:mb-8 animate-bounce">
              🚀 Revolutionary AI Business OS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-text-primary mb-4 lg:mb-6 font-serif tracking-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-brand-purple via-purple-500 to-brand-accent bg-clip-text text-transparent animate-pulse">
                AI Intelligence
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-text-secondary mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              The only business operating system that thinks, learns, and grows your revenue 24/7. 
              No complex setup, no learning curves—just intelligent automation that works.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start mb-6 lg:mb-8">
              <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Free Trial ✨
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Watch Demo
              </Button>
            </div>

            {/* Enhanced Social Proof Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left transform transition-all duration-500 hover:scale-105">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-purple mb-1 leading-none">
                  247%
                </div>
                <div className="text-text-secondary font-medium text-xs sm:text-sm leading-tight">
                  Average Revenue Increase
                </div>
              </div>
              <div className="text-center lg:text-left transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '100ms' }}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-purple mb-1 leading-none">
                  18hrs
                </div>
                <div className="text-text-secondary font-medium text-xs sm:text-sm leading-tight">
                  Saved Per Week
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual - Fully Responsive */}
          <div className={`relative flex justify-center items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-2xl lg:rounded-3xl p-0 shadow-2xl w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:bg-white/30 group">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 lg:py-4 bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200/50 transition-all duration-300 group-hover:bg-neutral-50/90">
                <div className="flex gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400 transition-all duration-300 group-hover:scale-110"></span>
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '50ms' }}></span>
                  <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-brand-success transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '100ms' }}></span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-text-secondary transition-all duration-300 group-hover:text-brand-purple">
                  AllWondrous AI
                </div>
              </div>

              {/* Enhanced Dashboard Content */}
              <div className="p-3 sm:p-4 lg:p-6">
                {/* Metric Cards with Enhanced Hover Effects */}
                <div className="bg-gradient-to-r from-bg-secondary/80 to-bg-secondary/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg lg:rounded-xl mb-3 lg:mb-4 flex items-center justify-between transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-brand-purple/10 hover:to-brand-accent/10 group/card cursor-pointer">
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-purple transition-all duration-300 group-hover/card:scale-110">
                      £12,847
                    </div>
                    <div className="text-xs lg:text-xs text-text-muted mt-1">
                      Monthly Revenue
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-brand-success font-semibold transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-brand-purple">
                    +34% ↗
                  </div>
                </div>

                <div className="bg-gradient-to-r from-bg-secondary/80 to-bg-secondary/60 backdrop-blur-sm p-3 sm:p-4 rounded-lg lg:rounded-xl mb-3 lg:mb-4 flex items-center justify-between transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-brand-accent/10 hover:to-brand-purple/10 group/card cursor-pointer" style={{ transitionDelay: '100ms' }}>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-purple transition-all duration-300 group-hover/card:scale-110">
                      94%
                    </div>
                    <div className="text-xs lg:text-xs text-text-muted mt-1">
                      Booking Rate
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-brand-success font-semibold transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-brand-accent">
                    +12% ↗
                  </div>
                </div>

                {/* Enhanced Activity Feed */}
                <div className="mt-3 lg:mt-4 space-y-2 lg:space-y-3">
                  <div className="flex items-center gap-2 lg:gap-3 py-2 lg:py-3 border-b border-neutral-200/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-purple/5 hover:to-transparent hover:scale-102 rounded-lg px-2 cursor-pointer group/item">
                    <div className="text-base lg:text-xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">🎯</div>
                    <div className="flex-1 text-xs lg:text-sm text-text-secondary">
                      <strong className="text-text-primary font-semibold transition-all duration-300 group-hover/item:text-brand-purple">AI Agent</strong> converted 3 leads
                    </div>
                    <div className="text-xs text-text-muted">2m ago</div>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 py-2 lg:py-3 border-b border-neutral-200/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-accent/5 hover:to-transparent hover:scale-102 rounded-lg px-2 cursor-pointer group/item">
                    <div className="text-base lg:text-xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">💰</div>
                    <div className="flex-1 text-xs lg:text-sm text-text-secondary">
                      <strong className="text-text-primary font-semibold transition-all duration-300 group-hover/item:text-brand-accent">Revenue boost</strong> £847 today
                    </div>
                    <div className="text-xs text-text-muted">1h ago</div>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 py-2 lg:py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-purple/5 hover:to-transparent hover:scale-102 rounded-lg px-2 cursor-pointer group/item">
                    <div className="text-base lg:text-xl transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">⚡</div>
                    <div className="flex-1 text-xs lg:text-sm text-text-secondary">
                      <strong className="text-text-primary font-semibold transition-all duration-300 group-hover/item:text-brand-purple">Smart upsell</strong> suggested
                    </div>
                    <div className="text-xs text-text-muted">3h ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements - Responsive */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <div className="absolute top-1/4 -right-2 xl:-right-4 flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl text-xs xl:text-sm font-semibold text-text-primary shadow-lg animate-float transition-all duration-500 hover:scale-105 hover:bg-white/30">
                <span className="text-lg xl:text-xl">📈</span>
                Revenue +£2,847
              </div>
              <div className="absolute top-1/2 -left-4 xl:-left-8 flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl text-xs xl:text-sm font-semibold text-text-primary shadow-lg animate-float transition-all duration-500 hover:scale-105 hover:bg-white/30" style={{ animationDelay: '1s' }}>
                <span className="text-lg xl:text-xl">🤖</span>
                AI Working
              </div>
              <div className="absolute bottom-1/4 right-4 xl:right-8 flex items-center gap-2 px-3 xl:px-4 py-2 xl:py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl text-xs xl:text-sm font-semibold text-text-primary shadow-lg animate-float transition-all duration-500 hover:scale-105 hover:bg-white/30" style={{ animationDelay: '2s' }}>
                <span className="text-lg xl:text-xl">⚡</span>
                Auto-pilot ON
              </div>
            </div>

            {/* Mobile Floating Elements */}
            <div className="absolute inset-0 pointer-events-none block lg:hidden">
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg text-xs font-semibold text-text-primary shadow-lg animate-float">
                <span className="text-sm">📈</span>
                +£2K
              </div>
              <div className="absolute bottom-4 left-4 flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg text-xs font-semibold text-text-primary shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm">🤖</span>
                AI ON
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
