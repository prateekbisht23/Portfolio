import type { ReactNode } from "react"

export function PageHeading({ title, children }: { title: string; children: ReactNode }) {
  return (
    <header className="page-heading">
      <h1 className="title">{title}</h1>
      {children}
    </header>
  )
}
