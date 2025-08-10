"use client";

import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out-cubic focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-to-r from-brand-purple to-brand-accent text-white hover:shadow-xl hover:-translate-y-2 hover:scale-105 focus:ring-brand-purple border-none hover:from-brand-purple-dark hover:to-brand-purple transition-all duration-300',
    secondary: 'bg-neutral-100 text-neutral-900 border border-neutral-200 hover:bg-neutral-200 hover:shadow-lg hover:-translate-y-1 hover:scale-105 focus:ring-neutral-500 transition-all duration-300',
    ghost: 'bg-transparent text-white border border-white/30 hover:bg-white/20 hover:border-white/70 hover:shadow-lg hover:-translate-y-1 hover:scale-105 focus:ring-white/50 transition-all duration-300'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  }

  const classes = [
    baseClasses,
    variants[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    loading ? 'cursor-wait' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
      )}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
    </button>
  )
}

export default Button