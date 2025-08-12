"use client";

import { Button } from "@/components/ui/button";

export default function XAccountsPage() {
  return (
    <div className="min-h-[800px] bg-white">
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded mr-3"></div>
              <h1 className="text-xl text-black">AI Social</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <span className="text-neutral-600 hover:text-black cursor-pointer">Features</span>
              <span className="text-neutral-600 hover:text-black cursor-pointer">Pricing</span>
              <span className="text-black cursor-pointer">Add-ons</span>
              <span className="text-neutral-600 hover:text-black cursor-pointer">Contact</span>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-neutral-600 hover:text-black">Sign In</button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <section className="py-20 px-6 bg-neutral-50 h-[500px] flex items-center">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl text-black mb-6">X Account Management</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">Boost your brand presence and engagement on X with AI-powered content creation, scheduling, and analytics</p>
            <div className="flex items-center justify-center space-x-8 text-neutral-500">
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-robot text-2xl"></i>
                <span>AI Content Generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-chart-line text-2xl"></i>
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-solid fa-clock text-2xl"></i>
                <span>Smart Scheduling</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-center mb-16">Comprehensive X Management Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-pen-nib text-2xl text-neutral-600"></i>
                </div>
                <h3 className="text-xl mb-2">AI Content Generation</h3>
                <p className="text-neutral-600">Create engaging tweets with AI-powered content tailored to your brand voice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-chart-bar text-2xl text-neutral-600"></i>
                </div>
                <h3 className="text-xl mb-2">Analytics & Monitoring</h3>
                <p className="text-neutral-600">Track performance metrics and monitor engagement in real-time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-users text-2xl text-neutral-600"></i>
                </div>
                <h3 className="text-xl mb-2">Engagement Management</h3>
                <p className="text-neutral-600">Automated responses and engagement strategies to grow your audience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-calendar text-2xl text-neutral-600"></i>
                </div>
                <h3 className="text-xl mb-2">Scheduling & Automation</h3>
                <p className="text-neutral-600">Schedule posts and automate daily good morning/good night tweets</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-center mb-4">Choose Your Plan</h2>
            <p className="text-neutral-600 text-center mb-16">Select the perfect plan for your X management needs</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl border border-neutral-200 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-2">Starter</h3>
                  <div className="text-4xl mb-2">$2.99<span className="text-lg text-neutral-500">/month</span></div>
                  <p className="text-neutral-600">Perfect for individuals</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>15 AI-generated tweets per week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Daily good morning/good night posts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Basic engagement monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Monthly performance report</span>
                  </li>
                </ul>
                <Button className="w-full bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-800">Select Plan</Button>
              </div>

              <div className="bg-white rounded-xl border-2 border-black p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-2">Professional</h3>
                  <div className="text-4xl mb-2">$4.99<span className="text-lg text-neutral-500">/month</span></div>
                  <p className="text-neutral-600">For growing businesses</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>30 AI-generated tweets per week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Daily good morning/good night posts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Advanced engagement strategies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Weekly performance updates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Competitor analysis</span>
                  </li>
                </ul>
                <Button className="w-full bg-black text-white py-3 rounded-lg hover:bg-neutral-800">Select Plan</Button>
              </div>

              <div className="bg-white rounded-xl border border-neutral-200 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl mb-2">Enterprise</h3>
                  <div className="text-4xl mb-2">$8.99<span className="text-lg text-neutral-500">/month</span></div>
                  <p className="text-neutral-600">For large organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>50+ AI-generated tweets per week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Custom posting schedule</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Premium engagement management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check text-neutral-600 mt-1"></i>
                    <span>Advanced analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-800">Select Plan</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Ready to transform your X presence?</h2>
            <p className="text-xl text-neutral-600 mb-8">Join thousands of brands already using our AI-powered X management tools</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white px-8 py-4 rounded-lg text-lg hover:bg-neutral-800">Start Free Trial</Button>
              <Button className="border border-neutral-300 text-neutral-700 px-8 py-4 rounded-lg text-lg hover:bg-neutral-50">Schedule Demo</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded"></div>
                <span className="text-xl">AI Social</span>
              </div>
              <p className="text-neutral-400">Transform your social media presence with AI-powered management tools.</p>
            </div>
            <div>
              <h3 className="mb-4">Product</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><span className="hover:text-white cursor-pointer">Features</span></li>
                <li><span className="hover:text-white cursor-pointer">Pricing</span></li>
                <li><span className="hover:text-white cursor-pointer">Add-ons</span></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Company</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><span className="hover:text-white cursor-pointer">About</span></li>
                <li><span className="hover:text-white cursor-pointer">Contact</span></li>
                <li><span className="hover:text-white cursor-pointer">Support</span></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Legal</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><span className="hover:text-white cursor-pointer">Privacy</span></li>
                <li><span className="hover:text-white cursor-pointer">Terms</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
            <p>© 2025 AI Social. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
