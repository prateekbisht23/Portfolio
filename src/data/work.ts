export type Pair = [label: string, detail: string]

export interface CaseStudy {
  slug: string
  title: string
  note: string
  kind: string
  lede: string
  body: string[]
  steps: Pair[]
  tags: string[]
  facts?: Pair[]
  controls?: Pair[]
  link?: { href: string; label: string }
}

export interface Highlight {
  title: string
  detail: string
  metric: string
  href?: string
}

const gh = (repo: string) => `https://github.com/prateekbisht23/${repo}`

export const onexo: CaseStudy = {
  slug: 'onexo',
  title: 'OneXO',
  note: 'agent platform at Fyscal',
  kind: 'internal',
  lede: 'A multi-tenant platform for running AI coding agents, with company controls built in.',
  body: [
    "Describe what you want in a chat. OneXO starts an isolated cloud sandbox where a coding agent, Claude Code, Codex or OpenCode, writes the code and pushes it to the team's Git repo. The same builds can also run on a schedule.",
    "Admins run the whole setup from one dashboard. A desktop app brings developers' own local Claude Code sessions under the same rules.",
  ],
  steps: [
    ['Describe', 'Say what you want in a chat.'],
    ['Build', 'An isolated cloud sandbox starts and the agent writes the code.'],
    ['Push', "The result lands in the team's Git repo."],
    ['Repeat', 'The same build can run on a schedule.'],
  ],
  controls: [
    ['Model traffic', 'Every call goes through one LLM gateway, with budgets, routing, fallbacks and audit logs.'],
    ['Safety', 'Guardrails check what goes into the agents.'],
    ['Shared resources', 'A versioned registry of skills and agents, plus links to SaaS tools.'],
    ['Access', 'Users, roles and tenants.'],
    ['Notifications', 'Alerts and notification templates.'],
    ['Desktop app', "Developers' local Claude Code sessions, under the same governance."],
  ],
  tags: ['TypeScript', 'Bun', 'Kong', 'Claude Code', 'Codex', 'OpenCode'],
}

