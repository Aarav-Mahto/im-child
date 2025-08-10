
"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "lg",
}) => {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-7xl",
    xl: "max-w-7xl",
  };

  const containerClasses = [
    "w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
