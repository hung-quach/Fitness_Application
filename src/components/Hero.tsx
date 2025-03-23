
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add staggered animation classes
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const buttonContainer = buttonRef.current;

    if (heading) {
      heading.classList.add('animate-fade-in');
      heading.style.animationDelay = '300ms';
      heading.style.animationFillMode = 'forwards';
      heading.style.opacity = '0';
    }

    if (subheading) {
      subheading.classList.add('animate-fade-in');
      subheading.style.animationDelay = '600ms';
      subheading.style.animationFillMode = 'forwards';
      subheading.style.opacity = '0';
    }

    if (buttonContainer) {
      buttonContainer.classList.add('animate-fade-in');
      buttonContainer.style.animationDelay = '900ms';
      buttonContainer.style.animationFillMode = 'forwards';
      buttonContainer.style.opacity = '0';
    }
  }, []);

  const scrollToContent = () => {
    document.getElementById('workouts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background gradient elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
      
      <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
        <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          Elevate Your <span className="text-primary">CrossFit</span> Journey
        </h1>
        
        <p ref={subheadingRef} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Track workouts, master techniques, and push your limits with precision and purpose.
        </p>
        
        <div ref={buttonRef} className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button size="lg" className="rounded-full text-md px-8 py-6">
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full text-md px-8 py-6"
            onClick={scrollToContent}
          >
            Explore Workouts
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToContent} 
          className="rounded-full h-12 w-12"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
