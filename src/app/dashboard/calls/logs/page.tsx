"use client"

import { useState } from "react"
import { 
  Button, 
  Input, 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui"
import { Search, Phone, Calendar, Clock, Download } from "lucide-react"

export default function CallLogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  // Mock call log data
  const callLogs = [
    {
      id: "call-1",
      phoneNumber: "+1 (555) 123-4567",
      date: "2025-08-08",
      time: "14:30",
      duration: "2:45",
      status: "Completed",
      recording: true
    },
    {
      id: "call-2",
      phoneNumber: "+1 (555) 987-6543",
      date: "2025-08-08",
      time: "11:15",
      duration: "1:30",
      status: "Completed",
      recording: true
    },
    {
      id: "call-3",
      phoneNumber: "+1 (555) 456-7890",
      date: "2025-08-07",
      time: "16:45",
      duration: "3:20",
      status: "Completed",
      recording: true
    },
    {
      id: "call-4",
      phoneNumber: "+1 (555) 234-5678",
      date: "2025-08-07",
      time: "09:10",
      duration: "0:45",
      status: "No Answer",
      recording: false
    },
    {
      id: "call-5",
      phoneNumber: "+1 (555) 345-6789",
      date: "2025-08-06",
      time: "13:25",
      duration: "4:10",
      status: "Completed",
      recording: true
    }
  ]
  
  const filteredLogs = searchQuery 
    ? callLogs.filter(log => 
        log.phoneNumber.includes(searchQuery) || 
        log.date.includes(searchQuery) ||
        log.status.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : callLogs

  return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Call Logs</h1>
      
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Recent Calls</CardTitle>
              <CardDescription>
                View and manage your recent call history
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search calls..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead><Phone className="h-4 w-4 mr-2" /> Phone Number</TableHead>
                  <TableHead><Calendar className="h-4 w-4 mr-2" /> Date</TableHead>
                  <TableHead><Clock className="h-4 w-4 mr-2" /> Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.phoneNumber}</TableCell>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.time}</TableCell>
                      <TableCell>{log.duration}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          log.status === "Completed" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}>
                          {log.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {log.recording && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Recording
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No call logs found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
