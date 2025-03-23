
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Badge } from "@/components/ui/badge";
import { Timer, Heart, Dumbbell, FlameIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample WOD data
const wodData = {
  title: "Fran",
  category: "Benchmark",
  description: "A classic CrossFit benchmark that tests both strength and cardiovascular capacity. Complete for time.",
  exercises: [
    { reps: "21-15-9", movement: "Thrusters (95/65 lb)" },
    { reps: "21-15-9", movement: "Pull-ups" }
  ],
  tips: "Break up the thrusters and pull-ups strategically. Pace yourself on the first round to avoid early burnout.",
  difficulty: "Intermediate",
  estimatedTime: "3-12 minutes"
};

const WodSection = () => {
  return (
    <section id="workouts" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1">
            Daily Challenge
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Workout of the Day</h2>
          <p className="text-muted-foreground max-w-2xl">
            Push your limits with our daily programming. Each workout is designed to challenge and improve different aspects of your fitness.
          </p>
        </div>

        <AnimatedCard className="max-w-3xl mx-auto bg-card border-border/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">{wodData.title}</h3>
              <Badge variant="secondary" className="mt-1">
                {wodData.category}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-1">
                <FlameIcon className="h-3 w-3" />
                {wodData.difficulty}
              </Badge>
              <Badge className="bg-secondary/80 text-secondary-foreground hover:bg-secondary flex items-center gap-1">
                <Timer className="h-3 w-3" />
                {wodData.estimatedTime}
              </Badge>
            </div>
          </div>

          <p className="mb-6 text-muted-foreground">{wodData.description}</p>

          <div className="mb-6 bg-muted/40 rounded-lg p-4">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Dumbbell className="h-4 w-4 text-primary" />
              Exercises
            </h4>
            <ul className="space-y-2">
              {wodData.exercises.map((exercise, index) => (
                <li key={index} className="flex items-center justify-between border-b border-border/10 pb-2">
                  <span className="font-medium">{exercise.movement}</span>
                  <span className="text-muted-foreground">{exercise.reps}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 rounded-lg p-4 border border-border/30">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              Coaching Tips
            </h4>
            <p className="text-sm text-muted-foreground">{wodData.tips}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="flex-1">Log This Workout</Button>
            <Button variant="outline" className="flex-1">Modify / Scale</Button>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default WodSection;
