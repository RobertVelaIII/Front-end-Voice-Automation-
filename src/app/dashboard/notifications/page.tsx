"use client"

import React, { useState } from 'react'

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all')
  
  // Sample notification data
  const notifications = [
    {
      id: 1,
      type: 'call',
      title: 'Missed Call',
      message: 'You missed a call from John Smith at Acme Inc.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'system',
      title: 'System Update',
      message: 'The system has been updated to version 2.4.0 with new features.',
      time: 'Yesterday',
      read: true
    },
    {
      id: 3,
      type: 'alert',
      title: 'Payment Reminder',
      message: 'Your subscription will renew in 3 days. Please ensure your payment method is up to date.',
      time: '2 days ago',
      read: false
    },
    {
      id: 4,
      type: 'call',
      title: 'Call Scheduled',
      message: 'You have scheduled a call with Sarah Johnson at Tech Solutions for tomorrow at 2:00 PM.',
      time: '3 days ago',
      read: true
    },
    {
      id: 5,
      type: 'system',
      title: 'New Feature Available',
      message: 'Try our new AI-powered call analysis feature to gain deeper insights from your conversations.',
      time: '1 week ago',
      read: true
    }
  ]

  // Filter notifications based on selected filter
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
      ? notifications.filter(n => !n.read) 
      : notifications.filter(n => n.type === filter)

  // Get icon based on notification type
  const getIcon = (type: string) => {
    switch(type) {
      case 'call':
        return 'fa-phone'
      case 'system':
        return 'fa-gear'
      case 'alert':
        return 'fa-triangle-exclamation'
      default:
        return 'fa-bell'
    }
  }

  // Get background color based on notification type and read status
  const getBackgroundColor = (type: string, read: boolean) => {
    if (!read) return 'bg-blue-50'
    
    switch(type) {
      case 'call':
        return 'bg-white'
      case 'system':
        return 'bg-white'
      case 'alert':
        return 'bg-white'
      default:
        return 'bg-white'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl text-black">Notifications</h2>
              <p className="text-neutral-600 mt-2">Stay updated with important alerts and information</p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 transition-colors">
              <i className="fa-solid fa-check-double mr-2"></i>
              Mark All as Read
            </button>
          </div>
        </div>

        {/* Notification Filters */}
        <div className="mb-8 border-b border-neutral-200">
          <div className="flex space-x-8">
            <button 
              onClick={() => setFilter('all')} 
              className={`pb-4 text-sm font-medium ${filter === 'all' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              All Notifications
            </button>
            <button 
              onClick={() => setFilter('unread')} 
              className={`pb-4 text-sm font-medium ${filter === 'unread' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Unread
            </button>
            <button 
              onClick={() => setFilter('call')} 
              className={`pb-4 text-sm font-medium ${filter === 'call' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Call Notifications
            </button>
            <button 
              onClick={() => setFilter('system')} 
              className={`pb-4 text-sm font-medium ${filter === 'system' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              System Updates
            </button>
            <button 
              onClick={() => setFilter('alert')} 
              className={`pb-4 text-sm font-medium ${filter === 'alert' ? 'text-black border-b-2 border-black' : 'text-neutral-500 hover:text-black'}`}
            >
              Alerts
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-12 w-12 text-neutral-400">
                <i className="fa-solid fa-bell-slash text-3xl"></i>
              </div>
              <h3 className="mt-2 text-sm font-medium text-neutral-900">No notifications</h3>
              <p className="mt-1 text-sm text-neutral-500">
                You don't have any {filter !== 'all' ? filter : ''} notifications at the moment.
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`${getBackgroundColor(notification.type, notification.read)} border border-neutral-200 rounded-lg p-4 flex items-start`}
              >
                <div className={`flex-shrink-0 h-10 w-10 rounded-full ${!notification.read ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-600'} flex items-center justify-center mr-4`}>
                  <i className={`fa-solid ${getIcon(notification.type)}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium ${!notification.read ? 'text-blue-900' : 'text-neutral-900'}`}>
                      {notification.title}
                    </p>
                    <p className="text-xs text-neutral-500">{notification.time}</p>
                  </div>
                  <p className="mt-1 text-sm text-neutral-600">{notification.message}</p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  {!notification.read && (
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {filteredNotifications.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm text-neutral-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredNotifications.length}</span> of <span className="font-medium">{filteredNotifications.length}</span> notifications
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 border border-neutral-300 rounded-md text-neutral-700 hover:bg-neutral-50 disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Settings Link */}
        <div className="mt-8 text-center">
          <a href="/dashboard/settings/notifications" className="text-sm text-blue-600 hover:text-blue-800">
            <i className="fa-solid fa-gear mr-1"></i>
            Manage notification preferences
          </a>
        </div>
      </main>
    </div>
  )
}
