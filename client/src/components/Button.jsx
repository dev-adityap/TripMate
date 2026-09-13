import React from 'react';

const variants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-soft hover:shadow-md',
  secondary: 'bg-surface text-textPrimary hover:bg-gray-50 border border-gray-200 shadow-sm',
  outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
  ghost: 'text-textSecondary hover:text-textPrimary hover:bg-gray-100',
  danger: 'bg-danger text-white hover:bg-red-600 shadow-soft',
};

const sizes = {
  sm: 'py-1.5 px-3 text-sm rounded-lg',
  md: 'py-2 px-4 text-sm font-medium rounded-xl',
  lg: 'py-3 px-6 text-base font-medium rounded-2xl',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false, 
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95';
  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;