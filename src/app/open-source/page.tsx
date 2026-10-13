import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LeaderRow } from "@/components/leader-row";
import { site } from "@/data/site";
import { getContributions } from "@/lib/github";

export const metadata: Metadata = { title: "Open source" };
export const revalidate = 86400;

export default async function OpenSourcePage() {
  const contributions = await getContributions(site.github);

  return (
    <>
      <PageHeader title="Open source">
        <p className="text-sm leading-6 text-muted-foreground">Merged pull requests to other people&apos;s projects.</p>
      </PageHeader>

      <ul aria-label="Merged pull requests" className="-mx-3 flex flex-col gap-1">
        {contributions.map((c) => (
          <li key={c.href}>
            <LeaderRow label={c.repo} meta={`#${c.number} · ${c.year}`} href={c.href}>
              {c.title}
            </LeaderRow>
          </li>
        ))}
      </ul>
    </>
  );
}
