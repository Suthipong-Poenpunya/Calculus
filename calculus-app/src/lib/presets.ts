import type { FunctionPreset } from '@/types'

export const PRESETS: FunctionPreset[] = [
  {
    key: 'quadratic',
    label: 'พาราโบลา',
    fn: (x) => x * x - 2 * x,
    katex: 'f(x) = x^2 - 2x',
    domain: [-2, 4],
    integralDomain: [0, 3],
  },
  {
    key: 'sine',
    label: 'คลื่นไซน์',
    fn: (x) => Math.sin(x),
    katex: 'f(x) = \\sin(x)',
    domain: [-Math.PI * 1.5, Math.PI * 1.5],
    integralDomain: [0, Math.PI],
  },
  {
    key: 'cubic',
    label: 'พหุนามดีกรี 3',
    fn: (x) => x * x * x - 3 * x,
    katex: 'f(x) = x^3 - 3x',
    domain: [-2.5, 2.5],
    integralDomain: [-1, 2],
  },
  {
    key: 'linear',
    label: 'เส้นตรง',
    fn: (x) => 2 * x + 1,
    katex: 'f(x) = 2x + 1',
    domain: [-3, 3],
    integralDomain: [0, 2],
  },
  {
    key: 'exponential',
    label: 'เอกซ์โพเนนเชียล',
    fn: (x) => Math.exp(x / 2),
    katex: 'f(x) = e^{x/2}',
    domain: [-2, 4],
    integralDomain: [0, 2],
  },
]

export function getPreset(key: string): FunctionPreset {
  return PRESETS.find((p) => p.key === key) ?? PRESETS[0]
}
