import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'trig-derivatives',
  title: 'อนุพันธ์ฟังก์ชันตรีโกณมิติ',
  course: 'calculus1',
  chapter: 'กฎการหาอนุพันธ์',
  order: 10,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'อนุพันธ์ฟังก์ชันตรีโกณมิติหลัก: $\\frac{d}{dx}[\\sin x] = \\cos x$, $\\frac{d}{dx}[\\cos x] = -\\sin x$, $\\frac{d}{dx}[\\tan x] = \\sec^2 x$ สังเกต: $\\sin$ และ $\\cos$ เป็นวงจรอนุพันธ์ 4 รอบ' },
    { type: 'equation', tex: '\\dfrac{d}{dx}[\\sin x] = \\cos x \\qquad \\dfrac{d}{dx}[\\cos x] = -\\sin x \\qquad \\dfrac{d}{dx}[\\tan x] = \\sec^2 x', display: true },
    { type: 'example', title: 'ตัวอย่าง — อนุพันธ์ตรีโกณมิติ + Chain Rule', steps: [
      'หา $\\frac{d}{dx}[\\sin(2x)]$',
      'Outer: $\\sin(u)$ → อนุพันธ์คือ $\\cos(u)$',
      'Inner: $u = 2x$ → อนุพันธ์คือ $2$',
      'Chain rule: $\\cos(2x) \\cdot 2 = 2\\cos(2x)$',
    ]},
    { type: 'quiz', questions: [
      { question: '$\\dfrac{d}{dx}[\\cos(3x)]$ คืออะไร', choices: ['$-3\\sin(3x)$', '$-\\sin(3x)$', '$3\\sin(3x)$', '$\\cos(3x)$'], correctIndex: 0, explanation: 'Outer: $-\\sin(u)$, inner: $3$ — chain rule: $-\\sin(3x) \\cdot 3 = -3\\sin(3x)$' },
      { question: '$\\dfrac{d}{dx}[\\tan x]$ คืออะไร', choices: ['$\\sec^2 x$', '$\\csc^2 x$', '$\\cos^2 x$', '$-\\csc^2 x$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[\\tan x] = \\sec^2 x$ — สูตรพื้นฐานที่ต้องจำ' },
    ]},
  ],
}
