import { useState, useRef, useCallback } from 'react'

interface UseAnimationOptions {
  from: number
  to: number
  speed?: number
  onComplete?: () => void
}

export function useAnimation({ from, to, speed = 1, onComplete }: UseAnimationOptions) {
  const [current, setCurrent] = useState(from)
  const [isPlaying, setIsPlaying] = useState(false)
  const rafRef = useRef<number>(0)
  const currentRef = useRef(from)

  const stop = useCallback(() => {
    setIsPlaying(false)
    cancelAnimationFrame(rafRef.current)
  }, [])

  const play = useCallback(() => {
    if (currentRef.current >= to) {
      currentRef.current = from
      setCurrent(from)
    }
    setIsPlaying(true)

    let lastTime = performance.now()

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000
      lastTime = now
      currentRef.current = Math.min(currentRef.current + speed * dt * (to - from) / 10, to)
      setCurrent(Math.round(currentRef.current))

      if (currentRef.current >= to) {
        stop()
        onComplete?.()
        return
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [from, to, speed, stop, onComplete])

  const reset = useCallback(() => {
    stop()
    currentRef.current = from
    setCurrent(from)
  }, [from, stop])

  return { current, isPlaying, play, stop, reset }
}
