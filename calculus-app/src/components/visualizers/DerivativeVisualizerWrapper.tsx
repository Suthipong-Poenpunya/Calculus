import { useState, useMemo } from 'react'
import { DerivativesVisualizer } from './DerivativesVisualizer'
import { ParameterSlider } from '@/components/controls/ParameterSlider'
import { FunctionSelector } from '@/components/controls/FunctionSelector'
import { Card, CardContent } from '@/components/ui/card'
import { getPreset } from '@/lib/presets'
import type { FunctionPresetKey } from '@/types'

export function DerivativeVisualizerWrapper() {
  const [presetKey, setPresetKey] = useState<FunctionPresetKey>('quadratic')
  const [x0, setX0] = useState(1)
  const [deltaX, setDeltaX] = useState(1)
  const preset = useMemo(() => getPreset(presetKey), [presetKey])
  const [xMin, xMax] = preset.domain

  const handlePresetChange = (key: FunctionPresetKey) => {
    const p = getPreset(key)
    const mid = (p.domain[0] + p.domain[1]) / 2
    setPresetKey(key)
    setX0(mid)
  }

  return (
    <div className="space-y-3">
      <DerivativesVisualizer preset={preset} x0={x0} deltaX={deltaX} />
      <Card>
        <CardContent className="p-4 space-y-3">
          <FunctionSelector value={presetKey} onChange={handlePresetChange} />
          <ParameterSlider
            label="x₀"
            value={x0}
            min={xMin + 0.5}
            max={xMax - 0.5}
            step={0.1}
            format={(v) => v.toFixed(2)}
            onChange={setX0}
          />
          <ParameterSlider
            label="Δx (ลดลงเพื่อดู tangent)"
            value={deltaX}
            min={0.001}
            max={2}
            step={0.001}
            format={(v) => v.toFixed(3)}
            onChange={setDeltaX}
          />
        </CardContent>
      </Card>
    </div>
  )
}
