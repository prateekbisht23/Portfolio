import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LeaderRow } from "@/components/leader-row";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects">
        <p className="text-sm leading-6 text-muted-foreground">Things I&apos;ve built and shipped.</p>
      </PageHeader>

      <ul aria-label="Projects" className="-mx-3 flex flex-col gap-1">
        {projects.map((p) => (
          <li key={p.name}>
            <LeaderRow label={p.name} meta={p.tag} href={p.href} title={p.summary} />
          </li>
        ))}
      </ul>
    </>
  );
}
