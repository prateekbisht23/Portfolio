import Link from "next/link"
import type { ReactNode } from "react"

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href) || href.endsWith(".pdf")

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  if (!isExternal(href)) {
    return (
      <Link href={href} className="text-link">
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">
      {children}
      <span className="external" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
