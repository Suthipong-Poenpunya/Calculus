import { lazy, Suspense } from 'react'
import type { VisualizerName } from '@/types'

const VISUALIZERS: Record<VisualizerName, ReturnType<typeof lazy>> = {
  LimitsVisualizer: lazy(() =>
    import('@/components/visualizers/LimitsVisualizerWrapper').then((m) => ({
      default: m.LimitsVisualizerWrapper,
    }))
  ),
  DerivativeVisualizer: lazy(() =>
    import('@/components/visualizers/DerivativeVisualizerWrapper').then((m) => ({
      default: m.DerivativeVisualizerWrapper,
    }))
  ),
}

interface Props {
  name: VisualizerName
}

export function VisualizerBlock({ name }: Props) {
  const Component = VISUALIZERS[name]
  return (
    <Suspense fallback={<div className="h-64 bg-slate-800 rounded-xl animate-pulse" />}>
      <Component />
    </Suspense>
  )
}
