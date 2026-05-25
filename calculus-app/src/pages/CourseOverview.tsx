import { useParams, Link } from 'react-router-dom'
import { Clock, CheckCircle, Circle, BookOpen } from 'lucide-react'
import { getChapters, getLessonsByChapter, getChapterReview } from '@/content'
import { useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'
import type { CourseId, LessonBlock } from '@/types'

const LABELS: Record<CourseId, string> = {
  precalculus: 'Pre-calculus',
  calculus1: 'Calculus I',
  calculus2: 'Calculus II',
}

export function CourseOverview() {
  const { courseId } = useParams<{ courseId: string }>()
  const { isCompleted, getScore, isReviewCompleted, getReviewScore } = useProgress()
  const id = courseId as CourseId
  const chapters = getChapters(id)

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">{LABELS[id] ?? id}</h1>

      {chapters.length === 0 && (
        <p className="text-slate-500">เนื้อหากำลังจะมาเร็วๆ นี้</p>
      )}

      <div className="space-y-6">
        {chapters.map((chapter) => {
          const lessons = getLessonsByChapter(id, chapter)
          const completedCount = lessons.filter((l) => isCompleted(l.id)).length
          const review = getChapterReview(id, chapter)
          const reviewDone = review ? isReviewCompleted(review.id) : false
          const reviewScore = review ? getReviewScore(review.id) : null
          const quizBlock = review?.blocks.find(
            (b): b is Extract<LessonBlock, { type: 'quiz' }> => b.type === 'quiz'
          )
          const questionCount = quizBlock?.questions.length ?? 0

          return (
            <div key={chapter}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold text-slate-300">{chapter}</h2>
                <span className="text-xs text-slate-500">
                  {completedCount}/{lessons.length}
                </span>
              </div>
              <div className="space-y-1">
                {lessons.map((lesson) => {
                  const done = isCompleted(lesson.id)
                  const score = getScore(lesson.id)
                  return (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${id}/${lesson.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      {done ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                      )}
                      <span
                        className={cn(
                          'flex-1 text-sm',
                          done ? 'text-slate-300' : 'text-slate-400'
                        )}
                      >
                        {lesson.title}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        {score !== null && (
                          <span
                            className={cn(
                              'font-mono',
                              score >= 80 ? 'text-emerald-400' : 'text-amber-400'
                            )}
                          >
                            {score}%
                          </span>
                        )}
                        <Clock className="w-3 h-3" />
                        <span>{lesson.estimatedMinutes}น.</span>
                      </div>
                    </Link>
                  )
                })}

                {review && (
                  <Link
                    to={`/lesson/${id}/${review.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors border border-amber-900/30 hover:border-amber-700/40"
                  >
                    <BookOpen
                      className={cn(
                        'w-4 h-4 shrink-0',
                        reviewDone ? 'text-emerald-400' : 'text-amber-400'
                      )}
                    />
                    <span className="flex-1 text-sm text-amber-400/80">แบบฝึกหัดท้ายบท</span>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      {reviewScore !== null && (
                        <span
                          className={cn(
                            'font-mono',
                            reviewScore >= 80 ? 'text-emerald-400' : 'text-amber-400'
                          )}
                        >
                          {reviewScore}%
                        </span>
                      )}
                      <span>{questionCount} ข้อ</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
