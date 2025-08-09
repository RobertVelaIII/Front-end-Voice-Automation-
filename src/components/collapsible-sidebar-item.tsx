"use client"

import { ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

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
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = children && children.length > 0
  
  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    } else if (onClick) {
      onClick()
    }
  }

  const ButtonContent = (
    <>
      <div className="flex items-center flex-1">
        <span className="mr-3">{icon}</span>
        {!isCollapsed && <span className="flex-1">{label}</span>}
      </div>
      {!isCollapsed && hasChildren && (
        <span className="ml-auto">
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
        <div className="ml-6 mt-1 space-y-1">
          {children.map((child, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              asChild
              className="w-full justify-start pl-6 text-sm font-normal"
            >
              <Link href={child.href}>
                {child.label}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
