import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { PRESETS } from '@/lib/presets'
import type { FunctionPresetKey } from '@/types'

interface Props {
  value: FunctionPresetKey
  onChange: (key: FunctionPresetKey) => void
}

export function FunctionSelector({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      <Label className="text-xs text-slate-400">ฟังก์ชัน</Label>
      <Select value={value} onValueChange={(v) => onChange(v as FunctionPresetKey)}>
        <SelectTrigger className="h-8 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {PRESETS.map((p) => (
            <SelectItem key={p.key} value={p.key} className="text-xs">
              {p.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
