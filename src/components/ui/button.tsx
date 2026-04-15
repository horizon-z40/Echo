import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gradient" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary text-primary-foreground hover:opacity-90 shadow-md": variant === "default",
            "border border-border bg-transparent hover:bg-muted/50 text-foreground": variant === "outline",
            "bg-transparent hover:bg-muted/50 text-foreground": variant === "ghost",
            "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-violet-500/20": variant === "gradient",
            "bg-destructive text-destructive-foreground hover:opacity-90": variant === "destructive",
          },
          {
            "text-xs px-3 py-1.5 gap-1": size === "sm",
            "text-sm px-4 py-2 gap-1.5": size === "md",
            "text-base px-6 py-3 gap-2": size === "lg",
            "w-9 h-9 p-0": size === "icon",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
