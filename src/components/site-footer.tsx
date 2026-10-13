import { site } from "@/data/site"
import { InkLink } from "./ink-link"

const items = [
  { label: "Email", href: site.links.email },
  { label: "Book a call", href: site.links.call },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Resume", href: site.links.resume },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto pt-16">
      <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {items.map((item) => (
          <InkLink key={item.label} href={item.href}>
            {item.label}
          </InkLink>
        ))}
      </nav>
    </footer>
  )
}
