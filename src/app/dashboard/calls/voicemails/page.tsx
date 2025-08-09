"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Phone, Calendar, Clock, Download, Play, Pause } from "lucide-react"

export default function VoicemailsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [playingId, setPlayingId] = useState<string | null>(null)
  
  // Mock voicemail data
  const voicemails = [
    {
      id: "vm-1",
      phoneNumber: "+1 (555) 123-4567",
      date: "2025-08-08",
      time: "14:30",
      duration: "0:45",
      listened: true
    },
    {
      id: "vm-2",
      phoneNumber: "+1 (555) 987-6543",
      date: "2025-08-08",
      time: "11:15",
      duration: "1:20",
      listened: false
    },
    {
      id: "vm-3",
      phoneNumber: "+1 (555) 456-7890",
      date: "2025-08-07",
      time: "16:45",
      duration: "0:30",
      listened: true
    },
    {
      id: "vm-4",
      phoneNumber: "+1 (555) 234-5678",
      date: "2025-08-07",
      time: "09:10",
      duration: "2:15",
      listened: false
    },
    {
      id: "vm-5",
      phoneNumber: "+1 (555) 345-6789",
      date: "2025-08-06",
      time: "13:25",
      duration: "1:05",
      listened: true
    }
  ]
  
  const filteredVoicemails = searchQuery 
    ? voicemails.filter(vm => 
        vm.phoneNumber.includes(searchQuery) || 
        vm.date.includes(searchQuery)
      )
    : voicemails

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null)
    } else {
      setPlayingId(id)
    }
  }

  return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Voicemails</h1>
      
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Recent Voicemails</CardTitle>
              <CardDescription>
                Listen to and manage your voicemail messages
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search voicemails..."
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
                  <TableHead>Status</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead><Calendar className="h-4 w-4 mr-2" /> Date</TableHead>
                  <TableHead><Clock className="h-4 w-4 mr-2" /> Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVoicemails.length > 0 ? (
                  filteredVoicemails.map((vm) => (
                    <TableRow key={vm.id}>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full w-3 h-3 ${
                          vm.listened 
                            ? "bg-gray-300 dark:bg-gray-600" 
                            : "bg-blue-500 dark:bg-blue-400"
                        }`} />
                      </TableCell>
                      <TableCell className="font-medium">{vm.phoneNumber}</TableCell>
                      <TableCell>{vm.date}</TableCell>
                      <TableCell>{vm.time}</TableCell>
                      <TableCell>{vm.duration}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => togglePlay(vm.id)}
                        >
                          {playingId === vm.id ? (
                            <>
                              <Pause className="h-4 w-4 mr-1" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-1" />
                              Play
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No voicemails found matching your search.
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
