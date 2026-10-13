"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { nav } from "@/data/site"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="-ml-2 mb-8 flex flex-wrap items-center font-mono text-xs text-muted-foreground">
      {nav.map(({ href, label }) => {
        const current = href === "/" ? pathname === "/" : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
            className="inline-flex min-h-10 items-center rounded-full px-0.5 transition-colors sm:px-1.5 hover:text-foreground aria-[current]:text-foreground"
          >
            <span className={current ? "rounded-full bg-muted px-1.5 py-1 sm:px-2" : "px-1.5 py-1 sm:px-2"}>
              {href === "/" ? label : `~/${label}`}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
