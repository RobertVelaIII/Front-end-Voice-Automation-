"use client"

import { useState } from 'react'

export default function ContactSupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl text-neutral-900 dark:text-neutral-100 mb-2">Contact Support</h1>
        <p className="text-neutral-600 dark:text-neutral-400">Get help with your CallCenter Pro account or report issues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div id="support-options" className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-4">Quick Help</h3>
            <div className="space-y-3">
              <span className="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer">
                <i className="fa-solid fa-book text-neutral-500 dark:text-neutral-400"></i>
                <div>
                  <div className="text-neutral-900 dark:text-neutral-100">Documentation</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Browse our help center</div>
                </div>
              </span>
              <span className="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer">
                <i className="fa-solid fa-video text-neutral-500 dark:text-neutral-400"></i>
                <div>
                  <div className="text-neutral-900 dark:text-neutral-100">Video Tutorials</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Learn with step-by-step guides</div>
                </div>
              </span>
              <span className="flex items-center space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer">
                <i className="fa-solid fa-comments text-neutral-500 dark:text-neutral-400"></i>
                <div>
                  <div className="text-neutral-900 dark:text-neutral-100">Live Chat</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">Chat with our support team</div>
                </div>
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-neutral-500 dark:text-neutral-400"></i>
                <span className="text-neutral-700 dark:text-neutral-300">support@callcenterpro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-neutral-500 dark:text-neutral-400"></i>
                <span className="text-neutral-700 dark:text-neutral-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-clock text-neutral-500 dark:text-neutral-400"></i>
                <span className="text-neutral-700 dark:text-neutral-300">Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form" className="lg:col-span-2">
          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-neutral-900 dark:text-neutral-100">Send us a message</h3>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors flex items-center space-x-2">
                <i className="fa-solid fa-bug"></i>
                <span>Submit Bug/Feature Request</span>
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Subject</label>
                <select className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500">
                  <option>General Support</option>
                  <option>Technical Issue</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Priority</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="priority" value="low" className="mr-2" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">Low</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="priority" value="medium" className="mr-2" defaultChecked />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">Medium</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="priority" value="high" className="mr-2" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">High</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="priority" value="urgent" className="mr-2" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">Urgent</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea 
                  rows={6} 
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500" 
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Attachments</label>
                <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-6 text-center">
                  <i className="fa-solid fa-cloud-upload text-neutral-400 dark:text-neutral-500 text-2xl mb-2"></i>
                  <p className="text-neutral-500 dark:text-neutral-400 mb-2">Drop files here or click to upload</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">PNG, JPG, PDF up to 10MB</p>
                  <input type="file" className="hidden" multiple />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  type="submit" 
                  className="bg-neutral-900 dark:bg-neutral-700 text-white px-6 py-2 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors"
                >
                  Send Message
                </button>
                <button 
                  type="button" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="support-stats" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
          <div className="text-2xl text-neutral-900 dark:text-neutral-100 mb-2">&lt; 2 hours</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Average Response Time</div>
        </div>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
          <div className="text-2xl text-neutral-900 dark:text-neutral-100 mb-2">98%</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Customer Satisfaction</div>
        </div>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
          <div className="text-2xl text-neutral-900 dark:text-neutral-100 mb-2">24/7</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Support Availability</div>
        </div>
      </div>
    </div>
  )
}