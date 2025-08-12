"use client"

import { useState } from "react"
import { 
  Button, 
  Input, 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui"
import { 
  Search, 
  Phone, 
  Check, 
  PhoneOff, 
  AlertTriangle, 
  Download, 
  Eye, 
  MoreVertical, 
  StickyNote, 
  X, 
  Filter 
} from "lucide-react"

export default function CallLogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNotesModal, setShowNotesModal] = useState(false)
  const [selectedCall, setSelectedCall] = useState<string | null>(null)
  
  // Mock call log data
  const callLogs = [
    {
      id: "call-1",
      phoneNumber: "+1 (555) 123-4567",
      date: "Jan 15, 2025",
      time: "2:30 PM",
      duration: "3m 45s",
      status: "Complete",
      recording: true,
      notes: "Customer was interested in our premium package. Scheduled follow-up call for next week. Mentioned they need time to discuss with their team."
    },
    {
      id: "call-2",
      phoneNumber: "+1 (555) 987-6543",
      date: "Jan 15, 2025",
      time: "1:15 PM",
      duration: "-",
      status: "No Answer",
      recording: false,
      notes: ""
    },
    {
      id: "call-3",
      phoneNumber: "+1 (555) 456-7890",
      date: "Jan 15, 2025",
      time: "12:45 PM",
      duration: "1m 23s",
      status: "Incomplete",
      recording: true,
      notes: ""
    },
    {
      id: "call-4",
      phoneNumber: "+1 (555) 234-5678",
      date: "Jan 14, 2025",
      time: "4:20 PM",
      duration: "5m 12s",
      status: "Complete",
      recording: true,
      notes: ""
    },
    {
      id: "call-5",
      phoneNumber: "+1 (555) 345-6789",
      date: "Jan 14, 2025",
      time: "3:10 PM",
      duration: "2m 56s",
      status: "Complete",
      recording: true,
      notes: ""
    }
  ]
  
  const filteredLogs = searchQuery 
    ? callLogs.filter(log => 
        log.phoneNumber.includes(searchQuery) || 
        log.date.includes(searchQuery) ||
        log.status.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : callLogs

  const handleOpenNotes = (callId: string) => {
    setSelectedCall(callId)
    setShowNotesModal(true)
  }

  const handleCloseNotes = () => {
    setShowNotesModal(false)
    setSelectedCall(null)
  }

  const selectedCallData = selectedCall ? callLogs.find(call => call.id === selectedCall) : null

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-neutral-100 bg-white dark:bg-gray-800/95 dark:border-gray-700/80">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl text-neutral-900 dark:text-white">Call Logs</h1>
            </div>
            <div className="flex items-center space-x-4">
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

      {/* Main Content */}
      <div className="p-6 flex-1 overflow-auto">
        {/* Search Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search call logs..." 
                className="w-full pl-10 pr-4 py-2" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="default" className="bg-primary-600 hover:bg-primary-700 text-white transition-all duration-200 shadow-sm">
              <Filter size={18} className="mr-2" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" className="border-neutral-200 hover:bg-neutral-50 dark:border-gray-600/80 dark:hover:bg-gray-700/70 transition-all duration-200 shadow-sm">
              <Download size={18} className="mr-2" />
              <span>Export</span>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Total Calls</p>
                  <p className="text-2xl text-neutral-900 dark:text-white font-semibold">1,247</p>
                </div>
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20">
                  <Phone className="text-blue-500 dark:text-blue-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Completed</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">892</p>
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">No Answer</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">234</p>
                </div>
                <div className="p-2 rounded-full bg-amber-50 dark:bg-amber-900/20">
                  <PhoneOff className="text-amber-500 dark:text-amber-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Incomplete</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">121</p>
                </div>
                <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/20">
                  <AlertTriangle className="text-red-500 dark:text-red-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logs Table */}
        <Card className="border-neutral-100 dark:border-gray-700/80 overflow-hidden shadow-sm">
          <CardHeader className="px-6 py-4 border-b border-neutral-100 dark:border-gray-700/80">
            <CardTitle className="text-lg text-neutral-900 dark:text-white">Recent Call Logs</CardTitle>
          </CardHeader>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-neutral-50/80 dark:bg-gray-800/80">
                <TableRow>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Phone Number</TableHead>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Date & Time</TableHead>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Duration</TableHead>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Status</TableHead>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Recording</TableHead>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Notes</TableHead>
                  <TableHead className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white dark:bg-gray-800 divide-y divide-neutral-200 dark:divide-gray-700">
                {filteredLogs.map((call) => (
                  <TableRow key={call.id}>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">{call.phoneNumber}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">{call.date} {call.time}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">{call.duration}</TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
call.status === "Complete" 
  ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
  : call.status === "No Answer"
    ? "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
    : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
}`}>{call.status}</span>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      {call.recording ? (
                        <button className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
                          <Download size={16} />
                        </button>
                      ) : (
                        <span className="text-neutral-400 dark:text-neutral-500">-</span>
                      )}
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <button 
                        className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200"
                        onClick={() => handleOpenNotes(call.id)}
                      >
                        <StickyNote size={16} />
                      </button>
                    </TableCell>
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200 mr-2">
                        <Eye size={16} />
                      </button>
                      <button className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-200">
                        <MoreVertical size={16} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="px-6 py-4 border-t border-neutral-100 dark:border-gray-700/80 flex items-center justify-between">
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Showing 1 to {filteredLogs.length} of 1,247 results</p>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="px-3 py-1 border-neutral-200 dark:border-gray-600/80 text-sm disabled:opacity-50 transition-all duration-200" 
                disabled
              >
                Previous
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="px-3 py-1 bg-primary-600 dark:bg-primary-700 text-white text-sm transition-all duration-200"
              >
                1
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-3 py-1 border-neutral-300 dark:border-gray-600 text-sm hover:bg-neutral-50 dark:hover:bg-gray-700"
              >
                2
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-3 py-1 border-neutral-300 dark:border-gray-600 text-sm hover:bg-neutral-50 dark:hover:bg-gray-700"
              >
                3
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-3 py-1 border-neutral-300 dark:border-gray-600 text-sm hover:bg-neutral-50 dark:hover:bg-gray-700"
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Notes Modal */}
      {showNotesModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
          <Card className="bg-white dark:bg-gray-800/95 rounded-lg p-6 w-full max-w-md shadow-xl border-neutral-100 dark:border-gray-700/80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-neutral-900 dark:text-white">Call Notes</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-white rounded-full h-8 w-8 p-0 transition-all duration-200" 
                onClick={handleCloseNotes}
              >
                <X size={18} />
              </Button>
            </div>
            <div className="mb-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Phone: {selectedCallData?.phoneNumber}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Date: {selectedCallData?.date} {selectedCallData?.time}</p>
              <div className="bg-neutral-50 dark:bg-gray-700/80 p-4 rounded-lg border border-neutral-100 dark:border-gray-600/50">
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {selectedCallData?.notes || "No notes available for this call."}
                </p>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="px-4 py-2 border-neutral-200 dark:border-gray-600/80 text-sm hover:bg-neutral-50 dark:hover:bg-gray-700/70 transition-all duration-200"
                onClick={handleCloseNotes}
              >
                Close
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white text-sm hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-200"
              >
                Edit
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
