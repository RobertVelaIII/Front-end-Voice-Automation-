"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useThemeToggle } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

/**
 * Theme toggle button component
 * Switches between light and dark mode
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, mounted } = useThemeToggle()
  
  // No need for mounted state as it's provided by the hook

  // Toggle theme function with event handling
  const handleToggleTheme = (e: React.MouseEvent) => {
    // Stop event propagation to prevent it from closing the mobile menu
    e.stopPropagation()
    // Toggle between light and dark mode
    setTheme(theme === "dark" ? "light" : "dark")
    // Force apply theme to ensure it propagates globally
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme === "dark" ? "light" : "dark")
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className={cn("w-9 h-9", className)} />
  }

  return (
    <button
      onClick={handleToggleTheme}
      className={cn(
        "w-9 h-9 flex items-center justify-center rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
