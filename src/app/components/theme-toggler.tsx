"use client"

import { useTheme } from "@/app/providers/theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 z-50 p-2 rounded-full 
        bg-white/10 backdrop-blur-lg border border-white/20 
        shadow-lg shadow-black/5 
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:bg-white/20 
        dark:bg-black/10 dark:border-white/10 
        dark:hover:bg-black/20
        group"
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-300 
        dark:-rotate-90 dark:scale-0 
        text-yellow-500 group-hover:text-yellow-600" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-300 
        dark:rotate-0 dark:scale-100 
        text-blue-500 group-hover:text-blue-600" />
    </button>
  )
}
