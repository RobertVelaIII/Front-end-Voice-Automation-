"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function SendCallPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [script, setScript] = useState("")
  const [voiceType, setVoiceType] = useState("jordan")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendCall = async (e: React.FormEvent) => {
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Send Call</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Call Details</CardTitle>
            <CardDescription>
              Enter the details for your automated call
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSendCall} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  placeholder="Enter phone number (e.g., +1 555-123-4567)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="voiceType">Voice Type</Label>
                <Select value={voiceType} onValueChange={setVoiceType}>
                  <SelectTrigger>
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
                <Label htmlFor="script">Call Script</Label>
                <Textarea
                  id="script"
                  placeholder="Enter your call script here..."
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  className="min-h-[200px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
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
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Call Preview</CardTitle>
            <CardDescription>
              Preview how your call will sound
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-md p-4 bg-muted/20">
              <h3 className="font-medium mb-2">Selected Voice: {voiceType === "jordan" ? "Jordan (Sales Closer)" : voiceType === "neutral" ? "Neutral Professional" : "Friendly Conversational"}</h3>
              <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                {script || "Your script will appear here..."}
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline" disabled={!script}>
                <Phone className="mr-2 h-4 w-4" />
                Test Voice
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t pt-4">
            <h3 className="font-medium text-sm w-full">Call Settings</h3>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button variant="outline" size="sm">
                Save as Template
              </Button>
              <Button variant="outline" size="sm">
                Schedule Call
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
