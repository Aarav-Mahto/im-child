"use client";

import React from 'react'
import Container from '../common/Container'
import Button from '../ui/Button'

const SimpleCTA: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden" id="simple-cta">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
              Ready to Transform Your <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Studio?</span>
            </h2>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              See Wondrous in action with a personalized 5-minute demo. 
              No commitment, no sales pitch – just results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" size="lg" href="#final-cta">
              Watch Demo →
            </Button>
            <Button variant="ghost" size="lg" href="#architecture">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto">
                ⚡
              </div>
              <div className="text-lg font-bold text-white mb-1">24hr Setup</div>
              <div className="text-sm text-white/70">Live in one day</div>
            </div>
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto">
                🔒
              </div>
              <div className="text-lg font-bold text-white mb-1">Bank Security</div>
              <div className="text-sm text-white/70">Your data stays safe</div>
            </div>
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto">
                📈
              </div>
              <div className="text-lg font-bold text-white mb-1">30-Day Results</div>
              <div className="text-sm text-white/70">Or money back</div>
            </div>
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto">
                💬
              </div>
              <div className="text-lg font-bold text-white mb-1">24/7 Support</div>
              <div className="text-sm text-white/70">We're here to help</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SimpleCTA