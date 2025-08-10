
"use client";

import React from 'react'
import Container from '../common/Container'

const SimpleCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-bg-secondary to-bg-tertiary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.03) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 tracking-tight leading-tight">
              Ready to <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Join thousands of businesses already using AI to grow smarter, faster, and more profitably.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white border-none rounded-2xl text-lg font-bold cursor-pointer transition-all duration-300 ease-out-cubic shadow-xl min-w-52 justify-center hover:-translate-y-1 hover:shadow-2xl active:-translate-y-px">
              Start Free Trial ✨
            </button>
            <button className="inline-flex items-center justify-center px-10 py-5 bg-bg-primary text-text-primary border-2 border-neutral-200 rounded-2xl text-lg font-semibold cursor-pointer transition-all duration-300 ease-out-cubic min-w-52 hover:bg-neutral-50 hover:border-brand-purple hover:text-brand-purple hover:-translate-y-0.5 hover:shadow-md">
              Watch Demo
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-2xl lg:max-w-none mx-auto">
            <div className="flex lg:flex-col items-center gap-4 lg:gap-3 p-6 lg:p-5 bg-bg-primary border border-neutral-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-purple/30 lg:text-center">
              <div className="text-3xl lg:text-2xl flex-shrink-0">⚡</div>
              <div className="flex flex-col lg:items-center gap-1">
                <div className="font-semibold text-text-primary text-base lg:text-sm">Setup in Minutes</div>
                <div className="text-sm lg:text-xs text-text-muted">No technical skills required</div>
              </div>
            </div>
            <div className="flex lg:flex-col items-center gap-4 lg:gap-3 p-6 lg:p-5 bg-bg-primary border border-neutral-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-purple/30 lg:text-center">
              <div className="text-3xl lg:text-2xl flex-shrink-0">🛡️</div>
              <div className="flex flex-col lg:items-center gap-1">
                <div className="font-semibold text-text-primary text-base lg:text-sm">100% Secure</div>
                <div className="text-sm lg:text-xs text-text-muted">Bank-level encryption</div>
              </div>
            </div>
            <div className="flex lg:flex-col items-center gap-4 lg:gap-3 p-6 lg:p-5 bg-bg-primary border border-neutral-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-purple/30 lg:text-center">
              <div className="text-3xl lg:text-2xl flex-shrink-0">💰</div>
              <div className="flex flex-col lg:items-center gap-1">
                <div className="font-semibold text-text-primary text-base lg:text-sm">Money-back Guarantee</div>
                <div className="text-sm lg:text-xs text-text-muted">30-day full refund</div>
              </div>
            </div>
            <div className="flex lg:flex-col items-center gap-4 lg:gap-3 p-6 lg:p-5 bg-bg-primary border border-neutral-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-purple/30 lg:text-center">
              <div className="text-3xl lg:text-2xl flex-shrink-0">🎯</div>
              <div className="flex flex-col lg:items-center gap-1">
                <div className="font-semibold text-text-primary text-base lg:text-sm">Guaranteed Results</div>
                <div className="text-sm lg:text-xs text-text-muted">Or we work for free</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mb-12">
            <div className="grid grid-cols-3 gap-8 sm:gap-16 mb-8 p-8 bg-bg-primary border border-neutral-200 rounded-3xl shadow-sm max-w-2xl mx-auto">
              <div className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-purple mb-1 leading-none">2,847</span>
                <span className="text-text-secondary font-medium text-sm sm:text-base">Active Businesses</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-purple mb-1 leading-none">£2.4M</span>
                <span className="text-text-secondary font-medium text-sm sm:text-base">Revenue Generated</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-purple mb-1 leading-none">98%</span>
                <span className="text-text-secondary font-medium text-sm sm:text-base">Satisfaction Rate</span>
              </div>
            </div>
            <p className="text-text-secondary text-base sm:text-lg m-0 italic">
              "The smartest business decision we've ever made. ROI in the first month."
            </p>
          </div>

          {/* Urgency Note */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl text-left sm:text-left max-w-2xl mx-auto">
            <div className="text-2xl flex-shrink-0">⏰</div>
            <p className="text-text-secondary text-base leading-relaxed m-0">
              <strong className="text-amber-700 font-bold">Limited Time:</strong> Get 3 months free when you start your trial this week. Join 200+ businesses who upgraded their operations this month.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SimpleCTA
