import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { generateCurvePoints } from '@/lib/math'
import { worldToCanvas, buildSvgPath } from '@/lib/graphUtils'
import type { FunctionPreset, GraphBounds } from '@/types'

const W = 600
const H = 400
const PAD = 30

interface Props {
  preset: FunctionPreset
  targetX: number
  currentX: number
  epsilon: number
}

export function LimitsVisualizer({ preset, targetX, currentX, epsilon }: Props) {
  const [xMin, xMax] = preset.domain

  const curvePoints = useMemo(
    () => generateCurvePoints(preset.fn, xMin, xMax, 600),
    [preset, xMin, xMax]
  )

  const bounds: GraphBounds = useMemo(() => {
    const ys = curvePoints.map(([, y]) => y)
    const rawYMin = Math.min(...ys)
    const rawYMax = Math.max(...ys)
    const yPad = (rawYMax - rawYMin) * 0.2 || 1
    return {
      xMin,
      xMax,
      yMin: rawYMin - yPad,
      yMax: rawYMax + yPad,
      width: W,
      height: H,
    }
  }, [curvePoints, xMin, xMax])

  const curvePath = useMemo(() => buildSvgPath(curvePoints, bounds), [curvePoints, bounds])

  const limitValue = preset.fn(targetX)
  const currentY = preset.fn(currentX)

  const [px, py] = worldToCanvas(currentX, currentY, bounds)
  const [ax, ay] = worldToCanvas(targetX, limitValue, bounds)
  const [ox, oy] = worldToCanvas(0, 0, bounds)

  const distanceToTarget = Math.abs(currentX - targetX)
  const [epsDeltaX1] = worldToCanvas(targetX - distanceToTarget, 0, bounds)
  const [epsDeltaX2] = worldToCanvas(targetX + distanceToTarget, 0, bounds)
  const [, epsY1] = worldToCanvas(0, limitValue + epsilon, bounds)
  const [, epsY2] = worldToCanvas(0, limitValue - epsilon, bounds)

  const gridLines = useMemo(() => {
    const lines: number[] = []
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) lines.push(x)
    return lines
  }, [xMin, xMax])

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      className="rounded-b-xl bg-slate-950"
      style={{ display: 'block' }}
    >
      {/* Grid */}
      {gridLines.map((x) => {
        const [cx] = worldToCanvas(x, 0, bounds)
        return <line key={x} x1={cx} y1={0} x2={cx} y2={H} stroke="#1e293b" strokeWidth={1} />
      })}

      {/* Axes */}
      <line x1={ox} y1={PAD} x2={ox} y2={H - PAD} stroke="#475569" strokeWidth={1.5} />
      <line x1={PAD} y1={oy} x2={W - PAD} y2={oy} stroke="#475569" strokeWidth={1.5} />

      {/* Epsilon-Delta box */}
      <rect
        x={epsDeltaX1}
        y={epsY1}
        width={Math.max(0, epsDeltaX2 - epsDeltaX1)}
        height={Math.max(0, epsY2 - epsY1)}
        fill="rgba(139,92,246,0.08)"
        stroke="#7c3aed"
        strokeWidth={1}
        strokeDasharray="5 3"
      />

      {/* Curve */}
      <path d={curvePath} fill="none" stroke="#3b82f6" strokeWidth={2.5} strokeLinejoin="round" />

      {/* Dashed drop lines from approaching point */}
      <line
        x1={px} y1={py} x2={px} y2={oy}
        stroke="#60a5fa" strokeWidth={1} strokeDasharray="4 3" opacity={0.5}
      />
      <line
        x1={px} y1={py} x2={ox} y2={py}
        stroke="#60a5fa" strokeWidth={1} strokeDasharray="4 3" opacity={0.5}
      />

      {/* Approaching point (animated) */}
      <motion.circle
        cx={px}
        cy={py}
        r={6}
        fill="#60a5fa"
        animate={{ cx: px, cy: py }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* Target point a (open circle — limit may not equal f(a)) */}
      <circle cx={ax} cy={ay} r={7} fill="#0f172a" stroke="#a78bfa" strokeWidth={2} />
      <circle cx={ax} cy={ay} r={2} fill="#a78bfa" />

      {/* Labels */}
      <text x={ax + 10} y={ay - 10} fill="#a78bfa" fontSize={11} fontFamily="monospace">
        ({targetX.toFixed(1)}, L)
      </text>
      <text x={px + 8} y={py - 8} fill="#60a5fa" fontSize={11} fontFamily="monospace">
        x={currentX.toFixed(3)}
      </text>
    </svg>
  )
}
