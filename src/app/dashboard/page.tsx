"use client";

import { useState } from "react";
import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // **BACKEND URL PLACEHOLDER**
    // In a real app, you would make a POST request to your Firebase auth endpoint here.
    // try {
    //   const response = await fetch('YOUR_FIREBASE_AUTH_URL', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   if (!response.ok) throw new Error('Authentication failed');
    //   const { token } = await response.json();
    //   // You would typically save the token (e.g., in an HttpOnly cookie)
    //   setIsAuthenticated(true);
    // } catch (err) {
    //   setError(err.message || 'Invalid email or password');
    // }

    // For demonstration purposes, we'll simulate a successful login:
    if (email && password) {
      console.log('Simulating successful login...');
      setIsAuthenticated(true);
    } else {
      setError('Please enter both email and password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  if (isAuthenticated) {
    return (
      <MainLayout showSidebar={true}>
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button onClick={handleLogout} variant="outline">
                  Log Out
              </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                  <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>Your call analytics will be displayed here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p>Analytics content...</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle>Recent Calls</CardTitle>
                      <CardDescription>A list of your recent calls will appear here.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p>Recent calls content...</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your account and billing information.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p>Account settings content...</p>
                  </CardContent>
              </Card>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout showSidebar={false}>
      <div className="flex items-center justify-center min-h-full">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to access your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline">
                Sign up
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
