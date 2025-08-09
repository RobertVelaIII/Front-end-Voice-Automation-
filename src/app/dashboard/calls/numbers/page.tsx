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
import { Search, Phone, Plus, Copy, Star } from "lucide-react"
import { toast } from "sonner"

export default function PhoneNumbersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  
  // Mock phone number data
  const phoneNumbers = [
    {
      id: "num-1",
      number: "+1 (555) 123-4567",
      location: "New York, NY",
      type: "Local",
      status: "Active",
      isPrimary: true
    },
    {
      id: "num-2",
      number: "+1 (555) 987-6543",
      location: "Los Angeles, CA",
      type: "Local",
      status: "Active",
      isPrimary: false
    },
    {
      id: "num-3",
      number: "+1 (555) 456-7890",
      location: "Chicago, IL",
      type: "Local",
      status: "Active",
      isPrimary: false
    },
    {
      id: "num-4",
      number: "+1 (800) 234-5678",
      location: "United States",
      type: "Toll-Free",
      status: "Active",
      isPrimary: false
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

  const setPrimaryNumber = (id: string) => {
    // In a real implementation, this would update the database
    toast.success("Primary phone number updated")
  }

  return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Phone Numbers</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Your Phone Numbers</CardTitle>
                  <CardDescription>
                    Manage your phone numbers for outbound calls
                  </CardDescription>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search numbers..."
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
                      <TableHead>Primary</TableHead>
                      <TableHead><Phone className="h-4 w-4 mr-2" /> Phone Number</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredNumbers.length > 0 ? (
                      filteredNumbers.map((num) => (
                        <TableRow key={num.id}>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8" 
                              disabled={num.isPrimary}
                              onClick={() => setPrimaryNumber(num.id)}
                            >
                              <Star className={`h-4 w-4 ${num.isPrimary ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
                              <span className="sr-only">Set as primary</span>
                            </Button>
                          </TableCell>
                          <TableCell className="font-medium">{num.number}</TableCell>
                          <TableCell>{num.location}</TableCell>
                          <TableCell>{num.type}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              {num.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => copyToClipboard(num.number)}
                            >
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No phone numbers found matching your search.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Add New Number</CardTitle>
              <CardDescription>
                Purchase a new phone number for your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Number Type</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Local
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Toll-Free
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="areaCode">Area Code or Region</label>
                <Input id="areaCode" placeholder="e.g., 212 or New York" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Search Available Numbers
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
