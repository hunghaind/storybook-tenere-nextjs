import { cn } from '@/utils/common';
import { Loader2 } from 'lucide-react';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'secondary',
      size = 'medium',
      disabled,
      loading,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'inline-flex items-center justify-center gap-1 rounded-3xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    // Variant styles
    const variantStyles = {
      primary:
        'bg-green-tenere text-shadow-desert hover:bg-green-tenere-dark active:bg-green-tenere-darker uppercase',
      secondary:
        'bg-shadow-desert text-white hover:bg-shadow-desert/90 active:bg-shadow-desert/80 uppercase',
      outline:
        'bg-white text-shadow-desert border border-medium hover:border-strong active:bg-gray-100 uppercase',
      ghost:
        'text-shadow-desert px-0 [&>span:first-child]:relative [&>span:first-child]:before:absolute [&>span:first-child]:before:bottom-0 [&>span:first-child]:before:left-0 [&>span:first-child]:before:right-0 [&>span:first-child]:before:h-[1px] [&>span:first-child]:before:bg-shadow-desert [&>span:first-child]:before:transition-all hover:[&>span:first-child]:before:h-[2px] hover:[&>span:first-child]:before:bg-green-tenere active:[&>span:first-child]:before:h-[2px] active:[&>span:first-child]:before:bg-shadow-desert',
    };

    // Size styles
    const sizeStyles = {
      large: 'h-12 px-7 text-sm',
      medium: 'h-10 px-[22px] text-[13px]',
      small: 'h-[34px] px-4 text-xs leading-tight',
    };

    // Spinner size based on button size
    const spinnerSizeStyles = {
      large: 20,
      medium: 16,
      small: 14,
    };

    // Auto-disable when loading
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== 'ghost' && sizeStyles[size],
          className
        )}
        {...props}
      >
        {children && <span>{children}</span>}
        {loading ? (
          <Loader2 className="animate-spin" size={spinnerSizeStyles[size]} />
        ) : (
          icon && <span>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
