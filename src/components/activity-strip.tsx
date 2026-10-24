"use client"

import { useState } from "react"

export interface Week {
  start: string
  count: number
}

const WIDTH = 560
const HEIGHT = 36
const month = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" })
const day = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })

// One hairline per week; height is that week's public contributions.
export function ActivityStrip({ weeks }: { weeks: Week[] }) {
  const [active, setActive] = useState<number | null>(null)
  const step = WIDTH / weeks.length
  const max = Math.max(1, ...weeks.map((w) => w.count))
  const total = weeks.reduce((sum, w) => sum + w.count, 0)
  const hovered = active === null ? null : weeks[active]

  return (
    <div>
      <svg
        className="strip"
        viewBox={`0 0 ${WIDTH} ${HEIGHT + 2}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${total} public contributions over the last ${weeks.length} weeks`}
        onMouseLeave={() => setActive(null)}
      >
        <line className="strip-base" x1="0" y1={HEIGHT + 1} x2={WIDTH} y2={HEIGHT + 1} />
        {weeks.map((week, i) => {
          const height = week.count ? 4 + (week.count / max) * (HEIGHT - 4) : 2
          const tone = i === active || i === weeks.length - 1 ? "strong" : week.count ? "" : "empty"
          return (
            <g key={week.start} onMouseEnter={() => setActive(i)}>
              <rect className={`strip-tick ${tone}`} x={i * step + step / 2 - 1} y={HEIGHT - height} width="2" height={height} />
              <rect className="strip-hit" x={i * step} y="0" width={step} height={HEIGHT + 2} />
            </g>
          )
        })}
      </svg>
      <p className="strip-axis meta muted">
        <span>{month.format(new Date(weeks[0].start))}</span>
        <span>{month.format(new Date(weeks[weeks.length - 1].start))}</span>
      </p>
      <p className="strip-caption small muted">
        {hovered
          ? `Week of ${day.format(new Date(hovered.start))} · ${hovered.count} contribution${hovered.count === 1 ? "" : "s"}`
          : `${total} public contributions on GitHub. The day job ships on Bitbucket, out of frame.`}
      </p>
    </div>
  )
}
