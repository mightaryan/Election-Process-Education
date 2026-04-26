import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("glass-panel rounded-2xl p-6 sm:p-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
