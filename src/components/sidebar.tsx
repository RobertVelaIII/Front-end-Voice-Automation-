"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle, 
  FileText, 
  Phone, 
  Mail,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  Voicemail,
  PhoneForwarded,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { CollapsibleSidebarItem } from "./collapsible-sidebar-item"
import { useSidebar } from "@/contexts/SidebarContext"
import { useEffect, useState } from "react"

interface SidebarProps {
  className?: string;
  isMobile?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ className, isMobile = false, onMobileClose }: SidebarProps) {
  const { logout } = useAuth()
  const { isSidebarCollapsed: isCollapsed, toggleSidebar, setIsSidebarCollapsed } = useSidebar()
  
  // Detect if we're on mobile based on window width
  const [isActuallyMobile, setIsActuallyMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsActuallyMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle sidebar toggle differently on mobile
  const handleSidebarToggle = () => {
    if (isActuallyMobile) {
      // On mobile, if we're collapsing the sidebar, close the mobile menu
      if (!isCollapsed) {
        onMobileClose?.();
      }
    }
    toggleSidebar();
  };

  return (
    <div className={cn("h-full flex flex-col bg-background", className)}>
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && <h2 className="text-lg font-semibold">Dashboard</h2>}
        {isActuallyMobile ? (
          <Button variant="ghost" size="icon" onClick={onMobileClose}>
            <X className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={handleSidebarToggle}>
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        )}
      </div>
      <div className="flex-1 px-4 overflow-y-auto">
        <nav className="space-y-1">
          <CollapsibleSidebarItem
            icon={<Home className="h-4 w-4" />}
            label="Home"
            isCollapsed={isCollapsed}
            href="/dashboard/home"
          />
          
          <CollapsibleSidebarItem
            icon={<BarChart2 className="h-4 w-4" />}
            label="Analytics"
            isCollapsed={isCollapsed}
            href="/dashboard/analytics"
          />
          
          <CollapsibleSidebarItem
            icon={<Users className="h-4 w-4" />}
            label="Contacts"
            isCollapsed={isCollapsed}
            href="/dashboard/contacts"
          />
          
          <CollapsibleSidebarItem
            icon={<FileText className="h-4 w-4" />}
            label="Scripts"
            isCollapsed={isCollapsed}
            href="/dashboard/scripts"
          />
          
          <CollapsibleSidebarItem
            icon={<Phone className="h-4 w-4" />}
            label="Calls"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/calls/logs", label: "Call Logs" },
              { href: "/dashboard/calls/send", label: "Send Call" },
              { href: "/dashboard/calls/voicemails", label: "Voicemails" },
              { href: "/dashboard/calls/numbers", label: "Phone Numbers" },
            ]}
          />
          
          <CollapsibleSidebarItem
            icon={<Mail className="h-4 w-4" />}
            label="Inbox"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/inbox/notifications", label: "Notifications" },
              { href: "/dashboard/inbox/messages", label: "Direct Messages" },
            ]}
          />
          
          <CollapsibleSidebarItem
            icon={<Settings className="h-4 w-4" />}
            label="Settings"
            isCollapsed={isCollapsed}
            href="/dashboard/settings"
          />
          
          <CollapsibleSidebarItem
            icon={<HelpCircle className="h-4 w-4" />}
            label="Help"
            isCollapsed={isCollapsed}
            href="/dashboard/help"
          />
        </nav>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
          <ThemeToggle className={cn(isCollapsed ? "mx-auto" : "")} />
          {!isCollapsed && <span className="text-sm font-medium">Theme</span>}
        </div>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            logout();
          }} 
          variant="ghost" 
          className="w-full justify-start gap-3"
        >
          <LogOut className="h-4 w-4" />
          {!isCollapsed && <span>Log Out</span>}
        </Button>
      </div>
    </div>
  )
}
