"use client";

import React from 'react'
import Container from '../common/Container'
import GlassCard from '../ui/GlassCard'

interface OSModule {
  icon: string;
  title: string;
  description: string;
  features: string[];
  metric: string;
  color: string;
}

const osModules: OSModule[] = [
  {
    icon: '🧠',
    title: 'Intelligent Booking',
    description: 'AI that never sleeps, never makes mistakes, and converts every enquiry into revenue.',
    features: ['24/7 instant responses', 'Smart pricing suggestions', 'Automatic confirmations'],
    metric: '3.2X more bookings',
    color: 'purple'
  },
  {
    icon: '💝',
    title: 'Retention Engine',
    description: 'Predictive intelligence that keeps members engaged without being pushy.',
    features: ['Churn prediction', 'Personalized nudges', 'Milestone celebrations'],
    metric: '47% less churn',
    color: 'pink'
  },
  {
    icon: '⚡',
    title: 'Revenue Optimizer',
    description: 'Subtle upsells and perfect timing that feels helpful, never sales-y.',
    features: ['Smart recommendations', 'Package suggestions', 'Pricing intelligence'],
    metric: '£14K monthly boost',
    color: 'cyan'
  },
  {
    icon: '📊',
    title: 'Actionable Insights',
    description: 'Real insights you can act on immediately. No spreadsheets, no analysis paralysis.',
    features: ['One-click reports', 'Trend alerts', 'Growth opportunities'],
    metric: 'Decisions in seconds',
    color: 'green'
  },
  {
    icon: '🤖',
    title: 'Admin Automation',
    description: 'All the boring stuff handled invisibly while you focus on what you love.',
    features: ['Smart scheduling', 'Payment processing', 'Member communications'],
    metric: '18hrs saved weekly',
    color: 'orange'
  },
  {
    icon: '🎯',
    title: 'Growth Intelligence',
    description: 'Predict trends, identify opportunities, and stay ahead of the competition.',
    features: ['Market analysis', 'Competitor tracking', 'Trend forecasting'],
    metric: 'Future-proof business',
    color: 'violet'
  }
]

const OSArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="py-32 bg-gradient-to-br from-stone-50 to-stone-100 relative">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            ⚙️ AI-Powered Operating System
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 font-serif">
            Six <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Intelligent Modules</span> That Work Together
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Each module learns from your business, adapts to your needs, and optimizes for maximum growth—automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {osModules.map((module, index) => {
            const colorClasses = {
              purple: 'from-purple-500 to-purple-600',
              pink: 'from-pink-500 to-pink-600',
              cyan: 'from-cyan-500 to-cyan-600',
              green: 'from-green-500 to-green-600',
              orange: 'from-orange-500 to-orange-600',
              violet: 'from-violet-500 to-violet-600'
            }

            return (
              <div key={index} className="glass-strong p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[module.color as keyof typeof colorClasses]}`}></div>

                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[module.color as keyof typeof colorClasses]} flex items-center justify-center text-2xl shadow-md`}>
                    {module.icon}
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-2 rounded-xl border border-green-200">
                    {module.metric}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight">
                  {module.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {module.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-neutral-100 text-text-secondary text-xs font-medium px-3 py-2 rounded-lg border border-neutral-200">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* OS Showcase */}
        <div className="glass-strong p-6 sm:p-8 lg:p-12 text-center shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4 tracking-tight">
            From Chaos to Clarity in Minutes
          </h3>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
            Watch your business transform from scattered tools and manual processes to a unified, intelligent system that runs itself.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:max-w-sm lg:min-w-72 text-left">
              <div className="text-2xl sm:text-3xl flex-shrink-0">📊</div>
              <div className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                <strong className="text-text-primary font-semibold">Before:</strong> Scattered data, manual reports, guessing what works
              </div>
            </div>

            <div className="text-brand-purple text-xl sm:text-2xl lg:rotate-0 rotate-90 flex-shrink-0">→</div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:max-w-sm lg:min-w-72 text-left">
              <div className="text-2xl sm:text-3xl flex-shrink-0">🎯</div>
              <div className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                <strong className="text-text-primary font-semibold">After:</strong> Real-time insights, automated optimization, clear growth path
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OSArchitecture