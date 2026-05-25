import type { Lesson } from '@/types'

export const lesson: Lesson = {
  id: 'arc-length',
  title: 'ความยาวส่วนโค้งและพื้นที่ผิว',
  course: 'calculus2',
  chapter: 'การประยุกต์ของอินทิกรัล',
  order: 9,
  estimatedMinutes: 15,
  blocks: [
    { type: 'text', content: 'ความยาวส่วนโค้งของ $y = f(x)$ จาก $a$ ถึง $b$: $L = \\int_a^b \\sqrt{1+[f\'(x)]^2}\\,dx$ อาศัยหลัก Pythagorean บน $ds = \\sqrt{dx^2+dy^2}$; พื้นที่ผิวจากการหมุน: $S = 2\\pi\\int_a^b f(x)\\sqrt{1+[f\'(x)]^2}\\,dx$' },
    { type: 'equation', tex: 'L = \\int_a^b \\sqrt{1 + [f\'(x)]^2}\\,dx', display: true },
    { type: 'example', title: 'ตัวอย่าง — ความยาวส่วนโค้งของ $y = \\frac{2}{3}x^{3/2}$ จาก $x=0$ ถึง $x=3$', steps: [
      '$f\'(x) = x^{1/2}$, $[f\'(x)]^2 = x$',
      '$L = \\int_0^3 \\sqrt{1+x}\\,dx$',
      'แทน $u = 1+x$: $L = \\int_1^4 \\sqrt{u}\\,du = \\left[\\frac{2}{3}u^{3/2}\\right]_1^4 = \\frac{2}{3}(8-1) = \\frac{14}{3}$',
    ]},
    { type: 'quiz', questions: [
      { question: 'ความยาวส่วนโค้งของ $y = \\frac{2}{3}x^{3/2}$ จาก $x=0$ ถึง $x=3$ คือเท่าใด', choices: ['$\\dfrac{14}{3}$', '$\\dfrac{7}{3}$', '$4$', '$\\dfrac{2}{3}$'], correctIndex: 0, explanation: '$L = \\int_0^3 \\sqrt{1+x}\\,dx = [\\frac{2}{3}(1+x)^{3/2}]_0^3 = \\frac{2}{3}(8-1) = \\frac{14}{3}$' },
      { question: 'สูตรความยาวส่วนโค้ง $L = \\int_a^b\\sqrt{1+[f\'(x)]^2}\\,dx$ อาศัยหลักการใด', choices: ['Pythagorean theorem บน infinitesimal element $ds = \\sqrt{dx^2+dy^2}$', 'FTC Part 2', 'Integration by Parts', 'Riemann sum ของความชัน'], correctIndex: 0, explanation: '$ds^2 = dx^2 + dy^2 = [1+(dy/dx)^2]\\,dx^2$ → $ds = \\sqrt{1+[f\'(x)]^2}\\,dx$ แล้ว integrate' },
    ]},
  ],
}
