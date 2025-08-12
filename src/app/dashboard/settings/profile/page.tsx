"use client"

import React, { useState } from 'react'

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl text-neutral-900">Account Settings</h1>
          <p className="mt-2 text-neutral-600">Manage your account information and preferences</p>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-lg text-neutral-900">Profile Information</h2>
            <p className="text-sm text-neutral-500">Update your account details and profile information</p>
          </div>

          <div className="px-6 py-6 space-y-6">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <img 
                  className="h-20 w-20 rounded-full" 
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=67890" 
                  alt="Profile photo" 
                />
              </div>
              <div>
                <h3 className="text-sm text-neutral-900">Profile Photo</h3>
                <p className="text-sm text-neutral-500">Update your profile picture</p>
                <div className="mt-2 flex space-x-3">
                  <button className="px-4 py-2 text-sm border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50">
                    Change Photo
                  </button>
                  <button className="px-4 py-2 text-sm text-neutral-500 hover:text-neutral-700">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  defaultValue="John" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Doe" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue="john.doe@example.com" 
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  defaultValue="+1 (555) 123-4567" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Website</label>
                <input 
                  type="url" 
                  defaultValue="https://johndoe.com" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-neutral-700 mb-2">Bio</label>
              <textarea 
                rows={4} 
                defaultValue="Experienced sales professional with over 10 years in telecommunications and customer relationship management. Passionate about building meaningful connections and driving business growth through effective communication strategies." 
                placeholder="Tell us about yourself..." 
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-lg text-neutral-900">Account Status</h2>
            <p className="text-sm text-neutral-500">Your current account information and statistics</p>
          </div>

          <div className="px-6 py-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-user-check text-neutral-600"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-500">Client Status</p>
                    <p className="text-lg text-neutral-900">Premium</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-building text-neutral-600"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-500">Organizations</p>
                    <p className="text-lg text-neutral-900">3</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-calendar text-neutral-600"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-500">Member Since</p>
                    <p className="text-lg text-neutral-900">Jan 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-lg text-neutral-900">Security Settings</h2>
            <p className="text-sm text-neutral-500">Manage your password and security preferences</p>
          </div>

          <div className="px-6 py-6 space-y-6">
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Current Password</label>
              <input 
                type="password" 
                placeholder="Enter current password" 
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">New Password</label>
                <input 
                  type="password" 
                  placeholder="Enter new password" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm new password" 
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                />
              </div>
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="two-factor" 
                className="h-4 w-4 text-neutral-600 border-neutral-300 rounded" 
              />
              <label htmlFor="two-factor" className="ml-2 block text-sm text-neutral-700">
                Enable two-factor authentication
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-6 py-2 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50">
            Cancel
          </button>
          <button className="px-6 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  )
}
