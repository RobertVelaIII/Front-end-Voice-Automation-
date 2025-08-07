"use client";

import { MainLayout } from "@/components/main-layout";

export default function Services() {
  return (
    <MainLayout showSidebar={false}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-white">Our Services</h1>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">What Our Platform Does</h2>
          <p className="mb-4 text-gray-800">
            We automate customer phone interactions using our proprietary AI-powered voice technology. 
            Our platform lets businesses instantly scale outbound and inbound calls for sales, support, 
            scheduling, and more—without hiring extra staff.
          </p>
          <p className="mb-4 text-gray-800">
            All calls sound human, respond in real-time, and can update your CRM, send SMS, or trigger 
            workflows—completely hands-free.
          </p>
        </div>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Voice AI</h3>
              <p className="text-gray-800">
                Natural-sounding AI voice technology that engages with your customers
                in meaningful conversations.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Call Automation</h3>
              <p className="text-gray-800">
                Streamline your customer service operations with intelligent
                call routing and automated responses.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-gray-900">Analytics</h3>
              <p className="text-gray-800">
                Gain valuable insights from customer interactions with
                comprehensive call analytics and reporting.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">Qualify Leads</h3>
                <p className="text-gray-800">Automatically screen and qualify potential customers based on your criteria.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">Book Appointments</h3>
                <p className="text-gray-800">Schedule meetings and appointments without human intervention.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">Send Reminders</h3>
                <p className="text-gray-800">Automated call reminders for appointments, payments, and important events.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">Gather Customer Data</h3>
                <p className="text-gray-800">Collect valuable information from customers through natural conversations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-gray-900">Route Calls Intelligently</h3>
                <p className="text-gray-800">Direct calls to the right department or person based on customer needs.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 p-6 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Integration Capabilities</h2>
          <p className="mb-4 text-gray-800">
            Our platform seamlessly integrates with your existing systems to provide a complete solution:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-800">
            <li>CRM updates after each call</li>
            <li>SMS notifications and follow-ups</li>
            <li>Workflow automation triggers</li>
            <li>Calendar and scheduling systems</li>
            <li>Custom API integrations</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
