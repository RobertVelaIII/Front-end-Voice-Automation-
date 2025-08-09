"use client"

import { createContext, ReactNode, useContext, useState, useEffect } from "react"

interface SidebarContextType {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
  expandedItems: string[];
  toggleExpandedItem: (item: string) => void;
  isItemExpanded: (item: string) => boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  // Use localStorage to persist sidebar state across page navigation
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  // Initialize state from localStorage on mount (client-side only)
  useEffect(() => {
    const storedCollapsed = localStorage.getItem('sidebar-collapsed');
    const storedExpandedItems = localStorage.getItem('sidebar-expanded-items');
    
    if (storedCollapsed) {
      setIsSidebarCollapsed(storedCollapsed === 'true');
    }
    
    if (storedExpandedItems) {
      try {
        setExpandedItems(JSON.parse(storedExpandedItems));
      } catch (e) {
        console.error('Error parsing sidebar expanded items from localStorage', e);
      }
    }
  }, []);
  
  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', isSidebarCollapsed.toString());
  }, [isSidebarCollapsed]);
  
  useEffect(() => {
    localStorage.setItem('sidebar-expanded-items', JSON.stringify(expandedItems));
  }, [expandedItems]);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  
  const toggleExpandedItem = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter(i => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };
  
  const isItemExpanded = (item: string) => {
    return expandedItems.includes(item);
  };
  
  return (
    <SidebarContext.Provider value={{
      isSidebarCollapsed,
      setIsSidebarCollapsed,
      toggleSidebar,
      expandedItems,
      toggleExpandedItem,
      isItemExpanded
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
