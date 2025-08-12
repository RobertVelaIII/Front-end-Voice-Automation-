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
  CardFooter,
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui"
import { Search, Phone, Plus, Copy, Settings, Trash2, Filter } from "lucide-react"
import { toast } from "sonner"

export default function PhoneNumbersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [areaCode, setAreaCode] = useState("")
  const [numberType, setNumberType] = useState("Local")
  
  // Mock phone number data
  const phoneNumbers = [
    {
      id: "num-1",
      number: "+1 (555) 123-4567",
      location: "New York, NY",
      type: "Local",
      status: "Active",
      isPrimary: true,
      index: 1
    },
    {
      id: "num-2",
      number: "+1 (800) 555-0123",
      location: "Toll-Free",
      type: "Toll-Free",
      status: "Active",
      isPrimary: false,
      index: 2
    },
    {
      id: "num-3",
      number: "+1 (555) 987-6543",
      location: "Los Angeles, CA",
      type: "Local",
      status: "Inactive",
      isPrimary: false,
      index: "-"
    },
    {
      id: "num-4",
      number: "+1 (555) 456-7890",
      location: "Chicago, IL",
      type: "Local",
      status: "Active",
      isPrimary: false,
      index: 3
    }
  ]
  
  const filteredNumbers = searchQuery 
    ? phoneNumbers.filter(num => 
        num.number.includes(searchQuery) || 
        num.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        num.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : phoneNumbers

  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number)
      .then(() => {
        toast.success("Phone number copied to clipboard")
      })
      .catch(() => {
        toast.error("Failed to copy phone number")
      })
  }
  
  const handleSearchAvailableNumbers = () => {
    toast.success("Searching for available numbers...")
    // In a real implementation, this would call an API to search for numbers
  }
  
  const handlePurchaseNumber = () => {
    toast.success("Purchasing number...")
    // In a real implementation, this would open a modal or navigate to purchase flow
  }
  
  const handleSettings = (id: string) => {
    toast.info(`Opening settings for number ${id}`)
    // In a real implementation, this would open a settings modal
  }
  
  const handleDelete = (id: string) => {
    toast.info(`Deleting number ${id}`)
    // In a real implementation, this would show a confirmation dialog
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-neutral-100 bg-white dark:bg-gray-800/95 dark:border-gray-700/80">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Phone className="text-neutral-800 dark:text-neutral-200" />
              <h1 className="text-xl text-neutral-900 dark:text-white">Phone Numbers</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={handlePurchaseNumber}
                className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Purchase Number
              </Button>
              <Button 
                variant="outline"
                className="border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/70"
              >
                <Phone className="h-4 w-4 mr-2" />
                Phone Book
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-neutral-50 dark:bg-neutral-900/30 flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          {/* Purchase Section */}
          <Card className="bg-white dark:bg-gray-800/90 border-neutral-200 dark:border-gray-700/80 shadow-sm mb-8">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <svg className="text-neutral-600 dark:text-neutral-400 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 className="text-lg text-neutral-900 dark:text-white">Purchase a new phone number for your account</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Number Type</label>
                  <select 
                    className="w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-gray-700/80 text-neutral-900 dark:text-neutral-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400"
                    value={numberType}
                    onChange={(e) => setNumberType(e.target.value)}
                  >
                    <option>Local</option>
                    <option>Toll-Free</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">Area Code / Region</label>
                  <Input 
                    type="text" 
                    placeholder="Enter area code" 
                    className="w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-gray-700/80 text-neutral-900 dark:text-neutral-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400"
                    value={areaCode}
                    onChange={(e) => setAreaCode(e.target.value)}
                  />
                </div>
                
                <div className="flex items-end">
                  <Button 
                    className="w-full bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700"
                    onClick={handleSearchAvailableNumbers}
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search Available Numbers
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Numbers List */}
          <Card className="bg-white dark:bg-gray-800/90 border-neutral-200 dark:border-gray-700/80 shadow-sm">
            <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-700/80">
              <div className="flex items-center justify-between">
                <h2 className="text-lg text-neutral-900 dark:text-white">Your Phone Numbers</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Input 
                      type="text" 
                      placeholder="Search numbers..." 
                      className="border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-gray-700/80 text-neutral-900 dark:text-neutral-200 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={16} />
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/70"
                  >
                    <Filter size={16} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-700/80">
                  <TableRow>
                    <TableHead className="px-6 py-3 text-left text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">#</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Phone Number</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Location</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Type</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Status</TableHead>
                    <TableHead className="px-6 py-3 text-left text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white dark:bg-transparent divide-y divide-neutral-200 dark:divide-neutral-700/80">
                  {filteredNumbers.map((num) => (
                    <TableRow key={num.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-200">{num.index}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-200">{num.number}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">{num.location}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">{num.type}</TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mr-1.5"></span>
                          {num.status}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="flex space-x-3">
                          <button 
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200" 
                            title="Copy number"
                            onClick={() => copyToClipboard(num.number)}
                          >
                            <Copy size={16} />
                          </button>
                          <button 
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200" 
                            title="Settings"
                            onClick={() => handleSettings(num.id)}
                          >
                            <Settings size={16} />
                          </button>
                          <button 
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200" 
                            title="Delete"
                            onClick={() => handleDelete(num.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-800/50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-700 dark:text-neutral-400">Showing {filteredNumbers.length} of {phoneNumbers.length} phone numbers</p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 disabled:opacity-50" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  <span className="px-3 py-1 text-sm bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded">1</span>
                  <button className="px-3 py-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 disabled:opacity-50" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
