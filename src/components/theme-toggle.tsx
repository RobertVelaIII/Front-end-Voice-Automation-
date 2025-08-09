"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Theme toggle button component
 * Switches between light and dark mode
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Check localStorage first
      const savedTheme = localStorage.getItem("callify-theme")
      
      if (savedTheme === "dark") {
        setIsDark(true)
        document.documentElement.classList.add("dark")
      } else if (savedTheme === "light") {
        setIsDark(false)
        document.documentElement.classList.remove("dark")
      } else {
        // Check system preference if no saved preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(prefersDark)
        if (prefersDark) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
      setMounted(true)
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("callify-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("callify-theme", "light")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className={cn("w-9 h-9", className)} />
  }

  return (
    <button
      onClick={toggleTheme}
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
