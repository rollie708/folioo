import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";

    const variants = {
      default: "bg-primary text-white hover:bg-opacity-90 transition-colors",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 transition-colors",
      outline:
        "border border-border bg-transparent hover:bg-glow transition-colors",
      ghost:
        "hover:bg-glow hover:text-primary transition-colors",
      secondary:
        "bg-bg-secondary border border-border hover:bg-opacity-80 transition-colors",
    };

    const sizes = {
      default: "h-11 px-6 py-3",
      sm: "h-9 px-4 py-2",
      lg: "h-12 px-8 py-3",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium text-sm transition-all",
          variants[variant],
          sizes[size],
          className,
        )}
        ref={ref as React.Ref<any>}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
