import Link from "next/link"

export interface Row {
  title: string
  detail?: string
  meta?: string
  href?: string
}

export function Rows({ items, head }: { items: Row[]; head?: boolean }) {
  return (
    <ul className={head ? "rows rows-head" : "rows"}>
      {items.map(({ title, detail, meta, href }) => {
        const body = (
          <>
            <span>
              {title}
              {href && <span className="muted"> →</span>}
              {detail && <span className="row-detail">{detail}</span>}
            </span>
            {meta && <span className="meta muted">{meta}</span>}
          </>
        )
        return <li key={title}>{href ? <Link href={href}>{body}</Link> : body}</li>
      })}
    </ul>
  )
}
