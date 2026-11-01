import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  // Strict 5-color palette compliant styling
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-sm",
  };

  const variantClasses = {
    // Teal CTA (#267C78)
    primary: "bg-[#267C78] text-white hover:bg-[#1e6662] active:bg-[#195551] focus-visible:ring-[#267C78] shadow-sm",
    // Navy Blue (#17365D)
    navy: "bg-[#17365D] text-white hover:bg-[#0f243e] active:bg-[#091728] focus-visible:ring-[#17365D] shadow-sm",
    // Outline Navy
    outline: "border border-[#17365D] text-[#17365D] bg-transparent hover:bg-[#F2F5F7] active:bg-[#e2e8f0] focus-visible:ring-[#17365D]",
    // Outline White (for dark Navy sections)
    outlineWhite: "border border-white/60 text-white bg-transparent hover:bg-white/10 active:bg-white/20 focus-visible:ring-white",
    // Subtle Grey
    secondary: "bg-[#F2F5F7] text-[#263442] hover:bg-[#e4ebf0] active:bg-[#d8e2e8] focus-visible:ring-[#17365D]",
    // Ghost
    ghost: "text-[#263442] hover:text-[#17365D] hover:bg-[#F2F5F7] focus-visible:ring-[#17365D]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;

