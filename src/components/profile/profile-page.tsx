import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Star,
  Settings,
  LogOut,
  Tractor,
  Droplets
} from "lucide-react";

interface ProfilePageProps {
  userInfo: any;
  onLogout: () => void;
}

export const ProfilePage = ({ userInfo, onLogout }: ProfilePageProps) => {
  const cropColors = {
    'Rice': 'bg-green-100 text-green-800',
    'Coconut': 'bg-blue-100 text-blue-800', 
    'Pepper': 'bg-orange-100 text-orange-800',
    'Vegetables': 'bg-purple-100 text-purple-800',
    'Spices': 'bg-amber-100 text-amber-800'
  };

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      {/* Profile Header */}
      <Card className="mb-6 bg-gradient-to-r from-kerala-green/10 to-success/10 border-kerala-green/20">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl">
              👨‍🌾
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-primary malayalam">{userInfo.name}</h1>
              <p className="text-muted-foreground font-medium">Organic Farmer</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-kerala-green">
                  <Tractor className="h-4 w-4" />
                  <span className="text-sm font-medium">{userInfo.acres} Acres</span>
                </div>
                <div className="flex items-center space-x-1 text-sky-blue">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{userInfo.experience} Years Exp.</span>
                </div>
                <div className="flex items-center space-x-1 text-sunshine-yellow">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{userInfo.rating} Rating</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-primary">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">{userInfo.farmLocation}</p>
              <p className="text-sm text-muted-foreground">Farm Location</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">{userInfo.phone}</p>
              <p className="text-sm text-muted-foreground">Contact Number</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">raju.farmer@email.com</p>
              <p className="text-sm text-muted-foreground">Email Address</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farm Details */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-primary">Farm Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-3">Current Crops</h4>
            <div className="flex flex-wrap gap-2">
              {userInfo.mainCrops.split(', ').map((crop: string, index: number) => (
                <Badge 
                  key={index}
                  className={cropColors[crop as keyof typeof cropColors] || 'bg-gray-100 text-gray-800'}
                >
                  {crop}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Farm Type</h4>
              <p className="font-medium malayalam">Organic Mixed Farming</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Soil Type</h4>
              <p className="font-medium">Red Laterite Soil</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-muted-foreground">Irrigation Method</h4>
            <div className="flex items-center space-x-2 mt-1">
              <Droplets className="h-4 w-4 text-sky-blue" />
              <p className="font-medium">Drip Irrigation & Rain-fed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Assistant Stats */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-primary">AI Assistant Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-kerala-green">47</div>
              <div className="text-sm text-muted-foreground">Queries Solved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-blue">12</div>
              <div className="text-sm text-muted-foreground">Expert Consultations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sunshine-yellow">8</div>
              <div className="text-sm text-muted-foreground">Problems Prevented</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings and Actions */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start" size="lg">
              <Settings className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Settings</div>
                <div className="text-sm text-muted-foreground malayalam">App preferences and notifications</div>
              </div>
            </Button>
            
            <Button 
              variant="destructive" 
              className="w-full justify-start" 
              size="lg"
              onClick={onLogout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Logout</div>
                <div className="text-sm text-muted-foreground">Sign out of your account</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Info */}
      <div className="text-center text-muted-foreground">
        <p className="text-sm">Kerala Krishi AI Assistant v1.0</p>
        <p className="text-xs malayalam mt-1">കേരള കൃഷി AI സഹായി</p>
        <Badge variant="secondary" className="mt-2 expert-badge">
          🌾 Powered by Kerala Agricultural AI 🌾
        </Badge>
      </div>
    </div>
  );
};