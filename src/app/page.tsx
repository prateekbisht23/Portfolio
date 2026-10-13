import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { LeaderRow } from "@/components/leader-row";
import GitHubContributions from "@/components/ui/GitHubContributions";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getContributions } from "@/lib/github";

export const revalidate = 86400;

export default async function Home() {
  const contributions = (await getContributions(site.github)).slice(0, 4);

  return (
    <>
      <PageHeader
        title={
          <>
            {site.name}
            <span aria-hidden="true" className="cursor-blink ml-0.5 text-signal">▍</span>
          </>
        }
      >
        <p className="max-w-[34rem] text-sm leading-6 text-muted-foreground">{site.tagline}</p>
        <p className="mt-3 max-w-[34rem] text-sm leading-6 text-muted-foreground">
          Currently a <span className="text-foreground">Software Engineer</span> at{" "}
          <span className="ml-0.5 inline-flex items-center gap-1.5 rounded-full bg-muted py-0.5 pr-2 pl-1 align-middle text-foreground">
            <Image src="/fyscaltech_logo.jpeg" alt="" width={16} height={16} className="size-4 rounded-full" />
            Fyscal
          </span>
          , building platforms where AI coding agents turn a requirement into a reviewed pull request.
        </p>
      </PageHeader>

      <GitHubContributions username={site.github} />

      <Section title="Selected work" more={{ href: "/projects", label: "all projects" }}>
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <LeaderRow key={p.name} label={p.name} meta={`[${p.tag}]`} href={p.href} />
          ))}
      </Section>

      <Section title="Open source" more={{ href: "/open-source", label: "all PRs" }}>
        {contributions.map((c) => (
          <LeaderRow key={c.href} label={c.title} meta={`${c.repo.split("/")[1]}#${c.number}`} href={c.href} />
        ))}
      </Section>
    </>
  );
}
