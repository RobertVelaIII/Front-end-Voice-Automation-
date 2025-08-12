"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Phone, Calendar, Clock, Download, Play, Pause, MessageSquare, MoreHorizontal, AlertCircle, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function VoicemailsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("received")
  
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
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-neutral-100 bg-white dark:bg-gray-800/95 dark:border-gray-700/80">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl text-neutral-900 dark:text-white">Voicemail Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={16} />
                <Input
                  placeholder="Search voicemails..."
                  className="pl-10 border-neutral-200 dark:border-gray-600/80 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select className="border border-neutral-200 dark:border-gray-600/80 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700/90 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200">
                <option>Organization Alpha</option>
                <option>Organization Beta</option>
                <option>Organization Gamma</option>
              </select>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <Tabs defaultValue="received" className="mb-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="received">
              <MessageSquare className="mr-2 h-4 w-4" />
              Received Voicemails
            </TabsTrigger>
            <TabsTrigger value="sent">
              <Phone className="mr-2 h-4 w-4" />
              Sent Voicemails
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="space-y-4">
          {filteredVoicemails.length > 0 ? (
            filteredVoicemails.map((vm) => (
              <div key={vm.id} className="bg-white dark:bg-gray-800/90 border border-neutral-200 dark:border-gray-700/80 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 ${vm.listened ? "bg-neutral-300 dark:bg-gray-600" : "bg-neutral-500 dark:bg-blue-400 animate-pulse"} rounded-full`}></div>
                    <div className="flex flex-col">
                      <span className="text-black dark:text-white">{vm.phoneNumber}</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">{vm.date} • {vm.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Duration: {vm.duration}</span>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-gray-700/70 rounded-lg"
                        onClick={() => togglePlay(vm.id)}
                      >
                        {playingId === vm.id ? (
                          <Pause className="text-neutral-600 dark:text-neutral-400" size={16} />
                        ) : (
                          <Play className="text-neutral-600 dark:text-neutral-400" size={16} />
                        )}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-gray-700/70 rounded-lg"
                      >
                        <Download className="text-neutral-600 dark:text-neutral-400" size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-gray-700/70 rounded-lg"
                      >
                        <MessageSquare className="text-neutral-600 dark:text-neutral-400" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-neutral-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Voicemail transcript or notes would appear here</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-gray-700/50 mb-4">
                <AlertCircle className="text-neutral-500 dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">No voicemails found</h3>
              <p className="text-neutral-500 dark:text-neutral-400">Try adjusting your search or filters</p>
            </div>
          )}
          
          <div id="pagination" className="mt-8 flex items-center justify-between">
            <div className="text-sm text-neutral-700 dark:text-neutral-400">
              Showing 1 to {filteredVoicemails.length} of {voicemails.length} voicemails
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-neutral-200 dark:border-gray-600/80 hover:bg-neutral-50 dark:hover:bg-gray-700/70 text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </Button>
              <Button variant="default" size="sm" className="bg-black dark:bg-white text-white dark:text-black">1</Button>
              <Button variant="outline" size="sm" className="border-neutral-200 dark:border-gray-600/80 hover:bg-neutral-50 dark:hover:bg-gray-700/70 text-neutral-600 dark:text-neutral-400">2</Button>
              <Button variant="outline" size="sm" className="border-neutral-200 dark:border-gray-600/80 hover:bg-neutral-50 dark:hover:bg-gray-700/70 text-neutral-600 dark:text-neutral-400">3</Button>
              <Button variant="outline" size="sm" className="border-neutral-200 dark:border-gray-600/80 hover:bg-neutral-50 dark:hover:bg-gray-700/70 text-neutral-600 dark:text-neutral-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Total Voicemails</p>
                  <p className="text-2xl text-neutral-900 dark:text-white font-semibold">{voicemails.length}</p>
                </div>
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
                  <MessageSquare className="text-blue-500 dark:text-blue-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">New Messages</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">{voicemails.filter(vm => !vm.listened).length}</p>
                </div>
                <div className="p-2 rounded-full bg-amber-50 dark:bg-amber-900/20">
                  <AlertCircle className="text-amber-500 dark:text-amber-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Listened</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">{voicemails.filter(vm => vm.listened).length}</p>
                </div>
                <div className="p-2 rounded-full bg-green-50 dark:bg-green-900/20">
                  <Check className="text-green-500 dark:text-green-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Average Duration</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">1:15</p>
                </div>
                <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-900/20">
                  <Clock className="text-purple-500 dark:text-purple-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
