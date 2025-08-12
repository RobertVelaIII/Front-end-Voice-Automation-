"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRocket, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  return (
    <div className="h-full text-base-content">
      <header id="header" className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl text-black">CallLogs</h1>
              </div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <span className="text-neutral-900 hover:text-neutral-600 px-3 py-2 text-sm cursor-pointer">Home</span>
                <span className="text-neutral-500 hover:text-neutral-900 px-3 py-2 text-sm cursor-pointer">Dashboard</span>
                <span className="text-neutral-500 hover:text-neutral-900 px-3 py-2 text-sm cursor-pointer">Logs</span>
                <span className="text-neutral-500 hover:text-neutral-900 px-3 py-2 text-sm cursor-pointer">Settings</span>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-neutral-500 hover:text-neutral-900">
                <FontAwesomeIcon icon={faBell} />
              </button>
              <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123" alt="User Avatar" className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="hero-section" className="bg-neutral-50 h-[400px] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl text-neutral-900 mb-4">Welcome to CallLogs</h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">Stay updated with the latest developer team updates, news, and feature announcements. Your comprehensive call management solution continues to evolve.</p>
            </div>
          </div>
        </section>

        <section id="updates-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-neutral-900 mb-4">Latest Updates</h2>
              <p className="text-lg text-neutral-600">Stay informed about our recent improvements and new features</p>
            </div>

            <div className="bg-black text-white p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-white text-xl mr-3" />
                <h3 className="text-xl text-white">Development Progress Update</h3>
              </div>
              <div className="text-sm text-gray-300 mb-4">August 12, 2025 - 3:00 AM</div>
              <p className="text-gray-100 mb-4">We have punched a dent in the UI, will work on UX and then start implementing back end to start enabling calls.</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <div className="bg-white h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-300 mt-1">
                <span>UI</span>
                <span>UX</span>
                <span>Backend</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-50 p-6 border border-neutral-200">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faRocket} className="text-neutral-700 text-xl mr-3" />
                  <h3 className="text-xl text-neutral-900">New Navigation Features and Performance Boost</h3>
                </div>
                <div className="text-sm text-neutral-500 mb-4">January 15, 2025 - 2:30 PM</div>
                <p className="text-neutral-700 mb-4">We've implemented a sidebar with new sections to improve navigation. We've added an ASCII button to add-ons, improved the help section, and better organized settings.</p>
                <p className="text-neutral-700">We've optimized our servers on Fly.io for enhanced performance and reliability.</p>
              </div>

              <div className="bg-white border border-neutral-200 p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faHeart} className="text-neutral-700 text-xl mr-3" />
                  <h3 className="text-xl text-neutral-900">User Experience Improvements</h3>
                </div>
                <div className="text-sm text-neutral-500 mb-4">January 18, 2025 - 10:15 AM</div>
                <p className="text-neutral-700 mb-4">We've streamlined the dashboard interface for better usability and faster access to key features.</p>
                <p className="text-neutral-700">New accessibility features have been added to ensure everyone can use our platform effectively.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="priorities-section" className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl text-neutral-900 mb-6">Current Priorities & Critical Path</h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 border border-neutral-200 flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <div className="flex-1">
                      <h4 className="text-neutral-900">Call Log Search Enhancement</h4>
                      <p className="text-sm text-neutral-600">Improving search functionality across all call records</p>
                    </div>
                    <span className="text-xs text-neutral-500">High Priority</span>
                  </div>
                  <div className="bg-white p-4 border border-neutral-200 flex items-center">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <h4 className="text-neutral-900">Audio Recording Optimization</h4>
                      <p className="text-sm text-neutral-600">Enhancing MP3 download and playback features</p>
                    </div>
                    <span className="text-xs text-neutral-500">Medium Priority</span>
                  </div>
                  <div className="bg-white p-4 border border-neutral-200 flex items-center">
                    <div className="w-2 h-2 bg-neutral-300 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <h4 className="text-neutral-900">Notes System Upgrade</h4>
                      <p className="text-sm text-neutral-600">Better organization and search within call notes</p>
                    </div>
                    <span className="text-xs text-neutral-500">In Progress</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl text-neutral-900 mb-6">Coming Soon</h2>
                <div className="bg-white border border-neutral-200 p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-neutral-900 mb-2">AIX Account Integration</h4>
                      <p className="text-sm text-neutral-600">Advanced AI-powered call analysis and insights</p>
                    </div>
                    <div>
                      <h4 className="text-neutral-900 mb-2">AI Instagram Integration</h4>
                      <p className="text-sm text-neutral-600">Social media call tracking and management</p>
                    </div>
                    <div>
                      <h4 className="text-neutral-900 mb-2">Custom AI Assistance</h4>
                      <p className="text-sm text-neutral-600">Personalized AI support for call management</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">These features will enhance your call management experience with intelligent automation and deeper insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="news-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-neutral-900 mb-8">Recent News & Announcements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="border border-neutral-200 p-6">
                <div className="w-full h-32 bg-neutral-300 mb-4 flex items-center justify-center">
                  <span className="text-white text-sm">Server Infrastructure Update</span>
                </div>
                <h3 className="text-neutral-900 mb-2">Fly.io Migration Complete</h3>
                <p className="text-sm text-neutral-600 mb-3">Our server migration to Fly.io has been successfully completed, resulting in improved performance and reliability.</p>
                <div className="text-xs text-neutral-500">January 12, 2025</div>
              </article>

              <article className="border border-neutral-200 p-6">
                <div className="w-full h-32 bg-neutral-300 mb-4 flex items-center justify-center">
                  <span className="text-white text-sm">Feature Release</span>
                </div>
                <h3 className="text-neutral-900 mb-2">Enhanced Call Duration Tracking</h3>
                <p className="text-sm text-neutral-600 mb-3">New precise call duration tracking with millisecond accuracy now available in all call logs.</p>
                <div className="text-xs text-neutral-500">January 10, 2025</div>
              </article>

              <article className="border border-neutral-200 p-6">
                <div className="w-full h-32 bg-neutral-300 mb-4 flex items-center justify-center">
                  <span className="text-white text-sm">UI Improvement</span>
                </div>
                <h3 className="text-neutral-900 mb-2">Sidebar Navigation Launch</h3>
                <p className="text-sm text-neutral-600 mb-3">New sidebar navigation makes it easier to access different sections and manage your call logs efficiently.</p>
                <div className="text-xs text-neutral-500">January 8, 2025</div>
              </article>
            </div>
          </div>
        </section>

        <section id="thank-you-section" className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl text-neutral-900 mb-6">Thank You for Being Part of Our Journey</h2>
            <p className="text-lg text-neutral-600 mb-8">We're continuously improving CallLogs to better serve your business needs. Your feedback and support drive our innovation as we build the most comprehensive call management solution.</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-colors">
                <FontAwesomeIcon icon={faHeart} className="mr-2" />
                Share Feedback
              </button>
              <button className="border border-neutral-300 text-neutral-700 px-6 py-3 hover:bg-neutral-50 transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg text-neutral-900">CallLogs</h3>
              <p className="text-sm text-neutral-600">Professional call management solution</p>
            </div>
            <div className="flex space-x-6">
              <span className="text-neutral-500 hover:text-neutral-900 cursor-pointer">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className="text-neutral-500 hover:text-neutral-900 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
              <span className="text-neutral-500 hover:text-neutral-900 cursor-pointer">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
            <p className="text-xs text-neutral-500">© 2025 CallLogs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
