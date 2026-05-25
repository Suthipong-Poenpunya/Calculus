import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'tangent-slope',
  title: 'ความชันเส้นสัมผัสและการตีความทางเรขาคณิต',
  course: 'calculus1',
  chapter: 'อนุพันธ์',
  order: 6,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "อนุพันธ์ $f'(a)$ คือความชันของเส้นสัมผัส (tangent line) ที่จุด $(a, f(a))$ บนกราฟ สมการเส้นสัมผัสใช้ point-slope form: $y - f(a) = f'(a)(x - a)$" },
    { type: 'equation', tex: "y - f(a) = f'(a)(x - a)", display: true },
    { type: 'example', title: 'ตัวอย่าง — หาสมการเส้นสัมผัส', steps: [
      'หาสมการเส้นสัมผัสของ $f(x) = x^2$ ที่ $x = 2$',
      'หา $f(2) = 4$ — จุดสัมผัสคือ $(2, 4)$',
      "หา $f'(x) = 2x$ ดังนั้น $f'(2) = 4$ — ความชัน = 4",
      'สมการ: $y - 4 = 4(x - 2)$ นั่นคือ $y = 4x - 4$',
    ]},
    { type: 'visualizer', name: 'DerivativeVisualizer' },
    { type: 'quiz', questions: [
      { question: 'ถ้า $f(x) = x^2 + 1$ แล้วความชันเส้นสัมผัสที่ $x = 3$ คือเท่าใด', choices: ['6', '10', '3', '9'], correctIndex: 0, explanation: "$f'(x) = 2x$ ดังนั้นความชันที่ $x = 3$ คือ $f'(3) = 6$" },
      { question: 'สมการเส้นสัมผัสของ $f(x) = x^2$ ที่ $x = 1$ คือข้อใด', choices: ['$y = 2x - 1$', '$y = x + 1$', '$y = 2x + 1$', '$y = x - 1$'], correctIndex: 0, explanation: "$f(1) = 1$, $f'(1) = 2$ ดังนั้น $y - 1 = 2(x-1)$ คือ $y = 2x - 1$" },
    ]},
  ],
}
