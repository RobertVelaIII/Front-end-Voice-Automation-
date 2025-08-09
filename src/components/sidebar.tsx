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
  PhoneForwarded
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { CollapsibleSidebarItem } from "./collapsible-sidebar-item"

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
            href="/dashboard/inbox"
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
