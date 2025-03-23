
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import WodSection from '@/components/WodSection';
import ExerciseLibrary from '@/components/ExerciseLibrary';
import Timer from '@/components/Timer';
import { Dumbbell, HeartPulse, Flame } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WodSection />
        <ExerciseLibrary />
        <Timer />
        
        {/* Footer Section */}
        <footer id="about" className="py-16 px-6 bg-foreground/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-xl">CrossFit<span className="text-primary">Forge</span></h3>
                </div>
                <p className="text-muted-foreground">
                  Elevate your fitness journey with tools designed for the serious CrossFit athlete.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <HeartPulse className="h-4 w-4 text-primary" />
                  Features
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>WOD Programming</li>
                  <li>Exercise Library</li>
                  <li>Workout Timer</li>
                  <li>Progress Tracking</li>
                  <li>Community Leaderboards</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 flex items-center gap-2">
                  <Flame className="h-4 w-4 text-primary" />
                  About
                </h4>
                <p className="text-muted-foreground mb-4">
                  Built for athletes by athletes. We understand the needs of the CrossFit community.
                </p>
                <p className="text-xs text-muted-foreground">
                  © 2023 CrossFitForge. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
