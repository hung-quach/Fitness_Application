
import React, { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignVerticalJustifyCenter, Dumbbell, HeartPulse, Weight } from "lucide-react";

// Sample exercise data
const exerciseCategories = [
  { id: "gymnastics", label: "Gymnastics", icon: AlignVerticalJustifyCenter },
  { id: "weightlifting", label: "Weightlifting", icon: Weight },
  { id: "cardio", label: "Cardio", icon: HeartPulse },
];

const exercises = {
  gymnastics: [
    { 
      id: 1, 
      name: "Pull-up", 
      description: "Upper body compound pulling movement",
      difficulty: "Beginner-Advanced",
      muscles: ["Back", "Biceps", "Forearms", "Core"]
    },
    { 
      id: 2, 
      name: "Ring Muscle-up", 
      description: "Advanced gymnastic movement combining pull and push",
      difficulty: "Advanced",
      muscles: ["Back", "Chest", "Shoulders", "Triceps", "Core"]
    },
    { 
      id: 3, 
      name: "Handstand Push-up", 
      description: "Vertical pressing movement in an inverted position",
      difficulty: "Intermediate-Advanced",
      muscles: ["Shoulders", "Triceps", "Core"]
    },
  ],
  weightlifting: [
    { 
      id: 1, 
      name: "Clean & Jerk", 
      description: "Olympic lift taking the bar from ground to overhead",
      difficulty: "Intermediate-Advanced",
      muscles: ["Full Body", "Quadriceps", "Shoulders"]
    },
    { 
      id: 2, 
      name: "Snatch", 
      description: "Olympic lift moving the bar from ground to overhead in one motion",
      difficulty: "Advanced",
      muscles: ["Full Body", "Shoulders", "Core"]
    },
    { 
      id: 3, 
      name: "Deadlift", 
      description: "Fundamental strength lift moving weight from ground",
      difficulty: "Beginner-Advanced",
      muscles: ["Back", "Glutes", "Hamstrings", "Core"]
    },
  ],
  cardio: [
    { 
      id: 1, 
      name: "Rowing", 
      description: "Low-impact full body conditioning on the rowing machine",
      difficulty: "Beginner-Advanced",
      muscles: ["Back", "Legs", "Core", "Arms"]
    },
    { 
      id: 2, 
      name: "Double-unders", 
      description: "Jump rope technique where rope passes under feet twice per jump",
      difficulty: "Intermediate",
      muscles: ["Calves", "Shoulders", "Cardiorespiratory"]
    },
    { 
      id: 3, 
      name: "Assault Bike", 
      description: "High-intensity conditioning on the fan bike",
      difficulty: "Beginner-Advanced",
      muscles: ["Full Body", "Cardiorespiratory"]
    },
  ]
};

const ExerciseLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("gymnastics");

  return (
    <section id="exercises" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1">
            Movement Library
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Exercise Techniques</h2>
          <p className="text-muted-foreground max-w-2xl">
            Master the fundamentals with our comprehensive exercise library, detailed instructions, and scaling options.
          </p>
        </div>

        <Tabs defaultValue="gymnastics" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {exerciseCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {exerciseCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exercises[category.id as keyof typeof exercises].map((exercise, index) => (
                  <AnimatedCard 
                    key={exercise.id} 
                    className="flex flex-col h-full bg-card"
                    delay={index * 100}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold">{exercise.name}</h3>
                      <Dumbbell className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {exercise.description}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="mb-3">
                        <div className="text-xs text-muted-foreground mb-1">Difficulty</div>
                        <Badge variant="outline">{exercise.difficulty}</Badge>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-xs text-muted-foreground mb-1">Target Muscles</div>
                        <div className="flex flex-wrap gap-1">
                          {exercise.muscles.map((muscle, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {muscle}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExerciseLibrary;
