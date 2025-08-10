
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
  const baseClasses = 'inline-flex items-center justify-center gap-2 border-none rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-out-cubic text-decoration-none font-inherit outline-none relative overflow-hidden focus-visible:outline-2 focus-visible:outline-brand-purple focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-98'

  const variantClasses = {
    primary: 'bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:-translate-y-px',
    secondary: 'bg-white/90 text-text-primary shadow-lg border border-white/20 backdrop-blur-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-xl',
    outline: 'bg-transparent text-brand-purple border-2 border-brand-purple hover:bg-brand-purple hover:text-white hover:-translate-y-0.5 hover:shadow-lg',
    ghost: 'bg-transparent text-text-primary border border-transparent hover:bg-white/10 hover:-translate-y-px'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  }

  const classes = [
    baseClasses,
    variantClasses[variant],
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
