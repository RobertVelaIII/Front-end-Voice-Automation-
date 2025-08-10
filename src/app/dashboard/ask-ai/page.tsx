"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, Settings, History, Trash2, Download, User, Info, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

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

// Mock data for chat history
const mockChatSessions: ChatSession[] = [
  {
    id: "1",
    title: "Sales Script Optimization",
    messages: [
      {
        id: "msg1",
        role: "user",
        content: "How can I improve my sales scripts?",
        timestamp: new Date(Date.now() - 86400000) // 1 day ago
      }
    ],
    createdAt: new Date(Date.now() - 86400000),
    updatedAt: new Date(Date.now() - 86400000)
  },
  {
    id: "2",
    title: "Customer Objection Handling",
    messages: [
      {
        id: "msg2",
        role: "user",
        content: "What are effective ways to handle pricing objections?",
        timestamp: new Date(Date.now() - 172800000) // 2 days ago
      }
    ],
    createdAt: new Date(Date.now() - 172800000),
    updatedAt: new Date(Date.now() - 172800000)
  },
  {
    id: "3",
    title: "Call Analytics Review",
    messages: [
      {
        id: "msg3",
        role: "user",
        content: "Can you analyze my call performance from last week?",
        timestamp: new Date(Date.now() - 259200000) // 3 days ago
      }
    ],
    createdAt: new Date(Date.now() - 259200000),
    updatedAt: new Date(Date.now() - 259200000)
  }
]

// Component for individual chat message
function ChatMessage({ message }: { message: ChatMessage }) {
  return (
    <div className={cn(
      "flex w-full mb-4 animate-in fade-in-0 slide-in-from-bottom-3 duration-300",
      message.role === "user" ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex items-start gap-3 max-w-[80%]",
        message.role === "user" ? "flex-row-reverse" : "flex-row"
      )}>
        <Avatar className="h-8 w-8">
          {message.role === "user" ? (
            <>
              <AvatarImage src="/avatars/user-avatar.png" />
              <AvatarFallback className="bg-primary/10 text-primary"><User className="h-4 w-4" /></AvatarFallback>
            </>
          ) : (
            <>
              <AvatarImage src="/avatars/ai-avatar.png" />
              <AvatarFallback className="bg-blue-500/10 text-blue-500"><Bot className="h-4 w-4" /></AvatarFallback>
            </>
          )}
        </Avatar>
        <div className={cn(
          "rounded-lg px-4 py-2 text-sm",
          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
        )}>
          {message.content}
        </div>
      </div>
    </div>
  )
}

