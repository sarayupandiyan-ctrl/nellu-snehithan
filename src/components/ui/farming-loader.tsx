import { cn } from "@/lib/utils";

interface FarmingLoaderProps {
  className?: string;
  message?: string;
}

export const FarmingLoader = ({ className, message = "Loading..." }: FarmingLoaderProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div className="relative">
        {/* Main plant stem */}
        <div className="w-2 h-16 bg-kerala-green rounded-full plant-sway origin-bottom"></div>
        
        {/* Leaves */}
        <div className="absolute -top-2 -left-3">
          <div className="w-6 h-4 bg-success rounded-full transform -rotate-45 plant-sway"></div>
        </div>
        <div className="absolute -top-1 -right-3">
          <div className="w-6 h-4 bg-success rounded-full transform rotate-45 plant-sway"></div>
        </div>
        <div className="absolute top-3 -left-4">
          <div className="w-8 h-5 bg-kerala-green rounded-full transform -rotate-30 plant-sway"></div>
        </div>
        <div className="absolute top-3 -right-4">
          <div className="w-8 h-5 bg-kerala-green rounded-full transform rotate-30 plant-sway"></div>
        </div>
        
        {/* Falling seeds animation */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-sunshine-yellow rounded-full animate-leaf-fall" style={{ animationDelay: '0s' }}></div>
          <div className="w-1 h-1 bg-sunshine-yellow rounded-full animate-leaf-fall" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1 h-1 bg-sunshine-yellow rounded-full animate-leaf-fall" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Growth rings */}
        <div className="absolute inset-0 border-2 border-kerala-green/30 rounded-full animate-ping"></div>
        <div className="absolute inset-2 border border-success/50 rounded-full animate-pulse"></div>
      </div>
      
      {/* Loading text */}
      <div className="text-center">
        <p className="text-primary font-medium malayalam">{message}</p>
        <div className="flex space-x-1 mt-2 justify-center">
          <div className="w-2 h-2 bg-kerala-green rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-kerala-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-kerala-green rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      {/* Farm tractor moving across */}
      <div className="relative w-32 h-4 overflow-hidden bg-earth-brown/20 rounded-full">
        <div className="absolute top-1/2 transform -translate-y-1/2 animate-farming-load">
          🚜
        </div>
      </div>
    </div>
  );
};