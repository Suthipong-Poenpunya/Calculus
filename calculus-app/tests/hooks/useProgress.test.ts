import { renderHook, act } from '@testing-library/react'
import { useProgress } from '@/hooks/useProgress'

test('starts with empty store', () => {
  const { result } = renderHook(() => useProgress())
  expect(result.current.store.completedLessons).toEqual([])
  expect(result.current.store.visitedLessons).toEqual([])
})

test('markVisited adds lessonId', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markVisited('lesson-1'))
  expect(result.current.isVisited('lesson-1')).toBe(true)
})

test('markVisited does not duplicate', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markVisited('lesson-1'))
  act(() => result.current.markVisited('lesson-1'))
  expect(result.current.store.visitedLessons).toHaveLength(1)
})

test('markCompleted adds lessonId and score', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markCompleted('lesson-1', 80))
  expect(result.current.isCompleted('lesson-1')).toBe(true)
  expect(result.current.getScore('lesson-1')).toBe(80)
})

test('markCompleted keeps highest score', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markCompleted('lesson-1', 60))
  act(() => result.current.markCompleted('lesson-1', 80))
  act(() => result.current.markCompleted('lesson-1', 40))
  expect(result.current.getScore('lesson-1')).toBe(80)
})

test('persists to localStorage', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markCompleted('lesson-1', 100))
  const raw = JSON.parse(localStorage.getItem('calculus-progress')!)
  expect(raw.completedLessons).toContain('lesson-1')
})

test('markReviewCompleted adds review id and score', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markReviewCompleted('review-1', 75))
  expect(result.current.isReviewCompleted('review-1')).toBe(true)
  expect(result.current.getReviewScore('review-1')).toBe(75)
})

test('markReviewCompleted keeps highest review score', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markReviewCompleted('review-1', 50))
  act(() => result.current.markReviewCompleted('review-1', 90))
  act(() => result.current.markReviewCompleted('review-1', 60))
  expect(result.current.getReviewScore('review-1')).toBe(90)
})

test('markReviewCompleted does not affect completedLessons', () => {
  const { result } = renderHook(() => useProgress())
  act(() => result.current.markReviewCompleted('review-1', 100))
  expect(result.current.isCompleted('review-1')).toBe(false)
  expect(result.current.store.completedLessons).toHaveLength(0)
})
