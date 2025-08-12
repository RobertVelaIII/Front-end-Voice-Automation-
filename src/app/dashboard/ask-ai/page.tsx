"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Types for chat messages
type MessageRole = "user" | "assistant" | "system"

interface ChatMessage {
  id: string
  role: MessageRole
  content: string
  timestamp: Date
}

interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: Date
  updatedAt: Date
}

// Mock data for recent conversations
const recentConversations = [
  {
    id: "1",
    title: "Sales script for tech products",
    timestamp: new Date(Date.now() - 7200000) // 2 hours ago
  },
  {
    id: "2",
    title: "Handling price objections",
    timestamp: new Date(Date.now() - 86400000) // Yesterday
  },
  {
    id: "3",
    title: "Improving call metrics",
    timestamp: new Date(Date.now() - 172800000) // 2 days ago
  }
]

// Format relative time
const formatRelativeTime = (date: Date) => {
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours < 1) return "Just now"
  if (diffInHours < 24) return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`
  if (diffInHours < 48) return "Yesterday"
  if (diffInHours < 72) return "2 days ago"
  return new Date(date).toLocaleDateString()
}

export default function AskAIPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("chat")
  
  // State for chat
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return
    
    // Create new user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      timestamp: new Date()
    }
    
    // Add user message to chat
    setMessages(prev => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock response
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(inputMessage),
        timestamp: new Date()
      }
      
      // Add assistant message to chat
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }
  
  // Helper function to get mock AI responses
  const getAIResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes("sales script") || lowerMessage.includes("script")) {
      return "To improve your sales scripts, focus on addressing customer pain points early, using conversational language, and including specific value propositions. Personalize each script based on customer data and always include a clear call to action. Would you like me to help you optimize a specific script?"
    } else if (lowerMessage.includes("objection") || lowerMessage.includes("pricing")) {
      return "When handling pricing objections, acknowledge the concern, reframe the conversation around value rather than cost, provide context with competitor comparisons, and offer flexible options when possible. Remember that price objections often mask other concerns - try to uncover the real issue by asking clarifying questions."
    } else if (lowerMessage.includes("analytics") || lowerMessage.includes("performance")) {
      return "I'd be happy to analyze your call performance. To provide meaningful insights, I'd need access to your call data. Once connected to your Callify dashboard, I can identify patterns in successful calls, highlight areas for improvement, and suggest specific techniques to increase your conversion rate."
    } else {
      return "I understand you're asking about " + message.substring(0, 30) + "... To give you the most helpful response, could you provide a bit more context about your specific situation or goal?"
    }
  }

  // Function to set quick action message
  const setQuickAction = (message: string) => {
    setInputMessage(message)
  }

  return (
    <div className="min-h-[800px] bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <i className="fa-solid fa-robot text-2xl text-black mr-3"></i>
              <h1 className="text-xl text-black">AI Assistant</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg border border-neutral-300 hover:bg-neutral-50">
                <i className="fa-solid fa-cog text-neutral-600"></i>
              </button>
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456" 
                alt="User Avatar" 
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="border-b border-neutral-200">
            <nav className="flex space-x-8">
              <button 
                className={`py-2 px-1 border-b-2 ${activeTab === 'chat' ? 'border-black text-black' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'} text-sm`}
                onClick={() => setActiveTab('chat')}
              >
                <i className="fa-solid fa-comments mr-2"></i>
                Chat History
              </button>
              <button 
                className={`py-2 px-1 border-b-2 ${activeTab === 'settings' ? 'border-black text-black' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'} text-sm`}
                onClick={() => setActiveTab('settings')}
              >
                <i className="fa-solid fa-sliders mr-2"></i>
                AI Settings
              </button>
              <button 
                className={`py-2 px-1 border-b-2 ${activeTab === 'organizations' ? 'border-black text-black' : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'} text-sm`}
                onClick={() => setActiveTab('organizations')}
              >
                <i className="fa-solid fa-building mr-2"></i>
                Organizations
              </button>
            </nav>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                    <i className="fa-solid fa-robot text-white text-sm"></i>
                  </div>
                  <span className="text-black">AI Assistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neutral-500 rounded-full"></span>
                  <span className="text-sm text-neutral-500">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {/* AI Initial Message */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <i className="fa-solid fa-robot text-white text-sm"></i>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-3 max-w-md">
                    <p className="text-sm text-neutral-900">How can I help you today? Ask me anything about sales strategies, call scripts, customer objections, or business growth.</p>
                    <span className="text-xs text-neutral-500 mt-1 block">Just now</span>
                  </div>
                </div>

                {/* Render messages */}
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start ${message.role === 'user' ? 'justify-end' : ''}`}>
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fa-solid fa-robot text-white text-sm"></i>
                      </div>
                    )}
                    <div className={`rounded-lg p-3 max-w-md ${message.role === 'user' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-900'}`}>
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs mt-1 block" style={{ color: message.role === 'user' ? 'rgba(255,255,255,0.7)' : 'var(--color-neutral-500)' }}>
                        {formatRelativeTime(message.timestamp)}
                      </span>
                    </div>
                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                        <i className="fa-solid fa-user text-neutral-500 text-sm"></i>
                      </div>
                    )}
                  </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="fa-solid fa-robot text-white text-sm"></i>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-3 max-w-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-neutral-200">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex space-x-2"
                >
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <Button
                    type="submit"
                    disabled={!inputMessage.trim() || isLoading}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 disabled:bg-neutral-300"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6">
              <h3 className="text-lg text-black mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button 
                  className="w-full text-left p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                  onClick={() => setQuickAction("Help me create a sales script for cold calls")}
                >
                  <div className="flex items-center">
                    <i className="fa-solid fa-file-lines text-neutral-600 mr-3"></i>
                    <div>
                      <div className="text-black">Create a Sales Script</div>
                      <div className="text-sm text-neutral-500">Generate custom scripts for your calls</div>
                    </div>
                  </div>
                </button>

                <button 
                  className="w-full text-left p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                  onClick={() => setQuickAction("How do I handle pricing objections?")}
                >
                  <div className="flex items-center">
                    <i className="fa-solid fa-shield-halved text-neutral-600 mr-3"></i>
                    <div>
                      <div className="text-black">Handle Objections</div>
                      <div className="text-sm text-neutral-500">Learn to overcome customer objections</div>
                    </div>
                  </div>
                </button>

                <button 
                  className="w-full text-left p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                  onClick={() => setQuickAction("What metrics should I track for my sales calls?")}
                >
                  <div className="flex items-center">
                    <i className="fa-solid fa-chart-line text-neutral-600 mr-3"></i>
                    <div>
                      <div className="text-black">Track Call Metrics</div>
                      <div className="text-sm text-neutral-500">Monitor your call performance</div>
                    </div>
                  </div>
                </button>

                <button 
                  className="w-full text-left p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                  onClick={() => setQuickAction("Give me tips to improve my closing rate")}
                >
                  <div className="flex items-center">
                    <i className="fa-solid fa-bullseye text-neutral-600 mr-3"></i>
                    <div>
                      <div className="text-black">Improve Closing Rate</div>
                      <div className="text-sm text-neutral-500">Tips to close more deals</div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Ask AI Button */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <Button 
                  className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-neutral-800 transition-colors"
                  onClick={() => setQuickAction("")}
                >
                  <i className="fa-solid fa-comments mr-2"></i>
                  Ask AI Anything
                </Button>
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-lg text-black mb-4">Recent Conversations</h3>
              
              <div className="space-y-3">
                {recentConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    className="p-3 border border-neutral-100 rounded-lg hover:bg-neutral-50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-black truncate">{conversation.title}</p>
                        <p className="text-xs text-neutral-500">{formatRelativeTime(conversation.timestamp)}</p>
                      </div>
                      <i className="fa-solid fa-chevron-right text-neutral-400"></i>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-sm text-neutral-500 hover:text-black transition-colors">
                View All Conversations
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}