"use client";

import { MainLayout } from "@/components/main-layout";
import { useState } from "react";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a stub - in a real app, you would validate credentials against a backend
    if (credentials.email && credentials.password) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ email: "", password: "" });
  };

  return (
    <MainLayout showSidebar={false}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
        
        {isAuthenticated ? (
          <div className="space-y-6">
            <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Welcome to your Dashboard</h2>
              <p className="mb-4 text-gray-800">This is a placeholder for the authenticated dashboard area.</p>
              <p className="mb-4 text-gray-800">In a complete application, you would see your account information, analytics, and controls here.</p>
              
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white/90 p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Login to Access Dashboard</h2>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Log In
              </button>
            </form>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
