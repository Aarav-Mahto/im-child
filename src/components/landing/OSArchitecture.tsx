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
    icon: '✨',
    title: 'Member Experience',
    description: 'Every touchpoint perfectly timed to create moments of delight and connection.',
    features: ['Seamless journeys', 'Surprise moments', 'Community building'],
    metric: '94% satisfaction',
    color: 'violet'
  }
]

const OSArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="relative">
      <div className="">
        <div className="bg-black h-full py-10 md:py-32 relative overflow-hidden">

          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-3xl"></div>
          <div className="absolute top-[30%] -left-20 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-60 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex items-center justify-center h-full">




            <Container>
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
                  🔮 Studio Intelligence
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-50 mb-6 font-serif">
                  Six AI Modules Working as <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">One Brain</span>
                </h2>
                <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                  While you focus on coaching, our AI handles everything else — seamlessly, intelligently, 24/7.
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
                    <div key={index} className="glass-strong rounded-md rounded-t-xl p-8 transition-all duration-300 ease-out-cubic hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                      {/* <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[module.color as keyof typeof colorClasses]}`}></div> */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-md`}
                      ></div>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[module.color as keyof typeof colorClasses]} flex items-center justify-center text-2xl shadow-md`}>
                          {module.icon}
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-2 rounded-xl border border-green-200">
                          {module.metric}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-neutral-50 mb-3 leading-tight">
                        {module.title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed mb-6">
                        {module.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-2 rounded-lg border border-neutral-200">
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
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-50 mb-4 tracking-tight">
                  From Overwhelmed to Unstoppable
                </h3>
                <p className="text-left sm:text-center text-sm sm:text-lg text-neutral-300 leading-relaxed mb-6 sm:mb-8">
                  Join 200+ studio owners who've transformed their businesses from stressful admin nightmares into smooth, profitable operations.
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-6 lg:gap-8">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:max-w-sm lg:min-w-72 text-left">
                    <div className="text-2xl sm:text-3xl flex-shrink-0">😰</div>
                    <div className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                      <strong className="text-text-primary font-semibold">Before:</strong> Drowning in admin, missing bookings, losing members
                    </div>
                  </div>

                  <div className="text-brand-purple text-xl sm:text-2xl lg:rotate-0 rotate-90 flex-shrink-0">→</div>

                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:max-w-sm lg:min-w-72 text-left">
                    <div className="text-2xl sm:text-3xl flex-shrink-0">🚀</div>
                    <div className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                      <strong className="text-text-primary font-semibold">After:</strong> AI handles everything, revenue grows, you focus on coaching
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OSArchitecture