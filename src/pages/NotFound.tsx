import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="text-6xl mb-4">🌾</div>
        <h1 className="mb-4 text-4xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-4 text-sm text-muted-foreground malayalam">പേജ് കണ്ടെത്താനായില്ല</p>
        <a href="/" className="text-kerala-green underline hover:text-kerala-green/80">
          Return to Kerala Krishi AI
        </a>
      </div>
    </div>
  );
};

export default NotFound;
