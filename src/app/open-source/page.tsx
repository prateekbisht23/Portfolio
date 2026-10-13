import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { LeaderRow } from "@/components/leader-row";
import { contributions } from "@/data/opensource";

export const metadata: Metadata = { title: "Open source" };

export default function OpenSourcePage() {
  return (
    <>
      <PageHeader title="Open source">
        <p className="text-sm leading-6 text-muted-foreground">Merged pull requests to other people&apos;s projects.</p>
      </PageHeader>

      <ul aria-label="Merged pull requests" className="-mx-3 flex flex-col gap-1">
        {contributions.map((c) => (
          <li key={c.href}>
            <LeaderRow label={c.title} meta={c.project} href={c.href} />
          </li>
        ))}
      </ul>
    </>
  );
}
