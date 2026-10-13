import Link from "next/link"
import type { ReactNode } from "react"

export function InkLink({ href, children }: { href: string; children: ReactNode }) {
  const external = /^(https?:|mailto:)/.test(href) || href.endsWith(".pdf")
  const className = "ink-link inline-flex items-center text-muted-foreground"
  const label = <span className="ink-label">{children}</span>

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}
