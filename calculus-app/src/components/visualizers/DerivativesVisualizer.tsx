import { useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { generateCurvePoints, numericalDerivative } from '@/lib/math'
import { worldToCanvas } from '@/lib/graphUtils'
import type { FunctionPreset, GraphBounds } from '@/types'

interface Props {
  preset: FunctionPreset
  x0: number
  deltaX: number
}

export function DerivativesVisualizer({ preset, x0, deltaX }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const W = 600
  const H = 400
  const [xMin, xMax] = preset.domain

  const curvePoints = useMemo(
    () => generateCurvePoints(preset.fn, xMin, xMax, 600),
    [preset, xMin, xMax]
  )

  const { yMin, yMax } = useMemo(() => {
    const ys = curvePoints.map(([, y]) => y)
    const rawMin = Math.min(...ys)
    const rawMax = Math.max(...ys)
    const pad = (rawMax - rawMin) * 0.25 || 1
    return { yMin: rawMin - pad, yMax: rawMax + pad }
  }, [curvePoints])

  const bounds: GraphBounds = { xMin, xMax, yMin, yMax, width: W, height: H }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, W, H)

    const [ox, oy] = worldToCanvas(0, 0, bounds)

    ctx.strokeStyle = '#1e293b'
    ctx.lineWidth = 1
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
      const [cx] = worldToCanvas(x, 0, bounds)
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke()
    }
    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
      const [, cy] = worldToCanvas(0, y, bounds)
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke()
    }

    ctx.strokeStyle = '#334155'
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke()

    ctx.strokeStyle = '#6366f1'
    ctx.lineWidth = 2.5
    ctx.beginPath()
    curvePoints.forEach(([x, y], i) => {
      const [cx, cy] = worldToCanvas(x, y, bounds)
      i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy)
    })
    ctx.stroke()
  }, [curvePoints, bounds, xMin, xMax, yMin, yMax])

  const y0 = preset.fn(x0)
  const y1 = preset.fn(x0 + deltaX)
  const secantSlope = Math.abs(deltaX) > 1e-9 ? (y1 - y0) / deltaX : 0
  const trueSlope = useMemo(() => numericalDerivative(preset.fn, x0), [preset, x0])
  const extend = (xMax - xMin) * 0.4

  const [p1x, p1y] = worldToCanvas(x0, y0, bounds)
  const [p2x, p2y] = worldToCanvas(x0 + deltaX, y1, bounds)

  const [sl1x, sl1y] = worldToCanvas(x0 - extend, y0 - secantSlope * extend, bounds)
  const [sl2x, sl2y] = worldToCanvas(x0 + deltaX + extend, y0 + secantSlope * (deltaX + extend), bounds)

  const [tl1x, tl1y] = worldToCanvas(x0 - extend, y0 - trueSlope * extend, bounds)
  const [tl2x, tl2y] = worldToCanvas(x0 + extend, y0 + trueSlope * extend, bounds)

  const showSecant = Math.abs(deltaX) > 0.02
  const secantOpacity = Math.min(Math.abs(deltaX), 1)

  return (
    <div className="relative rounded-b-xl overflow-hidden bg-slate-950">
      <canvas ref={canvasRef} width={W} height={H} className="w-full" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        style={{ pointerEvents: 'none' }}
      >
        {showSecant && (
          <motion.line
            x1={sl1x} y1={sl1y} x2={sl2x} y2={sl2y}
            stroke="#f59e0b"
            strokeWidth={1.5}
            strokeDasharray="7 4"
            animate={{ x1: sl1x, y1: sl1y, x2: sl2x, y2: sl2y, opacity: secantOpacity }}
            transition={{ duration: 0.08 }}
          />
        )}

        <motion.line
          x1={tl1x} y1={tl1y} x2={tl2x} y2={tl2y}
          stroke="#a78bfa"
          strokeWidth={2.5}
          animate={{ x1: tl1x, y1: tl1y, x2: tl2x, y2: tl2y }}
          transition={{ duration: 0.05 }}
        />

        <circle cx={p1x} cy={p1y} r={6} fill="#a78bfa" />
        {showSecant && <circle cx={p2x} cy={p2y} r={5} fill="#f59e0b" />}

        <text x={p1x + 8} y={p1y - 10} fill="#a78bfa" fontSize={11} fontFamily="monospace">
          x₀={x0.toFixed(2)}
        </text>
        {showSecant && (
          <text x={p2x + 8} y={p2y - 10} fill="#f59e0b" fontSize={11} fontFamily="monospace">
            x₀+Δx
          </text>
        )}
      </svg>
    </div>
  )
}
