import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { WorkList } from "@/components/work-list";
import { contributions } from "@/data/opensource";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Open source" };

export default function OpenSourcePage() {
  return (
    <>
      <PageHeading title="Open source">
        <p className="lede muted">Merged pull requests to projects I use.</p>
      </PageHeading>

      <Section label="Merged">
        <WorkList items={contributions.map((c) => ({ title: c.title, note: c.project, meta: `#${c.number}`, href: c.href }))} />
      </Section>

      <Section label="Next">
        <p>
          I fix the docs and small bugs I trip over while building. If you maintain something in Go or TypeScript and want
          a hand, <TextLink href={`mailto:${site.email}`}>tell me</TextLink>.
        </p>
      </Section>
    </>
  );
}
