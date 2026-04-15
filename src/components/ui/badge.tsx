import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5 transition-colors",
        {
          "bg-primary/10 text-primary": variant === "default",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "border border-border text-muted-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
