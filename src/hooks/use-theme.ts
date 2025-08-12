"use client"

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

// Create a global variable to track theme state across components
let globalTheme: Theme = 'system'
let listeners: Array<(theme: Theme) => void> = []

// Function to notify all listeners of theme changes
function notifyThemeChange(newTheme: Theme) {
  globalTheme = newTheme
  listeners.forEach(listener => listener(newTheme))
}

export function useThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(globalTheme)
  const [mounted, setMounted] = useState(false)

  // Custom setTheme function that updates global state
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    notifyThemeChange(newTheme)
    
    // Apply theme immediately
    applyTheme(newTheme)
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  // Function to apply theme to document
  const applyTheme = (themeToApply: Theme) => {
    if (typeof window === 'undefined') return
    
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    
    if (themeToApply === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(themeToApply)
    }
  }

  // Initialize theme from localStorage if available
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const storedTheme = localStorage.getItem('theme') as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    
    // Add this component as a listener
    const listener = (updatedTheme: Theme) => {
      setThemeState(updatedTheme)
    }
    listeners.push(listener)
    
    setMounted(true)
    
    // Cleanup listener on unmount
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, mounted])

  return { theme, setTheme, mounted }
}
