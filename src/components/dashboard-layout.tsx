"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <DashboardHeader isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      <div className="flex-1 flex">
        {/* Desktop Sidebar */}
        <div 
          className={cn(
            "hidden md:block shrink-0 border-r transition-all duration-300 sidebar-bg",
            isSidebarCollapsed ? "w-20" : "w-64"
          )}
        >
          <Sidebar 
            isCollapsed={isSidebarCollapsed}
            toggleSidebar={toggleSidebar}
            className="h-full w-full"
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 w-full md:hidden sidebar-bg"
            >
              <Sidebar 
                isCollapsed={false} 
                toggleSidebar={toggleMobileMenu} // Close menu on item click
                className="h-full w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
