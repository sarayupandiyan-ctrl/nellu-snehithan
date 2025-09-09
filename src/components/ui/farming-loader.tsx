import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface FarmingLoaderProps {
  className?: string;
  message?: string;
}

export const FarmingLoader = ({ className, message = "Loading..." }: FarmingLoaderProps) => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [dots, setDots] = useState("");
  
  const farmingSequence = [
    { icon: "🌱", text: "Planting seeds" },
    { icon: "💧", text: "Watering crops" },
    { icon: "🌿", text: "Growing plants" },
    { icon: "🌾", text: "Harvesting" },
    { icon: "🚜", text: "Processing data" },
    { icon: "🧠", text: "AI analyzing" }
  ];
  
  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % farmingSequence.length);
    }, 800);
    
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 400);
    
    return () => {
      clearInterval(iconInterval);
      clearInterval(dotsInterval);
    };
  }, [farmingSequence.length]);

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4 p-6 relative", className)}>
      {/* Main Loading Animation */}
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-kerala-green/20 rounded-full"></div>
        
        {/* Spinning Ring */}
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-kerala-green border-r-kerala-green rounded-full animate-spin"></div>
        
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl animate-bounce plant-sway">
            {farmingSequence[currentIcon].icon}
          </span>
        </div>
        
        {/* Growing Plants Animation */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 bg-kerala-green rounded-full grow-animation"
                style={{
                  height: `${8 + i * 2}px`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm font-medium text-kerala-green">
            {farmingSequence[currentIcon].text}
          </span>
          <span className="text-kerala-green font-bold w-4">
            {dots}
          </span>
        </div>
        <p className="text-xs text-muted-foreground max-w-xs malayalam">
          {message}
        </p>
      </div>
      
      {/* Farm tractor moving across */}
      <div className="relative w-32 h-3 overflow-hidden bg-earth-brown/20 rounded-full">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-lg" style={{ animation: 'farming-load 3s ease-in-out infinite' }}>
          🚜
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-lg opacity-60"
            style={{
              left: `${20 + i * 30}%`,
              animation: `leaf-fall 3s ease-in-out infinite`,
              animationDelay: `${i * 1}s`
            }}
          >
            🍃
          </div>
        ))}
      </div>
    </div>
  );
};