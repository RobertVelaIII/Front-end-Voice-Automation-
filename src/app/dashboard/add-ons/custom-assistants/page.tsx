"use client";

export default function CustomAIAssistantsPage() {
  return (
    <div className="h-full text-base-content">
      <div id="header" className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-neutral-800 rounded"></div>
            <span className="text-xl text-neutral-900">AI Assistant Platform</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Features</span>
            <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Integration</span>
            <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Pricing</span>
            <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer">Contact</span>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">Sign In</button>
            <button className="px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800">Get Started</button>
          </div>
        </div>
      </div>

      <main id="main-content">
        <section id="hero" className="bg-neutral-50 px-6 py-20 h-[600px] flex items-center">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl text-neutral-900 mb-6">Intelligent 24/7 AI Customer Support</h1>
                <p className="text-xl text-neutral-600 mb-8">Transform your customer service with AI systems tailored for your business needs. Product knowledge, inventory integration, and seamless support.</p>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800">Schedule Demo</button>
                  <button className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-50">Get Started</button>
                </div>
              </div>
              <div className="bg-neutral-300 h-[400px] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">AI Assistant Dashboard</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-neutral-900 mb-4">Key Features for E-commerce AI Assistants</h2>
              <p className="text-lg text-neutral-600">Comprehensive solutions for retail stores, e-commerce, and service businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-shopping-cart text-white"></i>
                </div>
                <h3 className="text-xl text-neutral-900 mb-3">Product Catalog Integration</h3>
                <p className="text-neutral-600">Real-time inventory awareness and personalized product recommendations based on browsing history</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-truck text-white"></i>
                </div>
                <h3 className="text-xl text-neutral-900 mb-3">Order Tracking</h3>
                <p className="text-neutral-600">Order status tracking, shipment information, and return &amp; exchange policy support</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-headset text-white"></i>
                </div>
                <h3 className="text-xl text-neutral-900 mb-3">Seamless Handoff</h3>
                <p className="text-neutral-600">Smooth transition to human agents when needed with full conversation context</p>
              </div>
            </div>
          </div>
        </section>

        <section id="integration" className="bg-neutral-50 px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-neutral-900 mb-4">Multiple Integration Options</h2>
              <p className="text-lg text-neutral-600">Fit seamlessly into your existing systems and workflows</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-code text-white text-xl"></i>
                </div>
                <h3 className="text-xl text-neutral-900 mb-4">Website Integration</h3>
                <p className="text-neutral-600 mb-4">Embed directly into your website with just a few lines of code. Fully customizable chat widget to match your brand.</p>
                <ul className="text-sm text-neutral-500 space-y-2">
                  <li>• Custom appearance</li>
                  <li>• Secure backend hosting</li>
                  <li>• Quick implementation</li>
                </ul>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-plug text-white text-xl"></i>
                </div>
                <h3 className="text-xl text-neutral-900 mb-4">API Integration</h3>
                <p className="text-neutral-600 mb-4">Custom e-commerce platforms with full API access and email/SMS support channels.</p>
                <ul className="text-sm text-neutral-500 space-y-2">
                  <li>• RESTful API</li>
                  <li>• Multi-channel support</li>
                  <li>• Custom endpoints</li>
                </ul>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-puzzle-piece text-white text-xl"></i>
                </div>
                <h3 className="text-xl text-neutral-900 mb-4">Platform Plugins</h3>
                <p className="text-neutral-600 mb-4">One-click installation for popular e-commerce CMS platforms and marketplaces.</p>
                <ul className="text-sm text-neutral-500 space-y-2">
                  <li>• Shopify integration</li>
                  <li>• WooCommerce plugin</li>
                  <li>• Magento support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl text-neutral-900 mb-4">Choose Your Plan</h2>
              <p className="text-lg text-neutral-600">Subscription-based service tailored to your business size</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-neutral-900 mb-2">Small Business</h3>
                  <div className="text-4xl text-neutral-900 mb-1">$199</div>
                  <div className="text-neutral-500">/month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Up to 500 products in catalog</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">1,000 AI conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Basic website integration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Email support</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-50">Get Started</button>
              </div>
              <div className="bg-white border-2 border-neutral-900 rounded-lg p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-4 py-1 rounded-full text-sm">Popular</div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-neutral-900 mb-2">Professional</h3>
                  <div className="text-4xl text-neutral-900 mb-1">$399</div>
                  <div className="text-neutral-500">/month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Up to 5,000 products in catalog</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">5,000 AI conversations/month</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Advanced website integration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">API access</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Priority email and chat setup</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800">Get Started</button>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-neutral-900 mb-2">Large Business</h3>
                  <div className="text-4xl text-neutral-900 mb-1">$899</div>
                  <div className="text-neutral-500">/month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Unlimited products in catalog</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Unlimited AI conversations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Custom integration options</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Full API access</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-neutral-600 mr-3"></i>
                    <span className="text-neutral-700">24/7 priority support</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-50">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="bg-neutral-900 px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-white mb-4">Ready to Transform Your Customer Service?</h2>
            <p className="text-xl text-neutral-300 mb-8">Join the hundreds of businesses already using our AI systems to provide exceptional customer experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-neutral-900 rounded-md hover:bg-neutral-100">Get Started Now</button>
              <button className="px-8 py-4 border border-neutral-600 text-white rounded-md hover:bg-neutral-800">Schedule a Demo</button>
            </div>
            <p className="text-sm text-neutral-400 mt-6">Response within 24-48 hours for custom integrations</p>
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-white border-t border-neutral-200 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-neutral-800 rounded"></div>
                <span className="text-lg text-neutral-900">AI Assistant Platform</span>
              </div>
              <p className="text-neutral-600 text-sm">Intelligent 24/7 AI customer support systems for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><span className="hover:text-neutral-900 cursor-pointer">Features</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Integration</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">API Docs</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Security</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><span className="hover:text-neutral-900 cursor-pointer">About</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Blog</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Careers</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Contact</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-neutral-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li><span className="hover:text-neutral-900 cursor-pointer">Help Center</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Documentation</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Community</span></li>
                <li><span className="hover:text-neutral-900 cursor-pointer">Status</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-600">© 2025 AI Assistant Platform. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer"><i className="fa-brands fa-twitter"></i></span>
              <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer"><i className="fa-brands fa-linkedin"></i></span>
              <span className="text-neutral-400 hover:text-neutral-600 cursor-pointer"><i className="fa-brands fa-github"></i></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
