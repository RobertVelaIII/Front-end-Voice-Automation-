"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Loader2, Check, AlertTriangle, Download, Headphones } from "lucide-react"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SendCallPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [script, setScript] = useState("")
  const [voiceType, setVoiceType] = useState("jordan")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("new")

  const handleSendCall = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!phoneNumber || !script) {
      toast.error("Please fill in all required fields")
      return
    }
    
    setIsLoading(true)
    
    try {
      // This is where we would integrate with a call API
      // For now, we'll just simulate a call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success("Call initiated successfully!")
      // In a real implementation, we might redirect to a call status page
      // or show more detailed information about the call
    } catch (error) {
      console.error("Error sending call:", error)
      toast.error("Failed to initiate call. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-neutral-100 bg-white dark:bg-gray-800/95 dark:border-gray-700/80">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl text-neutral-900 dark:text-white">Send Call</h1>
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
      
      <div className="p-6">
        <Tabs defaultValue="new" className="mb-6">
          <TabsList>
            <TabsTrigger value="new">New Call</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="border-b border-neutral-100 dark:border-gray-700/80">
            <CardTitle className="text-lg text-neutral-900 dark:text-white">Call Details</CardTitle>
            <CardDescription className="text-neutral-500 dark:text-neutral-400">
              Enter the details for your automated call
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSendCall} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-neutral-700 dark:text-neutral-300">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={16} />
                  <Input
                    id="phoneNumber"
                    className="pl-10 border-neutral-200 dark:border-gray-600/80 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    placeholder="Enter phone number (e.g., +1 555-123-4567)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="voiceType" className="text-neutral-700 dark:text-neutral-300">Voice Type</Label>
                <Select value={voiceType} onValueChange={(value: string) => setVoiceType(value)}>
                  <SelectTrigger id="voiceType" className="border-neutral-200 dark:border-gray-600/80 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200">
                    <SelectValue placeholder="Select voice type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jordan">Jordan (Sales Closer)</SelectItem>
                    <SelectItem value="neutral">Neutral Professional</SelectItem>
                    <SelectItem value="friendly">Friendly Conversational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="script" className="text-neutral-700 dark:text-neutral-300">Call Script</Label>
                <Textarea
                  id="script"
                  placeholder="Enter your call script here..."
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  className="min-h-[200px] border-neutral-200 dark:border-gray-600/80 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white transition-all duration-200 shadow-sm" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Initiating Call...
                  </>
                ) : (
                  <>
                    <Phone className="mr-2 h-4 w-4" />
                    Send Call
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
          <CardHeader className="border-b border-neutral-100 dark:border-gray-700/80">
            <CardTitle className="text-lg text-neutral-900 dark:text-white">Call Preview</CardTitle>
            <CardDescription className="text-neutral-500 dark:text-neutral-400">
              Preview how your call will sound
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-neutral-100 dark:border-gray-700/80 rounded-lg p-4 bg-neutral-50/80 dark:bg-gray-800/80">
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mr-2">
                  <Headphones className="text-blue-500 dark:text-blue-400" size={16} />
                </div>
                <h3 className="font-medium text-neutral-700 dark:text-neutral-300">
                  Selected Voice: {voiceType === "jordan" ? "Jordan (Sales Closer)" : voiceType === "neutral" ? "Neutral Professional" : "Friendly Conversational"}
                </h3>
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap bg-white dark:bg-gray-700/60 p-3 rounded-md border border-neutral-100 dark:border-gray-600/50">
                {script || "Your script will appear here..."}
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                disabled={!script}
                className="border-neutral-200 hover:bg-neutral-50 dark:border-gray-600/80 dark:hover:bg-gray-700/70 transition-all duration-200 shadow-sm"
              >
                <Headphones className="mr-2 h-4 w-4" />
                Test Voice
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-neutral-100 dark:border-gray-700/80 pt-4">
            <h3 className="font-medium text-sm w-full text-neutral-700 dark:text-neutral-300">Call Settings</h3>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button 
                variant="outline" 
                size="sm"
                className="border-neutral-200 hover:bg-neutral-50 dark:border-gray-600/80 dark:hover:bg-gray-700/70 transition-all duration-200 shadow-sm"
              >
                Save as Template
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-neutral-200 hover:bg-neutral-50 dark:border-gray-600/80 dark:hover:bg-gray-700/70 transition-all duration-200 shadow-sm"
              >
                Schedule Call
              </Button>
            </div>
          </CardFooter>
        </Card>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Total Calls</p>
                  <p className="text-2xl text-neutral-900 dark:text-white font-semibold">247</p>
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
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">189</p>
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
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">42</p>
                </div>
                <div className="p-2 rounded-full bg-amber-50 dark:bg-amber-900/20">
                  <Phone className="text-amber-500 dark:text-amber-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-100 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">Failed</p>
                  <p className="text-2xl text-neutral-600 dark:text-neutral-300 font-semibold">16</p>
                </div>
                <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/20">
                  <AlertTriangle className="text-red-500 dark:text-red-400" size={22} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
