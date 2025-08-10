
'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/common/Container'

interface DifferenceFeature {
  icon: string;
  title: string;
  description: string;
}

const differenceFeatures: DifferenceFeature[] = [
  {
    icon: '🧠',
    title: 'Emotional Intelligence',
    description: 'Understands context, mood, and member history to craft messages that actually resonate.'
  },
  {
    icon: '⏰',
    title: 'Perfect Timing',
    description: 'Knows when to reach out, when to follow up, and when to give space.'
  },
  {
    icon: '💖',
    title: 'Genuinely Helpful',
    description: 'Never feels like marketing. Always feels like a friend who happens to run a studio.'
  }
]

const testimonials = [
  {
    quote: "I actually look forward to their messages. They're helpful, never pushy, and somehow always know exactly what I need to hear.",
    author: "Sarah M.",
    avatar: "SM"
  },
  {
    quote: "My members constantly compliment our communication. They have no idea it's AI - it just feels like we really care about them.",
    author: "James K.",
    avatar: "JK"
  }
]

const AIDifference: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.fade-in')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden" id="ai-difference">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <Container>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-brand-purple-dark text-sm font-semibold mb-6">
            ✨ The Difference
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            What Makes Our AI <span className="bg-gradient-to-r from-brand-purple to-brand-accent bg-clip-text text-transparent">Different</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Not all AI is created equal. Ours doesn&apos;t just respond — it understands, 
            cares, and builds genuine relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          {differenceFeatures.map((feature, index) => (
            <div key={index} className="glass-strong p-8 rounded-3xl text-center transition-all duration-500 ease-out-cubic hover:-translate-y-4 hover:shadow-2xl hover:scale-105 hover:bg-white/15 hover:backdrop-blur-xl group fade-in cursor-pointer border border-white/10">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-brand-purple/30">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-serif transition-all duration-300 group-hover:text-brand-accent">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed transition-all duration-300 group-hover:text-white/95">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-strong p-8 rounded-3xl transition-all duration-500 ease-out-cubic hover:-translate-y-3 hover:shadow-2xl hover:scale-102 hover:bg-white/15 hover:backdrop-blur-xl group fade-in cursor-pointer border border-white/10">
              <div className="mb-6">
                <p className="text-lg text-white/90 italic leading-relaxed transition-all duration-300 group-hover:text-white">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:scale-110">
                  {testimonial.avatar}
                </div>
                <div className="text-white font-semibold transition-all duration-300 group-hover:text-brand-accent">{testimonial.author}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AIDifference
