import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getLessonsByCourse } from '@/content'
import { useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'
import type { CourseId } from '@/types'

const COURSES: { id: CourseId; label: string; description: string; accent: 'amber' | 'blue' | 'violet' }[] = [
  {
    id: 'precalculus',
    label: 'Pre-calculus',
    description: 'ฟังก์ชัน โดเมนและเรนจ์ การแปลงกราฟ ตรีโกณมิติ ฟังก์ชัน Exponential และ Logarithm',
    accent: 'amber',
  },
  {
    id: 'calculus1',
    label: 'Calculus I',
    description: 'ลิมิตและความต่อเนื่อง อนุพันธ์และกฎการหาอนุพันธ์ การประยุกต์ อินทิกรัล',
    accent: 'blue',
  },
  {
    id: 'calculus2',
    label: 'Calculus II',
    description: 'เทคนิคการอินทิเกรต อนุกรม Taylor ฟังก์ชันหลายตัวแปร ปริพันธ์คู่',
    accent: 'violet',
  },
]

const A = {
  amber: { border: 'border-amber-900/50 hover:border-amber-700/50', text: 'text-amber-400', bar: 'bg-amber-500' },
  blue:  { border: 'border-blue-900/50 hover:border-blue-700/50',   text: 'text-blue-400',  bar: 'bg-blue-500'  },
  violet:{ border: 'border-violet-900/50 hover:border-violet-700/50',text: 'text-violet-400',bar: 'bg-violet-500'},
}

export function Dashboard() {
  const { isCompleted } = useProgress()

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">เรียนแคลคูลัสออนไลน์</h1>
        <p className="text-slate-400">
          เรียนรู้ตั้งแต่เริ่มต้นจนถึงระดับมหาวิทยาลัย ไม่ต้องสมัครสมาชิก
        </p>
      </div>

      <div className="grid gap-5">
        {COURSES.map(({ id, label, description, accent }) => {
          const lessons = getLessonsByCourse(id)
          const completed = lessons.filter((l) => isCompleted(l.id)).length
          const total = lessons.length
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0
          const a = A[accent]

          return (
            <Link key={id} to={`/course/${id}`} className="group block">
              <Card className={cn('transition-colors cursor-pointer border', a.border)}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className={cn('text-base', a.text)}>{label}</CardTitle>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 mb-3">{description}</p>
                  {total > 0 ? (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>{completed}/{total} บท</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={cn('h-full rounded-full transition-all', a.bar)}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-600">เร็วๆ นี้</p>
                  )}
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
