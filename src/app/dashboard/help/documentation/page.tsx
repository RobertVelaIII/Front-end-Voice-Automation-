"use client"

import { UnderConstruction } from "@/components/under-construction"

export default function DocumentationPage() {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Documentation</h1>
      <UnderConstruction pageName="Documentation" estimatedCompletion="in our next update" />
    </div>
  )
}