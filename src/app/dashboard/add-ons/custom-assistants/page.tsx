"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Bot, ShoppingCart, MessageSquare, Code, Database, Store } from "lucide-react";

export default function CustomAIAssistantsPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Custom AI Assistants</h1>
        <p className="text-muted-foreground">
          Intelligent, 24/7 AI assistants tailored to your business needs
        </p>
      </div>

      {/* Overview Card */}
      <Card className="mb-8 bg-gradient-to-r from-violet-600 to-indigo-700 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Transform Your Customer Experience</CardTitle>
          <CardDescription className="text-blue-100">
            AI assistants that understand your products, inventory, and customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our custom AI assistants integrate seamlessly with your existing systems to provide 24/7 customer service, 
            product recommendations, and inventory management. Whether you run a brick-and-mortar store or an e-commerce 
            platform, our AI solutions can help you deliver exceptional customer experiences around the clock.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <h3 className="font-semibold">Product Knowledge</h3>
              </div>
              <p className="text-sm">
                AI that understands your entire product catalog and can make intelligent recommendations.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <MessageSquare className="h-5 w-5 mr-2" />
                <h3 className="font-semibold">24/7 Support</h3>
              </div>
              <p className="text-sm">
                Always-on customer service that handles inquiries, troubleshooting, and support tickets.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 mr-2" />
                <h3 className="font-semibold">Inventory Integration</h3>
              </div>
              <p className="text-sm">
                Real-time inventory awareness to provide accurate availability information to customers.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-white text-indigo-700 hover:bg-indigo-50">Get Started</Button>
        </CardFooter>
      </Card>

      {/* Use Cases Tabs */}
      <h2 className="text-2xl font-bold mb-6">AI Assistant Solutions</h2>
      <Tabs defaultValue="ecommerce" className="mb-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
          <TabsTrigger value="retail">Retail Stores</TabsTrigger>
          <TabsTrigger value="service">Service Businesses</TabsTrigger>
        </TabsList>
        <TabsContent value="ecommerce" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                E-commerce AI Assistant
              </CardTitle>
              <CardDescription>
                Enhance your online store with intelligent product recommendations and 24/7 customer support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Product catalog integration with real-time inventory awareness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Personalized product recommendations based on browsing history</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Order status tracking and shipping information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Return and exchange policy assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Seamless handoff to human agents when needed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Integration Options</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Website chat widget with customizable appearance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Shopify, WooCommerce, and Magento plugins</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>API integration for custom e-commerce platforms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Email and SMS support channels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="retail" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Store className="h-5 w-5 mr-2" />
                Retail Store AI Assistant
              </CardTitle>
              <CardDescription>
                Enhance in-store experiences and provide 24/7 support for brick-and-mortar businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>In-store kiosk integration for customer self-service</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Store inventory management and location assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Phone system integration for after-hours support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Appointment scheduling and management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Customer loyalty program management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Integration Options</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>POS system integration (Square, Shopify POS, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Interactive kiosk software</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>VoIP phone system integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Mobile app integration for store associates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="service" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Service Business AI Assistant
              </CardTitle>
              <CardDescription>
                Streamline customer interactions and appointment scheduling for service-based businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>24/7 appointment booking and rescheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Service catalog knowledge and pricing information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Automated follow-ups and reminders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>FAQ handling and common troubleshooting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Customer feedback collection and analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Integration Options</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Calendar systems (Google Calendar, Outlook, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>CRM integration (Salesforce, HubSpot, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Website chat widget and contact forms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>SMS and email communication channels</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Integration Section */}
      <h2 className="text-2xl font-bold mb-6">Seamless Integration</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How Our AI Assistants Integrate With Your Business</CardTitle>
          <CardDescription>
            Multiple integration options to fit your existing systems and workflows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Website Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our AI assistants can be embedded directly into your website with just a few lines of code. The chat widget is fully customizable to match your brand's look and feel.</p>
                <div className="bg-muted p-3 rounded-md text-sm font-mono overflow-x-auto">
                  {`<script src="https://callify.ai/widget.js" 
  data-api-key="YOUR_API_KEY"
  data-theme="light">
</script>`}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  API Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Connect your existing systems directly to our AI platform using our comprehensive API. Sync product data, inventory, and customer information in real-time.</p>
                <ul className="space-y-1 text-sm">
                  <li>• REST and GraphQL endpoints</li>
                  <li>• Webhook support for events</li>
                  <li>• SDKs for popular languages</li>
                  <li>• Detailed documentation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Platform Plugins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">One-click installation for popular e-commerce and CMS platforms. Our plugins handle all the technical details for you.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Shopify App</li>
                  <li>• WooCommerce Plugin</li>
                  <li>• WordPress Plugin</li>
                  <li>• Magento Extension</li>
                  <li>• Square Integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Model Section */}
      <h2 className="text-2xl font-bold mb-6">Subscription-Based Service</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How Our Subscription Model Works</CardTitle>
          <CardDescription>
            Flexible, subscription-based pricing with no long-term commitments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Monthly Access</h3>
                <p className="text-muted-foreground">
                  Our AI assistants are provided on a monthly subscription basis. When your subscription is active, 
                  your AI assistant is fully functional. If you cancel, the AI assistant will no longer be available.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Data Handling</h3>
                <p className="text-muted-foreground">
                  Your product data and customer interactions are securely stored in our cloud infrastructure. 
                  When your subscription is active, your AI has full access to this data to provide intelligent assistance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Integration Lifecycle</h3>
                <p className="text-muted-foreground">
                  Our integration code and plugins only function with an active subscription. When your subscription ends, 
                  the AI assistant widget will automatically be removed from your website or display a reactivation message.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Section */}
      <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For small businesses</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$199</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Up to 500 products in catalog</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>1,000 AI conversations per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Basic website integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Email support</span>
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
            <CardDescription>For growing businesses</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$399</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Up to 5,000 products in catalog</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>5,000 AI conversations per month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Advanced website integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>API access</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Priority email & chat support</span>
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
            <CardDescription>For large businesses</CardDescription>
            <div className="mt-2">
              <span className="text-3xl font-bold">$899</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Unlimited products in catalog</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Unlimited AI conversations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Custom integration options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Full API access</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>24/7 priority support</span>
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
          <CardTitle className="text-2xl">Ready to Transform Your Customer Service?</CardTitle>
          <CardDescription>
            Join the hundreds of businesses already using our AI assistants to provide exceptional customer experiences
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
