import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatInterface } from "@/components/chat/chat-interface";
import { ProfilePage } from "@/components/profile/profile-page";
import { 
  Home, 
  MessageCircle, 
  CloudSun, 
  TrendingUp, 
  User,
  Bug,
  Leaf,
  Droplets,
  Cloud,
  DollarSign
} from "lucide-react";

interface MainDashboardProps {
  userInfo: any;
  onLogout: () => void;
}

export const MainDashboard = ({ userInfo, onLogout }: MainDashboardProps) => {
  const [currentView, setCurrentView] = useState<'home' | 'chat' | 'weather' | 'market' | 'profile'>('home');

  const problemCategories = [
    {
      id: 'pest-control',
      title: 'Pest Control',
      titleMalayalam: 'കീട നിയന്ത്രണം',
      description: 'Insects, worms, and other pests',
      descriptionMalayalam: 'കീടങ്ങൾ, പുഴുക്കൾ, മറ്റ് ദോഷകാരികൾ',
      icon: Bug,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 border-red-200'
    },
    {
      id: 'plant-disease',
      title: 'Plant Disease',
      titleMalayalam: 'സസസ്യ രോഗങ്ങൾ',
      description: 'Fungal, bacterial, viral diseases',
      descriptionMalayalam: 'ഫംഗൽ, ബാക്ടീരിയൽ, വൈറൽ രോഗങ്ങൾ',
      icon: Leaf,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'fertilization',
      title: 'Fertilization',
      titleMalayalam: 'വളപ്രയോഗം',
      description: 'Nutrient deficiency and soil health',
      descriptionMalayalam: 'പോഷകക്കുറവും മണ്ണിന്റെ ആരോഗ്യവും',
      icon: Droplets,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 border-green-200'
    },
    {
      id: 'weather-damage',
      title: 'Weather Damage',
      titleMalayalam: 'കാലാവസ്ഥാ നാശം',
      description: 'Rain, heat, drought effects',
      descriptionMalayalam: 'മഴ, ചൂട്, വരൾച്ചയുടെ പ്രഭാവം',
      icon: Cloud,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50 border-purple-200'
    },
    {
      id: 'market-prices',
      title: 'Market Prices',
      titleMalayalam: 'വിപണി വില',
      description: 'Selling and pricing guidance',
      descriptionMalayalam: 'വിൽപ്പനയും വിലനിർണ്ണയ മാർഗനിർദേശവും',
      icon: DollarSign,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50 border-amber-200'
    }
  ];

  const renderHome = () => (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary malayalam">
          നമസ്കാരം {userInfo.name}! 🙏
        </h1>
        <p className="text-muted-foreground malayalam">
          Choose your problem type / പ്രശ്നത്തിന്റെ തരം തിരഞ്ഞെടുക്കുക
        </p>
        <p className="text-sm text-muted-foreground">
          Select the category that best describes your agricultural issue
        </p>
      </div>

      {/* Problem Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {problemCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={category.id}
              className={`problem-card ${category.bgColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentView('chat')}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-primary">
                      {category.title}
                    </h3>
                    <p className="text-sm font-medium text-kerala-green malayalam">
                      {category.titleMalayalam}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                    <p className="text-xs text-muted-foreground malayalam">
                      {category.descriptionMalayalam}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Card className="bg-gradient-to-br from-success/10 to-kerala-green/5">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-success">28°C</div>
            <div className="text-sm text-muted-foreground">Temperature</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-sky-blue/10 to-primary/5">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-sky-blue">85%</div>
            <div className="text-sm text-muted-foreground">Humidity</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-sunshine-yellow/10 to-warning/5">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-sunshine-yellow">12mm</div>
            <div className="text-sm text-muted-foreground">Rainfall</div>
          </CardContent>
        </Card>
      </div>

      {/* Powered by Kerala Agricultural AI */}
      <div className="text-center pt-6">
        <Badge variant="secondary" className="expert-badge">
          🌾 Powered by Kerala Agricultural AI • കേരള കാർഷിക AI നിങ്ങൾ 🌾
        </Badge>
      </div>
    </div>
  );

  const renderBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex justify-around py-2">
        {[
          { id: 'home', icon: Home, label: 'Home', labelMalayalam: 'ഹോം' },
          { id: 'chat', icon: MessageCircle, label: 'Chat', labelMalayalam: 'ചാറ്റ്' },
          { id: 'weather', icon: CloudSun, label: 'Weather', labelMalayalam: 'കാലാവസ്ഥ' },
          { id: 'market', icon: TrendingUp, label: 'Market', labelMalayalam: 'മാർക്കറ്റ്' },
          { id: 'profile', icon: User, label: 'Profile', labelMalayalam: 'പ്രൊഫൈൽ' }
        ].map((item) => {
          const IconComponent = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 ${
                isActive ? 'text-kerala-green bg-kerala-green/10' : 'text-muted-foreground'
              }`}
              onClick={() => setCurrentView(item.id as any)}
            >
              <IconComponent className="h-5 w-5" />
              <span className="text-xs malayalam">{item.labelMalayalam}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {currentView === 'home' && renderHome()}
      {currentView === 'chat' && <ChatInterface userInfo={userInfo} />}
      {currentView === 'profile' && <ProfilePage userInfo={userInfo} onLogout={onLogout} />}
      {currentView === 'weather' && (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Weather Information</h2>
          <p>Weather details coming soon...</p>
        </div>
      )}
      {currentView === 'market' && (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Market Prices</h2>
          <p>Market information coming soon...</p>
        </div>
      )}
      
      {renderBottomNav()}
    </div>
  );
};