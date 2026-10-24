import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Rows } from "@/components/rows";
import { Section } from "@/components/section";
import { WorkList } from "@/components/work-list";
import { earlier, fyscal, projects } from "@/data/work";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHeading title="Work">
        <p className="lede muted">What I ship at Fyscal, and what I build on my own.</p>
      </PageHeading>

      <Section label="Fyscal">
        <Rows head items={[{ title: fyscal.role, detail: `${fyscal.company} · ${fyscal.location}`, meta: fyscal.period }]} />
        <Rows items={fyscal.highlights.map((h) => ({ title: h.title, detail: h.detail, meta: h.metric, href: h.href }))} />
        <p className="small muted">Internal work, so no links. Happy to talk through any of it.</p>
      </Section>

      <Section label="Projects">
        <WorkList items={projects.map((p) => ({ title: p.title, note: p.note, meta: p.kind, href: `/work/${p.slug}` }))} />
      </Section>

      <Section label="Earlier">
        <WorkList items={earlier.map((p) => ({ title: p.title, note: p.note, meta: p.kind, href: p.href }))} />
      </Section>
    </>
  );
}
