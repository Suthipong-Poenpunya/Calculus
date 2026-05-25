import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { getLessonsByCourse, getChapters, getLessonsByChapter, getChapterReview } from '@/content'
import { useProgress } from '@/hooks/useProgress'
import type { CourseId } from '@/types'

const COURSES: { id: CourseId; label: string; accent: string }[] = [
  { id: 'precalculus', label: 'Pre-calculus', accent: 'text-amber-400' },
  { id: 'calculus1', label: 'Calculus I', accent: 'text-blue-400' },
  { id: 'calculus2', label: 'Calculus II', accent: 'text-violet-400' },
]

export function Sidebar() {
  const { pathname } = useLocation()
  const { isCompleted, isVisited, isReviewCompleted } = useProgress()

  return (
    <aside className="w-64 shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col h-screen sticky top-0 overflow-y-auto">
      <div className="p-5 border-b border-slate-800">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-blue-400 font-bold text-xl">∫</span>
          <h1 className="font-semibold text-white text-base">เรียนแคลคูลัส</h1>
        </Link>
      </div>

      <nav className="flex-1 p-3 space-y-5">
        {COURSES.map(({ id, label, accent }) => {
          const lessons = getLessonsByCourse(id)
          const chapters = getChapters(id)

          return (
            <div key={id}>
              <Link
                to={`/course/${id}`}
                className={cn(
                  'text-xs font-semibold uppercase tracking-wider px-2 mb-2 block hover:opacity-80',
                  accent
                )}
              >
                {label}
              </Link>

              {lessons.length === 0 ? (
                <p className="text-xs text-slate-600 px-2">เร็วๆ นี้</p>
              ) : (
                chapters.map((chapter) => {
                  const review = getChapterReview(id, chapter)
                  const reviewActive = review
                    ? pathname === `/lesson/${id}/${review.id}`
                    : false
                  const reviewDone = review ? isReviewCompleted(review.id) : false

                  return (
                    <div key={chapter} className="mb-3">
                      <p className="text-xs text-slate-600 px-2 mb-1 truncate">{chapter}</p>
                      {getLessonsByChapter(id, chapter).map((lesson) => {
                        const active = pathname === `/lesson/${id}/${lesson.id}`
                        const completed = isCompleted(lesson.id)
                        const visited = isVisited(lesson.id)
                        return (
                          <Link
                            key={lesson.id}
                            to={`/lesson/${id}/${lesson.id}`}
                            className={cn(
                              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all',
                              active
                                ? 'bg-slate-800 text-white'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                            )}
                          >
                            <span className="w-3 text-center shrink-0">
                              {completed ? '✓' : visited ? '·' : '○'}
                            </span>
                            <span className="flex-1 leading-tight truncate">{lesson.title}</span>
                          </Link>
                        )
                      })}
                      {review && (
                        <Link
                          to={`/lesson/${id}/${review.id}`}
                          className={cn(
                            'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all',
                            reviewActive
                              ? 'bg-slate-800 text-white'
                              : 'text-amber-400/70 hover:text-amber-300 hover:bg-slate-800/50'
                          )}
                        >
                          <span className="w-3 text-center shrink-0">
                            {reviewDone ? '✓' : '✎'}
                          </span>
                          <span className="flex-1 leading-tight truncate">แบบฝึกหัดท้ายบท</span>
                        </Link>
                      )}
                    </div>
                  )
                })
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
