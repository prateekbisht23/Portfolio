'use client'

import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'

// Neutral greys so the grid reads as texture, not decoration.
const palette = {
  light: ['#e9ebea', '#d0d4d2', '#adb2b0', '#868b89', '#5c6160'],
  dark: ['#1c1f20', '#2e3234', '#4a4f51', '#6d7274', '#9a9fa0'],
}

export default function GitHubContributions({ username }: { username: string }) {
  const { resolvedTheme } = useTheme()
  // Weeks to show: the full year on wide screens, about seven months on phones.
  const [weeks, setWeeks] = useState<number | null>(null)
  useEffect(() => setWeeks(window.matchMedia('(min-width: 640px)').matches ? 53 : 32), [])

  return (
    <div className="overflow-hidden text-xs text-muted-foreground">
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
          fontSize={12}
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
