export interface Role {
  company: string
  href?: string
  logo?: string
  title: string
  location: string
  period: string
}

export const experience: Role[] = [
  {
    company: 'Fyscal Technologies',
    logo: '/fyscaltech_logo.jpeg',
    title: 'Software Engineer',
    location: 'Delhi',
    period: 'Nov 2025 to present',
  },
]

export const education = {
  school: 'Bhagwan Parshuram Institute of Technology',
  degree: 'B.Tech, Computer Science and Engineering · GGSIPU',
  period: '2022 to 2026',
}
