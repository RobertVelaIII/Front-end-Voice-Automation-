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
  X,
  CreditCard,
  DollarSign,
  Receipt,
  Building,
  Briefcase,
  SwitchCamera,
  Bot
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
      <div className="flex-1 px-4 overflow-y-auto max-h-[calc(100vh-8rem)]">
        <nav className="space-y-1">
          <CollapsibleSidebarItem
            icon={<Home className="h-4 w-4" />}
            label="Home"
            isCollapsed={isCollapsed}
            href="/dashboard/home"
          />
          
          <CollapsibleSidebarItem
            icon={<Building className="h-4 w-4" />}
            label="Organizations"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/organizations/switch", label: "Switch Organization" },
              { href: "/dashboard/organizations/manage", label: "Manage Organizations" },
              { href: "/dashboard/organizations/settings", label: "Organization Settings" },
              { href: "/dashboard/organizations/assistants", label: "AI Assistants" },
            ]}
          />
          
          <CollapsibleSidebarItem
            icon={<BarChart2 className="h-4 w-4" />}
            label="Analytics"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/analytics/overview", label: "Dashboard" },
              { href: "/dashboard/analytics/calls", label: "Call Performance" },
              { href: "/dashboard/analytics/conversion", label: "Conversion Rates" },
              { href: "/dashboard/analytics/roi", label: "ROI Tracking" },
              { href: "/dashboard/analytics/reports", label: "Custom Reports" },
            ]}
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
            icon={<CreditCard className="h-4 w-4" />}
            label="Billing & Credits"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/billing/plans", label: "Plans & Limits" },
              { href: "/dashboard/billing/purchase", label: "Purchase Credits" },
              { href: "/dashboard/billing/settings", label: "Billing Settings" },
            ]}
          />
          
          <CollapsibleSidebarItem
            icon={<Settings className="h-4 w-4" />}
            label="Settings"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/settings/account", label: "Account" },
              { href: "/dashboard/settings/profile", label: "Profile" },
              { href: "/dashboard/settings/security", label: "Security & Privacy" },
              { href: "/dashboard/settings/integrations", label: "Integrations" },
              { href: "/dashboard/settings/api", label: "API & Webhooks" },
            ]}
          />
          
          <CollapsibleSidebarItem
            icon={<HelpCircle className="h-4 w-4" />}
            label="Help"
            isCollapsed={isCollapsed}
            children={[
              { href: "/dashboard/help/documentation", label: "Documentation" },
              { href: "/dashboard/help/tutorials", label: "Tutorials" },
              { href: "/dashboard/help/faq", label: "FAQ" },
              { href: "/dashboard/help/support", label: "Contact Support" },
              { href: "/dashboard/help/community", label: "Community" },
            ]}
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
