
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import AnimatedCard from './AnimatedCard';
import { Badge } from "@/components/ui/badge";
import { Timer as TimerIcon, Play, Pause, RotateCcw, BellIcon } from "lucide-react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [maxTime, setMaxTime] = useState(180); // 3 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState<'countdown' | 'stopwatch'>('countdown');
  const tickSound = useRef<HTMLAudioElement | null>(null);
  const alarmSound = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on component mount
  useEffect(() => {
    tickSound.current = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
    alarmSound.current = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
    
    return () => {
      if (tickSound.current) {
        tickSound.current.pause();
      }
      if (alarmSound.current) {
        alarmSound.current.pause();
      }
    };
  }, []);

  // Timer countdown effect
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => {
          if (timerType === 'countdown') {
            // Play tick sound
            if (tickSound.current && prev > 1) {
              tickSound.current.play().catch(() => {});
            }
            
            // Play alarm at 0
            if (prev <= 1) {
              if (alarmSound.current) {
                alarmSound.current.play().catch(() => {});
              }
              setIsRunning(false);
              return 0;
            }
            return prev - 1;
          } else {
            // Stopwatch
            return prev + 1;
          }
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timerType]);

  const startTimer = () => {
    if (timerType === 'countdown' && timeLeft === 0) {
      setTimeLeft(maxTime);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(timerType === 'countdown' ? maxTime : 0);
  };

  const handleMaxTimeChange = (value: number[]) => {
    const newMaxTime = value[0];
    setMaxTime(newMaxTime);
    if (!isRunning && timerType === 'countdown') {
      setTimeLeft(newMaxTime);
    }
  };

  const toggleTimerType = () => {
    setIsRunning(false);
    setTimerType(prev => prev === 'countdown' ? 'stopwatch' : 'countdown');
    setTimeLeft(timerType === 'stopwatch' ? maxTime : 0);
  };

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="timer" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1">
            Training Tool
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Workout Timer</h2>
          <p className="text-muted-foreground max-w-2xl">
            Time your workouts with precision. Set countdowns for AMRAP workouts or track time for your "For Time" WODs.
          </p>
        </div>

        <AnimatedCard className="max-w-md mx-auto p-8 bg-card">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="ghost" 
              onClick={toggleTimerType}
              className="flex items-center gap-2"
            >
              <TimerIcon className="h-4 w-4" />
              <span>{timerType === 'countdown' ? 'Countdown' : 'Stopwatch'}</span>
            </Button>
            
            <Badge
              variant={isRunning ? "default" : "outline"}
              className={isRunning ? "bg-primary text-primary-foreground animate-pulse-subtle" : ""}
            >
              {isRunning ? "Running" : "Ready"}
            </Badge>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="text-6xl md:text-7xl font-mono font-bold tracking-tighter">
              {formatTime(timeLeft)}
            </div>
          </div>
          
          {timerType === 'countdown' && (
            <div className="mb-8">
              <div className="flex justify-between mb-2 text-sm">
                <span>Duration: {formatTime(maxTime)}</span>
                <span className="text-muted-foreground">Max: 30:00</span>
              </div>
              <Slider
                value={[maxTime]}
                min={5}
                max={1800}
                step={5}
                onValueChange={handleMaxTimeChange}
                disabled={isRunning}
                className="py-4"
              />
            </div>
          )}
          
          <div className="flex gap-3 justify-center">
            {!isRunning ? (
              <Button
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2"
                onClick={startTimer}
              >
                <Play className="h-4 w-4" />
                Start
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2"
                onClick={pauseTimer}
              >
                <Pause className="h-4 w-4" />
                Pause
              </Button>
            )}
            
            <Button
              variant="secondary"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2"
              onClick={resetTimer}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Timer;
