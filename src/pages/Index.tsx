import { useState } from "react";
import { LoginPage } from "@/components/auth/login-page";
import { MainDashboard } from "@/components/dashboard/main-dashboard";

const Index = () => {
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userInfo: any) => {
    setUser(userInfo);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <MainDashboard userInfo={user} onLogout={handleLogout} />;
};

export default Index;
