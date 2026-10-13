import type { ReactNode } from "react"

interface LeaderRowProps {
  label: ReactNode
  meta: ReactNode
  href?: string
  children?: ReactNode
}

// "name ──────── meta" row. Every list on the site is built from this.
export function LeaderRow({ label, meta, href, children }: LeaderRowProps) {
  const body = (
    <>
      <span className="flex items-center gap-3">
        <span className="min-w-0 shrink break-words text-foreground sm:truncate">{label}</span>
        <span aria-hidden="true" className="min-w-4 flex-1 border-t border-border transition-colors group-hover:border-foreground/25" />
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs tabular-nums text-muted-foreground">
          {meta}
          {href && (
            <span aria-hidden="true" className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              ↗
            </span>
          )}
        </span>
      </span>
      {children && <span className="mt-1 block pr-6 text-sm leading-6 text-muted-foreground">{children}</span>}
    </>
  )

  const className = "group block rounded-xl px-3 py-2 transition-colors duration-200"

  if (!href) return <div className={className}>{body}</div>

  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${className} hover:bg-muted active:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
    >
      {body}
    </a>
  )
}
