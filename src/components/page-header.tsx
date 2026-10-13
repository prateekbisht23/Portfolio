import type { ReactNode } from "react"
import { ThemeToggle } from "./theme-toggle"

export function PageHeader({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <header className="relative flex flex-col gap-3">
      <ThemeToggle />
      <h1 className="pr-10 text-lg font-normal leading-7 tracking-tight">{title}</h1>
      {children}
    </header>
  )
}
