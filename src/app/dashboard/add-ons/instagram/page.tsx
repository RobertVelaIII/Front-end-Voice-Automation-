"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Instagram } from "lucide-react";

export default function InstagramPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Instagram Management</h1>
        <p className="text-muted-foreground">
          Grow your Instagram presence with our AI-powered content creation and engagement service
        </p>
      </div>

      {/* Overview Card */}
      <Card className="mb-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Elevate Your Instagram Strategy</CardTitle>
          <CardDescription className="text-pink-100">
            Let our AI create engaging content and grow your following
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Instagram is one of the most powerful platforms for brand visibility and customer engagement.
            Our AI-powered service creates stunning content, engages with your audience, and grows your following organically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Content Creation</h3>
              <p className="text-sm">
                Our AI generates visually stunning posts, stories, and reels tailored to your brand aesthetic.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Audience Growth</h3>
              <p className="text-sm">
                Strategic engagement and hashtag optimization to attract your target audience and increase followers.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Performance Analytics</h3>
              <p className="text-sm">
                Detailed insights on post performance, audience demographics, and growth metrics.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-white text-pink-600 hover:bg-pink-50">Get Started</Button>
        </CardFooter>
      </Card>

      {/* Features Section */}
      <h2 className="text-2xl font-bold mb-6">Comprehensive Instagram Management Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">AI Content Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>High-quality image and video content generation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Engaging captions with optimal hashtag selection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Story and reel creation with trending audio</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Carousel posts with educational content</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Engagement Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>AI-powered comment responses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Strategic following and engagement with target accounts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>DM management and response automation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Engagement pods and community building</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Growth Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Hashtag research and optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Competitor analysis and benchmarking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Trend monitoring and implementation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Audience targeting and growth strategies</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Analytics & Reporting</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Comprehensive performance dashboards</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Audience demographic insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Content performance analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Weekly and monthly growth reports</span>
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
            <CardDescription>For small businesses and creators</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$349</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>12 AI-generated posts per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>15 story creations per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Basic engagement management</span>
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
            <CardDescription>For growing brands and influencers</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$599</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>20 AI-generated posts per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>30 story creations per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>4 reels per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Advanced engagement strategies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Weekly performance updates</span>
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
            <CardDescription>For established brands and businesses</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$999</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>30+ AI-generated posts per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Daily story creation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>8 reels per month</span>
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

      {/* Results Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Real Results for Our Clients</CardTitle>
          <CardDescription>
            See how our AI Instagram management service has transformed businesses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600">+230%</div>
              <p className="text-muted-foreground">Average Engagement Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600">+5K</div>
              <p className="text-muted-foreground">Average Monthly Follower Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600">+45%</div>
              <p className="text-muted-foreground">Average Website Traffic Increase</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-muted">
        <CardHeader>
          <CardTitle className="text-2xl">Ready to Transform Your Instagram Presence?</CardTitle>
          <CardDescription>
            Join the hundreds of businesses already leveraging our AI-powered Instagram management service
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
