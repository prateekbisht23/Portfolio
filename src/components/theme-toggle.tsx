"use client"

import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    if (!document.startViewTransition) return setTheme(next)
    document.startViewTransition(() => setTheme(next))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="absolute -top-2 -right-2 cursor-pointer rounded-full p-3 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" />
        <path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor" />
      </svg>
    </button>
  )
}
