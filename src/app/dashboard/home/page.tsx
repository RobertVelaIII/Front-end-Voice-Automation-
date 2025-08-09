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
          <h1 className="text-3xl font-bold">Dashboard</h1>
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
  );
}
