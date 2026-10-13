'use client'

import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'

// Five steps from empty to the signal green, per theme.
const palette = {
  light: ['#e4e7e6', '#bbe5c8', '#7fcf98', '#3fae68', '#16a34a'],
  dark: ['#1c1f20', '#14432a', '#1d7a42', '#2fb862', '#4ade80'],
}

export default function GitHubContributions({ username }: { username: string }) {
  const { resolvedTheme } = useTheme()
  // Weeks to show: the full year on wide screens, about seven months on phones.
  const [weeks, setWeeks] = useState<number | null>(null)
  useEffect(() => setWeeks(window.matchMedia('(min-width: 640px)').matches ? 53 : 32), [])

  return (
    <div className="overflow-hidden font-mono text-xs text-muted-foreground">
      {weeks ? (
        <GitHubCalendar
          username={username}
          colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
          theme={palette}
          transformData={(data) => data.slice(-weeks * 7)}
          transformTotalCount={false}
          blockSize={8}
          blockMargin={2}
          blockRadius={2}
          fontSize={11}
          hideColorLegend
          errorMessage="GitHub activity is unavailable right now."
          labels={{ totalCount: '{{count}} contributions in the last year' }}
        />
      ) : (
        <div className="h-[110px] rounded-lg bg-muted" />
      )}
    </div>
  )
}
