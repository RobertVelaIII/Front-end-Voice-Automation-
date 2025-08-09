"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/contexts/SidebarContext"

interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const { isSidebarCollapsed, toggleSidebar, setIsSidebarCollapsed } = useSidebar();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    // When opening the mobile menu, ensure sidebar is expanded
    if (!isMobileMenuOpen) {
      // Only force expand when opening the menu
      if (isSidebarCollapsed) {
        // Temporarily set sidebar to expanded state for mobile view
        setIsSidebarCollapsed(false);
      }
    }
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
          <Sidebar className="h-full w-full" />
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dark overlay behind the sidebar */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 bg-black md:hidden"
                onClick={toggleMobileMenu}
              />
              
              {/* Sidebar itself */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-y-0 left-0 z-50 w-64 md:hidden sidebar-bg"
              >
                <Sidebar 
                  className="h-full w-full" 
                  isMobile={true}
                  onMobileClose={toggleMobileMenu}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
