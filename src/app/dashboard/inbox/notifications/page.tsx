"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "New call scheduled",
      description: "A new call has been scheduled for tomorrow at 2:00 PM",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Call script updated",
      description: "Your call script has been updated with new content",
      time: "Yesterday",
      isRead: true,
    },
    {
      id: 3,
      title: "New voicemail received",
      description: "You have a new voicemail from John Smith",
      time: "2 days ago",
      isRead: true,
    },
    {
      id: 4,
      title: "Call analytics updated",
      description: "Your call analytics have been updated for the week",
      time: "3 days ago",
      isRead: true,
    },
    {
      id: 5,
      title: "New contact added",
      description: "A new contact has been added to your database",
      time: "1 week ago",
      isRead: true,
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/inbox">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          You have {notifications.filter(n => !n.isRead).length} unread notifications
        </p>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Notifications</CardTitle>
          <CardDescription>
            View and manage your system notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="rounded-md border p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      {!notification.isRead && (
                        <Badge variant="default" className="ml-2">New</Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm">
                      Mark as read
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
