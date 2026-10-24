import { site } from "@/data/site"
import { ActivityStrip, type Week } from "./activity-strip"
import { Section } from "./section"

interface Day {
  date: string
  count: number
}

// Weekly totals for the last 52 weeks, refreshed once a day.
async function getWeeks(username: string): Promise<Week[] | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 86_400 },
    })
    if (!res.ok) return null
    const { contributions }: { contributions: Day[] } = await res.json()
    const days = contributions.slice(-52 * 7)
    const weeks: Week[] = []
    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7)
      weeks.push({ start: week[0].date, count: week.reduce((sum, day) => sum + day.count, 0) })
    }
    return weeks
  } catch {
    return null
  }
}

export async function Activity() {
  const weeks = await getWeeks(site.github)
  if (!weeks?.length) return null

  return (
    <Section label="Activity">
      <ActivityStrip weeks={weeks} />
    </Section>
  )
}
