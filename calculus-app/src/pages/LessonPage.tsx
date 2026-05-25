import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, ChevronRight } from 'lucide-react'
import { getLessonById, getNextLesson } from '@/content'
import { LessonEngine } from '@/components/engine/LessonEngine'
import { useProgress } from '@/hooks/useProgress'
import { Button } from '@/components/ui/button'
import type { CourseId } from '@/types'

const COURSE_LABELS: Record<CourseId, string> = {
  precalculus: 'Pre-calculus',
  calculus1: 'Calculus I',
  calculus2: 'Calculus II',
}

export function LessonPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>()
  const navigate = useNavigate()
  const { markVisited, markCompleted, markReviewCompleted } = useProgress()

  const lesson = lessonId ? getLessonById(lessonId) : undefined
  const next = lessonId && !lesson?.isChapterReview ? getNextLesson(lessonId) : undefined
  const id = courseId as CourseId

  useEffect(() => {
    if (lessonId && !lesson?.isChapterReview) markVisited(lessonId)
  }, [lessonId, markVisited, lesson?.isChapterReview])

  if (!lesson) {
    return (
      <div className="p-8 text-slate-400">
        ไม่พบบทเรียน{' '}
        <Link to="/" className="text-blue-400 underline">
          กลับหน้าหลัก
        </Link>
      </div>
    )
  }

  const handleQuizComplete = lesson.isChapterReview
    ? (score: number) => markReviewCompleted(lesson.id, score)
    : (score: number) => markCompleted(lesson.id, score)

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
        <Link to={`/course/${courseId}`} className="hover:text-slate-300 transition-colors">
          {COURSE_LABELS[id] ?? id}
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-400">{lesson.chapter}</span>
      </div>

      <div>
        {lesson.isChapterReview && (
          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-amber-900/40 text-amber-400 border border-amber-700/40 mb-2">
            แบบฝึกหัดท้ายบท
          </span>
        )}
        <h1 className="text-2xl font-bold text-white mb-1">{lesson.title}</h1>
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <Clock className="w-3 h-3" />
          <span>ประมาณ {lesson.estimatedMinutes} นาที</span>
        </div>
      </div>

      <LessonEngine lesson={lesson} onQuizComplete={handleQuizComplete} courseId={courseId} />

      <div className="flex justify-between pt-4 border-t border-slate-800">
        <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          ย้อนกลับ
        </Button>
        {!lesson.isChapterReview && next && (
          <Button size="sm" asChild>
            <Link to={`/lesson/${next.course}/${next.id}`}>
              {next.title}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
