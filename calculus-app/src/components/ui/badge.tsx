import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue' | 'violet' | 'emerald'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variant === 'default' && 'bg-slate-800 text-slate-300',
        variant === 'blue' && 'bg-blue-950 text-blue-300',
        variant === 'violet' && 'bg-violet-950 text-violet-300',
        variant === 'emerald' && 'bg-emerald-950 text-emerald-300',
        className
      )}
      {...props}
    />
  )
}
