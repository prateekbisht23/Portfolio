"use client"

import { useEffect, useRef, useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      return
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <button type="button" className="button ghost" onClick={copy}>
        {copied ? "Copied" : "Copy email"}
      </button>
      <p className={copied ? "toast visible" : "toast"} role="status" aria-live="polite">
        Copied <span className="meta muted">{email}</span>
      </p>
    </>
  )
}
