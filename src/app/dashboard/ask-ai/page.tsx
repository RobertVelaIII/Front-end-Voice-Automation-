"use client"

import { UnderConstruction } from "@/components/under-construction"

export default function AskAIPage() {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Ask AI Assistant</h1>
      <UnderConstruction 
        pageName="AI Assistant" 
        estimatedCompletion="soon" 
        message="Our AI assistant feature is currently under development. Soon you'll be able to ask questions, get recommendations, and automate tasks directly from this interface."
      />
    </div>
  )
}