export const projects: CaseStudy[] = [
  {
    slug: 'claude-code-microvm',
    title: 'claude-code-microVM',
    note: 'agent sandboxes',
    kind: 'agents',
    lede: 'Every chat gets its own coding agent, inside its own throwaway microVM.',
    body: [
      'Agents are most useful when they can run anything, and safest when nothing they run can escape. Each conversation boots a KVM microVM on EC2 through a self-hosted CubeSandbox, so the agent gets full tool access and the blast radius stays one disposable VM.',
      'Files and session state live on a per-chat S3 volume. Idle VMs are torn down and the chat picks up later on a fresh one, which lets a single box carry several sessions at once. Teammates plug in their own MCP tools with one-click OAuth and watch the agent work live in the browser.',
    ],
    steps: [
      ['Boot', 'A microVM starts in about 0.3 s, for that chat only.'],
      ['Run', 'Claude Code works with full tool access, isolated from the host and other chats.'],
      ['Park', 'After 5 idle minutes the VM is destroyed. Files stay on S3.'],
      ['Resume', 'The next message restores the session on a fresh VM.'],
    ],
    facts: [
      ['Cold start', '~0.3 s'],
      ['Idle teardown', '5 min'],
      ['Sessions per box', '3–4'],
      ['OAuth providers verified', '10'],
    ],
    tags: ['Bun', 'TypeScript', 'React', 'KVM', 'AWS EC2', 'S3', 'MCP'],
    link: { href: gh('claude-code-microVM'), label: 'GitHub' },
  },
  {
    slug: 'plan-out',
    title: 'plan-out',
    note: 'spec planning',
    kind: 'plugin',
    lede: 'Large features, cut into small spec modules an agent can finish.',
    body: [
      "Long AI planning sessions drift: Tuesday's doc quietly contradicts Monday's. plan-out is a Claude Code plugin that plans a feature as small spec modules and records every decision with its reason.",
      "A standard-library Python checker keeps the set honest. It catches broken links, stale decisions and duplicate definitions, and its cleanup mode confirms nothing was lost when old docs are migrated. Consistency stops depending on the model's judgment.",
    ],
    steps: [
      ['Split', 'One feature becomes small spec modules, each shippable alone.'],
      ['Decide', 'Every choice lands in a decision log with its reason.'],
      ['Check', 'The checker flags broken links, stale decisions and duplicates.'],
      ['Migrate', 'Cleanup mode verifies no content is lost when docs move.'],
    ],
    facts: [
      ['Checker', 'Python, stdlib only'],
      ['Catches', 'links · decisions · duplicates'],
    ],
    tags: ['Claude Code', 'Python'],
    link: { href: gh('plan-out'), label: 'GitHub' },
  },
  {
    slug: 'cloudpad',
    title: 'CloudPad',
    note: 'realtime pads',
    kind: 'web',
    lede: 'Text and files on a pad you open by URL.',
    body: [
      'Type a path, get a pad. Anyone on the same URL sees text and files change as they happen. Yjs and Supabase handle multi-user sync, so edits reach everyone in under 50 ms.',
      'Pads can be locked to the people who should see them and expire on their own. Both rules live in PostgreSQL, so stale data clears itself without anyone cleaning up.',
    ],
    steps: [
      ['Open', 'Any URL path is a pad.'],
      ['Write or drop', 'Type text or drop a file onto the pad.'],
      ['Sync', 'Everyone on that URL sees it in under 50 ms.'],
      ['Expire', 'Access and expiry are enforced in the database.'],
    ],
    facts: [
      ['Sync latency', '< 50 ms'],
      ['Access', 'per pad, with expiry'],
    ],
    tags: ['Django', 'Supabase', 'PostgreSQL', 'Yjs'],
    link: { href: gh('CloudPad'), label: 'GitHub' },
  },
  {
    slug: 'code-focus',
    title: 'Code Focus',
    note: 'dependency view',
    kind: 'extension',
    lede: 'One panel for what a file depends on, and what depends on it.',
    body: [
      'A VS Code extension for TypeScript and JavaScript codebases. Open a file and one panel lists what it imports and what imports it, so you can see the blast radius of a change without clicking through files.',
      'It opens from the right-click menu or the command palette on .ts, .tsx, .js and .jsx files, wherever you happen to be.',
    ],
    steps: [
      ['Open a file', 'Right-click it, or use the command palette.'],
      ['Read both ways', 'Dependencies and dependents, in one panel.'],
      ['Jump', 'Click any entry to open it.'],
    ],
    facts: [
      ['Marketplace downloads', '40+'],
      ['Works on', '.ts .tsx .js .jsx'],
    ],
    tags: ['TypeScript', 'VS Code API'],
    link: { href: 'https://marketplace.visualstudio.com/items?itemName=prateekbisht.code-focus', label: 'Marketplace' },
  },
]

export const caseStudies = [onexo, ...projects]

export const earlier = [
  { title: 'foodScroll', note: 'short-video food discovery', kind: 'web', href: gh('foodScroll') },
  { title: 'url_shortner', note: 'MERN, auth and dashboard', kind: 'web', href: gh('url_shortner') },
  { title: 'vahan_investor_dashboard', note: 'vehicle registrations 2020–25', kind: 'data', href: gh('vahan_investor_dashboard') },
  { title: 'task_manager', note: 'Supabase and Riverpod', kind: 'flutter', href: gh('task_manager') },
  { title: 'WeatherApp', note: 'React', kind: 'web', href: 'https://weather-app-three-gilt-25.vercel.app' },
]

export const fyscal = {
  role: 'Software engineer',
  company: 'Fyscal Technologies',
  location: 'Delhi',
  period: 'Nov 2025 – now',
  highlights: [
    { title: 'OneXO', detail: 'Multi-tenant platform for running coding agents under company controls', metric: 'agents', href: '/work/onexo' },
    { title: 'AI editor', detail: 'Every AI change is accepted or rejected, never silently written', metric: '−80% manual edits' },
    { title: 'Service calls', detail: 'Moved 5+ core services from REST to gRPC', metric: '20 → 2 ms' },
    { title: 'Financial APIs', detail: '20+ Go endpoints, traced in Grafana and Jaeger', metric: '~8M req / mo' },
    { title: 'Provider routing', detail: 'Go connectors with weighted split, fallback and volume caps', metric: 'failover' },
    { title: 'Support automation', detail: 'A Bedrock-backed proof of concept for customer queries', metric: '−25% queries' },
  ] satisfies Highlight[],
}
