
"use client";

import React from 'react'
import Container from '../common/Container'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-slate-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-accent/5 pointer-events-none"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="grid gap-16 items-center relative z-10 py-16 lg:grid-cols-2 lg:gap-24">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-8">
              🚀 Revolutionary AI Business OS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-text-primary mb-6 font-serif tracking-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-text-secondary mb-8 max-w-2xl lg:mx-0">
              The only business operating system that thinks, learns, and grows your revenue 24/7. 
              No complex setup, no learning curves—just intelligent automation that works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center lg:justify-start mb-8">
              <Button variant="primary" size="lg" className="min-w-48">
                Start Free Trial ✨
              </Button>
              <Button variant="secondary" size="lg" className="min-w-48">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-purple mb-1 leading-none">
                  247%
                </div>
                <div className="text-text-secondary font-medium text-sm leading-tight">
                  Average Revenue Increase
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-purple mb-1 leading-none">
                  18hrs
                </div>
                <div className="text-text-secondary font-medium text-sm leading-tight">
                  Saved Per Week
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex justify-center items-center">
            <div className="glass-strong rounded-3xl p-0 shadow-2xl w-full max-w-md overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-200">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-brand-success"></span>
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  AllWondrous AI
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Metric Cards */}
                <div className="bg-bg-secondary p-4 rounded-xl mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-brand-purple">
                      £12,847
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      Monthly Revenue
                    </div>
                  </div>
                  <div className="text-sm text-brand-success font-semibold">
                    +34% ↗
                  </div>
                </div>

                <div className="bg-bg-secondary p-4 rounded-xl mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-brand-purple">
                      94%
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      Booking Rate
                    </div>
                  </div>
                  <div className="text-sm text-brand-success font-semibold">
                    +12% ↗
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="mt-4">
                  <div className="flex items-center gap-3 py-3 border-b border-neutral-200">
                    <div className="text-xl">🎯</div>
                    <div className="flex-1 text-sm text-text-secondary">
                      <strong className="text-text-primary font-semibold">AI Agent</strong> converted 3 leads
                    </div>
                    <div className="text-xs text-text-muted">2m ago</div>
                  </div>
                  <div className="flex items-center gap-3 py-3 border-b border-neutral-200">
                    <div className="text-xl">💰</div>
                    <div className="flex-1 text-sm text-text-secondary">
                      <strong className="text-text-primary font-semibold">Revenue boost</strong> £847 today
                    </div>
                    <div className="text-xs text-text-muted">1h ago</div>
                  </div>
                  <div className="flex items-center gap-3 py-3">
                    <div className="text-xl">⚡</div>
                    <div className="flex-1 text-sm text-text-secondary">
                      <strong className="text-text-primary font-semibold">Smart upsell</strong> suggested
                    </div>
                    <div className="text-xs text-text-muted">3h ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <div className="absolute top-1/4 -right-4 flex items-center gap-2 px-4 py-3 glass-strong rounded-xl text-sm font-semibold text-text-primary shadow-lg animate-float">
                <span className="text-xl">📈</span>
                Revenue +£2,847
              </div>
              <div className="absolute top-1/2 -left-8 flex items-center gap-2 px-4 py-3 glass-strong rounded-xl text-sm font-semibold text-text-primary shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🤖</span>
                AI Working
              </div>
              <div className="absolute bottom-1/4 right-8 flex items-center gap-2 px-4 py-3 glass-strong rounded-xl text-sm font-semibold text-text-primary shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">⚡</span>
                Auto-pilot ON
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
