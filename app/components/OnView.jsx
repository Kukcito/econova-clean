'use client'
import { useEffect } from 'react'

export default function OnView() {
  useEffect(() => {
    // Quita la clase de fallback y marca que hay JS
    document.documentElement.classList.remove('no-js')
    document.documentElement.classList.add('has-js')

    // Si el navegador no soporta IO, dejamos visibles los .reveal por CSS
    if (!('IntersectionObserver' in window)) return

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
