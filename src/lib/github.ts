import { fallbackContributions, hiddenRepos, type Contribution } from '@/data/opensource'

interface SearchItem {
  number: number
  title: string
  html_url: string
  repository_url: string
  pull_request?: { merged_at: string | null }
}

const PR_PREFIX = /^(feat|fix|docs|chore|refactor|perf|test)(\([^)]*\))?!?:\s*/i

// Merged PRs the user authored in repositories they don't own. Revalidated daily;
// falls back to a fixed list when the API is unavailable.
export async function getContributions(username: string): Promise<Contribution[]> {
  const token = process.env.GITHUB_TOKEN
  const q = encodeURIComponent(`is:pr is:merged author:${username} -user:${username}`)

  try {
    const res = await fetch(`https://api.github.com/search/issues?q=${q}&sort=created&order=desc&per_page=50`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 86400 },
    })
    if (!res.ok) return fallbackContributions

    const { items } = (await res.json()) as { items: SearchItem[] }
    const contributions = items
      .map((item) => {
        const title = item.title.replace(PR_PREFIX, '')
        return {
          repo: item.repository_url.replace('https://api.github.com/repos/', ''),
          number: item.number,
          title: title.charAt(0).toUpperCase() + title.slice(1),
          href: item.html_url,
          year: (item.pull_request?.merged_at ?? '').slice(0, 4),
        }
      })
      .filter((c) => !hiddenRepos.includes(c.repo))
    return contributions.length ? contributions : fallbackContributions
  } catch {
    return fallbackContributions
  }
}
