"use client";

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/dashboard'); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
        <div className="flex justify-center items-center h-screen">Loading...</div>
    );
  }

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Developer team update!🧑‍💻</h1>
        </div>
        
        {/* What's New Section */}
        <Card className="mb-8">
          <CardHeader className="bg-primary/5">
            <CardTitle className="flex items-center gap-2">
              <span className="inline-block p-1 bg-primary text-white rounded-full">🎉</span>
              What's the latest new update? - August 10, 2025 3:44 AM Update
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">New Navigation Features & Performance Boost</h3>
                <p className="text-muted-foreground">We've improved the sidebar with new sections to help you get around easier:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Added <strong>Ask AI</strong> button for quick assistance (coming soon)</li>
                  <li>New <strong>Add-ons</strong> section with premium services</li>
                  <li>Improved <strong>Help</strong> section with documentation and support</li>
                  <li>Better organization of settings and billing options</li>
                </ul>
                <p className="text-muted-foreground mt-4">Additionally, we've optimized our servers on Fly.io to always stay awake now, which means no more cold starts, and faster website loading times! 🚀</p>
              </div>
              
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-600 shadow-lg overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-blue-200 dark:bg-blue-700/30 rounded-full opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 -ml-6 -mb-6 bg-indigo-200 dark:bg-indigo-700/30 rounded-full opacity-20"></div>
                
                {/* Header with icon */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <span className="flex items-center justify-center bg-blue-600 text-white p-1 rounded-full w-7 h-7 text-center">⚡</span>
                    <span>CRITICAL PATH</span>
                  </h3>
                  
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  
                  <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">Our top priority is enabling powerful automated business calls:</p>
                  
                  {/* Timeline-style list */}
                  <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-400 dark:before:bg-blue-600">
                    <div className="relative">
                      <div className="absolute left-[-24px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-800"></div>
                      <h4 className="font-bold text-blue-700 dark:text-blue-300">Website Analysis</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Improved accuracy in analyzing your business website for better call context</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-24px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-800"></div>
                      <h4 className="font-bold text-blue-700 dark:text-blue-300">High-Energy Sales Scripts</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">AI now creates Jordan Belfort-style sales scripts that drive conversions</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-[-24px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-800"></div>
                      <h4 className="font-bold text-blue-700 dark:text-blue-300">Business Recognition</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Enhanced identification of your business name and details in every call</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/50 rounded-md border border-blue-300 dark:border-blue-700">
                    <p className="text-sm font-medium flex items-center gap-2 text-gray-800 dark:text-gray-200">
                      <span className="text-green-600 dark:text-green-400">✅</span>
                      These improvements ensure your automated calls sound professional and represent your business accurately.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">We're working on these exciting features:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>AI X Accounts - Premium social media management</li>
                  <li>AI Instagram - Grow your Instagram presence</li>
                  <li>Custom AI Assistants - Personalized for your business</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-300 dark:border-blue-700 shadow-sm">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Thank you for being part of our journey! We're constantly improving Callify to better serve your business needs.</p>
              </div>
            </div>
          </CardContent>
        </Card>  
      </div>
  );
}
