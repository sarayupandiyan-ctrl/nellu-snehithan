import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FarmingLoader } from "@/components/ui/farming-loader";
import { useToast } from "@/hooks/use-toast";

interface LoginPageProps {
  onLogin: (userInfo: any) => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    farmLocation: "",
    mainCrops: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userInfo = {
        name: formData.fullName || "രാജു കർഷകൻ",
        phone: formData.phone || "+91 98765 43210",
        farmLocation: formData.farmLocation || "Kottayam, Kerala",
        mainCrops: formData.mainCrops || "Rice, Coconut, Spices",
        acres: "5.2",
        experience: "12",
        rating: "4.8"
      };
      
      onLogin(userInfo);
      setIsLoading(false);
      toast({
        title: "Welcome! / സ്വാഗതം!",
        description: "Successfully logged in to Kerala Krishi AI",
      });
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-kerala-light-green via-coconut-white to-sky-blue/20 flex items-center justify-center p-4">
        <FarmingLoader message="Connecting to Kerala Krishi AI... / കേരള കൃഷി AI-യിലേക്ക് കണക്റ്റ് ചെയ്യുന്നു..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-kerala-light-green via-coconut-white to-sky-blue/20 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-10 plant-sway">🌾</div>
        <div className="absolute top-20 right-20 text-4xl opacity-10 plant-sway" style={{ animationDelay: '1s' }}>🥥</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10 plant-sway" style={{ animationDelay: '2s' }}>🌴</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-10 plant-sway" style={{ animationDelay: '0.5s' }}>🌿</div>
      </div>

      <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm border-kerala-green/20 shadow-xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-4xl mb-4">
            🌾
          </div>
          <CardTitle className="text-2xl font-bold text-kerala-green">
            Farmer Details / കൃഷിക്കാരൻ വിവരങ്ങൾ
          </CardTitle>
          <CardDescription className="malayalam">
            Please provide your information to get started
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary flex items-center gap-2">
                👤 Full Name / പൂർണ്ണ നാമം
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="malayalam"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-primary flex items-center gap-2">
                📱 Phone Number / ഫോൺ നമ്പർ
              </label>
              <Input
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-primary flex items-center gap-2">
                📍 Farm Location / കൃഷിസ്ഥലം (Optional)
              </label>
              <Input
                type="text"
                placeholder="District, Village"
                className="malayalam"
                value={formData.farmLocation}
                onChange={(e) => setFormData({ ...formData, farmLocation: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-primary flex items-center gap-2">
                🌾 Main Crops / പ്രധാന വിളകൾ (Optional)
              </label>
              <Input
                type="text"
                placeholder="Rice, Coconut, Spices..."
                className="malayalam"
                value={formData.mainCrops}
                onChange={(e) => setFormData({ ...formData, mainCrops: e.target.value })}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:bg-kerala-green/90 text-white font-medium py-3 text-lg"
            >
              🚜 Start Farming Assistant / സഹായി ആരംഭിക്കുക
            </Button>

            <p className="text-xs text-muted-foreground text-center malayalam mt-4">
              By registering, you agree to receive agricultural advisories and expert consultations
              <br />
              രജിസ്റ്റർ ചെയ്യുന്നതിലൂടെ, കാർഷിക ഉപദേശങ്ങൾ 
              സ്വീകരിക്കാൻ നിങ്ങൾ സമ്മതിക്കുന്നു
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};