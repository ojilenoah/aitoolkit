import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      login(email);
      setLocation("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-white">
      <Card className="w-full max-w-md p-8 transition-all">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Teacher AI Tools Hub</h1>
          <p className="text-gray-600">Sign in to access your AI-powered teaching assistant tools</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email address
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Forgot password?
              </a>
            </div>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label htmlFor="remember-me" className="text-sm text-gray-700">
              Remember me
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-6 rounded-lg hover:bg-indigo-700 transition shadow-sm"
          >
            Sign in
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-800">
              Sign up
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
}
