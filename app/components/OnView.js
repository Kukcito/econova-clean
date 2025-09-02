'use client'
import { useEffect } from 'react'

export default function OnView(){
  useEffect(()=>{
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in') } })
    },{threshold:.12})
    document.querySelectorAll('[data-animate]').forEach(el => io.observe(el))
    return ()=> io.disconnect()
  },[])
  return null
}
