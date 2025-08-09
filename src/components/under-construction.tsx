"use client"

import { Construction } from "lucide-react"

interface UnderConstructionProps {
  pageName?: string;
  estimatedCompletion?: string;
  message?: string;
}

export function UnderConstruction({ 
  pageName = "This page", 
  estimatedCompletion = "soon",
  message
}: UnderConstructionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="bg-muted rounded-full p-6 mb-6">
          <Construction className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Under Construction</h1>
        <p className="text-muted-foreground mb-6">
          {pageName} is currently under construction and will be available {estimatedCompletion}.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          {message || "We're working hard to bring you the best experience possible. Thank you for your patience!"}
        </p>
      </div>
    </div>
  )
}
