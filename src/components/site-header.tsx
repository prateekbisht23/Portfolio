"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { nav, site } from "@/data/site"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <div className="site-bar">
      <header className="site-header">
        <Link href="/" className="site-name">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="site-nav">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname.startsWith(href) ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
