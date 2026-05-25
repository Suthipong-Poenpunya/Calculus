import { useParams, useLocation } from 'react-router-dom'
import { getLessonById, getLessonsByCourse } from '@/content'
import { useProgress } from '@/hooks/useProgress'
import type { CourseId } from '@/types'

export function TopBar() {
  const { courseId, lessonId } = useParams<{ courseId?: string; lessonId?: string }>()
  const { pathname } = useLocation()
  const { isCompleted } = useProgress()

  if (pathname === '/') return null

  const lesson = lessonId ? getLessonById(lessonId) : undefined
  const resolvedCourseId: CourseId | undefined = (courseId as CourseId | undefined) ?? lesson?.course
  const courseLessons = resolvedCourseId ? getLessonsByCourse(resolvedCourseId) : []
  const completedCount = courseLessons.filter((l) => isCompleted(l.id)).length
  const pct =
    courseLessons.length > 0
      ? Math.round((completedCount / courseLessons.length) * 100)
      : 0

  return (
    <div className="h-12 border-b border-slate-800 bg-slate-900/50 flex items-center px-5 gap-4 shrink-0">
      {lesson ? (
        <>
          <span className="text-sm text-slate-300 flex-1 truncate">{lesson.title}</span>
          {courseLessons.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>
                {completedCount}/{courseLessons.length}
              </span>
              <div className="w-20 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <span className="text-sm text-slate-500">เรียนแคลคูลัสออนไลน์</span>
      )}
    </div>
  )
}