// Main component
export default function AskAIPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("chat")
  
  // State for chat
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeChatSession, setActiveChatSession] = useState<ChatSession | null>(null)
  const [chatSessions, setChatSessions] = useState<ChatSession[]>(mockChatSessions)
  
  // State for settings
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(2048)
  const [useCallHistory, setUseCallHistory] = useState(true)
  const [systemPrompt, setSystemPrompt] = useState(
    "You are an AI assistant for Callify, a platform that helps businesses automate their sales calls. " +
    "Provide helpful, accurate, and concise responses to user queries about sales strategies, call scripts, and business growth."
  )
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])
  
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
      // TODO: Replace with actual API call to backend when it's built
      // Using placeholder/mock implementation for now
      // const response = await fetch('https://api.callify.ai/chat', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     message: inputMessage,
      //     history: messages,
      //     settings: {
      //       model: selectedModel,
      //       temperature,
      //       maxTokens,
      //       systemPrompt,
      //       useCallHistory
      //     }
      //   })
      // })
      // const data = await response.json()
      
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
      
      // Update or create chat session
      if (!activeChatSession) {
        const newSession: ChatSession = {
          id: Date.now().toString(),
          title: generateChatTitle(inputMessage),
          messages: [userMessage, assistantMessage],
          createdAt: new Date(),
          updatedAt: new Date()
        }
        setChatSessions(prev => [newSession, ...prev])
        setActiveChatSession(newSession)
      } else {
        const updatedSession = {
          ...activeChatSession,
          messages: [...activeChatSession.messages, userMessage, assistantMessage],
          updatedAt: new Date()
        }
        setChatSessions(prev => prev.map(session => 
          session.id === updatedSession.id ? updatedSession : session
        ))
        setActiveChatSession(updatedSession)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      // Add error message
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, there was an error processing your request. Please try again later.",
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }
  
  // Function to start a new chat
  const handleNewChat = () => {
    setMessages([])
    setActiveChatSession(null)
  }
  
  // Function to select a chat session
  const handleSelectChatSession = (session: ChatSession) => {
    setActiveChatSession(session)
    setMessages(session.messages)
    setActiveTab("chat")
  }
  
  // Function to delete a chat session
  const handleDeleteChatSession = (sessionId: string) => {
    setChatSessions(prev => prev.filter(session => session.id !== sessionId))
    if (activeChatSession?.id === sessionId) {
      setActiveChatSession(null)
      setMessages([])
    }
  }
  
  // Helper function to generate a chat title from the first message
  const generateChatTitle = (message: string): string => {
    // Take first 30 chars of message or up to the first period
    const title = message.split(".")[0].substring(0, 30)
    return title.length < message.length ? `${title}...` : title
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

  return (
    <div className="container py-6 px-8">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">Ask AI Assistant</h1>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-end mb-6">
          <TabsList className="grid w-[400px] grid-cols-3">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              <span>Chat</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span>History</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="chat">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col h-[calc(100vh-220px)]">
                {/* Chat messages area */}
                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-background rounded-t-lg"
                >
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                      <div className="bg-primary/10 p-3 rounded-full mb-4">
                        <Bot className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">How can I help you today?</h3>
                      <p className="text-muted-foreground max-w-md">
                        Ask me anything about sales strategies, call scripts, customer objections, or business growth.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 w-full max-w-md">
                        <Button 
                          variant="outline" 
                          className="justify-start text-left" 
                          onClick={() => setInputMessage("Help me create a sales script for cold calls")}
                        >
                          Create a sales script
                        </Button>
                        <Button 
                          variant="outline" 
                          className="justify-start text-left" 
                          onClick={() => setInputMessage("How do I handle pricing objections?")}
                        >
                          Handle objections
                        </Button>
                        <Button 
                          variant="outline" 
                          className="justify-start text-left" 
                          onClick={() => setInputMessage("What metrics should I track for my sales calls?")}
                        >
                          Track call metrics
                        </Button>
                        <Button 
                          variant="outline" 
                          className="justify-start text-left" 
                          onClick={() => setInputMessage("Give me tips to improve my closing rate")}
                        >
                          Improve closing rate
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                      ))}
                      {isLoading && (
                        <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
                          <div className="bg-blue-500/10 p-2 rounded-full">
                            <Bot className="h-4 w-4 text-blue-500" />
                          </div>
                          <span>AI is thinking...</span>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </>
                  )}
                </div>
                
                {/* Input area */}
                <div className="p-4 border-t bg-background rounded-b-lg">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSendMessage()
                    }}
                    className="flex items-end gap-2"
                  >
                    <div className="relative flex-1">
                      <Input
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="pr-10"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="icon" 
                      disabled={!inputMessage.trim() || isLoading}
                    >
                      <Send className="h-4 w-4" />
                    </Button>

                  </form>
                  <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    <span>
                      AI responses are generated based on your settings and may not always be accurate.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Chat History</CardTitle>
              <CardDescription>
                View and manage your previous conversations with the AI assistant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {chatSessions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No chat history yet</p>
                </div>
              ) : (
                <ScrollArea className="h-[calc(100vh-350px)]">
                  <div className="space-y-2">
                    {chatSessions.map((session) => (
                      <div 
                        key={session.id} 
                        className={cn(
                          "flex items-center justify-between p-3 rounded-md hover:bg-muted cursor-pointer",
                          activeChatSession?.id === session.id && "bg-muted"
                        )}
                        onClick={() => handleSelectChatSession(session)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{session.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(session.updatedAt).toLocaleDateString()} · {session.messages.length} messages
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteChatSession(session.id)
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleNewChat}
              >
                New Chat
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>AI Assistant Settings</CardTitle>
              <CardDescription>
                Customize how the AI assistant responds to your queries.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">


                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="temperature">Creativity</Label>
                    <span className="text-sm text-muted-foreground">{temperature.toFixed(1)}</span>
                  </div>
                  <input
                    id="temperature"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Precise</span>
                    <span>Creative</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="max-tokens">Response Length</Label>
                    <span className="text-sm text-muted-foreground">{maxTokens}</span>
                  </div>
                  <input
                    id="max-tokens"
                    type="range"
                    min="256"
                    max="4096"
                    step="256"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Shorter</span>
                    <span>Longer</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch 
                    id="use-call-history" 
                    checked={useCallHistory}
                    onCheckedChange={setUseCallHistory}
                  />
                  <Label htmlFor="use-call-history">Include call history in context</Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  When enabled, the AI will have access to your call history data to provide more personalized responses.
                </p>

                <div className="space-y-2">
                  <Label htmlFor="system-prompt">System Prompt</Label>
                  <Textarea
                    id="system-prompt"
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    This prompt guides how the AI responds to your queries. Edit with caution.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => {
                  setTemperature(0.7)
                  setMaxTokens(2048)
                  setUseCallHistory(true)
                  setSystemPrompt(
                    "You are an AI assistant for Callify, a platform that helps businesses automate their sales calls. " +
                    "Provide helpful, accurate, and concise responses to user queries about sales strategies, call scripts, and business growth."
                  )
                }}
              >
                Reset to Defaults
              </Button>
              <Button onClick={() => setActiveTab("chat")}>
                Apply Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Firebase integration comment */}
      {/* 
        TODO: Firebase Integration
        1. Create Firestore collections:
           - 'chatSessions': Store chat session metadata
           - 'chatMessages': Store individual messages with references to sessions
           - 'userSettings': Store user-specific AI settings
        
        2. Add authentication checks to ensure users only access their own data
        
        3. Implement real-time updates using Firebase listeners
        
        4. Set up security rules to protect data:
           - Only authenticated users can read/write their own data
           - Admins can access all data for support purposes
      */}
    </div>
  )
}