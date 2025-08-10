"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function XAccountsPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI X Account Management</h1>
        <p className="text-muted-foreground">
          Boost your brand presence and engagement on X (Twitter) with our AI-powered management service
        </p>
      </div>

      {/* Overview Card */}
      <Card className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Enhance Your X Presence</CardTitle>
          <CardDescription className="text-blue-100">
            Let our AI handle your X account while you focus on your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            In today's digital landscape, maintaining an active and engaging X presence is crucial for brand awareness and customer engagement.
            Our AI-powered service handles everything, so you can focus on running your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Increased Engagement</h3>
              <p className="text-sm">
                Our AI algorithms analyze trending topics and optimal posting times to maximize engagement with your audience.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Content Creation</h3>
              <p className="text-sm">
                Our AI generates high-quality, relevant tweets tailored to your brand voice and industry.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Consistent Scheduling</h3>
              <p className="text-sm">
                Maintain an active presence with scheduled posts, including daily "good morning" and "good night" tweets.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-white text-blue-700 hover:bg-blue-50">Get Started</Button>
        </CardFooter>
      </Card>

      {/* Features Section */}
      <h2 className="text-2xl font-bold mb-6">Comprehensive X Management Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">AI Content Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Industry-specific tweet creation tailored to your brand voice</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Engaging visual content and graphics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Hashtag research and optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Thread creation for in-depth topics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Analytics & Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Real-time performance tracking of all posts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Audience growth and engagement metrics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Competitor analysis and benchmarking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Monthly performance reports</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Engagement Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>AI-powered responses to mentions and comments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Strategic liking and retweeting of relevant content</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Community building through active participation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Follower growth strategies</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Scheduling & Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Daily "good morning" and "good night" posts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Optimal posting times based on audience activity</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Content calendar management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Seasonal and trending topic integration</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Pricing Section */}
      <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>Perfect for small businesses</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$299</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>15 AI-generated tweets per week</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Daily good morning/night posts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Basic engagement monitoring</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Monthly performance report</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Select Plan</Button>
          </CardFooter>
        </Card>
        
        <Card className="border-2 border-primary">
          <CardHeader>
            <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full w-fit mb-2">
              Most Popular
            </div>
            <CardTitle>Professional</CardTitle>
            <CardDescription>Ideal for growing businesses</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$499</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>30 AI-generated tweets per week</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Daily good morning/night posts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Advanced engagement strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Weekly performance updates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Competitor analysis</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Select Plan</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For established brands</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$899</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>50+ AI-generated tweets per week</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Custom posting schedule</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Premium engagement management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Advanced analytics dashboard</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Select Plan</Button>
          </CardFooter>
        </Card>
      </div>

      {/* CTA Section */}
      <Card className="bg-muted">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to Transform Your X Presence?</CardTitle>
          <CardDescription>
            Join the hundreds of businesses already leveraging our AI-powered X management service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Get Started Now</Button>
            <Button size="lg" variant="outline">Schedule a Demo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
