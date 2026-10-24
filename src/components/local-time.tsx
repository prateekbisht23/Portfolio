"use client"

import { useEffect, useState } from "react"

const clock = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" })

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => setTime(clock.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])

  if (!time) return <p className="meta muted">Delhi · IST</p>

  const hour = Number(time.slice(0, 2))
  const awake = hour >= 9 && hour < 23
  return (
    <p className="muted">
      <span className="meta">Delhi · {time} IST</span>
      <span className="small"> · {awake ? "I'm around, so expect a reply today." : "It's late here. I'll reply in the morning."}</span>
    </p>
  )
}
