"use client"

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSidebar } from "@/contexts/SidebarContext"

interface CollapsibleSidebarItemProps {
  icon: ReactNode
  label: string
  isCollapsed: boolean
  children?: {
    href: string
    label: string
  }[]
  href?: string
  onClick?: () => void
}

export function CollapsibleSidebarItem({
  icon,
  label,
  isCollapsed,
  children,
  href,
  onClick
}: CollapsibleSidebarItemProps) {
  const { isItemExpanded, toggleExpandedItem } = useSidebar()
  const isOpen = isItemExpanded(label)
  const hasChildren = children && children.length > 0
  
  const handleClick = () => {
    if (hasChildren) {
      toggleExpandedItem(label)
    } else if (onClick) {
      onClick()
    }
  }

  const ButtonContent = (
    <>
      <div className="flex items-center flex-1">
        <span className="mr-2">{icon}</span>
        {!isCollapsed && <span className="flex-1">{label}</span>}
      </div>
      {!isCollapsed && hasChildren && (
        <span className="ml-1">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </span>
      )}
    </>
  )

  return (
    <div className="w-full">
      {href && !hasChildren ? (
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start"
          onClick={onClick}
        >
          <Link href={href}>
            {ButtonContent}
          </Link>
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleClick}
        >
          {ButtonContent}
        </Button>
      )}
      
      {hasChildren && !isCollapsed && isOpen && (
        <div className="ml-6 mt-1 space-y-1 relative">
          {/* Connector line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" 
               aria-hidden="true" />
          
          {children.map((child, index) => (
            <div key={index} className="relative">
              {/* Horizontal connector line */}
              <div 
                className="absolute left-0 top-1/2 w-3 h-px bg-gray-300 dark:bg-gray-600" 
                aria-hidden="true" 
              />
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="w-full justify-start pl-6 text-sm font-normal"
              >
                <Link href={child.href}>
                  {child.label}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
