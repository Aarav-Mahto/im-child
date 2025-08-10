'use client'

import { useState, useRef } from 'react'
import Container from '@/components/common/Container'
import styles from '@/styles/landing.module.css'

interface FormData {
  studioName: string;
  email: string;
  phone: string;
  monthlyMembers: string;
}

interface FormErrors {
  studioName?: string;
  email?: string;
  phone?: string;
  monthlyMembers?: string;
}

const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studioName: '',
    email: '',
    phone: '',
    monthlyMembers: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.studioName.trim()) {
      newErrors.studioName = 'Studio name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.monthlyMembers.trim()) {
      newErrors.monthlyMembers = 'Monthly members is required'
    } else if (isNaN(Number(formData.monthlyMembers)) || Number(formData.monthlyMembers) < 1) {
      newErrors.monthlyMembers = 'Please enter a valid number of members'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success
      setIsSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          studioName: '',
          email: '',
          phone: '',
          monthlyMembers: ''
        })
      }, 3000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className={`${styles.section} ${styles.bgGradientPurple}`} id="demo">
        <Container>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✅</div>
            <h2 className={styles.successTitle}>Demo Request Received!</h2>
            <p className={styles.successText}>
              Thank you! We&apos;ll be in touch within 24 hours to schedule your personalized demo.
              Get ready to transform your studio operations!
            </p>
            <div className={styles.successStats}>
              <div className={styles.successStat}>
                <span className={styles.successStatNumber}>48hrs</span>
                <span className={styles.successStatLabel}>Setup Time</span>
              </div>
              <div className={styles.successStat}>
                <span className={styles.successStatNumber}>30 days</span>
                <span className={styles.successStatLabel}>To Results</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={`${styles.section} ${styles.bgGradientPurple}`} id="demo">
      <Container>
        <div className={styles.textCenter}>
          <h2 className={styles.sectionTitle}>
            Ready to Transform Your <span className={styles.highlight}>Studio?</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            See Wondrous in action with a personalized demo for your studio
          </p>
        </div>

        <div ref={formRef} className={styles.ctaForm}>
          <form onSubmit={handleSubmit} className={styles.demoForm}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="studioName" className={styles.formLabel}>
                  Studio Name *
                </label>
                <input
                  type="text"
                  id="studioName"
                  name="studioName"
                  value={formData.studioName}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.studioName ? styles.inputError : ''}`}
                  placeholder="Your Studio Name"
                  disabled={isSubmitting}
                />
                {errors.studioName && (
                  <span className={styles.errorMessage}>{errors.studioName}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
                  placeholder="your.email@studio.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="+44 7XXX XXXXXX"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>{errors.phone}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="monthlyMembers" className={styles.formLabel}>
                  Monthly Members *
                </label>
                <select
                  id="monthlyMembers"
                  name="monthlyMembers"
                  value={formData.monthlyMembers}
                  onChange={handleInputChange}
                  className={`${styles.formInput} ${errors.monthlyMembers ? styles.inputError : ''}`}
                  disabled={isSubmitting}
                >
                  <option value="">Select member count</option>
                  <option value="50">Under 50 members</option>
                  <option value="100">50-100 members</option>
                  <option value="200">100-200 members</option>
                  <option value="500">200-500 members</option>
                  <option value="1000">500+ members</option>
                </select>
                {errors.monthlyMembers && (
                  <span className={styles.errorMessage}>{errors.monthlyMembers}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Requesting Demo...
                </>
              ) : (
                'Get My Free Demo →'
              )}
            </button>
          </form>

          <div className={styles.trustIndicators}>
            <div className={styles.trustIndicator}>
              <span className={styles.trustIcon}>⚡</span>
              <span className={styles.trustText}>48hrs Setup</span>
            </div>
            <div className={styles.trustIndicator}>
              <span className={styles.trustIcon}>🔒</span>
              <span className={styles.trustText}>Bank Security</span>
            </div>
            <div className={styles.trustIndicator}>
              <span className={styles.trustIcon}>📈</span>
              <span className={styles.trustText}>30-Day Results</span>
            </div>
          </div>

          <p className={styles.privacyNote}>
            We respect your privacy. Your information is secure and will only be used to provide your demo.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA