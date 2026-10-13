import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { LeaderRow } from "@/components/leader-row";
import { education, experience } from "@/data/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience">
        <p className="text-sm leading-6 text-muted-foreground">Where I&apos;ve worked so far.</p>
      </PageHeader>

      <div className="-mx-3 flex flex-col gap-6">
        {experience.map((role) => (
          <div key={role.company} className="flex items-start gap-3 px-3">
            {role.logo && (
              <Image src={role.logo} alt="" width={28} height={28} className="mt-0.5 size-7 shrink-0 rounded-full" />
            )}
            <div className="min-w-0 flex-1">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                <h2 className="text-base font-normal tracking-tight">{role.company}</h2>
                <span aria-hidden="true" className="border-t border-border" />
                <span className="text-xs tabular-nums text-muted-foreground">{role.period}</span>
              </div>
              <div className="mt-2 flex flex-col justify-between gap-x-4 text-sm leading-6 sm:flex-row">
                <span className="text-foreground/80">{role.title}</span>
                <span className="text-muted-foreground">{role.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section title="Education">
        <LeaderRow label={education.school} meta={education.period}>
          {education.degree}
        </LeaderRow>
      </Section>
    </>
  );
}
