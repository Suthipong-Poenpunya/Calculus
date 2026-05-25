import { BlockMath, InlineMath } from 'react-katex'
import { cn } from '@/lib/utils'

interface Props {
  math: string
  block?: boolean
  className?: string
}

export function MathEquation({ math, block = false, className }: Props) {
  if (block) {
    return (
      <div className={cn('my-2 overflow-x-auto text-slate-100', className)}>
        <BlockMath math={math} />
      </div>
    )
  }
  return (
    <span className={cn('text-slate-100', className)}>
      <InlineMath math={math} />
    </span>
  )
}
