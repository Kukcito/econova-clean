'use client'
import { useEffect } from 'react'

export default function OnView() {
  useEffect(() => {
    // Fallback si no hay IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.body.classList.add('no-io')
      return
    }

    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
