import type { ReactNode } from "react"

export function Steps({ items }: { items: [title: string, detail: ReactNode][] }) {
  return (
    <ol className="steps">
      {items.map(([title, detail], i) => (
        <li key={title}>
          <span className="meta muted">{i + 1}</span>
          <span>
            {title}
            <span className="row-detail">{detail}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
