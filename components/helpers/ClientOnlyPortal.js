import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ClientOnlyPortal({ children }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#portal');
    setMounted(true)
  }, [])

  return mounted ? createPortal(children, ref.current) : null
}