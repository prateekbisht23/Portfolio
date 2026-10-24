import { Activity } from "@/components/activity";
import { Contact } from "@/components/contact";
import { Section } from "@/components/section";
import { Status } from "@/components/status";
import { Tags } from "@/components/tags";
import { TextLink } from "@/components/text-link";
import { WorkList } from "@/components/work-list";
import { site } from "@/data/site";
import { projects } from "@/data/work";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-name">
          <h1 className="display">{site.name}</h1>
          <Status>{site.status}</Status>
          <p className="lede">{site.tagline}</p>
        </div>
        <p className="hero-intro">
          I&apos;m a software engineer at <TextLink href={site.links.fyscal}>Fyscal</TextLink>, building platforms where AI
          coding agents turn a requirement into a reviewed pull request. Each agent works in its own sandbox; the backends
          underneath are Go and TypeScript.
        </p>
        <div className="actions hero-actions">
          <a className="button solid" href={`mailto:${site.email}?subject=${encodeURIComponent("Hello from your site")}`}>
            Say hello
          </a>
          <a className="button ghost" href={site.links.call} target="_blank" rel="noopener noreferrer">
            Book a call ↗
          </a>
          <a className="button text" href={site.links.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </header>

      <Section label="Work">
        <WorkList items={projects.map((p) => ({ title: p.title, note: p.note, meta: p.kind, href: `/work/${p.slug}` }))} />
        <Link className="button text flush" href="/work">
          All work →
        </Link>
      </Section>

      <Activity />

      <Section label="Stack">
        <Tags items={site.stack} />
      </Section>

      <Contact />

      <Section label="Elsewhere">
        <ul className="link-list">
          <li>
            <TextLink href={site.links.github}>GitHub</TextLink>
          </li>
          <li>
            <TextLink href={site.links.linkedin}>LinkedIn</TextLink>
          </li>
          <li>
            <TextLink href={site.links.cal}>Cal.com</TextLink>
          </li>
          <li>
            <TextLink href={site.links.resume}>Resume</TextLink> <span className="meta muted">PDF</span>
          </li>
        </ul>
      </Section>
    </>
  );
}
