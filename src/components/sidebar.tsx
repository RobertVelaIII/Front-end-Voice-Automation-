"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { LogOut, ChevronLeft, ChevronRight, Home, BarChart2, Users, Settings, HelpCircle, FileText, Calendar, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ className, isCollapsed, toggleSidebar }: SidebarProps) {
  const { logout } = useAuth()

  return (
    <div className={cn("h-full flex flex-col bg-background", className)}>
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <h2 className="text-lg font-semibold">Dashboard</h2>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 px-4">
        {/* Navigation items will go here later */}
        <nav className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start gap-3">
            <Home className="h-4 w-4" />
            {!isCollapsed && <span>Home</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <BarChart2 className="h-4 w-4" />
            {!isCollapsed && <span>Analytics</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Users className="h-4 w-4" />
            {!isCollapsed && <span>Contacts</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <FileText className="h-4 w-4" />
            {!isCollapsed && <span>Scripts</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Calendar className="h-4 w-4" />
            {!isCollapsed && <span>Calls</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Mail className="h-4 w-4" />
            {!isCollapsed && <span>Inbox</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="h-4 w-4" />
            {!isCollapsed && <span>Settings</span>}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <HelpCircle className="h-4 w-4" />
            {!isCollapsed && <span>Help</span>}
          </Button>
        </nav>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-2 mb-3">
          <ThemeToggle className={cn(isCollapsed ? "mx-auto" : "")} />
          {!isCollapsed && <span className="text-sm font-medium">Theme</span>}
        </div>
        <Button onClick={logout} variant="ghost" className="w-full justify-start gap-3">
          <LogOut className="h-4 w-4" />
          {!isCollapsed && <span>Log Out</span>}
        </Button>
      </div>
    </div>
  )
}
