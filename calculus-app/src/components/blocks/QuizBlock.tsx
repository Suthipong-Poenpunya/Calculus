import { useState, useCallback, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { InlineMath } from 'react-katex'
import { CheckCircle, XCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { getLessonById } from '@/content'
import type { QuizQuestion } from '@/types'

interface Props {
  questions: QuizQuestion[]
  onComplete: (score: number) => void
  courseId?: string
}

type QuestionState = 'unanswered' | 'correct' | 'incorrect'

function renderText(text: string) {
  const parts = text.split(/(\$[^$]+\$)/)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('$') && part.endsWith('$') ? (
          <InlineMath key={i} math={part.slice(1, -1)} />
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  )
}

export function QuizBlock({ questions, onComplete, courseId }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [state, setState] = useState<QuestionState>('unanswered')
  const [hasAttempted, setHasAttempted] = useState(false)
  const [firstAttemptResults, setFirstAttemptResults] = useState<boolean[]>([])
  const [done, setDone] = useState(false)

  const question = questions[currentIndex]
  const hintLesson =
    courseId && question.lessonId ? getLessonById(question.lessonId) : undefined

  const handleSelect = useCallback(
    (choiceIndex: number) => {
      if (state !== 'unanswered') return
      const correct = choiceIndex === question.correctIndex
      setSelected(choiceIndex)
      setState(correct ? 'correct' : 'incorrect')
      if (!hasAttempted) {
        setHasAttempted(true)
        setFirstAttemptResults((prev) => [...prev, correct])
      }
    },
    [state, question, hasAttempted]
  )

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelected(null)
      setState('unanswered')
      setHasAttempted(false)
    } else {
      const correctCount = firstAttemptResults.filter(Boolean).length
      const score = Math.round((correctCount / questions.length) * 100)
      setDone(true)
      onComplete(score)
    }
  }, [currentIndex, questions.length, firstAttemptResults, onComplete])

  const handleRetry = useCallback(() => {
    setSelected(null)
    setState('unanswered')
  }, [])

  if (done) {
    const correctCount = firstAttemptResults.filter(Boolean).length
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-2">
        <h3 className="font-semibold text-white">ผลการทำแบบฝึกหัด</h3>
        <p className="text-slate-300">
          ได้ {correctCount} จาก {questions.length} ข้อ (
          {Math.round((correctCount / questions.length) * 100)}%)
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500 font-mono">
          แบบฝึกหัด ข้อ {currentIndex + 1}/{questions.length}
        </span>
      </div>

      <p className="text-slate-100 leading-relaxed">{renderText(question.question)}</p>

      <div className="grid grid-cols-2 gap-3">
        {question.choices.map((choice, i) => {
          const isCorrect = i === question.correctIndex
          const isSelected = selected === i
          let extra = ''
          if (state !== 'unanswered') {
            if (isCorrect) extra = 'border-emerald-500 text-emerald-300'
            else if (isSelected) extra = 'border-red-500 text-red-300'
          }
          return (
            <Button
              key={i}
              variant="outline"
              disabled={state !== 'unanswered'}
              onClick={() => handleSelect(i)}
              className={cn('h-auto whitespace-normal py-3 px-4 text-left justify-start', extra)}
            >
              {choice}
            </Button>
          )
        })}
      </div>

      {state === 'correct' && (
        <div className="flex items-center gap-2 text-emerald-400">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span className="text-sm flex-1">ถูกต้อง!</span>
          <Button size="sm" onClick={handleNext}>
            {currentIndex < questions.length - 1 ? 'ข้อถัดไป →' : 'ดูผลลัพธ์'}
          </Button>
        </div>
      )}

      {state === 'incorrect' && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-red-400">
            <XCircle className="w-4 h-4 shrink-0" />
            <span className="text-sm">ยังไม่ถูกต้อง</span>
          </div>
          <p className="text-sm text-slate-400 bg-slate-800 rounded-lg p-3">
            {renderText(question.explanation)}
          </p>
          {hintLesson && courseId && question.lessonId && (
            <Link
              to={`/lesson/${courseId}/${question.lessonId}`}
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
            >
              <BookOpen className="w-3 h-3" />
              กลับไปอ่าน: &ldquo;{hintLesson.title}&rdquo;
            </Link>
          )}
          <Button size="sm" variant="outline" onClick={handleRetry}>
            ลองใหม่
          </Button>
        </div>
      )}
    </div>
  )
}
