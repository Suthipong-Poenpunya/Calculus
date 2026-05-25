import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

interface Props {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit?: string
  format?: (v: number) => string
  onChange: (v: number) => void
}

export function ParameterSlider({
  label,
  value,
  min,
  max,
  step,
  unit = '',
  format,
  onChange,
}: Props) {
  const display = format ? format(value) : value.toFixed(3)
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="text-xs text-slate-400">{label}</Label>
        <span className="text-xs font-mono text-slate-200 bg-slate-800 px-2 py-0.5 rounded tabular-nums">
          {display}
          {unit}
        </span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        className="w-full"
      />
    </div>
  )
}
