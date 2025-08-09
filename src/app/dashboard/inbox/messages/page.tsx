"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, ArrowLeft, Search, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const messages = [
    {
      id: 1,
      sender: "John Smith",
      preview: "Hi there! I wanted to follow up on our call yesterday. Do you have time to discuss the proposal?",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 2,
      sender: "Sarah Johnson",
      preview: "Thanks for the information. I'll review it and get back to you with my thoughts by tomorrow.",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 3,
      sender: "Michael Brown",
      preview: "I'm interested in scheduling another call next week. What's your availability?",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      sender: "Emily Davis",
      preview: "The presentation looks great! I've shared it with my team and they're impressed.",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 5,
      sender: "David Wilson",
      preview: "Can you send me the updated pricing information? I need it for my meeting tomorrow.",
      time: "3 days ago",
      unread: false,
    },
  ]

  const filteredMessages = messages.filter(message => 
    message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/inbox">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Direct Messages</h1>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          You have {messages.filter(m => m.unread).length} unread messages
        </p>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search messages..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Messages</CardTitle>
          <CardDescription>
            View and respond to your direct messages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message) => (
              <div 
                key={message.id} 
                className={`rounded-md border p-4 cursor-pointer hover:bg-accent/50 transition-colors ${message.unread ? 'border-primary' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium leading-none">
                        {message.sender}
                        {message.unread && (
                          <span className="ml-2 h-2 w-2 rounded-full bg-primary inline-block" />
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {message.time}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {message.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6">
              <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground" />
              <p className="mt-2 text-muted-foreground">No messages found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
