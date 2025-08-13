"use client";

import React from 'react'
import Container from '../common/Container'
import Button from '../ui/Button'

const SimpleCTA: React.FC = () => {
  return (
    <section className="py-10 md:py-32 bg-white text-white relative overflow-hidden" id="simple-cta">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-serif">
              Ready to Transform Your <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Studio?</span>
            </h2>

            <p className="text-md sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
              See Wondrous in action with a Personalised 5-minute demo.
              No commitment, no sales pitch – just results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" size="lg" href="#final-cta">
              Watch Demo →
            </Button>
            <Button variant="ghost" size="lg" href="#architecture" className='text-neutral-900'>
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:bg-white/20 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                ⚡
              </div>
              <div className="text-lg font-bold text-neutral-800 mb-1 transition-all duration-300 group-hover:text-brand-accent">24hr Setup</div>
              <div className="text-sm text-neutral-600 transition-all duration-300 group-hover:text-neutral-800">Live in one day</div>
            </div>
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:bg-white/20 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                🔒
              </div>
              <div className="text-lg font-bold text-neutral-800 mb-1 transition-all duration-300 group-hover:text-brand-accent">Bank Security</div>
              <div className="text-sm text-neutral-600 transition-all duration-300 group-hover:text-neutral-800">Your data protected</div>
            </div>
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:bg-white/20 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                📈
              </div>
              <div className="text-lg font-bold text-neutral-800 mb-1 transition-all duration-300 group-hover:text-brand-accent">30-Day Results</div>
              <div className="text-sm text-neutral-600 transition-all duration-300 group-hover:text-neutral-800">Or money back</div>
            </div>
            <div className="glass-light p-6 rounded-2xl text-center transition-all duration-300 ease-out-cubic hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:bg-white/20 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-xl flex items-center justify-center text-xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                💬
              </div>
              <div className="text-lg font-bold text-neutral-800 mb-1 transition-all duration-300 group-hover:text-brand-accent">24/7 Support</div>
              <div className="text-sm text-neutral-600 transition-all duration-300 group-hover:text-neutral-800">We're here to help</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center mt-10 gap-10 p-0 md:p-8 rounded-3xl mx-auto">
              <div className="shadow-glass bg-neutral-950 border border-white/50 rounded-xl w-full p-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-2">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl md:text-5xl font-bold">200+</span>
                  <span className="font-bold text-neutral-400 whitespace-nowrap">Studios transformed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-5xl font-bold">£2.3M+</span>
                  <span className="font-bold text-neutral-400 whitespace-nowrap">Extra revenue generated</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-5xl font-bold">98%</span>
                  <span className="font-bold text-neutral-400 whitespace-nowrap">Would recommend</span>
                </div>
              </div>
              <div className="">
                <span className='text-sm italic text-neutral-800'>Join studio owners who've already transformed their businesses with Wondrous</span>
              </div>
              <div className="flex flex-row items-center justify-start gap-2 bg-[#f9741632] p-8 rounded-3xl w-full max-w-[600px] mx-auto">
                <div className="text-2xl">🔥</div>
                <div className="text-left">
                  <span className="text-yellow-600 font-bold whitespace-nowrap">Limited Time:</span>
                  <span className="text-neutral-600"> Get premium onboarding support with your first month. Book your demo before this offer expires.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SimpleCTA