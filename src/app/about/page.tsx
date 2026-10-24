import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { PageHeading } from "@/components/page-heading";
import { Rows } from "@/components/rows";
import { Section } from "@/components/section";
import { Steps } from "@/components/steps";
import { Tags } from "@/components/tags";
import { TextLink } from "@/components/text-link";

export const metadata: Metadata = { title: "About" };

const principles = [
  { title: "Isolation", detail: "An agent should be able to run anything and break nothing. Every session gets its own microVM." },
  { title: "Reviewability", detail: "Work ends as a pull request a person can read, never as a change that just appeared." },
  { title: "Boring reliability", detail: "Timeouts, retries and fallbacks first. Features after." },
  { title: "Evidence", detail: "Traces and numbers before opinions. If it isn't measured, it isn't faster." },
];

const toolkit: [string, string[]][] = [
  ["AI", ["Claude Code", "Codex", "OpenCode", "Mastra", "AI SDK", "MCP", "Bedrock"]],
  ["Languages", ["Go", "TypeScript", "Python"]],
  ["Backend", ["Bun", "Node.js", "gRPC", "Kong", "Django", "Redis", "PostgreSQL", "ClickHouse"]],
  ["Infra", ["AWS", "KVM microVMs", "Docker", "Grafana", "OpenTelemetry", "Jaeger"]],
];

export default function AboutPage() {
  return (
    <>
      <PageHeading title="About">
        <p className="lede">
          I&apos;m a backend engineer in Delhi. I build the platforms AI coding agents run on, and the controls that let a
          company trust them with real code.
        </p>
      </PageHeading>

      <Section label="Now">
        <p>
          I&apos;m a software engineer at Fyscal, with a B.Tech in computer science from BPIT. My days go into{" "}
          <TextLink href="/work/onexo">OneXO</TextLink>, a multi-tenant platform where teams run coding agents in isolated
          sandboxes, inside budgets, guardrails and audit logs they control.
        </p>
        <p>
          The other half is Go services for a financial platform. Routing, retries, fallbacks, and the traces that tell
          you which one fired.
        </p>
      </Section>

      <Section label="What I care about">
        <Rows items={principles} />
      </Section>

      <Section label="How I work">
        <Steps
          items={[
            ["Requirement", "A ticket or a spec, written by a person."],
            ["Plan", <>Small spec modules with a decision log · <Link className="text-link" href="/work/plan-out">plan-out</Link></>],
            ["Sandbox", <>One microVM per session, up in about 0.3 s · <Link className="text-link" href="/work/claude-code-microvm">claude-code-microVM</Link></>],
            ["Agent", "Claude Code, Codex or OpenCode writes the change and runs the tests."],
            ["Pull request", "Every request ends as something reviewable, not a hand-off."],
            ["Review", "A person approves it or sends it back."],
          ]}
        />
      </Section>

      <Section label="Toolkit">
        <dl className="toolkit">
          {toolkit.map(([group, items]) => (
            <div key={group}>
              <dt className="small muted">{group}</dt>
              <dd>
                <Tags items={items} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Education">
        <Rows items={[{ title: "BPIT, GGSIPU", detail: "B.Tech, Computer Science and Engineering", meta: "2022 – 2026" }]} />
      </Section>

      <Section label="Off the clock">
        <p>
          I send small fixes to the tools I use: Supabase, freeCodeCamp and Airbnb&apos;s style guide so far.{" "}
          <TextLink href="/open-source">See the pull requests</TextLink>
        </p>
      </Section>

      <Contact />
    </>
  );
}
