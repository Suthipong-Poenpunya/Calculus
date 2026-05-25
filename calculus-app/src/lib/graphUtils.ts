import type { GraphBounds } from '@/types'

export function worldToCanvas(wx: number, wy: number, b: GraphBounds): [number, number] {
  const cx = ((wx - b.xMin) / (b.xMax - b.xMin)) * b.width
  const cy = b.height - ((wy - b.yMin) / (b.yMax - b.yMin)) * b.height
  return [cx, cy]
}

export function canvasToWorld(cx: number, cy: number, b: GraphBounds): [number, number] {
  const wx = b.xMin + (cx / b.width) * (b.xMax - b.xMin)
  const wy = b.yMin + ((b.height - cy) / b.height) * (b.yMax - b.yMin)
  return [wx, wy]
}

export function buildSvgPath(points: Array<[number, number]>, bounds: GraphBounds): string {
  if (points.length === 0) return ''
  return points
    .map(([x, y], i) => {
      const [cx, cy] = worldToCanvas(x, y, bounds)
      return `${i === 0 ? 'M' : 'L'}${cx.toFixed(2)},${cy.toFixed(2)}`
    })
    .join(' ')
}
