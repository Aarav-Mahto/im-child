//src/common/Container.tsx
"use client";

import React from 'react'
import styles from '@/styles/container.module.css'

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  size = 'lg' 
}) => {
  const containerClasses = [
    styles.container,
    styles[size],
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}

export default Container