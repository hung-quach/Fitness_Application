
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Dumbbell, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Workouts", href: "#workouts" },
    { name: "Exercises", href: "#exercises" },
    { name: "Timer", href: "#timer" },
    { name: "About", href: "#about" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Dumbbell className="h-7 w-7 text-primary transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-bold text-xl tracking-tight">CrossFit<span className="text-primary">Forge</span></span>
        </a>

        {isMobile ? (
          <>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 p-5 glassmorphism animate-fade-in">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-foreground hover:text-primary transition-colors link-hover inline-block"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
