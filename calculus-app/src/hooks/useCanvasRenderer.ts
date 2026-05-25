import { useRef, useEffect, useState } from 'react'

interface CanvasSize {
  width: number
  height: number
}

export function useCanvasRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState<CanvasSize>({ width: 600, height: 400 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect
        const height = width * (2 / 3)
        canvas.width = width
        canvas.height = height
        setSize({ width, height })
      }
    })

    observer.observe(canvas)
    return () => observer.disconnect()
  }, [])

  return { canvasRef, ...size }
}
