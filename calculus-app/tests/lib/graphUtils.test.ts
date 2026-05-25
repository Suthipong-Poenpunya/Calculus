import { describe, it, expect } from 'vitest'
import { worldToCanvas, canvasToWorld, buildSvgPath } from '@/lib/graphUtils'
import type { GraphBounds } from '@/types'

const bounds: GraphBounds = { xMin: -5, xMax: 5, yMin: -5, yMax: 5, width: 600, height: 400 }

describe('worldToCanvas', () => {
  it('maps origin (0,0) to canvas center', () => {
    const [cx, cy] = worldToCanvas(0, 0, bounds)
    expect(cx).toBeCloseTo(300, 1)
    expect(cy).toBeCloseTo(200, 1)
  })

  it('maps xMin to left edge (cx=0)', () => {
    const [cx] = worldToCanvas(-5, 0, bounds)
    expect(cx).toBeCloseTo(0, 1)
  })

  it('maps xMax to right edge (cx=width)', () => {
    const [cx] = worldToCanvas(5, 0, bounds)
    expect(cx).toBeCloseTo(600, 1)
  })

  it('maps yMax to top (cy=0)', () => {
    const [, cy] = worldToCanvas(0, 5, bounds)
    expect(cy).toBeCloseTo(0, 1)
  })

  it('maps yMin to bottom (cy=height)', () => {
    const [, cy] = worldToCanvas(0, -5, bounds)
    expect(cy).toBeCloseTo(400, 1)
  })
})

describe('canvasToWorld', () => {
  it('is inverse of worldToCanvas', () => {
    const [wx, wy] = [2.5, -1.3]
    const [cx, cy] = worldToCanvas(wx, wy, bounds)
    const [wx2, wy2] = canvasToWorld(cx, cy, bounds)
    expect(wx2).toBeCloseTo(wx, 5)
    expect(wy2).toBeCloseTo(wy, 5)
  })
})

describe('buildSvgPath', () => {
  it('returns empty string for empty points', () => {
    expect(buildSvgPath([], bounds)).toBe('')
  })

  it('starts with M for first point', () => {
    const path = buildSvgPath([[0, 0]], bounds)
    expect(path.startsWith('M')).toBe(true)
  })

  it('uses L for subsequent points', () => {
    const path = buildSvgPath([[0, 0], [1, 1], [2, 2]], bounds)
    expect(path).toContain('L')
  })
})
