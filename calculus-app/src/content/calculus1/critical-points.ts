import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'critical-points',
  title: 'Critical Points และ Extrema',
  course: 'calculus1',
  chapter: 'การประยุกต์ของอนุพันธ์',
  order: 12,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "Critical point คือจุด $c$ ที่ $f'(c) = 0$ หรือ $f'(c)$ ไม่มีอยู่ (ไม่นิยาม) Extreme Value Theorem: ถ้า $f$ ต่อเนื่องบน $[a,b]$ แล้ว $f$ มี absolute max และ min ซึ่งเกิดที่ critical point หรือ endpoint" },
    { type: 'equation', tex: "f'(c) = 0 \\quad \\text{หรือ} \\quad f'(c) \\text{ ไม่มีอยู่}", display: true },
    { type: 'example', title: 'ตัวอย่าง — หา Critical Points', steps: [
      'หา critical points ของ $f(x) = x^3 - 3x$',
      "หา $f'(x) = 3x^2 - 3$",
      "ตั้ง $f'(x) = 0$: $3x^2 - 3 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$",
      'Critical points: $x = 1$ และ $x = -1$',
    ]},
    { type: 'quiz', questions: [
      { question: 'จำนวน critical points ของ $f(x) = x^2 - 4x + 3$ มีกี่จุด', choices: ['1', '2', '0', '3'], correctIndex: 0, explanation: "$f'(x) = 2x - 4 = 0 \\Rightarrow x = 2$ — มี 1 critical point" },
      { question: 'Critical point คือจุดใด', choices: ["$f'(c) = 0$ หรือ $f'(c)$ ไม่มีอยู่", '$f(c) = 0$', 'จุดที่ $f$ มีค่าสูงสุด', 'จุดที่ $f$ เปลี่ยนสัญลักษณ์'], correctIndex: 0, explanation: "Critical point เกิดเมื่อ $f'(c) = 0$ หรืออนุพันธ์ไม่นิยาม" },
    ]},
  ],
}
