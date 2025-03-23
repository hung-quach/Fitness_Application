
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
  return (
    <div 
      className={cn(
        "opacity-0 animate-fade-in p-6 rounded-lg border border-border/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-border/80",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
