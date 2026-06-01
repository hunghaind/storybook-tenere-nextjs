import { cn } from '@/utils/common';
import React from 'react';

export type InputScale = 'large' | 'medium';
export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  scale?: InputScale;
  state?: InputState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, scale = 'medium', state = 'default', disabled, leftIcon, rightIcon, ...props },
    ref
  ) => {
    // Base styles
    const baseStyles =
      'w-full transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 hover:shadow focus:shadow';

    // Scale styles - synced with button sizes
    const scaleStyles = {
      large: 'h-12 text-sm rounded-3xl', // 48px height, radius 24px, font 14px
      medium: 'h-10 text-sm rounded-[20px]', // 40px height, radius 20px, font 14px
    };

    // State styles for borders
    const stateStyles = {
      default: 'border border-medium hover:border-shadow-desert/50 focus:border-shadow-desert',
      error: 'border border-red-500',
      success: 'border border-green-oasis',
    };

    // Dynamic padding based on icons
    const paddingStyles = cn(
      leftIcon ? 'pl-12' : scale === 'large' ? 'pl-6' : 'pl-5',
      rightIcon ? 'pr-12' : scale === 'large' ? 'pr-6' : 'pr-5'
    );

    // If any icon exists, wrap in a container
    if (leftIcon || rightIcon) {
      return (
        <div className="relative w-full">
          <input
            ref={ref}
            disabled={disabled}
            aria-invalid={state === 'error' || undefined}
            className={cn(
              baseStyles,
              scaleStyles[scale],
              stateStyles[state],
              paddingStyles,
              className
            )}
            {...props}
          />
          {leftIcon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {leftIcon}
            </span>
          )}
          {rightIcon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {rightIcon}
            </span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={state === 'error' || undefined}
        className={cn(
          baseStyles,
          scaleStyles[scale],
          stateStyles[state],
          scale === 'large' ? 'px-6' : 'px-5',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
