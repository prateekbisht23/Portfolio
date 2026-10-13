export interface Project {
  name: string
  summary: string
  href: string
  tag: string
  featured?: boolean
}

const gh = (repo: string) => `https://github.com/prateekbisht23/${repo}`

export const projects: Project[] = [
  {
    name: 'claude-code-microVM',
    summary:
      'Every chat conversation gets its own Claude Code agent in a KVM microVM that boots in ~0.3 s, with sessions persisted to S3.',
    href: gh('claude-code-microVM'),
    tag: 'agents',
    featured: true,
  },
  {
    name: 'plan-out',
    summary:
      'A Claude Code plugin that plans big features as small spec modules with a decision log, plus a checker that keeps docs from contradicting each other.',
    href: gh('plan-out'),
    tag: 'plugin',
    featured: true,
  },
  {
    name: 'CloudPad',
    summary: 'Real-time text and file sharing on URL-based pads, synced across users in under 50 ms.',
    href: gh('CloudPad'),
    tag: 'web',
    featured: true,
  },
  {
    name: 'Code Focus',
    summary: "A VS Code extension that shows a file's dependencies and dependents in one panel.",
    href: 'https://marketplace.visualstudio.com/items?itemName=prateekbisht.code-focus',
    tag: 'extension',
    featured: true,
  },
  {
    name: 'foodScroll',
    summary: 'Reels-style food discovery where partners upload short food videos and users browse stores.',
    href: gh('foodScroll'),
    tag: 'web',
  },
  {
    name: 'url_shortner',
    summary: 'A full-stack MERN URL shortener with auth and a dashboard.',
    href: gh('url_shortner'),
    tag: 'web',
  },
  {
    name: 'vahan_investor_dashboard',
    summary: 'A Streamlit dashboard of Indian vehicle registration trends from 2020 to 2025, scraped from VAHAN.',
    href: gh('vahan_investor_dashboard'),
    tag: 'data',
  },
  {
    name: 'task_manager',
    summary: 'A Flutter task app on Supabase and Riverpod with suggestions based on past activity.',
    href: gh('task_manager'),
    tag: 'flutter',
  },
  {
    name: 'WeatherApp',
    summary: 'A React weather app with a glass-morphism UI.',
    href: 'https://weather-app-three-gilt-25.vercel.app',
    tag: 'web',
  },
]
