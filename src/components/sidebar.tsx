"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Info, 
  Briefcase, 
  Mail, 
  LayoutDashboard,
  ChevronRight,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const sidebarItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase, 
    subItems: [
      { name: "Web Development", path: "/services#web-development" },
      { name: "Mobile Apps", path: "/services#mobile-apps" },
      { name: "UI/UX Design", path: "/services#ui-ux-design" },
    ] 
  },
  { name: "Contact", path: "/contact", icon: Mail },
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
]

interface SidebarItemProps {
  item: {
    name: string;
    path: string;
    icon: React.ElementType;
    subItems?: { name: string; path: string }[];
  };
  isActive: boolean;
}

function SidebarItem({ item, isActive }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubItems = item.subItems && item.subItems.length > 0
  const pathname = usePathname()

  return (
    <div>
      <Link
        href={hasSubItems ? "#" : item.path}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
          isActive 
            ? "bg-accent text-accent-foreground" 
            : "hover:bg-accent/50 hover:text-accent-foreground"
        )}
        onClick={(e) => {
          if (hasSubItems) {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
      >
        <item.icon className="h-4 w-4" />
        <span>{item.name}</span>
        {hasSubItems && (
          <div className="ml-auto">
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </div>
        )}
      </Link>
      
      {hasSubItems && isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="ml-6 mt-1 space-y-1"
        >
          {item.subItems?.map((subItem) => (
            <Link
              key={subItem.path}
              href={subItem.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                pathname === subItem.path
                  ? "bg-accent/50 text-accent-foreground"
                  : "hover:bg-accent/30 hover:text-accent-foreground"
              )}
            >
              <span>{subItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <aside className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Navigation
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.path}
                item={item}
                isActive={pathname === item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
