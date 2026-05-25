import type { Lesson, CourseId } from '@/types'
import { lessons as precalculusLessons } from './precalculus'
import { lessons as calculus1Lessons } from './calculus1'
import { lessons as calculus2Lessons } from './calculus2'

const ALL_LESSONS: Lesson[] = [...precalculusLessons, ...calculus1Lessons, ...calculus2Lessons]

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id)
}

export function getLessonsByCourse(courseId: CourseId): Lesson[] {
  return ALL_LESSONS
    .filter((l) => l.course === courseId && !l.isChapterReview)
    .sort((a, b) => a.order - b.order)
}

export function getChapters(courseId: CourseId): string[] {
  const seen = new Set<string>()
  const result: string[] = []
  for (const l of getLessonsByCourse(courseId)) {
    if (!seen.has(l.chapter)) { seen.add(l.chapter); result.push(l.chapter) }
  }
  return result
}

export function getLessonsByChapter(courseId: CourseId, chapter: string): Lesson[] {
  return getLessonsByCourse(courseId).filter((l) => l.chapter === chapter)
}

export function getChapterReview(courseId: CourseId, chapter: string): Lesson | undefined {
  return ALL_LESSONS.find(
    (l) => l.course === courseId && l.chapter === chapter && l.isChapterReview === true
  )
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const current = getLessonById(currentId)
  if (!current || current.isChapterReview) return undefined
  const all = getLessonsByCourse(current.course)
  const idx = all.findIndex((l) => l.id === currentId)
  return all[idx + 1]
}
