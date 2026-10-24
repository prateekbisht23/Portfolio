import Link from "next/link"
import { isExternal } from "./text-link"

export interface WorkItem {
  title: string
  note?: string
  meta: string
  href: string
}

// Hairline rows; hovering one dims its siblings (the design system's signature hover).
export function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ul className="work-list">
      {items.map(({ title, note, meta, href }) => {
        const external = isExternal(href)
        const body = (
          <>
            <span className="work-title">
              {title}
              {note && <span className="work-note"> · {note}</span>}
            </span>
            <span className="work-glyph" aria-hidden="true">
              {external ? "↗" : "→"}
            </span>
            <span className="meta muted">{meta}</span>
          </>
        )
        return (
          <li key={href}>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {body}
              </a>
            ) : (
              <Link href={href}>{body}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
