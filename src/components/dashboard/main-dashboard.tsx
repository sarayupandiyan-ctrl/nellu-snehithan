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
  const [currentView, setCurrentView] = useState<'home' | 'weather' | 'market' | 'profile'>('home');

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
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-soft/20">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white px-6 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">
            Get instant agricultural advice, pest identification, weather alerts, and connect with Kerala's top farming experts
          </h1>
          <p className="text-sm opacity-90 malayalam">
            കേരളയിലെ മികച്ച കൃഷി വിദഗ്ധരുമായി ബന്ധപ്പെടുകയും തൽക്ഷണ കാർഷിക ഉപദേശം നേടുകയും ചെയ്യുക
          </p>
          <p className="text-xs opacity-80">
            Supporting Malayalam and English for Kerala farmers
          </p>
        </div>
        
        {/* Start Chatting Button */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <Button 
            onClick={() => setCurrentView('profile')}
            className="bg-sunshine-yellow hover:bg-sunshine-yellow/90 text-primary font-semibold px-8 py-3 rounded-full"
          >
            🌱 Start Chatting / ചാറ്റ് തുടങ്ങുക
          </Button>
          <div className="hidden md:block bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-xs">Voice Support Available</p>
          </div>
        </div>
      </div>

      {/* Kerala-Specific Agricultural Intelligence */}
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Kerala-Specific Agricultural Intelligence
          </h2>
          <p className="text-muted-foreground">
            Designed specifically for Kerala's unique climate, crops, and farming traditions
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: "🌱",
              title: "Crop Identification",
              description: "AI-powered pest and disease detection for Kerala crops like rice, coconut, and spices",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: "⚡",
              title: "Smart Recommendations", 
              description: "ML-based fertilizer and treatment suggestions based on monsoon patterns",
              color: "from-amber-500 to-yellow-500"
            },
            {
              icon: "📍",
              title: "Hyperlocal Weather",
              description: "District-wise weather alerts and agricultural advisories for 14 Kerala districts",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: "📱",
              title: "Malayalam Voice Support",
              description: "Complete voice interface supporting mixed Malayalam-English commands",
              color: "from-purple-500 to-violet-500"
            }
          ].map((feature, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Agricultural Support */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Quick Agricultural Support / ദ്രുത കാർഷിക സഹായം
          </h3>
        </div>

        {/* Problem Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: "🐛",
              title: "Pest Problems",
              titleMalayalam: "കീട പ്രശ്നങ്ങൾ",
              description: "Insects, worms, and other pests",
              color: "border-red-200 bg-red-50"
            },
            {
              icon: "🌧️", 
              title: "Weather Damage",
              titleMalayalam: "കാലാവസ്ഥാ നാശം",
              description: "Rain, heat, drought effects", 
              color: "border-blue-200 bg-blue-50"
            },
            {
              icon: "🌿",
              title: "Plant Diseases", 
              titleMalayalam: "സസസ്യ രോഗങ്ങൾ",
              description: "Fungal, bacterial, viral diseases",
              color: "border-green-200 bg-green-50"
            }
          ].map((category, index) => (
            <Card 
              key={index}
              className={`problem-card ${category.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentView('profile')}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{category.title}</h4>
                <p className="text-xs font-medium text-kerala-green malayalam mb-1">
                  {category.titleMalayalam}
                </p>
                <p className="text-xs text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Branding */}
        <div className="bg-gradient-primary text-white p-6 rounded-lg text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">🌾</span>
            <h4 className="text-lg font-bold">Kerala Krishi AI</h4>
            <span className="text-2xl">🌾</span>
          </div>
          <p className="text-sm opacity-90">
            Empowering Kerala farmers with AI-driven agricultural intelligence
          </p>
        </div>
      </div>
    </div>
  );

  const renderBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex justify-around py-2">
        {[
          { id: 'home', icon: Home, label: 'Home', labelMalayalam: 'ഹോം' },
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
      {currentView === 'profile' && <ProfilePage userInfo={userInfo} onLogout={onLogout} />}
      {currentView === 'weather' && (
        <div className="min-h-screen bg-background">
          {/* Weather Header */}
          <div className="bg-gradient-to-r from-sky-blue to-primary text-white p-6">
            <h2 className="text-2xl font-bold mb-2">Weather Information</h2>
            <p className="text-sm opacity-90 malayalam">കാലാവസ്ഥാ വിവരങ്ങൾ</p>
            <div className="mt-4 text-center">
              <div className="text-4xl mb-2">🌤️</div>
              <div className="text-3xl font-bold">28°C</div>
              <div className="text-sm opacity-90">Partly Cloudy</div>
            </div>
          </div>

          {/* Current Week Weather */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">2 weeks before seeding</h3>
            <p className="text-muted-foreground mb-4">Plant selection</p>
            
            {/* Week Timeline */}
            <Card className="mb-6 border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-blue-600">Week 1 - 2</h4>
                    <p className="text-sm text-muted-foreground">Seeding stage</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Ongoing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-l-4 border-l-orange-400">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-orange-600">Week 2</h4>
                    <p className="text-sm text-muted-foreground">Monitor your field</p>
                  </div>
                  <Badge variant="secondary">Upcoming</Badge>
                </div>
                
                {/* Pest Alert Cards */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg mb-1">🦗</div>
                      <div className="text-xs font-medium">Leafhoppers and Jassids</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg mb-1">🍃</div>
                      <div className="text-xs font-medium">Leaf Miner Flies</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg mb-1">🐛</div>
                      <div className="text-xs font-medium">Aphids</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gray-400">
              <CardContent className="p-4">
                <div>
                  <h4 className="font-semibold text-gray-600">Week 3 - 6</h4>
                  <p className="text-sm text-muted-foreground">Vegetative stage</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instant Disease Detection */}
          <div className="mx-6 mb-6">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Instant Disease Detection</h3>
                <p className="text-sm opacity-90 mb-4">Take a photo to identify crop diseases instantly</p>
                <Button className="bg-white text-primary hover:bg-white/90">
                  📷 Take Photo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      {currentView === 'market' && (
        <div className="min-h-screen bg-background">
          {/* Market Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
            <h2 className="text-2xl font-bold mb-2">Market Prices</h2>
            <p className="text-sm opacity-90 malayalam">വിപണി വില</p>
            <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Last updated: Today, 2:30 PM</span>
              </div>
            </div>
          </div>

          {/* Market Prices */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Today's Prices</h3>
            
            <div className="space-y-4">
              {[
                { 
                  name: 'Rice', 
                  malayalam: 'അരി',
                  location: 'Kottayam Mandi', 
                  price: '₹2,840', 
                  change: '+5.2%', 
                  positive: true 
                },
                { 
                  name: 'Coconut', 
                  malayalam: 'തേങ്ങ',
                  location: 'Local Market', 
                  price: '₹12,500', 
                  change: '-2.1%', 
                  positive: false 
                },
                { 
                  name: 'Pepper', 
                  malayalam: 'കുരുമുളക്',
                  location: 'Spice Board', 
                  price: '₹850', 
                  change: '+8.5%', 
                  positive: true 
                },
                { 
                  name: 'Cardamom', 
                  malayalam: 'ഏലം',
                  location: 'Spice Auction', 
                  price: '₹2,200', 
                  change: '+12.3%', 
                  positive: true 
                }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <span className="text-sm text-muted-foreground malayalam">
                            {item.malayalam}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{item.price}</div>
                        <div className={`flex items-center space-x-1 ${
                          item.positive ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <span className="text-sm">
                            {item.positive ? '📈' : '📉'}
                          </span>
                          <span className="text-sm font-medium">{item.change}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Set Price Alerts */}
          <div className="mx-6 mb-6">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">💰 Set Price Alerts</h3>
                <p className="text-sm opacity-90 mb-4 malayalam">
                  വില ലക്ഷ്യത്തിൽ എത്തുമ്പോൾ അറിയിപ്പ് ലഭിക്കും
                </p>
                <p className="text-xs opacity-80 mb-4">
                  Get notified when prices reach your target
                </p>
                <Button className="bg-white text-primary hover:bg-white/90">
                  🔔 Set Alert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      
      {renderBottomNav()}
    </div>
  );
};