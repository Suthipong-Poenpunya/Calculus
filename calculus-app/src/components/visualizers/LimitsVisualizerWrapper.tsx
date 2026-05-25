import { useState, useMemo } from 'react'
import { LimitsVisualizer } from './LimitsVisualizer'
import { ParameterSlider } from '@/components/controls/ParameterSlider'
import { FunctionSelector } from '@/components/controls/FunctionSelector'
import { Card, CardContent } from '@/components/ui/card'
import { getPreset } from '@/lib/presets'
import type { FunctionPresetKey } from '@/types'

export function LimitsVisualizerWrapper() {
  const [presetKey, setPresetKey] = useState<FunctionPresetKey>('quadratic')
  const [currentX, setCurrentX] = useState(-0.5)
  const [epsilon, setEpsilon] = useState(0.5)
  const preset = useMemo(() => getPreset(presetKey), [presetKey])
  const [xMin, xMax] = preset.domain
  const targetX = (xMin + xMax) / 2

  const handlePresetChange = (key: FunctionPresetKey) => {
    const p = getPreset(key)
    const mid = (p.domain[0] + p.domain[1]) / 2
    setPresetKey(key)
    setCurrentX(mid)
  }

  return (
    <div className="space-y-3">
      <LimitsVisualizer
        preset={preset}
        targetX={targetX}
        currentX={currentX}
        epsilon={epsilon}
      />
      <Card>
        <CardContent className="p-4 space-y-3">
          <FunctionSelector value={presetKey} onChange={handlePresetChange} />
          <ParameterSlider
            label={`x เข้าหา a = ${targetX.toFixed(2)}`}
            value={currentX}
            min={xMin}
            max={xMax}
            step={0.001}
            format={(v) => v.toFixed(3)}
            onChange={setCurrentX}
          />
          <ParameterSlider
            label="ε (epsilon)"
            value={epsilon}
            min={0.05}
            max={2}
            step={0.05}
            format={(v) => v.toFixed(2)}
            onChange={setEpsilon}
          />
        </CardContent>
      </Card>
    </div>
  )
}
