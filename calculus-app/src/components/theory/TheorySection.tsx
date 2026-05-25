import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TheorySectionProps {
  title: string
  accentColor: 'blue' | 'violet' | 'emerald'
  children: ReactNode
}

interface EngineeringContextProps {
  children: ReactNode
  accentColor: 'blue' | 'violet' | 'emerald'
}

export function TheorySection({ title, accentColor, children }: TheorySectionProps) {
  const border = {
    blue: 'border-l-blue-500',
    violet: 'border-l-violet-500',
    emerald: 'border-l-emerald-500',
  }[accentColor]

  return (
    <Card className={cn('border-l-4', border)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-300 leading-relaxed">
        {children}
      </CardContent>
    </Card>
  )
}

export function EngineeringContext({ children, accentColor }: EngineeringContextProps) {
  const styles = {
    blue: 'bg-blue-950/40 border-blue-800/50 text-blue-200',
    violet: 'bg-violet-950/40 border-violet-800/50 text-violet-200',
    emerald: 'bg-emerald-950/40 border-emerald-800/50 text-emerald-200',
  }[accentColor]

  return (
    <div className={cn('rounded-lg border p-4 text-xs', styles)}>
      <p className="font-semibold mb-1 uppercase tracking-wide opacity-70 text-[10px]">
        บริบทวิศวกรรม
      </p>
      {children}
    </div>
  )
}
