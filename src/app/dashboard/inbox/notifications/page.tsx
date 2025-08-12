"use client"

import React from 'react'

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl text-black">Notifications</h2>
              <p className="text-neutral-600 mt-2">Manage your system notifications and alerts</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                <i className="fa-solid fa-bell"></i>
                <span>3 unread notifications</span>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors">
                <i className="fa-solid fa-check mr-2"></i>
                Mark All as Read
              </button>
            </div>
          </div>
        </div>

        {/* Notification Filters */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">All</button>
            <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-200">Unread</button>
            <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-200">System</button>
            <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-200">Calls</button>
            <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg text-sm hover:bg-neutral-200">Alerts</button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {/* Unread Notification */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 hover:bg-neutral-100 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-black">Missed Call Alert</h3>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">New</span>
                  </div>
                  <p className="text-neutral-700 text-sm mb-2">You have a missed call from +1 (555) 123-4567</p>
                  <div className="flex items-center space-x-4 text-xs text-neutral-500">
                    <span><i className="fa-solid fa-clock mr-1"></i>2 minutes ago</span>
                    <span><i className="fa-solid fa-tag mr-1"></i>Calls</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-check text-sm"></i>
                </button>
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Unread Notification */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 hover:bg-neutral-100 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                  <i className="fa-solid fa-exclamation-triangle text-sm"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-black">System Alert</h3>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">New</span>
                  </div>
                  <p className="text-neutral-700 text-sm mb-2">Call recording storage is 85% full. Consider archiving old recordings.</p>
                  <div className="flex items-center space-x-4 text-xs text-neutral-500">
                    <span><i className="fa-solid fa-clock mr-1"></i>15 minutes ago</span>
                    <span><i className="fa-solid fa-tag mr-1"></i>System</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-check text-sm"></i>
                </button>
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Unread Notification */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 hover:bg-neutral-100 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                  <i className="fa-solid fa-user-plus text-sm"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-black">New Contact Added</h3>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">New</span>
                  </div>
                  <p className="text-neutral-700 text-sm mb-2">John Smith has been added to your contacts list</p>
                  <div className="flex items-center space-x-4 text-xs text-neutral-500">
                    <span><i className="fa-solid fa-clock mr-1"></i>1 hour ago</span>
                    <span><i className="fa-solid fa-tag mr-1"></i>Contacts</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-check text-sm"></i>
                </button>
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Read Notification */}
          <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-neutral-400 text-white rounded-full p-2 flex-shrink-0">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-neutral-600">Call Completed</h3>
                  <p className="text-neutral-500 text-sm mb-2">Call with +1 (555) 987-6543 completed successfully (Duration: 12:34)</p>
                  <div className="flex items-center space-x-4 text-xs text-neutral-400">
                    <span><i className="fa-solid fa-clock mr-1"></i>3 hours ago</span>
                    <span><i className="fa-solid fa-tag mr-1"></i>Calls</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Read Notification */}
          <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-neutral-400 text-white rounded-full p-2 flex-shrink-0">
                  <i className="fa-solid fa-download text-sm"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-neutral-600">Recording Downloaded</h3>
                  <p className="text-neutral-500 text-sm mb-2">Call recording for +1 (555) 456-7890 has been downloaded</p>
                  <div className="flex items-center space-x-4 text-xs text-neutral-400">
                    <span><i className="fa-solid fa-clock mr-1"></i>Yesterday</span>
                    <span><i className="fa-solid fa-tag mr-1"></i>Downloads</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Read Notification */}
          <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-neutral-400 text-white rounded-full p-2 flex-shrink-0">
                  <i className="fa-solid fa-cog text-sm"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-neutral-600">Settings Updated</h3>
                  <p className="text-neutral-500 text-sm mb-2">Your notification preferences have been updated</p>
                  <div className="flex items-center space-x-4 text-xs text-neutral-400">
                    <span><i className="fa-solid fa-clock mr-1"></i>2 days ago</span>
                    <span><i className="fa-solid fa-tag mr-1"></i>Settings</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-neutral-400 hover:text-neutral-600">
                  <i className="fa-solid fa-trash text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-neutral-100 text-neutral-700 px-6 py-2 rounded-lg text-sm hover:bg-neutral-200 transition-colors">
            Load More Notifications
          </button>
        </div>
      </main>
    </div>
  )
}
