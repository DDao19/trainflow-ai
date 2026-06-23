import { type ButtonHTMLAttributes, forwardRef } from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-medium transition-colors cursor-pointer";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "bg-card text-foreground border border-border hover:bg-border",
  ghost: "text-muted hover:text-foreground hover:bg-card",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", size = "md", className = "", ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

// Helps React DevTools display a readable component name instead of "ForwardRef"
Button.displayName = "Button";
