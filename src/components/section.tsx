import type { ReactNode } from "react"
import { InkLink } from "./ink-link"

export function Section({ title, more, children }: { title: string; more?: { href: string; label: string }; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-normal tracking-tight">{title}</h2>
        {more && (
          <span className="text-sm">
            <InkLink href={more.href}>{more.label}</InkLink>
          </span>
        )}
      </div>
      <div className="-mx-3 flex flex-col gap-1">{children}</div>
    </section>
  )
}
