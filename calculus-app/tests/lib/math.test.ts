import { describe, it, expect } from 'vitest'
import {
  numericalDerivative,
  simpsonIntegral,
  riemannSum,
  generateCurvePoints,
} from '@/lib/math'

describe('numericalDerivative', () => {
  it('computes derivative of x² at x=3 as 6', () => {
    const result = numericalDerivative(x => x * x, 3)
    expect(result).toBeCloseTo(6, 4)
  })

  it('computes derivative of sin(x) at x=0 as 1', () => {
    const result = numericalDerivative(Math.sin, 0)
    expect(result).toBeCloseTo(1, 4)
  })

  it('computes derivative of constant as 0', () => {
    const result = numericalDerivative(() => 5, 2)
    expect(result).toBeCloseTo(0, 4)
  })
})

describe('simpsonIntegral', () => {
  it('integrates x² from 0 to 3 → 9', () => {
    const result = simpsonIntegral(x => x * x, 0, 3)
    expect(result).toBeCloseTo(9, 5)
  })

  it('integrates sin(x) from 0 to π → 2', () => {
    const result = simpsonIntegral(Math.sin, 0, Math.PI)
    expect(result).toBeCloseTo(2, 5)
  })

  it('integrates constant 1 from 0 to 5 → 5', () => {
    const result = simpsonIntegral(() => 1, 0, 5)
    expect(result).toBeCloseTo(5, 5)
  })
})

describe('riemannSum', () => {
  it('midpoint sum of x² from 0 to 3 with n=1000 is close to 9', () => {
    const result = riemannSum(x => x * x, 0, 3, 1000, 'midpoint')
    expect(result).toBeCloseTo(9, 2)
  })

  it('left sum with n=1 returns single rectangle', () => {
    const result = riemannSum(() => 2, 0, 4, 1, 'left')
    expect(result).toBeCloseTo(8, 5)
  })

  it('converges: n=1000 closer than n=10 for monotone function', () => {
    const fn = (x: number) => x * x
    const exact = 9
    const err10 = Math.abs(riemannSum(fn, 0, 3, 10, 'left') - exact)
    const err1000 = Math.abs(riemannSum(fn, 0, 3, 1000, 'left') - exact)
    expect(err1000).toBeLessThan(err10)
  })
})

describe('generateCurvePoints', () => {
  it('returns n points', () => {
    const pts = generateCurvePoints(x => x, 0, 1, 10)
    expect(pts).toHaveLength(10)
  })

  it('first point x equals xMin', () => {
    const pts = generateCurvePoints(x => x, -2, 2, 100)
    expect(pts[0][0]).toBeCloseTo(-2, 5)
  })

  it('last point x equals xMax', () => {
    const pts = generateCurvePoints(x => x, -2, 2, 100)
    expect(pts[pts.length - 1][0]).toBeCloseTo(2, 5)
  })

  it('filters out NaN and Infinity', () => {
    const pts = generateCurvePoints(x => 1 / x, -1, 1, 100)
    pts.forEach(([, y]) => {
      expect(isFinite(y)).toBe(true)
      expect(isNaN(y)).toBe(false)
    })
  })
})
