"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export function DashboardHeader({ isMobileMenuOpen, toggleMobileMenu }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md backdrop-saturate-150 md:hidden">
      <div className="container flex h-16 items-center justify-end px-4">
        <div className="flex-1">{/* Empty space to push menu to the right */}</div>
        <div className="flex items-center">
          {!isMobileMenuOpen && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="rounded-md border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
