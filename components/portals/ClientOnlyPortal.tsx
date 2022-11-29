import { useEffect, useState, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export default function ClientOnlyPortal({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false)
  const [target, setTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setTarget(document.getElementById('portal')!)
    setMounted(true)
  }, [])

  return mounted ? createPortal(children, target!) : null
}