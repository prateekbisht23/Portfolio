import { site } from "@/data/site"
import { TextLink } from "./text-link"

export function SiteFooter() {
  return (
    <footer className="site-footer small muted">
      <span>
        Set in Geist on <TextLink href={site.links.designSystem}>my design system</TextLink>
      </span>
      <span className="theme-hint">
        Press <kbd>T</kbd> to flip the theme
      </span>
    </footer>
  )
}
