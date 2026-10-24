import { site } from "@/data/site"
import { CopyEmail } from "./copy-email"
import { LocalTime } from "./local-time"
import { Section } from "./section"

export function Contact() {
  return (
    <Section label="Contact">
      <p>Email is best. I read everything and reply to most things.</p>
      <p className="email">{site.email}</p>
      <LocalTime />
      <div className="actions">
        <CopyEmail email={site.email} />
      </div>
    </Section>
  )
}
