import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function Header() {
  const { userEmail, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-indigo-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
            />
          </svg>
          <h1 className="ml-2 text-xl font-bold text-gray-900">Teacher AI Tools Hub</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">{userEmail}</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
