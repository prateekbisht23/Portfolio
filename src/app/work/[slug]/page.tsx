import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cover } from "@/components/cover";
import { Rows } from "@/components/rows";
import { Section } from "@/components/section";
import { Steps } from "@/components/steps";
import { Tags } from "@/components/tags";
import { TextLink } from "@/components/text-link";
import { caseStudies, projects } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  return study ? { title: study.title, description: study.lede } : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const index = projects.indexOf(study);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <header className="page-heading">
        <Link className="button text flush back" href="/work">
          All work
        </Link>
        <h1 className="title">{study.title}</h1>
        <p className="meta muted">
          {study.kind} · {study.note}
        </p>
      </header>

      <Cover slug={study.slug} title={study.title} />
      <p className="lede prose">{study.lede}</p>

      <Section label="What it is">
        {study.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Section>

      <Section label="How it works">
        <Steps items={study.steps} />
      </Section>

      {study.controls && (
        <Section label="Admin controls">
          <Rows items={study.controls.map(([title, detail]) => ({ title, detail }))} />
        </Section>
      )}

      {study.facts && (
        <Section label="In numbers">
          <Rows items={study.facts.map(([title, meta]) => ({ title, meta }))} />
        </Section>
      )}

      <Section label="Built with">
        <Tags items={study.tags} />
      </Section>

      <Section label="Links">
        {study.link ? (
          <TextLink href={study.link.href}>{study.link.label}</TextLink>
        ) : (
          <p className="muted">Internal at Fyscal, so there&apos;s no public link. I&apos;m happy to walk through it.</p>
        )}
      </Section>

      <Section label="Next">
        <p>
          <TextLink href={`/work/${next.slug}`}>{next.title}</TextLink> <span className="muted">→</span>
        </p>
      </Section>
    </>
  );
}
