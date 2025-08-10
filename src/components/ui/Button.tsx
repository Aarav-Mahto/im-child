
//src/components/ui/Button.tsx


import React from 'react'
import styles from '@/styles/button.module.css'

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}) => {
  const buttonClasses = [
    styles.btn,
    styles[`btn${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    styles[`btn${size.charAt(0).toUpperCase()}${size.slice(1)}`],
    fullWidth ? styles.btnFullWidth : '',
    loading ? styles.btnLoading : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={loading ? 'Loading...' : undefined}
    >
      {loading && <span className={styles.spinner}></span>}
      <span className={loading ? styles.buttonContent : ''}>{children}</span>
    </button>
  )
}

export default Button