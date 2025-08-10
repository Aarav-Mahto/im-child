
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
  const baseClasses = 'rounded-2xl transition-all duration-300 ease-out-cubic relative overflow-hidden'

  const variantClasses = {
    default: 'bg-white/25 backdrop-blur-xl border border-white/20 shadow-glass',
    strong: 'bg-white/40 backdrop-blur-2xl border border-white/25 shadow-xl',
    subtle: 'bg-white/15 backdrop-blur-lg border border-white/10 shadow-lg'
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const hoverClasses = hover ? 'hover:-translate-y-2 hover:shadow-2xl' : ''
  const clickableClasses = clickable ? 'cursor-pointer border-none bg-none text-left font-inherit color-inherit w-full focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-purple focus-visible:outline-offset-2 active:scale-98' : ''

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
