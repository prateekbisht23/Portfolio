import type { ReactNode } from "react"

// Line schematics drawn in ink on the marigold cover, one per case study.
function Box({ x, y, w, h, label, dashed }: { x: number; y: number; w: number; h: number; label?: string; dashed?: boolean }) {
  return (
    <>
      <rect className={dashed ? "stroke dashed" : "stroke"} x={x} y={y} width={w} height={h} />
      {label && (
        <text x={x + 8} y={y + h / 2 + 4}>
          {label}
        </text>
      )}
    </>
  )
}

function Line({ d, dashed }: { d: string; dashed?: boolean }) {
  return <path className={dashed ? "stroke dashed" : "stroke"} d={d} />
}

const rows = [0, 1, 2]

const schematics: Record<string, ReactNode> = {
  onexo: (
    <>
      <text x="24" y="30">chat</text>
      <text x="440" y="30">team repo</text>
      <Box x={176} y={20} w={176} h={28} label="LLM gateway" />
      <Line d="M264 48 L264 80" />
      <Box x={24} y={88} w={96} h={30} label="describe" />
      <Line d="M120 103 L160 103" />
      <Box x={24} y={136} w={96} h={26} label="schedule" dashed />
      <Line d="M120 149 L160 116" dashed />
      <Box x={160} y={80} w={208} h={56} />
      <text x="170" y="102">sandbox · agent</text>
      <text x="170" y="122">claude · codex · opencode</text>
      <Line d="M368 108 L440 108" />
      <Box x={440} y={94} w={96} h={30} label="git push" />
      <Line d="M264 136 L264 186" dashed />
      <Box x={24} y={186} w={512} h={30} label="dashboard · budgets · guardrails · registry · access · alerts" />
    </>
  ),
  "claude-code-microvm": (
    <>
      <text x="24" y="30">chats</text>
      <text x="220" y="30">microVMs · KVM · ~0.3 s boot</text>
      <text x="448" y="30">sessions</text>
      {rows.map((i) => {
        const y = 62 + i * 50
        return (
          <g key={i}>
            <Box x={24} y={y} w={92} h={30} label={`chat ${i + 1}`} />
            <Line d={`M116 ${y + 15} L220 ${y + 15}`} />
            <Box x={220} y={y - 4} w={150} h={38} label={`vm-${i + 1} · claude code`} />
            <Line d={`M370 ${y + 15} L448 128`} />
          </g>
        )
      })}
      <Box x={448} y={106} w={88} h={44} label="S3" />
    </>
  ),
  "plan-out": (
    <>
      <text x="24" y="30">split</text>
      <text x="232" y="30">spec modules</text>
      <text x="420" y="30">decision log</text>
      <Box x={24} y={100} w={120} h={36} label="feature" />
      {[52, 94, 136, 178].map((y, i) => (
        <g key={y}>
          <Line d={`M144 118 L232 ${y + 14}`} />
          <Box x={232} y={y} w={132} h={28} label={`spec 0${i + 1}`} />
          <Line d={`M364 ${y + 14} L420 ${y + 14}`} dashed />
        </g>
      ))}
      <Box x={420} y={48} w={116} h={162} />
      {[70, 112, 154, 196].map((y, i) => (
        <text key={y} x="432" y={y}>
          d{i + 1} · why
        </text>
      ))}
    </>
  ),
  cloudpad: (
    <>
      <Box x={24} y={36} w={512} h={30} label="/pad/standup-notes" />
      <Box x={24} y={82} w={512} h={104} />
      <Line d="M40 108 L420 108" />
      <Line d="M40 128 L340 128" />
      <Line d="M40 148 L260 148" />
      <rect className="fill" x="424" y="98" width="1.5" height="16" />
      <text x="430" y="94">you</text>
      <rect className="fill" x="264" y="138" width="1.5" height="16" />
      <text x="270" y="134">them</text>
      <Box x={40} y={160} w={120} h={18} label="notes.pdf" dashed />
      <text x="24" y="210">anyone on this URL sees the change</text>
    </>
  ),
  "code-focus": (
    <>
      <text x="24" y="30">dependents</text>
      <text x="420" y="30">dependencies</text>
      <Box x={222} y={100} w={116} h={36} label="router.ts" />
      {["api.ts", "jobs.ts", "cli.ts"].map((file, i) => (
        <g key={file}>
          <Box x={24} y={56 + i * 52} w={112} h={28} label={file} />
          <Line d={`M136 ${70 + i * 52} L222 118`} />
        </g>
      ))}
      {["queue.ts", "retry.ts", "log.ts"].map((file, i) => (
        <g key={file}>
          <Box x={424} y={56 + i * 52} w={112} h={28} label={file} />
          <Line d={`M338 118 L424 ${70 + i * 52}`} />
        </g>
      ))}
    </>
  ),
}

export function Cover({ slug, title }: { slug: string; title: string }) {
  return (
    <figure className="cover">
      <svg viewBox="0 0 560 236" role="img" aria-label={`Diagram of ${title}`}>
        {schematics[slug]}
      </svg>
    </figure>
  )
}
