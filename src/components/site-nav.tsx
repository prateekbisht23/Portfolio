"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { nav } from "@/data/site"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="-ml-2 mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
      {nav.map(({ href, label }) => {
        const current = href === "/" ? pathname === "/" : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            aria-current={current ? "page" : undefined}
            className="inline-flex min-h-10 items-center rounded-full transition-colors hover:text-foreground aria-[current]:text-foreground"
          >
            <span className={current ? "rounded-full bg-muted px-2 py-1" : "px-2 py-1"}>
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
