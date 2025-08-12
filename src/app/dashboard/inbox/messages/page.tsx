"use client"

import { useState } from 'react'

export default function MessagesPage() {
  return (
    <div className="h-full text-base-content">
      <header className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center">
                <i className="fa-solid fa-comments text-white text-sm"></i>
              </div>
              <h1 className="text-xl text-neutral-900">Messages</h1>
            </div>
            <div className="flex items-center space-x-2 bg-neutral-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
              <span className="text-sm text-neutral-700">3 unread</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-2 pr-8 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                <option>Acme Corp</option>
                <option>TechStart Inc</option>
                <option>Global Solutions</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-3 top-3 text-neutral-400 text-xs pointer-events-none"></i>
            </div>
            
            <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-neutral-800 flex items-center space-x-2">
              <i className="fa-solid fa-plus text-xs"></i>
              <span>New Message</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex h-[calc(100vh-80px)]">
        <aside className="w-80 bg-white border-r border-neutral-200 flex flex-col">
          <div className="p-4 border-b border-neutral-200">
            <div className="relative">
              <i className="fa-solid fa-search absolute left-3 top-3 text-neutral-400 text-sm"></i>
              <input type="text" placeholder="Search messages..." className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400" />
            </div>
          </div>
          
          <div className="p-4 border-b border-neutral-200">
            <div className="flex space-x-1">
              <button className="px-3 py-1 bg-neutral-900 text-white text-sm rounded-full">All</button>
              <button className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full hover:bg-neutral-200">Unread</button>
              <button className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full hover:bg-neutral-200">Groups</button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
              <div className="flex items-center p-3 hover:bg-neutral-50 rounded-lg cursor-pointer bg-neutral-50 border-l-4 border-neutral-900">
                <div className="relative">
                  <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-neutral-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-900 truncate">Sarah Johnson</p>
                    <span className="text-xs text-neutral-500">2m</span>
                  </div>
                  <p className="text-sm text-neutral-600 truncate">Can we schedule a call for tomorrow?</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-neutral-50 rounded-lg cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 bg-neutral-600 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-users text-white text-sm"></i>
                  </div>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-neutral-500 rounded-full border-2 border-white"></span>
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-900 truncate">Marketing Team</p>
                    <span className="text-xs text-neutral-500">15m</span>
                  </div>
                  <p className="text-sm text-neutral-600 truncate">John: The campaign results are ready</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-neutral-50 rounded-lg cursor-pointer">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="Avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-900 truncate">Mike Chen</p>
                    <span className="text-xs text-neutral-500">1h</span>
                  </div>
                  <p className="text-sm text-neutral-500 truncate">Thanks for the update!</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-neutral-50 rounded-lg cursor-pointer">
                <div className="w-10 h-10 bg-neutral-500 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-users text-white text-sm"></i>
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-900 truncate">Development Team</p>
                    <span className="text-xs text-neutral-500">3h</span>
                  </div>
                  <p className="text-sm text-neutral-500 truncate">Lisa: Code review completed</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 hover:bg-neutral-50 rounded-lg cursor-pointer">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9012" alt="Avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-900 truncate">Emma Wilson</p>
                    <span className="text-xs text-neutral-500">5h</span>
                  </div>
                  <p className="text-sm text-neutral-500 truncate">Perfect, let's move forward with this</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-neutral-200">
            <button className="w-full bg-neutral-100 text-neutral-700 py-2 px-4 rounded-lg text-sm hover:bg-neutral-200 flex items-center justify-center space-x-2">
              <i className="fa-solid fa-users text-sm"></i>
              <span>Create Group</span>
            </button>
          </div>
        </aside>
        
        <section className="flex-1 flex flex-col">
          <div className="bg-white border-b border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="Avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <h2 className="text-lg text-neutral-900">Sarah Johnson</h2>
                  <p className="text-sm text-neutral-600 flex items-center">
                    <span className="w-2 h-2 bg-neutral-500 rounded-full mr-2"></span>
                    Online
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg">
                  <i className="fa-solid fa-phone"></i>
                </button>
                <button className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg">
                  <i className="fa-solid fa-video"></i>
                </button>
                <button className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-50">
            <div className="space-y-4">
              <div className="text-center">
                <span className="bg-white px-3 py-1 rounded-full text-xs text-neutral-500 border">Today</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="Avatar" className="w-8 h-8 rounded-full" />
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-sm">
                  <p className="text-sm text-neutral-900">Hi! I wanted to follow up on our previous conversation about the project timeline.</p>
                  <span className="text-xs text-neutral-500 mt-1 block">10:30 AM</span>
                </div>
              </div>
              
              <div className="flex items-start justify-end space-x-3">
                <div className="bg-neutral-900 text-white p-3 rounded-lg shadow-sm max-w-sm">
                  <p className="text-sm">Sure! I've reviewed the requirements and I think we can deliver by next Friday.</p>
                  <span className="text-xs text-neutral-300 mt-1 block">10:32 AM</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="Avatar" className="w-8 h-8 rounded-full" />
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-sm">
                  <p className="text-sm text-neutral-900">That sounds great! Can we schedule a call for tomorrow to discuss the details?</p>
                  <span className="text-xs text-neutral-500 mt-1 block">10:35 AM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-t border-neutral-200 p-4">
            <div className="flex items-center space-x-3">
              <button className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg">
                <i className="fa-solid fa-paperclip"></i>
              </button>
              <div className="flex-1 relative">
                <input type="text" placeholder="Type a message..." className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 pr-12" />
                <button className="absolute right-3 top-3 text-neutral-500 hover:text-neutral-700">
                  <i className="fa-regular fa-face-smile"></i>
                </button>
              </div>
              <button className="bg-neutral-900 text-white p-3 rounded-lg hover:bg-neutral-800">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
