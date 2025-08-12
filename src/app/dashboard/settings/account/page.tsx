"use client"

import React, { useState } from 'react'

export default function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl text-black">Account Settings</h2>
              <p className="text-neutral-600 mt-2">Manage your account preferences and settings</p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors">
              <i className="fa-solid fa-save mr-2"></i>
              Save Changes
            </button>
          </div>
        </div>

        {/* Settings Tabs */}
        <div className="mb-8 border-b border-neutral-200">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveTab('profile')} 
              className={`pb-4 text-sm font-medium ${activeTab === 'profile' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Profile Information
            </button>
            <button 
              onClick={() => setActiveTab('password')} 
              className={`pb-4 text-sm font-medium ${activeTab === 'password' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Password & Security
            </button>
            <button 
              onClick={() => setActiveTab('notifications')} 
              className={`pb-4 text-sm font-medium ${activeTab === 'notifications' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Notification Preferences
            </button>
            <button 
              onClick={() => setActiveTab('billing')} 
              className={`pb-4 text-sm font-medium ${activeTab === 'billing' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Billing & Subscription
            </button>
          </div>
        </div>

        {/* Profile Information Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="john.smith@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Job Title</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="Sales Manager"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company Website</label>
                  <input 
                    type="url" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    defaultValue="https://www.acmeinc.com"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Profile Picture</h3>
              <div className="flex items-center space-x-6">
                <img 
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123" 
                  alt="Profile" 
                  className="h-24 w-24 rounded-full"
                />
                <div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors mb-2">
                    Upload New Picture
                  </button>
                  <p className="text-xs text-neutral-500">Recommended: Square image, at least 400x400 pixels</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Password & Security Tab */}
        {activeTab === 'password' && (
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    placeholder="••••••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    placeholder="••••••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                    placeholder="••••••••••••"
                  />
                </div>
                <div className="pt-2">
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neutral-700 mb-1">Enhance your account security by enabling 2FA</p>
                  <p className="text-sm text-neutral-500">We'll ask for a verification code in addition to your password when you sign in.</p>
                </div>
                <div className="flex items-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Login Sessions</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neutral-800">Current Session</p>
                    <p className="text-sm text-neutral-500 mt-1">MacOS • Chrome • New York, USA</p>
                    <p className="text-xs text-neutral-400 mt-1">Started: Today at 10:34 AM</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="flex items-start justify-between p-4 bg-white rounded-lg border border-neutral-200">
                  <div>
                    <p className="font-medium text-neutral-800">Previous Session</p>
                    <p className="text-sm text-neutral-500 mt-1">iPhone • Safari • New York, USA</p>
                    <p className="text-xs text-neutral-400 mt-1">Last active: Yesterday at 8:12 PM</p>
                  </div>
                  <button className="text-neutral-500 hover:text-neutral-700">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="pt-2">
                  <button className="text-neutral-700 text-sm hover:text-black">
                    <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
                    Logout from all other devices
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notification Preferences Tab */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <div>
                    <p className="font-medium text-neutral-800">Call Notifications</p>
                    <p className="text-sm text-neutral-500">Receive notifications about missed and completed calls</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <div>
                    <p className="font-medium text-neutral-800">System Alerts</p>
                    <p className="text-sm text-neutral-500">Important alerts about your account and system</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <div>
                    <p className="font-medium text-neutral-800">Marketing Updates</p>
                    <p className="text-sm text-neutral-500">News, updates, and promotional offers</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-neutral-800">Weekly Reports</p>
                    <p className="text-sm text-neutral-500">Summary of your call activity and analytics</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Push Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <div>
                    <p className="font-medium text-neutral-800">Real-time Call Alerts</p>
                    <p className="text-sm text-neutral-500">Get notified immediately when calls are missed</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-neutral-800">Browser Notifications</p>
                    <p className="text-sm text-neutral-500">Allow desktop notifications when browser is open</p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="relative w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Billing & Subscription Tab */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-black">Current Plan</h3>
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Active</span>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-black">Professional Plan</h4>
                  <p className="text-lg font-bold text-black">$49/month</p>
                </div>
                <p className="text-neutral-600 mb-4">Billed monthly • Renews on May 15, 2025</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-neutral-600">
                    <i className="fa-solid fa-check text-green-500 mr-2"></i>
                    Unlimited calls
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <i className="fa-solid fa-check text-green-500 mr-2"></i>
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <i className="fa-solid fa-check text-green-500 mr-2"></i>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <i className="fa-solid fa-check text-green-500 mr-2"></i>
                    Priority support
                  </li>
                </ul>
                <div className="flex space-x-3">
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors">
                    Upgrade Plan
                  </button>
                  <button className="border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-50 transition-colors">
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Payment Method</h3>
              <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg mb-4">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-md border border-neutral-200 mr-4">
                    <i className="fa-brands fa-cc-visa text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Visa ending in 4242</p>
                    <p className="text-sm text-neutral-500">Expires 12/2025</p>
                  </div>
                </div>
                <div>
                  <button className="text-neutral-600 hover:text-neutral-800 text-sm">
                    <i className="fa-solid fa-pen-to-square mr-1"></i>
                    Edit
                  </button>
                </div>
              </div>
              <button className="text-neutral-700 text-sm hover:text-black">
                <i className="fa-solid fa-plus mr-1"></i>
                Add Payment Method
              </button>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-black mb-4">Billing History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-neutral-500 border-b border-neutral-200">
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Description</th>
                      <th className="pb-3 font-medium">Amount</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-4">Apr 15, 2025</td>
                      <td className="py-4">Professional Plan - Monthly</td>
                      <td className="py-4">$49.00</td>
                      <td className="py-4">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Paid</span>
                      </td>
                      <td className="py-4">
                        <button className="text-neutral-600 hover:text-neutral-800">
                          <i className="fa-solid fa-download"></i>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-4">Mar 15, 2025</td>
                      <td className="py-4">Professional Plan - Monthly</td>
                      <td className="py-4">$49.00</td>
                      <td className="py-4">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Paid</span>
                      </td>
                      <td className="py-4">
                        <button className="text-neutral-600 hover:text-neutral-800">
                          <i className="fa-solid fa-download"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">Feb 15, 2025</td>
                      <td className="py-4">Professional Plan - Monthly</td>
                      <td className="py-4">$49.00</td>
                      <td className="py-4">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Paid</span>
                      </td>
                      <td className="py-4">
                        <button className="text-neutral-600 hover:text-neutral-800">
                          <i className="fa-solid fa-download"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
