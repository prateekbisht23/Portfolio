export interface Role {
  company: string
  href?: string
  logo?: string
  title: string
  location: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    company: 'Fyscal Technologies',
    logo: '/fyscaltech_logo.jpeg',
    title: 'Software Engineer',
    location: 'Delhi',
    period: 'Nov 2025 — present',
    points: [
      'Built core parts of OneXO, an internal platform where AI coding agents (Claude Code, Codex, OpenCode) build prototypes from a written requirement in isolated sandboxes. Every request ends as a reviewable pull request.',
      'Built an in-app AI agent and a PlateJS editor with Mastra, AI SDK streaming and a read-only MCP server. Each suggestion is accepted or rejected by the user, cutting manual edits by 80% with zero unreviewed writes.',
      'Led a POC automating customer support with AWS Bedrock, cutting manual query volume by 25%.',
      'Built a Go connector framework with dynamic provider onboarding and routing rules (weighted split, fallback, volume cap) that keeps requests flowing when a provider fails.',
      'Built 20+ Go REST APIs for a financial platform handling ~8M requests a month, monitored with Grafana, CloudWatch and Jaeger.',
      'Replaced REST with gRPC between 5+ core services, cutting cross-service latency from 20 ms to under 2 ms.',
    ],
  },
]

export const education = {
  school: 'Bhagwan Parshuram Institute of Technology',
  degree: 'B.Tech, Computer Science and Engineering · GGSIPU',
  period: '2022 — 2026',
}
