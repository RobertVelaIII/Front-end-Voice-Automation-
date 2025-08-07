"use client"

import { ReactNode } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: ReactNode
  showSidebar?: boolean
  className?: string
}

export function MainLayout({ 
  children, 
  showSidebar = true,
  className 
}: MainLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex">
        {showSidebar && (
          <div className="hidden md:block w-64 shrink-0 border-r">
            <Sidebar className="sticky top-16 overflow-y-auto h-[calc(100vh-4rem)]" />
          </div>
        )}
        
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:h-16 px-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Callify. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
