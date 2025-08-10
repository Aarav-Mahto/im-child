//src/components/ui/GlassCard.tsx
"use client";
import React from 'react'
import styles from '@/styles/glass-card.module.css'

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'strong' | 'subtle';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  onClick
}) => {
  const cardClasses = [
    styles.glassCard,
    styles[`glass${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    styles[`padding${padding.charAt(0).toUpperCase()}${padding.slice(1)}`],
    hover ? styles.glassHover : '',
    onClick ? styles.clickable : '',
    className
  ].filter(Boolean).join(' ')

  const Component = onClick ? 'button' : 'div'

  return (
    <Component 
      className={cardClasses} 
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {children}
    </Component>
  )
}

export default GlassCard