import { useState, useCallback } from 'react'
import type { ProgressStore } from '@/types'

const STORAGE_KEY = 'calculus-progress'

const DEFAULT: ProgressStore = {
  completedLessons: [],
  visitedLessons: [],
  quizScores: {},
  completedReviews: [],
  reviewScores: {},
}

function load(): ProgressStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT
    const parsed = JSON.parse(raw) as Partial<ProgressStore>
    return { ...DEFAULT, ...parsed }
  } catch {
    return DEFAULT
  }
}

function persist(store: ProgressStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

export function useProgress() {
  const [store, setStore] = useState<ProgressStore>(load)

  const markVisited = useCallback((lessonId: string) => {
    setStore((prev) => {
      if (prev.visitedLessons.includes(lessonId)) return prev
      const next = { ...prev, visitedLessons: [...prev.visitedLessons, lessonId] }
      persist(next)
      return next
    })
  }, [])

  const markCompleted = useCallback((lessonId: string, score: number) => {
    setStore((prev) => {
      const prevScore = prev.quizScores[lessonId] ?? -1
      const nextScore = Math.max(prevScore, score)
      const completed = prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId]
      const next = {
        ...prev,
        completedLessons: completed,
        quizScores: { ...prev.quizScores, [lessonId]: nextScore },
      }
      persist(next)
      return next
    })
  }, [])

  const markReviewCompleted = useCallback((lessonId: string, score: number) => {
    setStore((prev) => {
      const prevScore = prev.reviewScores[lessonId] ?? -1
      const nextScore = Math.max(prevScore, score)
      const completed = prev.completedReviews.includes(lessonId)
        ? prev.completedReviews
        : [...prev.completedReviews, lessonId]
      const next = {
        ...prev,
        completedReviews: completed,
        reviewScores: { ...prev.reviewScores, [lessonId]: nextScore },
      }
      persist(next)
      return next
    })
  }, [])

  const isCompleted = useCallback(
    (lessonId: string) => store.completedLessons.includes(lessonId),
    [store]
  )

  const isVisited = useCallback(
    (lessonId: string) => store.visitedLessons.includes(lessonId),
    [store]
  )

  const getScore = useCallback(
    (lessonId: string) => store.quizScores[lessonId] ?? null,
    [store]
  )

  const isReviewCompleted = useCallback(
    (lessonId: string) => store.completedReviews.includes(lessonId),
    [store]
  )

  const getReviewScore = useCallback(
    (lessonId: string) => store.reviewScores[lessonId] ?? null,
    [store]
  )

  return {
    store,
    markVisited,
    markCompleted,
    markReviewCompleted,
    isCompleted,
    isVisited,
    getScore,
    isReviewCompleted,
    getReviewScore,
  }
}
