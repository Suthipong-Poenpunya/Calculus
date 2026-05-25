import { MathEquation } from '@/components/theory/MathEquation'

interface Props {
  tex: string
  display?: boolean
}

export function EquationBlock({ tex, display = false }: Props) {
  return <MathEquation math={tex} block={display} />
}
