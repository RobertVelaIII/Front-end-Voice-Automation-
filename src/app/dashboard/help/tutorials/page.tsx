"use client"

import { useState } from 'react'

export default function TutorialsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div id="page-header" className="mb-8">
        <h1 className="text-3xl text-neutral-900 dark:text-neutral-100">Tutorials</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Learn how to use CallCenter Pro effectively with our step-by-step video tutorials</p>
      </div>

      <div id="tutorials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div id="tutorial-1" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-play text-4xl mb-2"></i>
              <p className="text-sm">How to Create Organizations</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-2">Creating Organizations</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Learn how to set up and configure new organizations in your CallCenter Pro account.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-500">Duration: 3:45</span>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-3 py-1 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-play mr-1"></i>Watch
              </button>
            </div>
          </div>
        </div>

        <div id="tutorial-2" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-play text-4xl mb-2"></i>
              <p className="text-sm">How to Switch Organizations</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-2">Switching Organizations</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Master the process of switching between different organizations seamlessly.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-500">Duration: 2:15</span>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-3 py-1 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-play mr-1"></i>Watch
              </button>
            </div>
          </div>
        </div>

        <div id="tutorial-3" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-play text-4xl mb-2"></i>
              <p className="text-sm">How to Create a Call</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-2">Creating Calls</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Step-by-step guide to initiating and managing calls through the platform.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-500">Duration: 4:30</span>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-3 py-1 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-play mr-1"></i>Watch
              </button>
            </div>
          </div>
        </div>

        <div id="tutorial-4" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-play text-4xl mb-2"></i>
              <p className="text-sm">Getting New Phone Numbers</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-2">Getting Phone Numbers</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Learn how to acquire and configure new phone numbers for your organization.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-500">Duration: 5:20</span>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-3 py-1 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-play mr-1"></i>Watch
              </button>
            </div>
          </div>
        </div>

        <div id="tutorial-5" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-play text-4xl mb-2"></i>
              <p className="text-sm">Using AI Ask Feature</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-2">Using AI Ask</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Discover how to leverage the AI Ask feature for intelligent call assistance.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-500">Duration: 6:10</span>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-3 py-1 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-play mr-1"></i>Watch
              </button>
            </div>
          </div>
        </div>

        <div id="tutorial-6" className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="aspect-video bg-neutral-700 flex items-center justify-center">
            <div className="text-center text-white">
              <i className="fa-solid fa-play text-4xl mb-2"></i>
              <p className="text-sm">Upgrading Billing Plans</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg text-neutral-900 dark:text-neutral-100 mb-2">Upgrading Billing</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Complete guide to upgrading your billing plan and managing subscriptions.</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-neutral-500">Duration: 4:45</span>
              <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-3 py-1 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
                <i className="fa-solid fa-play mr-1"></i>Watch
              </button>
            </div>
          </div>
        </div>

      </div>

      <div id="help-section" className="mt-12 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
        <div className="text-center">
          <i className="fa-solid fa-question-circle text-3xl text-neutral-600 dark:text-neutral-400 mb-4"></i>
          <h2 className="text-xl text-neutral-900 dark:text-neutral-100 mb-2">Need Additional Help?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">Can't find what you're looking for? Our support team is here to help.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-neutral-900 dark:bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors">
              <i className="fa-solid fa-envelope mr-2"></i>Contact Support
            </button>
            <button className="border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-4 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              <i className="fa-solid fa-book mr-2"></i>Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}