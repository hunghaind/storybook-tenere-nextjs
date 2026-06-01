import { cn } from '@/utils/common';
import React from 'react';

export type FormHelperTextSize = 'xs' | 'sm' | 'base';
export type FormHelperTextVariant = 'default' | 'error' | 'success' | 'warning';

export interface FormHelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: FormHelperTextSize;
  variant?: FormHelperTextVariant;
}

const FormHelperText: React.FC<FormHelperTextProps> = ({
  className,
  size = 'sm',
  variant = 'default',
  children,
  ...props
}) => {
  // Size styles matching Tailwind font-size scale
  const sizeStyles = {
    xs: 'text-xs', // 12px
    sm: 'text-sm', // 14px
    base: 'text-base', // 16px
  };

  // Variant styles for different message types
  const variantStyles = {
    default: 'text-gray-400',
    error: 'text-red-500',
    success: 'text-green-oasis',
    warning: 'text-yellow-600',
  };

  return (
    <p className={cn('mt-1.5', sizeStyles[size], variantStyles[variant], className)} {...props}>
      {children}
    </p>
  );
};

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
