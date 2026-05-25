import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'chain-rule',
  title: 'กฎลูกโซ่ (Chain Rule)',
  course: 'calculus1',
  chapter: 'กฎการหาอนุพันธ์',
  order: 9,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: "Chain Rule ใช้หาอนุพันธ์ของฟังก์ชันซ้อน (composite function): $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$ หลักจำ: \"อนุพันธ์นอก (ใส่ inner ลงไป) คูณ อนุพันธ์ใน\"" },
    { type: 'equation', tex: "\\dfrac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)", display: true },
    { type: 'example', title: 'ตัวอย่าง — Chain Rule', steps: [
      'หา $\\frac{d}{dx}[(3x^2 + 1)^5]$',
      'outer function: $u^5$, inner function: $u = 3x^2 + 1$',
      'อนุพันธ์นอก: $5u^4 = 5(3x^2+1)^4$',
      'อนุพันธ์ใน: $\\frac{d}{dx}[3x^2+1] = 6x$',
      'Chain rule: $5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4$',
    ]},
    { type: 'quiz', questions: [
      { question: 'หา $\\frac{d}{dx}[(x^2+1)^3]$', choices: ['$6x(x^2+1)^2$', '$3(x^2+1)^2$', '$6x^2(x^2+1)^2$', '$3x(x^2+1)^2$'], correctIndex: 0, explanation: 'Outer: $3u^2$, inner: $2x$ — chain rule: $3(x^2+1)^2 \\cdot 2x = 6x(x^2+1)^2$' },
      { question: 'Chain rule ใช้เมื่อใด', choices: ['เมื่อมีฟังก์ชันซ้อน $f(g(x))$', 'เมื่อมีผลคูณของสองฟังก์ชัน', 'เมื่อมีผลหารของสองฟังก์ชัน', 'เมื่อ exponent เป็นค่าคงที่'], correctIndex: 0, explanation: 'Chain rule ใช้กับ composite function เช่น $\\sin(x^2)$, $(x+1)^{10}$' },
    ]},
  ],
}
