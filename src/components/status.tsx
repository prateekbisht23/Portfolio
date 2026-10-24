export function Status({ children }: { children: string }) {
  return (
    <p className="status">
      <span className="status-dot" aria-hidden="true" />
      <span className="status-now">Now</span>
      <span aria-hidden="true">·</span>
      <span>{children}</span>
    </p>
  )
}
