import { Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

interface Props {
  isPlaying: boolean
  speed: number
  onPlay: () => void
  onStop: () => void
  onReset: () => void
  onSpeedChange: (v: number) => void
}

export function PlayPauseControl({
  isPlaying,
  speed,
  onPlay,
  onStop,
  onReset,
  onSpeedChange,
}: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={isPlaying ? onStop : onPlay}
          className="flex-1 gap-1.5"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3" />
              หยุด
            </>
          ) : (
            <>
              <Play className="w-3 h-3" />
              เล่น
            </>
          )}
        </Button>
        <Button variant="ghost" size="sm" onClick={onReset} className="px-2">
          <RotateCcw className="w-3.5 h-3.5" />
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-xs text-slate-400">ความเร็ว</Label>
          <span className="text-xs font-mono text-slate-400">{speed.toFixed(1)}×</span>
        </div>
        <Slider
          min={0.2}
          max={3}
          step={0.2}
          value={[speed]}
          onValueChange={([v]) => onSpeedChange(v)}
        />
      </div>
    </div>
  )
}
