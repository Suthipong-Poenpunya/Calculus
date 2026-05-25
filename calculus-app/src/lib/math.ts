import type { MathFn, RiemannMethod } from '@/types'

export function numericalDerivative(f: MathFn, x: number, h = 1e-7): number {
  return (f(x + h) - f(x - h)) / (2 * h)
}

export function simpsonIntegral(f: MathFn, a: number, b: number, n = 1000): number {
  let steps = n % 2 === 0 ? n : n + 1
  const h = (b - a) / steps
  let sum = f(a) + f(b)
  for (let i = 1; i < steps; i++) {
    sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h)
  }
  return (h / 3) * sum
}

export function riemannSum(
  f: MathFn,
  a: number,
  b: number,
  n: number,
  method: RiemannMethod = 'midpoint'
): number {
  const dx = (b - a) / n
  let sum = 0
  for (let i = 0; i < n; i++) {
    const x =
      method === 'left'
        ? a + i * dx
        : method === 'right'
          ? a + (i + 1) * dx
          : a + (i + 0.5) * dx
    sum += f(x) * dx
  }
  return sum
}

export function generateCurvePoints(
  f: MathFn,
  xMin: number,
  xMax: number,
  n = 600
): Array<[number, number]> {
  const points: Array<[number, number]> = []
  const dx = (xMax - xMin) / (n - 1)
  for (let i = 0; i < n; i++) {
    const x = xMin + i * dx
    const y = f(x)
    if (isFinite(y) && !isNaN(y) && Math.abs(y) < 1e6) {
      points.push([x, y])
    }
  }
  return points
}
