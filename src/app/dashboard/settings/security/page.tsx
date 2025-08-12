"use client"

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faDesktop, faMobileScreen, faUserShield, faCheck, faTimes, faLock, faServer, faShield, faEyeSlash, faCertificate } from '@fortawesome/free-solid-svg-icons'

export default function SecurityPrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-neutral-900">Security & Privacy</h1>
          <p className="mt-2 text-neutral-600">Manage your account security settings and privacy preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Security Settings */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-neutral-200 rounded-lg">
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 className="text-xl text-neutral-900 flex items-center">
                  <FontAwesomeIcon icon={faShieldHalved} className="mr-3" />
                  Security Settings
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Password Section */}
                <div className="border-b border-neutral-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900">Password</h3>
                      <p className="text-sm text-neutral-500">Last updated 3 months ago</p>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-neutral-800">
                      Change Password
                    </button>
                  </div>
                </div>

                {/* Phone Number Section */}
                <div className="border-b border-neutral-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900">Phone Number</h3>
                      <p className="text-sm text-neutral-500">+1 (555) 123-4567</p>
                    </div>
                    <button className="bg-neutral-600 text-white px-4 py-2 rounded-md text-sm hover:bg-neutral-700">
                      Delete Phone Number
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="border-b border-neutral-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-neutral-500">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-neutral-500 mr-3">Disabled</span>
                      <button className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded-md text-sm hover:bg-neutral-300">
                        Enable
                      </button>
                    </div>
                  </div>
                </div>

                {/* Login Sessions */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-neutral-900">Active Sessions</h3>
                      <p className="text-sm text-neutral-500">Manage devices that are currently logged in</p>
                    </div>
                    <button className="text-neutral-600 text-sm hover:text-neutral-700">
                      Sign out all devices
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faDesktop} className="text-neutral-400 mr-3" />
                        <div>
                          <p className="text-sm text-neutral-900">Chrome on Windows</p>
                          <p className="text-xs text-neutral-500">Current session • New York, NY</p>
                        </div>
                      </div>
                      <span className="text-xs bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-md">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faMobileScreen} className="text-neutral-400 mr-3" />
                        <div>
                          <p className="text-sm text-neutral-900">Safari on iPhone</p>
                          <p className="text-xs text-neutral-500">2 hours ago • Los Angeles, CA</p>
                        </div>
                      </div>
                      <button className="text-neutral-600 text-xs hover:text-neutral-700">Sign out</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white border border-neutral-200 rounded-lg mt-8">
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 className="text-xl text-neutral-900 flex items-center">
                  <FontAwesomeIcon icon={faUserShield} className="mr-3" />
                  Privacy Settings
                </h2>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Data Collection */}
                <div className="border-b border-neutral-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900">Data Collection</h3>
                      <p className="text-sm text-neutral-500">Control how we collect and use your data</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>
                </div>

                {/* Call Recording Privacy */}
                <div className="border-b border-neutral-100 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900">Call Recording Storage</h3>
                      <p className="text-sm text-neutral-500">Automatically delete recordings after 90 days</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>
                </div>

                {/* Download Data */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg text-neutral-900">Download Your Data</h3>
                      <p className="text-sm text-neutral-500">Request a copy of all your data</p>
                    </div>
                    <button className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded-md text-sm hover:bg-neutral-300">
                      Request Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Overview Sidebar */}
          <div className="lg:col-span-1">
            {/* Security Score */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg text-neutral-900 mb-4">Security Score</h3>
              <div className="text-center">
                <div className="text-3xl text-neutral-900 mb-2">85%</div>
                <p className="text-sm text-neutral-500 mb-4">Good security level</p>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <i className="fa-solid fa-check text-neutral-600 mr-2"></i>
                  <span className="text-neutral-700">Strong password</span>
                </div>
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon icon={faTimes} className="text-neutral-600 mr-2" />
                  <span className="text-neutral-700">2FA not enabled</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fa-solid fa-check text-neutral-600 mr-2"></i>
                  <span className="text-neutral-700">Recent login activity</span>
                </div>
              </div>
            </div>

            {/* Data Security Assurance */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg text-neutral-900 mb-4 flex items-center">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Data Security
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faServer} className="text-neutral-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-neutral-900">Encrypted Storage</h4>
                    <p className="text-xs text-neutral-500">All recordings encrypted with AES-256</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faShield} className="text-neutral-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-neutral-900">Secure Transmission</h4>
                    <p className="text-xs text-neutral-500">TLS 1.3 for all data transfers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faEyeSlash} className="text-neutral-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-neutral-900">Privacy First</h4>
                    <p className="text-xs text-neutral-500">Zero-knowledge architecture</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCertificate} className="text-neutral-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-neutral-900">Compliance</h4>
                    <p className="text-xs text-neutral-500">GDPR & CCPA compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
