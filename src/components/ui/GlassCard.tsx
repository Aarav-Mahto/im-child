
"use client";

import React from 'react'

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'strong' | 'subtle';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  clickable = false,
  onClick,
  className = ''
}) => {
  const baseClasses = 'rounded-xl sm:rounded-2xl transition-all duration-300 ease-out-cubic relative overflow-hidden'

  const variantClasses = {
    default: 'bg-white/30 backdrop-blur-xl border border-white/30 shadow-glass',
    strong: 'bg-white/45 backdrop-blur-2xl border border-white/35 shadow-xl',
    subtle: 'bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg'
  }

  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8'
  }

  const hoverClasses = hover ? 'hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105' : ''
  const clickableClasses = clickable ? 'cursor-pointer border-none bg-none text-left font-inherit color-inherit w-full focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-purple focus-visible:outline-offset-2 active:scale-95 sm:active:scale-98 min-h-[44px] sm:min-h-auto' : ''

  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses,
    clickableClasses,
    className
  ].filter(Boolean).join(' ')

  const Component = clickable ? 'button' : 'div'

  return (
    <Component className={classes} onClick={onClick}>
      {children}
    </Component>
  )
}

export default GlassCard
