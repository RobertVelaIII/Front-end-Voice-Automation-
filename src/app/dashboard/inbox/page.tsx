"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function InboxPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inbox</h1>
          <p className="text-muted-foreground">
            Manage your notifications and messages in one place
          </p>
        </div>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="messages">
            <MessageSquare className="h-4 w-4 mr-2" />
            Direct Messages
          </TabsTrigger>
        </TabsList>
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                View and manage your system notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button asChild variant="outline" size="sm">
                  <Link href="/dashboard/inbox/notifications">
                    View All Notifications
                  </Link>
                </Button>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      New call scheduled
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A new call has been scheduled for tomorrow at 2:00 PM
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Call script updated
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your call script has been updated with new content
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Yesterday
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Direct Messages</CardTitle>
              <CardDescription>
                View and respond to your direct messages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button asChild variant="outline" size="sm">
                  <Link href="/dashboard/inbox/messages">
                    View All Messages
                  </Link>
                </Button>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      John Smith
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Hi there! I wanted to follow up on our call yesterday...
                    </p>
                    <p className="text-xs text-muted-foreground">
                      1 hour ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Sarah Johnson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Thanks for the information. I'll review it and get back to you...
                    </p>
                    <p className="text-xs text-muted-foreground">
                      3 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
